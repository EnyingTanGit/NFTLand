import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
  useCallback,
} from "react";

import {
  Nft,
  Lending,
  Renting,
  isNft,
  isLending,
  isRenting,
} from "../contexts/graph/classes";
import { RENFT_SUBGRAPH_ID_SEPARATOR } from "../consts";
import { THROWS } from "../utils";

// nftAddress::tokenId::{lendingId,0}
type UniqueID = string;

export const getUniqueID = (
  nftAddress: string,
  tokenId: string,
  lendingId?: string
): UniqueID => {
  return `${nftAddress}${RENFT_SUBGRAPH_ID_SEPARATOR}${tokenId}${RENFT_SUBGRAPH_ID_SEPARATOR}${
    lendingId ?? 0
  }`;
};

export type BatchContextType = {
  // needs to be a hashmap because we need to check the presence in O(1) time
  // lendingId is the one unique id. However, you can check the nfts that are
  // not yet lent, in which case the id can't be lending id. It is then
  // nftAddress::tokenId::0 <- 0 in the end is the sentinel placeholder
  // if there is a lending id, then the id becomes
  // nftAddress::tokenId:lendingId
  checkedItems: Record<UniqueID, Nft | Lending | Renting>;
  // checkedLending and checkedRenting items are typeguarded items derived from checkedMap

  handleReset(): void;
  onCheckboxChange(item: Nft | Lending | Renting): void;
};

const defaultBatchContext = {
  checkedItems: {},
  // functions
  handleReset: THROWS,
  onCheckboxChange: THROWS,
};

export const BatchContext = createContext<BatchContextType>(
  defaultBatchContext
);

export const BatchProvider: React.FC = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState<
    BatchContextType["checkedItems"]
  >(defaultBatchContext.checkedItems);

  const handleReset = useCallback(() => {
    if (Object.keys(checkedItems).length > 0)
      setCheckedItems(defaultBatchContext.checkedItems);
  }, [checkedItems]);

  const onCheckboxChange: BatchContextType["onCheckboxChange"] = (item) => {
    let lendingID = "0";
    if (isLending(item)) lendingID = item.lending.id;
    else if (isRenting(item))
      lendingID = item.renting.lendingId
        .concat(RENFT_SUBGRAPH_ID_SEPARATOR)
        .concat("renting");

    const uniqueID = getUniqueID(item.address, item.tokenId, lendingID);
    setCheckedItems((prev) => {
      // if contained in prev, remove
      if (uniqueID in prev) {
        const state = { ...prev };
        delete state[uniqueID];
        return state;
        // if not, add
      } else {
        return { ...prev, [uniqueID]: item };
      }
    });
  };
  useEffect(() => {
    return handleReset();
  }, [handleReset]);

  return (
    <BatchContext.Provider
      value={{
        checkedItems,
        handleReset,
        onCheckboxChange,
      }}
    >
      {children}
    </BatchContext.Provider>
  );
};
// This hooks helps with no additional rerender as one of this changes would rerender all the usage
export const useCheckedNftItems = (): Nft[] => {
  const { checkedItems } = useContext(BatchContext);
  const nftItems: Nft[] = useMemo(() => {
    return Object.values(checkedItems).filter(isNft);
  }, [checkedItems]);
  return nftItems;
};

export const useCheckedLendingItems = (): Lending[] => {
  const { checkedItems } = useContext(BatchContext);
  const lendingItems: Lending[] = useMemo(() => {
    return Object.values(checkedItems).filter(isLending);
  }, [checkedItems]);
  return lendingItems;
};

export const useCheckedRentingItems = (): Renting[] => {
  const { checkedItems } = useContext(BatchContext);
  const rentingItems: Renting[] = useMemo(() => {
    return Object.values(checkedItems).filter(isRenting);
  }, [checkedItems]);
  return rentingItems;
};

export default BatchProvider;
