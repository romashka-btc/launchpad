/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.25.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type ExecuteMsgForNullable_EmptyAndEmpty = {
  freeze_token_metadata: {};
} | {
  update_token_metadata: {
    token_id: string;
    token_uri?: string | null;
  };
} | {
  transfer_nft: {
    recipient: string;
    token_id: string;
  };
} | {
  send_nft: {
    contract: string;
    msg: Binary;
    token_id: string;
  };
} | {
  approve: {
    expires?: Expiration | null;
    spender: string;
    token_id: string;
  };
} | {
  revoke: {
    spender: string;
    token_id: string;
  };
} | {
  approve_all: {
    expires?: Expiration | null;
    operator: string;
  };
} | {
  revoke_all: {
    operator: string;
  };
} | {
  burn: {
    token_id: string;
  };
} | {
  update_collection_info: {
    collection_info: UpdateCollectionInfoMsgForRoyaltyInfoResponse;
  };
} | {
  update_trading_start_time: Timestamp | null;
} | {
  freeze_collection_info: {};
} | {
  mint: MintMsgForNullable_Empty;
} | {
  extension: {
    msg: Empty;
  };
};
export type Binary = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type Decimal = string;
export interface UpdateCollectionInfoMsgForRoyaltyInfoResponse {
  description?: string | null;
  explicit_content?: boolean | null;
  external_link?: string | null;
  image?: string | null;
  royalty_info?: (RoyaltyInfoResponse | null) | null;
}
export interface RoyaltyInfoResponse {
  payment_address: string;
  share: Decimal;
}
export interface MintMsgForNullable_Empty {
  extension?: Empty | null;
  owner: string;
  token_id: string;
  token_uri?: string | null;
}
export interface Empty {
  [k: string]: unknown;
}
export interface InstantiateMsg {
  collection_info: CollectionInfoForRoyaltyInfoResponse;
  minter: string;
  name: string;
  symbol: string;
}
export interface CollectionInfoForRoyaltyInfoResponse {
  creator: string;
  description: string;
  explicit_content?: boolean | null;
  external_link?: string | null;
  image: string;
  royalty_info?: RoyaltyInfoResponse | null;
  start_trading_time?: Timestamp | null;
}
export type QueryMsg = {
  owner_of: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  approval: {
    include_expired?: boolean | null;
    spender: string;
    token_id: string;
  };
} | {
  approvals: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  all_operators: {
    include_expired?: boolean | null;
    limit?: number | null;
    owner: string;
    start_after?: string | null;
  };
} | {
  num_tokens: {};
} | {
  contract_info: {};
} | {
  nft_info: {
    token_id: string;
  };
} | {
  all_nft_info: {
    include_expired?: boolean | null;
    token_id: string;
  };
} | {
  tokens: {
    limit?: number | null;
    owner: string;
    start_after?: string | null;
  };
} | {
  all_tokens: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  minter: {};
} | {
  collection_info: {};
};