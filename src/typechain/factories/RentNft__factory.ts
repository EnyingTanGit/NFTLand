/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RentNft } from "../RentNft";

export class RentNft__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _resolver: string,
    _beneficiary: string,
    overrides?: Overrides
  ): Promise<RentNft> {
    return super.deploy(
      _resolver,
      _beneficiary,
      overrides || {}
    ) as Promise<RentNft>;
  }
  getDeployTransaction(
    _resolver: string,
    _beneficiary: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_resolver, _beneficiary, overrides || {});
  }
  attach(address: string): RentNft {
    return super.attach(address) as RentNft;
  }
  connect(signer: Signer): RentNft__factory {
    return super.connect(signer) as RentNft__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RentNft {
    return new Contract(address, _abi, signerOrProvider) as RentNft;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Resolver",
        name: "_resolver",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_beneficiary",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lendingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "claimedAt",
        type: "uint32",
      },
    ],
    name: "CollateralClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lendingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "stoppedAt",
        type: "uint32",
      },
    ],
    name: "LendingStopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lendingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "lenderAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "maxRentDuration",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "dailyRentPrice",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "nftPrice",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "enum Resolver.PaymentToken",
        name: "paymentToken",
        type: "uint8",
      },
    ],
    name: "Lent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lendingId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "renterAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "rentDuration",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "rentedAt",
        type: "uint32",
      },
    ],
    name: "Rented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "lendingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "renterAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "returnedAt",
        type: "uint32",
      },
    ],
    name: "Returned",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721[]",
        name: "_nft",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
    ],
    name: "claimCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721[]",
        name: "_nft",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint16[]",
        name: "_maxRentDuration",
        type: "uint16[]",
      },
      {
        internalType: "uint32[]",
        name: "_dailyRentPrice",
        type: "uint32[]",
      },
      {
        internalType: "uint32[]",
        name: "_nftPrice",
        type: "uint32[]",
      },
      {
        internalType: "enum Resolver.PaymentToken[]",
        name: "_paymentToken",
        type: "uint8[]",
      },
    ],
    name: "lend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721[]",
        name: "_nft",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
      {
        internalType: "uint16[]",
        name: "_rentDuration",
        type: "uint16[]",
      },
    ],
    name: "rent",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "rentFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721[]",
        name: "_nft",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
    ],
    name: "returnIt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_newBeneficiary",
        type: "address",
      },
    ],
    name: "setBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rentFee",
        type: "uint256",
      },
    ],
    name: "setRentFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721[]",
        name: "_nft",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenId",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_id",
        type: "uint256[]",
      },
    ],
    name: "stopLending",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260016002556101f46003553480156200001c57600080fd5b50604051620038ae380380620038ae833981810160405260408110156200004257600080fd5b508051602090910151600160009081556200005c620000dc565b600180546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055620000e0565b3390565b6137be80620000f06000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b14610572578063bf2b23ea146105a3578063d3b16f91146105ca578063dc6b1f9114610902578063f2fde38b14610b29578063fb15851914610b5c576100a7565b8063098130df146100ac578063150b7a02146102605780631c31f7101461034e57806359fe66e414610381578063715018a61461053357806376774ea314610548575b600080fd5b3480156100b857600080fd5b5061025e600480360360608110156100cf57600080fd5b810190602081018135600160201b8111156100e957600080fd5b8201836020820111156100fb57600080fd5b803590602001918460208302840111600160201b8311171561011c57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561016b57600080fd5b82018360208201111561017d57600080fd5b803590602001918460208302840111600160201b8311171561019e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101ed57600080fd5b8201836020820111156101ff57600080fd5b803590602001918460208302840111600160201b8311171561022057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610d0e945050505050565b005b34801561026c57600080fd5b506103316004803603608081101561028357600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b8111156102bd57600080fd5b8201836020820111156102cf57600080fd5b803590602001918460018302840111600160201b831117156102f057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f94945050505050565b604080516001600160e01b03199092168252519081900360200190f35b34801561035a57600080fd5b5061025e6004803603602081101561037157600080fd5b50356001600160a01b0316610fa4565b34801561038d57600080fd5b5061025e600480360360608110156103a457600080fd5b810190602081018135600160201b8111156103be57600080fd5b8201836020820111156103d057600080fd5b803590602001918460208302840111600160201b831117156103f157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561044057600080fd5b82018360208201111561045257600080fd5b803590602001918460208302840111600160201b8311171561047357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156104c257600080fd5b8201836020820111156104d457600080fd5b803590602001918460208302840111600160201b831117156104f557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061101e945050505050565b34801561053f57600080fd5b5061025e6113bb565b34801561055457600080fd5b5061025e6004803603602081101561056b57600080fd5b503561145d565b34801561057e57600080fd5b50610587611510565b604080516001600160a01b039092168252519081900360200190f35b3480156105af57600080fd5b506105b861151f565b60408051918252519081900360200190f35b3480156105d657600080fd5b5061025e600480360360c08110156105ed57600080fd5b810190602081018135600160201b81111561060757600080fd5b82018360208201111561061957600080fd5b803590602001918460208302840111600160201b8311171561063a57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561068957600080fd5b82018360208201111561069b57600080fd5b803590602001918460208302840111600160201b831117156106bc57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561070b57600080fd5b82018360208201111561071d57600080fd5b803590602001918460208302840111600160201b8311171561073e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561078d57600080fd5b82018360208201111561079f57600080fd5b803590602001918460208302840111600160201b831117156107c057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561080f57600080fd5b82018360208201111561082157600080fd5b803590602001918460208302840111600160201b8311171561084257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561089157600080fd5b8201836020820111156108a357600080fd5b803590602001918460208302840111600160201b831117156108c457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611525945050505050565b61025e6004803603608081101561091857600080fd5b810190602081018135600160201b81111561093257600080fd5b82018360208201111561094457600080fd5b803590602001918460208302840111600160201b8311171561096557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156109b457600080fd5b8201836020820111156109c657600080fd5b803590602001918460208302840111600160201b831117156109e757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610a3657600080fd5b820183602082011115610a4857600080fd5b803590602001918460208302840111600160201b83111715610a6957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610ab857600080fd5b820183602082011115610aca57600080fd5b803590602001918460208302840111600160201b83111715610aeb57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611b14945050505050565b348015610b3557600080fd5b5061025e60048036036020811015610b4c57600080fd5b50356001600160a01b031661232e565b348015610b6857600080fd5b5061025e60048036036060811015610b7f57600080fd5b810190602081018135600160201b811115610b9957600080fd5b820183602082011115610bab57600080fd5b803590602001918460208302840111600160201b83111715610bcc57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610c1b57600080fd5b820183602082011115610c2d57600080fd5b803590602001918460208302840111600160201b83111715610c4e57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b811115610c9d57600080fd5b820183602082011115610caf57600080fd5b803590602001918460208302840111600160201b83111715610cd057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550612427945050505050565b60005b8351811015610f8e57600060066000868481518110610d2c57fe5b6020026020010151868581518110610d4057fe5b6020026020010151868681518110610d5457fe5b60209081029190910181015160408051606095861b6001600160601b03191681850152603481019490945260548085019290925280518085039092018252607490930183528051908201208452838101949094529182016000208251918201835260018101546001600160a01b0381168352600160a01b810461ffff1694830194909452600160b01b90930463ffffffff1691810191909152909150610df990612728565b80546001600160a01b03163314610e4d576040805162461bcd60e51b81526020600482015260136024820152721bdb9b1e481b195b99195c88185b1b1bddd959606a1b604482015290519081900360640190fd5b848281518110610e5957fe5b60200260200101516001600160a01b03166342842e0e3033878681518110610e7d57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b158015610edb57600080fd5b505af1158015610eef573d6000803e3d6000fd5b505082546001600160f81b031916835550508251839083908110610f0f57fe5b6020026020010151848381518110610f2357fe5b6020026020010151868481518110610f3757fe5b60200260200101516001600160a01b03167f8d66e30e8e86dc4affaf59a67cb9877f2935b867994fd273f9e7826dc99d82ef42604051808263ffffffff16815260200191505060405180910390a450600101610d11565b50505050565b630a85bd0160e11b949350505050565b610fac612816565b6001546001600160a01b03908116911614610ffc576040805162461bcd60e51b8152602060048201819052602482015260008051602061373f833981519152604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60026000541415611064576040805162461bcd60e51b815260206004820152601f602482015260008051602061368c833981519152604482015290519081900360640190fd5b600260009081555b83518110156113b05760006006600086848151811061108757fe5b602002602001015186858151811061109b57fe5b60200260200101518686815181106110af57fe5b60209081029190910181015160408051606095861b6001600160601b03191681850152603481019490945260548085019290925280518085039092018252607490930183528051908201208452838101949094529182016000208251918201835260018101546001600160a01b0381168352600160a01b810461ffff1694830194909452600160b01b90930463ffffffff1691810191909152909150611155904261281a565b6040805160a08101825282546001600160a01b0381168252600160a01b810461ffff166020830152600160b01b810460e090811b6001600160e01b031990811694840194909452600160d01b8204901b90921660608201526111e09183906080830190600160f01b900460ff1660058111156111cd57fe5b60058111156111d857fe5b905250612888565b6040805160608101825260018301546001600160a01b0381168252600160a01b810461ffff166020830152600160b01b900463ffffffff169181019190915261122890612a50565b6040805160e0808201835283546001600160a01b03811693830193845261ffff600160a01b82041660608401526001600160e01b0319600160b01b8204831b81166080850152600160d01b820490921b90911660a0830152611303928491839190839060c084019060ff600160f01b9091041660058111156112a657fe5b60058111156112b157fe5b905250815260408051606081018252600193909301546001600160a01b0381168452600160a01b810461ffff16602080860191909152600160b01b90910463ffffffff16918401919091520152612b49565b80546001600160f81b03191681556001810180546001600160d01b0319169055825183908390811061133157fe5b602002602001015184838151811061134557fe5b602002602001015186848151811061135957fe5b60200260200101516001600160a01b03167f05aa5bfe8585cc13e8621c71274852eaa27e35b96473184ca96990fe6a38b80942604051808263ffffffff16815260200191505060405180910390a45060010161106c565b505060016000555050565b6113c3612816565b6001546001600160a01b03908116911614611413576040805162461bcd60e51b8152602060048201819052602482015260008051602061373f833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b611465612816565b6001546001600160a01b039081169116146114b5576040805162461bcd60e51b8152602060048201819052602482015260008051602061373f833981519152604482015290519081900360640190fd5b612710811061150b576040805162461bcd60e51b815260206004820152601e60248201527f312063616e6e6f742062652074616b696e672031303020706374206665650000604482015290519081900360640190fd5b600355565b6001546001600160a01b031690565b60035481565b6002600054141561156b576040805162461bcd60e51b815260206004820152601f602482015260008051602061368c833981519152604482015290519081900360640190fd5b600260005584518651146115bd576040805162461bcd60e51b81526020600482015260146024820152730c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60631b604482015290519081900360640190fd5b835185511461160a576040805162461bcd60e51b81526020600482015260146024820152730c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60631b604482015290519081900360640190fd5b8251845114611657576040805162461bcd60e51b81526020600482015260146024820152730c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60631b604482015290519081900360640190fd5b80518251146116a4576040805162461bcd60e51b81526020600482015260146024820152730c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60631b604482015290519081900360640190fd5b60005b8651811015611b065760008582815181106116be57fe5b602002602001015161ffff161161171c576040805162461bcd60e51b815260206004820152601d60248201527f6d757374206265206174206c65617374206f6e6520646179206c656e64000000604482015290519081900360640190fd5b61072185828151811061172b57fe5b602002602001015161ffff16111561178a576040805162461bcd60e51b815260206004820152601c60248201527f6d757374206265206c657373207468616e206669766520796561727300000000604482015290519081900360640190fd5b86818151811061179657fe5b60200260200101516001600160a01b03166342842e0e33308985815181106117ba57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b15801561181857600080fd5b505af115801561182c573d6000803e3d6000fd5b50505050600087828151811061183e57fe5b602002602001015187838151811061185257fe5b602002602001015160025460405160200180846001600160a01b031660601b8152601401838152602001828152602001935050505060405160208183030381529060405280519060200120905060006006600083815260200190815260200160002090506040518060a00160405280336001600160a01b031681526020018885815181106118dc57fe5b602002602001015161ffff1681526020018785815181106118f957fe5b602002602001015160e01b6001600160e01b031916815260200186858151811061191f57fe5b602002602001015160e01b6001600160e01b031916815260200185858151811061194557fe5b6020026020010151600581111561195857fe5b9052805182546020830151604084015160608501516001600160a01b03199093166001600160a01b039094169390931761ffff60a01b1916600160a01b61ffff909216919091021763ffffffff60b01b1916600160b01b60e093841c021763ffffffff60d01b1916600160d01b9190921c021780835560808201518391829060ff60f01b1916600160f01b8360058111156119ef57fe5b0217905550905050336001600160a01b0316888481518110611a0d57fe5b60200260200101518a8581518110611a2157fe5b60200260200101516001600160a01b03167f78868c543d8f4f530a989d9f6ba80dc2d95b3e5480d38b371305a04b3502903c6002548b8881518110611a6257fe5b60200260200101518b8981518110611a7657fe5b60200260200101518b8a81518110611a8a57fe5b60200260200101518b8b81518110611a9e57fe5b6020026020010151604051808681526020018561ffff1681526020018463ffffffff1681526020018363ffffffff168152602001826005811115611ade57fe5b81526020019550505050505060405180910390a45050600280546001908101909155016116a7565b505060016000555050505050565b60026000541415611b5a576040805162461bcd60e51b815260206004820152601f602482015260008051602061368c833981519152604482015290519081900360640190fd5b60026000558251845114611bae576040805162461bcd60e51b815260206004820152601660248201527506240c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60531b604482015290519081900360640190fd5b8151835114611bfd576040805162461bcd60e51b815260206004820152601660248201527506440c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60531b604482015290519081900360640190fd5b8051825114611c4c576040805162461bcd60e51b815260206004820152601660248201527506640c2e4ce40c2e4e4e640c8d2cccc40d8cadccee8d60531b604482015290519081900360640190fd5b611c54613601565b6000606082018190528551600019016101a08301525b855181101561232157848181518110611c7f57fe5b6020026020010151826000018181525050838181518110611c9c57fe5b6020026020010151826020018181525050858181518110611cb957fe5b6020908102919091018101516001600160a01b03808216604086810191909152855186850151825160609590951b6001600160601b0319168587015260348501919091526054808501919091528151808503909101815260749093018152825192840192909220600090815260069093529120600181015490911615611d79576040805162461bcd60e51b815260206004820152601060248201526f0c48185b1c9958591e481c995b9d195960821b604482015290519081900360640190fd5b6001810154600160a01b900461ffff1615611dce576040805162461bcd60e51b815260206004820152601060248201526f0c88185b1c9958591e481c995b9d195960821b604482015290519081900360640190fd5b6001810154600160b01b900463ffffffff1615611e25576040805162461bcd60e51b815260206004820152601060248201526f0cc8185b1c9958591e481c995b9d195960821b604482015290519081900360640190fd5b80546001600160a01b0316331415611e78576040805162461bcd60e51b815260206004820152601160248201527018d85b9d081c995b9d081bdddb881b999d607a1b604482015290519081900360640190fd5b838281518110611e8457fe5b602090810291909101015161ffff1660808401819052611eeb576040805162461bcd60e51b815260206004820152601e60248201527f73686f756c642072656e7420666f72206174206c656173742061206461790000604482015290519081900360640190fd5b8054608084015161ffff600160a01b909204821691161115611f54576040805162461bcd60e51b815260206004820152601a60248201527f6d61782072656e74206475726174696f6e206578636565646564000000000000604482015290519081900360640190fd5b601260a08401528054600160f01b900460ff166005811115611f7257fe5b60ff1660c08401819052600480546040805163c6ee427f60e01b81529283019390935291516001600160a01b039092169163c6ee427f91602480820192602092909190829003018186803b158015611fc957600080fd5b505afa158015611fdd573d6000803e3d6000fd5b505050506040513d6020811015611ff357600080fd5b50516001600160a01b031661010084015260c0830151600160ff90911611610120840181905215612091578261010001516001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561205c57600080fd5b505afa158015612070573d6000803e3d6000fd5b505050506040513d602081101561208657600080fd5b505160ff1660a08401525b60a0830151600a0a60e080850182905282546120b892600160b01b90910490911b90612d29565b608084015161ffff1602610140840152805460e0808501516120e492600160d01b900490911b90612d29565b610160840152610140830151612136576040805162461bcd60e51b815260206004820152601260248201527172656e74207072696365206973207a65726f60701b604482015290519081900360640190fd5b61016083015161014084015101610180840152610120830151156121835761217e33308561018001518661010001516001600160a01b0316612dce909392919063ffffffff16565b612195565b61018083015160608401805190910190525b826101a001518214156121f057826060015134146121f0576040805162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d08185b5bdd5b9d606a1b604482015290519081900360640190fd5b6001810180546080850151336001600160a01b0319909216821761ffff60a01b1916600160a01b61ffff909216919091021763ffffffff60b01b1916600160b01b4263ffffffff160217909155604080850151855182516323b872dd60e01b81523060048201526024810194909452604484015290516001600160a01b03909116916323b872dd91606480830192600092919082900301818387803b15801561229857600080fd5b505af11580156122ac573d6000803e3d6000fd5b5050845160408087015160208089015160808a0151845191825261ffff169181019190915263ffffffff42168184015291513395509293506001600160a01b0316917f239fb88b47e519434a2459f6ad017abd6862eb213c907e9afbd40de3e7ed1c539181900360600190a450600101611c6a565b5050600160005550505050565b612336612816565b6001546001600160a01b03908116911614612386576040805162461bcd60e51b8152602060048201819052602482015260008051602061373f833981519152604482015290519081900360640190fd5b6001600160a01b0381166123cb5760405162461bcd60e51b81526004018080602001828103825260268152602001806136ac6026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002600054141561246d576040805162461bcd60e51b815260206004820152601f602482015260008051602061368c833981519152604482015290519081900360640190fd5b600260009081555b83518110156113b05760006006600086848151811061249057fe5b60200260200101518685815181106124a457fe5b60200260200101518686815181106124b857fe5b602002602001015160405160200180846001600160a01b031660601b815260140183815260200182815260200193505050506040516020818303038152906040528051906020012081526020019081526020016000209050336001600160a01b03168160010160000160009054906101000a90046001600160a01b03166001600160a01b03161461257d576040805162461bcd60e51b815260206004820152600a6024820152693737ba103932b73a32b960b11b604482015290519081900360640190fd5b6040805160608101825260018301546001600160a01b0381168252600160a01b810461ffff166020830152600160b01b900463ffffffff16918101919091526000906125c99042612e28565b90508583815181106125d757fe5b60200260200101516001600160a01b03166342842e0e33308887815181106125fb57fe5b60200260200101516040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018281526020019350505050600060405180830381600087803b15801561265957600080fd5b505af115801561266d573d6000803e3d6000fd5b5050505061267b8282612e94565b83838151811061268757fe5b602002602001015185848151811061269b57fe5b60200260200101518785815181106126af57fe5b60200260200101516001600160a01b03167fc2e5648ce895a76d6488be25b8cd6e98aab7b4a4bf183b1baea76ee09da6917d334260405180836001600160a01b031681526020018263ffffffff1681526020019250505060405180910390a450600190810180546001600160d01b031916905501612475565b80516001600160a01b03161561276f5760405162461bcd60e51b81526004018080602001828103825260228152602001806136f76022913960400191505060405180910390fd5b602081015161ffff16156127ca576040805162461bcd60e51b815260206004820152601960248201527f72656e74206475726174696f6e206973206e6f74207a65726f00000000000000604482015290519081900360640190fd5b604081015163ffffffff1615612813576040805162461bcd60e51b81526020600482015260096024820152681a5cc81c995b9d195960ba1b604482015290519081900360640190fd5b50565b3390565b816020015161ffff16620151800262ffffff16826040015163ffffffff16820311612884576040805162461bcd60e51b8152602060048201526015602482015274191d5c985d1a5bdb881b9bdd08195e18d959591959605a1b604482015290519081900360640190fd5b5050565b80516001600160a01b03166128dd576040805162461bcd60e51b81526020600482015260166024820152756c656e646572206973207a65726f206164647265737360501b604482015290519081900360640190fd5b602081015161ffff16612937576040805162461bcd60e51b815260206004820152601960248201527f6d61782072656e74206475726174696f6e206973207a65726f00000000000000604482015290519081900360640190fd5b60408101516001600160e01b031916612997576040805162461bcd60e51b815260206004820152601860248201527f6461696c792072656e74207072696365206973207a65726f0000000000000000604482015290519081900360640190fd5b60608101516001600160e01b0319166129eb576040805162461bcd60e51b81526020600482015260116024820152706e6674207072696365206973207a65726f60781b604482015290519081900360640190fd5b6000816080015160058111156129fd57fe5b1415612813576040805162461bcd60e51b815260206004820152601960248201527f7061796d656e7420746f6b656e2069732073656e74696e656c00000000000000604482015290519081900360640190fd5b80516001600160a01b0316612aac576040805162461bcd60e51b815260206004820152601e60248201527f72656e7465722061646472657373206973207a65726f20616464726573730000604482015290519081900360640190fd5b602081015161ffff16612afe576040805162461bcd60e51b815260206004820152601560248201527472656e74206475726174696f6e206973207a65726f60581b604482015290519081900360640190fd5b604081015163ffffffff16612813576040805162461bcd60e51b815260206004820152600c60248201526b1b995d995c881c995b9d195960a21b604482015290519081900360640190fd5b8051608001516012906000906005811115612b6057fe5b600480546040805163c6ee427f60e01b815260ff851693810193909352519293506000926001600160a01b039091169163c6ee427f916024808301926020929190829003018186803b158015612bb557600080fd5b505afa158015612bc9573d6000803e3d6000fd5b505050506040513d6020811015612bdf57600080fd5b50519050600160ff8316118015612c5b57816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612c2957600080fd5b505afa158015612c3d573d6000803e3d6000fd5b505050506040513d6020811015612c5357600080fd5b505160ff1693505b845160600151600a85900a90600090612c749083612d29565b90506000612c8a88600001516040015184612d29565b6020808a0151015190915061ffff1681026000612cb58260ff8a166005811115612cb057fe5b6131d1565b90508184018615612cdf578a5151612cda906001600160a01b038a16908484036132db565b612d1c565b8a51516040516001600160a01b039091169083830380156108fc02916000818181858888f19350505050158015612d1a573d6000803e3d6000fd5b505b5050505050505050505050565b600060f083901c60e084901c61ffff16612710840461270f831115612d4e5761270f92505b61ffff80841686029061270f9084161115612d695761270f92505b61ffff8316820281810182811015612db8576040805162461bcd60e51b815260206004820152600d60248201526c696e76616c696420707269636560981b604482015290519081900360640190fd5b80612dc05750825b955050505050505b92915050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610f8e908590613332565b6000826040015163ffffffff1682039050826020015161ffff16620151800262ffffff16811115612dc8576040805162461bcd60e51b8152602060048201526011602482015270191d5c985d1a5bdb88195e18d959591959607a1b604482015290519081900360640190fd5b8154601290600090600160f01b900460ff166005811115612eb157fe5b600480546040805163c6ee427f60e01b815260ff851693810193909352519293506000926001600160a01b039091169163c6ee427f916024808301926020929190829003018186803b158015612f0657600080fd5b505afa158015612f1a573d6000803e3d6000fd5b505050506040513d6020811015612f3057600080fd5b50519050600160ff8316118015612fac57816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015612f7a57600080fd5b505afa158015612f8e573d6000803e3d6000fd5b505050506040513d6020811015612fa457600080fd5b505160ff1693505b8554600a85900a90600090612fcb90600160d01b900460e01b83612d29565b8854909150600090612fe790600160b01b900460e01b84612d29565b60018a0154909150600160a01b900461ffff1681026201518089830204808210156130435760405162461bcd60e51b81526004018080602001828103825260258152602001806136d26025913960400191505060405180910390fd5b80820380831161309a576040805162461bcd60e51b815260206004820152601b60248201527f756e646572666c6f77206973737565732070726576656e74696f6e0000000000604482015290519081900360640190fd5b8b546000906130b4908490600160f01b900460ff166131d1565b91860191905087156130fc578c546130db906001600160a01b038b811691168386036132db565b60018d01546130f7906001600160a01b038b81169116846132db565b6131c2565b8960ff16600114613149576040805162461bcd60e51b815260206004820152601260248201527173656e74696e656c7320646f6e742070617960701b604482015290519081900360640190fd5b8c546040516001600160a01b039091169082850380156108fc02916000818181858888f19350505050158015613183573d6000803e3d6000fd5b5060018d01546040516001600160a01b039091169083156108fc029084906000818181858888f193505050501580156131c0573d6000803e3d6000fd5b505b50505050505050505050505050565b6003546127109083020460008260058111156131e957fe5b905060018160ff16111561329857600480546040805163c6ee427f60e01b815260ff851693810193909352516000926001600160a01b039092169163c6ee427f916024808301926020929190829003018186803b15801561324957600080fd5b505afa15801561325d573d6000803e3d6000fd5b505050506040513d602081101561327357600080fd5b5051600554909150613292906001600160a01b038084169116856132db565b506132d4565b6005546040516001600160a01b039091169083156108fc029084906000818181858888f193505050501580156132d2573d6000803e3d6000fd5b505b5092915050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261332d908490613332565b505050565b6000613387826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166133e39092919063ffffffff16565b80519091501561332d578080602001905160208110156133a657600080fd5b505161332d5760405162461bcd60e51b815260040180806020018281038252602a81526020018061375f602a913960400191505060405180910390fd5b60606133f284846000856133fc565b90505b9392505050565b60608247101561343d5760405162461bcd60e51b81526004018080602001828103825260268152602001806137196026913960400191505060405180910390fd5b61344685613557565b613497576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106134d55780518252601f1990920191602091820191016134b6565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114613537576040519150601f19603f3d011682016040523d82523d6000602084013e61353c565b606091505b509150915061354c82828661355d565b979650505050505050565b3b151590565b6060831561356c5750816133f5565b82511561357c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156135c65781810151838201526020016135ae565b50505050905090810190601f1680156135f35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b604051806101c00160405280600081526020016000815260200160006001600160a01b0316815260200160008152602001600061ffff16815260200160008152602001600060ff1681526020016000815260200160006001600160a01b0316815260200160001515815260200160008152602001600081526020016000815260200160008152509056fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c004f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573736c656e64657220726563656976696e67206d6f7265207468616e2072656e74657220706d7472656e7465722061646472657373206973206e6f74207a65726f2061646472657373416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e4efe173ca5386d3a77fd847c2d05fe69586cbbeb1fffe5444d63dca83e8cd1364736f6c63430007060033";
