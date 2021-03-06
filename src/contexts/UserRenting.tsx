import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect
} from "react";

import { fetchUserRenting, FetchUserRentingReturn } from "../services/graph";
import { CurrentAddressWrapper } from "./CurrentAddressWrapper";
import { Renting } from "./graph/classes";
import { parseLending } from "./graph/utils";
import UserContext from "./UserProvider";
import { usePrevious } from "../hooks/usePrevious";
import { SECOND_IN_MILLISECONDS } from "../consts";
import { EMPTY, from, timer, map, Observable, switchMap } from "rxjs";
import { hasDifference } from "../utils";

export type UserRentingContextType = {
  userRenting: Renting[];
  isLoading: boolean;
  refetchRenting: () => Observable<any> | undefined;
};
export const UserRentingContext = createContext<UserRentingContextType>({
  userRenting: [],
  isLoading: false,
  refetchRenting: () => EMPTY
});

export const UserRentingProvider: React.FC = ({ children }) => {
  const [renting, setRentings] = useState<Renting[]>([]);
  const { signer, network } = useContext(UserContext);
  const currAddress = useContext(CurrentAddressWrapper);
  const [isLoading, setLoading] = useState(false);
  const currentAddress = useContext(CurrentAddressWrapper);
  const previousAddress = usePrevious(currentAddress);

  const fetchRenting = useCallback(() => {
    if (!currAddress || !signer) return EMPTY;
    if (network !== process.env.NEXT_PUBLIC_NETWORK_SUPPORTED) {
      if (renting && renting.length > 0) setRentings([]);
      return EMPTY;
    }
    setLoading(true);
    const fetchRequest = from<Promise<FetchUserRentingReturn | undefined>>(
      fetchUserRenting(currAddress)
    ).pipe(
      map((usersRenting) => {
        if (usersRenting) {
          const { users } = usersRenting;
          if (!users) {
            if (renting.length > 0) setRentings([]);
            setLoading(false);
            return EMPTY;
          }
          if (users.length < 1) {
            if (renting.length > 0) setRentings([]);
            setLoading(false);
            return EMPTY;
          }
          const firstMatch = users[0];
          const { renting: r } = firstMatch;
          if (!r) {
            if (renting.length > 0) setRentings([]);
            return;
          }
          const _renting: Renting[] = r
            .filter((v) => v.lending && !v.lending.collateralClaimed)
            .map(
              (r) =>
                new Renting(
                  r.lending.nftAddress,
                  r.lending.tokenId,
                  parseLending(r.lending),
                  r
                )
            );
          const normalizedLendings = renting;
          const normalizedLendingNew = _renting;

          const hasDiff = hasDifference(
            normalizedLendings,
            normalizedLendingNew
          );
          if (currentAddress !== previousAddress) {
            setRentings(_renting);
          } else if (hasDiff) {
            setRentings(_renting);
          }
          setLoading(false);
        }
      })
    );
    return fetchRequest;
  }, [currAddress, currentAddress, previousAddress, renting, signer, network]);

  useEffect(() => {
    const subscription = timer(0, 10 * SECOND_IN_MILLISECONDS)
      .pipe(switchMap(fetchRenting))
      .subscribe();
    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [fetchRenting, currentAddress]);

  return (
    <UserRentingContext.Provider
      value={{
        userRenting: renting,
        isLoading,
        refetchRenting: fetchRenting
      }}
    >
      {children}
    </UserRentingContext.Provider>
  );
};
