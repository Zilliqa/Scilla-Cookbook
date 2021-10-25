---
tags:
  - non
  - fungible
  - token
  - reference
  - contract
  - zrc-1
---

# Non-Fungible Token (NFT)

## What is a Non-Fungible Token

A [Fungible token](fungible) is unit of currency that can be readily interchanged, it has properties like fiat where 1 unit of currency is equal to 1 unit of the same currency.

Non-fungible tokens have associated with it some unique properties like some particular attributes, image, asset and therefore makes each piece unique. The tokens can be thought of as certificates of ownership for virtual or physical assets. A Non-Fungible contract is a collection of associations between token ids, there associated asset and an owning address.

[ZRC-1](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-1.md) defines a minimum interface a smart contract must implement to allow unique tokens to be managed, tracked, owned, and traded.

## How does it work?

The non fungible contract has a state map called ```token_owners``` which associates an incrementing ```token_id``` to an address. The token has a concept of a ```token_uri``` which it associates with the ```token_id``` this is typically a JSON asset on the internet, ipfs, arweave and could hold any particular file. Only the ```contract_owner``` is able to mint, however the contract has a concept of being a "minter" which will allow any particular address the permission to Mint tokens on the ```contract_owner``` behalf and is a revokable permission.

## Types of Non fungible contracts

### ZRC-1

```ocaml
(* @dev:    Add or remove approved minters. Only contract_owner can approve minters. *)
(* @param:  minter      - Address of the minter to be approved or removed            *)
transition ConfigureMinter(minter: ByStr20)

(* @dev:    Mint new tokens. Only minters can mint.           *)
(* @param:  to        - Address of the token recipient        *)
(* @param:  token_uri - URI of the the new token to be minted *)
transition Mint(to: ByStr20, token_uri: String)

(* @dev:    Mint multiple new tokens at once. Only minters can mint. *)
(* @param:  to_list         - Addressses of the token recipient      *)
(* @param:  token_uris_list - URIs of the the new token to be minted *)
transition BatchMint(to_list: List ByStr20, token_uris_list: List String)


(* @dev:    Burn existing tokens. Only token_owner or an operator can burn a NFT. *)
(* @param:  token_id - Unique ID of the NFT to be destroyed                       *)
transition Burn(token_id: Uint256)

(* @dev: Approves OR remove an address ability to transfer a given token_id *)
(* There can only be one approved_spender per token at any given time       *)
(* param: to       - Address to be approved for the given token_id          *)
(* param: token_id - Unique ID of the NFT to be approved                    *)
transition SetApprove(to: ByStr20, token_id: Uint256)

(* @dev: Sets or unsets an operator for the _sender       *)
(* @param: to - Address to be set or unset as an operator *)
transition SetApprovalForAll(to: ByStr20)

(* @dev: Transfer the ownership of a given token_id to another address. token_owner only transition. *)
(* @param: to       - Recipient address for the token                                                *)
(* @param: token_id - Unique ID of the NFT to be transferred                                         *)
transition Transfer(to: ByStr20, token_id: Uint256)


(* @dev: Transfer the ownership of a given token_id to another address. approved_spender or operator only transition. *)
(* @param: to       - Recipient address for the NFT                                                                   *)
(* @param: token_id - Unique ID of the NFT to be transferred                                                          *)
transition TransferFrom(to: ByStr20, token_id: Uint256)
```

## Further Reading

[ZRC-1](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-1.md)
