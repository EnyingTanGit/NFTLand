/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface E1155Interface extends ethers.utils.Interface {
  functions: {
    "GOLD()": FunctionFragment;
    "SHIELD()": FunctionFragment;
    "SILVER()": FunctionFragment;
    "SWORD()": FunctionFragment;
    "THORS_HAMMER()": FunctionFragment;
    "award()": FunctionFragment;
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "faucet()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "uri(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "GOLD", values?: undefined): string;
  encodeFunctionData(functionFragment: "SHIELD", values?: undefined): string;
  encodeFunctionData(functionFragment: "SILVER", values?: undefined): string;
  encodeFunctionData(functionFragment: "SWORD", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "THORS_HAMMER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "award", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "faucet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "GOLD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SHIELD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SILVER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SWORD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "THORS_HAMMER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "award", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "faucet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
    "URI(string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}

export class E1155 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: E1155Interface;

  functions: {
    GOLD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "GOLD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SHIELD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SHIELD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SILVER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SILVER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SWORD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SWORD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    THORS_HAMMER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "THORS_HAMMER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    award(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "award()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address,uint256)"(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "balanceOfBatch(address[],uint256[])"(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    faucet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "faucet()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isApprovedForAll(address,address)"(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "uri(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  GOLD(overrides?: CallOverrides): Promise<BigNumber>;

  "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

  SHIELD(overrides?: CallOverrides): Promise<BigNumber>;

  "SHIELD()"(overrides?: CallOverrides): Promise<BigNumber>;

  SILVER(overrides?: CallOverrides): Promise<BigNumber>;

  "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

  SWORD(overrides?: CallOverrides): Promise<BigNumber>;

  "SWORD()"(overrides?: CallOverrides): Promise<BigNumber>;

  THORS_HAMMER(overrides?: CallOverrides): Promise<BigNumber>;

  "THORS_HAMMER()"(overrides?: CallOverrides): Promise<BigNumber>;

  award(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "award()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address,uint256)"(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "balanceOfBatch(address[],uint256[])"(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  faucet(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "faucet()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isApprovedForAll(address,address)"(
    account: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,uint256,bytes)"(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setApprovalForAll(address,bool)"(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "uri(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    GOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

    SHIELD(overrides?: CallOverrides): Promise<BigNumber>;

    "SHIELD()"(overrides?: CallOverrides): Promise<BigNumber>;

    SILVER(overrides?: CallOverrides): Promise<BigNumber>;

    "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

    SWORD(overrides?: CallOverrides): Promise<BigNumber>;

    "SWORD()"(overrides?: CallOverrides): Promise<BigNumber>;

    THORS_HAMMER(overrides?: CallOverrides): Promise<BigNumber>;

    "THORS_HAMMER()"(overrides?: CallOverrides): Promise<BigNumber>;

    award(overrides?: CallOverrides): Promise<BigNumber>;

    "award()"(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "balanceOfBatch(address[],uint256[])"(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    faucet(overrides?: CallOverrides): Promise<void>;

    "faucet()"(overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isApprovedForAll(address,address)"(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "uri(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    ApprovalForAll(
      account: string | null,
      operator: string | null,
      approved: null
    ): TypedEventFilter<
      [string, string, boolean],
      { account: string; operator: string; approved: boolean }
    >;

    TransferBatch(
      operator: string | null,
      from: string | null,
      to: string | null,
      ids: null,
      values: null
    ): TypedEventFilter<
      [string, string, string, BigNumber[], BigNumber[]],
      {
        operator: string;
        from: string;
        to: string;
        ids: BigNumber[];
        values: BigNumber[];
      }
    >;

    TransferSingle(
      operator: string | null,
      from: string | null,
      to: string | null,
      id: null,
      value: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        operator: string;
        from: string;
        to: string;
        id: BigNumber;
        value: BigNumber;
      }
    >;

    URI(
      value: null,
      id: BigNumberish | null
    ): TypedEventFilter<[string, BigNumber], { value: string; id: BigNumber }>;
  };

  estimateGas: {
    GOLD(overrides?: CallOverrides): Promise<BigNumber>;

    "GOLD()"(overrides?: CallOverrides): Promise<BigNumber>;

    SHIELD(overrides?: CallOverrides): Promise<BigNumber>;

    "SHIELD()"(overrides?: CallOverrides): Promise<BigNumber>;

    SILVER(overrides?: CallOverrides): Promise<BigNumber>;

    "SILVER()"(overrides?: CallOverrides): Promise<BigNumber>;

    SWORD(overrides?: CallOverrides): Promise<BigNumber>;

    "SWORD()"(overrides?: CallOverrides): Promise<BigNumber>;

    THORS_HAMMER(overrides?: CallOverrides): Promise<BigNumber>;

    "THORS_HAMMER()"(overrides?: CallOverrides): Promise<BigNumber>;

    award(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "award()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfBatch(address[],uint256[])"(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    faucet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "faucet()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isApprovedForAll(address,address)"(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uri(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "uri(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GOLD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SHIELD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SHIELD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SILVER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SILVER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SWORD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SWORD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    THORS_HAMMER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "THORS_HAMMER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    award(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "award()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address,uint256)"(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfBatch(address[],uint256[])"(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    faucet(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "faucet()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isApprovedForAll(address,address)"(
      account: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setApprovalForAll(address,bool)"(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    uri(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uri(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
