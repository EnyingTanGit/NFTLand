import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react";
import {
  getUserDataOrCrateNew,
  getAllUsersVote
} from "../../services/firebase";
import { calculateVoteByUsers } from "../../services/vote";
import { UserData, CalculatedUserVote, UsersVote } from "./types";
import { CurrentAddressWrapper } from "../CurrentAddressWrapper";
import { LendingId, RentingId } from "../../services/graph";
import { from, map } from "rxjs";

/**
 * Useful links
 * https://api.thegraph.com/subgraphs/name/wighawag/eip721-subgraph
 * https://api.thegraph.com/subgraphs/name/amxx/eip1155-subgraph
 * https://github.com/0xsequence/token-directory
 *
 * Kudos to
 * Luis: https://github.com/microchipgnu
 * Solidity God: wighawag
 */

type GraphContextType = {
  userData: UserData;
  usersVote: UsersVote;
  calculatedUsersVote: CalculatedUserVote;
  isLoading: boolean;
  refreshUserData: () => void;
};

const defaultUserData = {
  favorites: {}
};

const DefaultGraphContext: GraphContextType = {
  userData: defaultUserData,
  usersVote: {},
  calculatedUsersVote: {},
  isLoading: false,
  refreshUserData: () => {
    // empty
  }
};

const GraphContext = createContext<GraphContextType>(DefaultGraphContext);

export const GraphProvider: React.FC = ({ children }) => {
  const currentAddress = useContext(CurrentAddressWrapper);
  const [_usersLending, _setUsersLending] = useState<LendingId[]>([]);
  const [_usersRenting, _setUsersRenting] = useState<RentingId[]>([]);
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [calculatedUsersVote, setCalculatedUsersVote] =
    useState<CalculatedUserVote>({});
  const [usersVote, setUsersVote] = useState<UsersVote>({});
  const [isLoading, setLoading] = useState(false);

  const refreshUserData = useCallback(() => {
    if (currentAddress) {
      setLoading(true);
      getUserDataOrCrateNew(currentAddress)
        .then((userData: UserData | undefined) => {
          setLoading(false);
          if (userData) {
            setUserData(userData);
          }
        })
        .catch(() => {
          setLoading(false);

          console.warn("could not update global user data");
        });
    }
  }, [currentAddress]);
  useEffect(() => {
    const getUserData = () => {
      if (currentAddress) {
        return getUserDataOrCrateNew(currentAddress);
      }
      return Promise.resolve(undefined);
    };

    setLoading(true);
    const fetchRequest = from(
      getUserData().catch(() => {
        setLoading(false);

        console.warn("could not update global user data");
      })
    ).pipe(
      map((userData: UserData | undefined | void) => {
        setLoading(false);
        if (userData) {
          setUserData(userData);
        }
      })
    );
    const fetchRequest2 = from(getAllUsersVote()).pipe(map((d) => setUsersVote(d)));
    const s1 = fetchRequest.subscribe();
    const s2 = fetchRequest2.subscribe();
    return () => {
      s1.unsubscribe();
      s2.unsubscribe();
    };
  }, [currentAddress]);

  useEffect(() => {
    if (usersVote && Object.keys(usersVote).length !== 0) {
      const calculatedUsersVote: CalculatedUserVote =
        calculateVoteByUsers(usersVote);

      setCalculatedUsersVote(calculatedUsersVote);
    }
  }, [usersVote]);

  return (
    <GraphContext.Provider
      value={{
        userData,
        usersVote,
        calculatedUsersVote,
        isLoading,
        refreshUserData
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphContext;
