import { BigNumber } from "ethers";

import { PaymentToken, Address, TokenId } from "../types";

export type LendingRaw = {
  // id: string;
  nftAddress: string;
  tokenId: string;
  lenderAddress: string;
  maxRentDuration: string;
  dailyRentPrice: string;
  nftPrice: string;
  paymentToken: string;
  renting?: string;
  collateralClaimed: string;
};

export type Lending = {
  // id: string;
  nftAddress: Address;
  tokenId: TokenId;
  lenderAddress: Address;
  maxRentDuration: number;
  dailyRentPrice: BigNumber;
  nftPrice: BigNumber;
  paymentToken: PaymentToken;
  renting?: string;
  collateralClaimed: boolean;
};

export type RentingRaw = {
  // id: string;
  renterAddress: string;
  rentDuration: string;
  rentedAt: string;
  lending: string;
};

export type Renting = {
  // id: string;
  renterAddress: Address;
  rentDuration: number;
  rentedAt: number;
  lending: string;
};

export type LendingRentingRaw = {
  // id: string;
  lending: LendingRaw[];
  renting?: RentingRaw[];
};

export type LendingRenting = {
  // id: string;
  lending: Lending[];
  renting?: Renting[];
};

export type UserRaw = {
  id: string;
  lending?: LendingRaw[];
  renting?: RentingRaw[];
};

export type User = {
  id: string;
  lending?: Lending[];
  renting?: Renting[];
};
