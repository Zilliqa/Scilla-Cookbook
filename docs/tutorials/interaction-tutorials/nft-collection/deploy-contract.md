---
sidebar_position: 2
---

# Deploying a ZRC-6

Taking the example for [HelloWorld Scilla contract deployment](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/deployContract.js) we can extend this to deploy an NFT contract.

As we stated previously, to first do any NFT operations. We firstly need to create a contract to house the data association.

## Amendments made

The first change was to copy and paste the ZRC-6 contract code into this example program and remove some of the comments which caused errors.
Next, we now need to change the immutable parameters being passed. As usual we always pass ```_scilla_version``` first, followed by our defined parameters.


## Example deployment code

```js
//  Copyright (C) 2018 Zilliqa
//
//  This file is part of Zilliqa-Javascript-Library.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <https://www.gnu.org/licenses/>.

const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

// These are set by the core protocol, and may vary per-chain.
// You can manually pack the bytes according to chain id and msg version.
// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid

const chainId = 333; // chainId of the developer testnet
const msgVersion = 1; // current msgVersion
const VERSION = bytes.pack(chainId, msgVersion);

// Populate the wallet with an account
const privateKey =
  '';

zilliqa.wallet.addByPrivateKey(privateKey);

const address = getAddressFromPrivateKey(privateKey);
console.log(`My account address is: ${address}`);
console.log(`My account bech32 address is: ${toBech32Address(address)}`);

async function testBlockchain() {
  try {
    // Get Balance
    const balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();

    // Account balance (See note 1)
    console.log(`Your account balance is:`);
    console.log(balance.result);
    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);
    const myGasPrice = units.toQa('2000', units.Units.Li); // Gas Price that will be used by all transactions
    console.log(`My Gas Price ${myGasPrice.toString()}`);
    const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); // Checks if your gas price is less than the minimum gas price
    console.log(`Is the gas price sufficient? ${isGasSufficient}`);

    // Deploy a contract
    console.log(`Deploying a new contract....`);
    const code = 
`(* SPDX-License-Identifier: MIT *)

scilla_version 0

import BoolUtils ListUtils IntUtils
library NonfungibleToken

type Operation =
| Add
| Sub

let zero_address = 0x0000000000000000000000000000000000000000
let false = False
let true = True
let zero = Uint256 0
let one = Uint256 1
let empty_string = ""

let add_operation = Add
let sub_operation = Sub
let min_fee_bps = Uint128 1
let max_fee_bps = Uint128 10000

(* Library functions *)
let one_msg = 
    fun (msg: Message) => 
    let nil_msg = Nil {Message} in
    Cons {Message} msg nil_msg

let two_msgs =
    fun (msg1: Message) =>
    fun (msg2: Message) =>
    let msgs_tmp = one_msg msg2 in
    Cons {Message} msg1 msgs_tmp

let get_bal =
    fun (maybe_bal: Option Uint256) =>
    match maybe_bal with
    | None => zero
    | Some bal => bal
    end

(* Error exception *)
type Error =
    | NotPausedError
    | PausedError
    | SelfError
    | NotContractOwnerError
    | NotContractOwnershipRecipientError
    | NotTokenOwnerError
    | NotMinterError
    | NotOwnerOrOperatorError
    | MinterNotFoundError
    | MinterFoundError
    | SpenderFoundError
    | OperatorNotFoundError
    | OperatorFoundError
    | NotAllowedToTransferError
    | TokenNotFoundError
    | InvalidFeeBPSError
    | ZeroAddressDestinationError
    | ThisAddressDestinationError

let make_error =
    fun (result: Error) =>
    let result_code = 
        match result with
        | NotPausedError                     => Int32 -1
        | PausedError                        => Int32 -2
        | SelfError                          => Int32 -3
        | NotContractOwnerError              => Int32 -4
        | NotTokenOwnerError                 => Int32 -5
        | NotMinterError                     => Int32 -6
        | NotOwnerOrOperatorError            => Int32 -7
        | MinterNotFoundError                => Int32 -8
        | MinterFoundError                   => Int32 -9
        | SpenderFoundError                  => Int32 -10
        | OperatorNotFoundError              => Int32 -11
        | OperatorFoundError                 => Int32 -12
        | NotAllowedToTransferError          => Int32 -13
        | TokenNotFoundError                 => Int32 -14
        | InvalidFeeBPSError                 => Int32 -15
        | ZeroAddressDestinationError        => Int32 -16
        | ThisAddressDestinationError        => Int32 -17
        | NotContractOwnershipRecipientError => Int32 -18
        end
    in
    { _exception: "Error"; code: result_code }

contract NonfungibleToken
(
    initial_contract_owner: ByStr20,
    initial_base_uri: String,
    name: String,
    symbol: String
)

(* Contract constraints *)
with
    let is_contract_owner_invalid = builtin eq initial_contract_owner zero_address in
    let is_name_invalid = builtin eq name empty_string in
    let is_symbol_invalid = builtin eq symbol empty_string in
    let is_name_or_symbol_invalid = orb is_name_invalid is_symbol_invalid in

    let is_invalid = orb is_contract_owner_invalid is_name_or_symbol_invalid in
    negb is_invalid
=>

field is_paused: Bool = false

field token_name: String = name

field token_symbol: String = symbol

field contract_owner: ByStr20 = initial_contract_owner

field contract_ownership_recipient: ByStr20 = zero_address

field royalty_recipient: ByStr20 = initial_contract_owner

field royalty_fee_bps: Uint128 = Uint128 1000

field base_uri: String = initial_base_uri

field token_uris: Map Uint256 String = Emp Uint256 String

field token_owners: Map Uint256 ByStr20 = Emp Uint256 ByStr20

field token_id_count: Uint256 = Uint256 0

field total_supply: Uint256 = Uint256 0

field balances: Map ByStr20 Uint256 = Emp ByStr20 Uint256

field minters: Map ByStr20 Bool =
    let emp_map = Emp ByStr20 Bool in
    builtin put emp_map initial_contract_owner true

field spenders: Map Uint256 ByStr20 = Emp Uint256 ByStr20

field operators: Map ByStr20 (Map ByStr20 Bool) = Emp ByStr20 (Map ByStr20 Bool)

procedure Throw(error: Error)
    e = make_error error;
    throw e
end

procedure RequireNotPaused()
    paused <- is_paused;
    match paused with
    | False =>
    | True =>
    (* Contract is paused *)
    error = PausedError;
    Throw error
    end
end

procedure RequireValidRoyaltyFee(fee_bps: Uint128)
    is_gte_min = uint128_ge fee_bps min_fee_bps;
    is_lte_max = uint128_le fee_bps max_fee_bps;
    
    is_valid = andb is_gte_min is_lte_max;
    match is_valid with 
    | True => 
    | False =>
        error = InvalidFeeBPSError;
        Throw error
    end
end

procedure RequireContractOwner()
    cur_owner <- contract_owner;
    is_contract_owner = builtin eq cur_owner _sender;
    match is_contract_owner with
    | True => 
    | False =>
    error = NotContractOwnerError;
    Throw error
    end
end

procedure RequireNotSelf(address_a: ByStr20, address_b: ByStr20)
    is_self = builtin eq address_a address_b;
    match is_self with
    | False =>
    | True =>
    error = SelfError;
    Throw error
    end
end

procedure RequireExistingToken(token_id: Uint256)
    has_token <- exists token_owners[token_id];
    match has_token with
    | True =>
    | False =>
    error = TokenNotFoundError;
    Throw error
    end
end

procedure RequireValidDestination(to: ByStr20)
    is_zero_address = builtin eq to zero_address;
    match is_zero_address with
    | False =>
    | True =>
    error = ZeroAddressDestinationError;
    Throw error
    end;

    is_this_address = builtin eq to _this_address;
    match is_this_address with
    | False =>
    | True =>
    error = ThisAddressDestinationError;
    Throw error
    end
end

procedure IsMinter(address: ByStr20)
    has_minter <- exists minters[address];
    match has_minter with
    | True =>
    | False =>
    error = NotMinterError;
    Throw error
    end
end

procedure RequireTokenOwner(token_id: Uint256, address: ByStr20)
    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some addr => 
    is_token_owner = builtin eq addr address;
    match is_token_owner with
    | True =>
    | False =>
        error = NotTokenOwnerError;
        Throw error
    end
    end
end

procedure RequireOwnerOrOperator(address: ByStr20)
    is_owner = builtin eq _sender address;
    has_operator <- exists operators[address][_sender];
    is_allowed = orb is_owner has_operator;
    match is_allowed with
    | True =>
    | False =>
    error = NotOwnerOrOperatorError;
    Throw error
    end
end

procedure RequireAccessToTransfer(token_owner: ByStr20, token_id: Uint256)  
    is_token_owner = builtin eq token_owner _sender;
    
    maybe_spender <- spenders[token_id];
    is_spender = match maybe_spender with
    | None => False
    | Some spender => 
        builtin eq spender _sender
    end;

    is_operator <- exists operators[token_owner][_sender];
    
    is_spender_or_operator = orb is_spender is_operator;
    is_allowed = orb is_spender_or_operator is_token_owner;
    match is_allowed with
    | True =>
    | False =>
    error = NotAllowedToTransferError;
    Throw error
    end
end

procedure UpdateBalance(operation: Operation, address: ByStr20)
    match operation with
    | Add =>
    maybe_count <- balances[address];
    new_count = 
        let cur_count = get_bal maybe_count in
        (* if overflow occurs, it throws CALL_CONTRACT_FAILED *)
        builtin add cur_count one;
    balances[address] := new_count
    | Sub =>
    maybe_count <- balances[address];
    new_count = 
        let cur_count = get_bal maybe_count in
        (* if underflow occurs, it throws CALL_CONTRACT_FAILED *)
        builtin sub cur_count one;
    balances[address] := new_count
    end
end

procedure MintToken(to: ByStr20)
    RequireValidDestination to;

    IsMinter _sender;

    current_token_id_count <- token_id_count;
    new_token_id_count = builtin add current_token_id_count one;
    token_id_count := new_token_id_count;
    token_id = new_token_id_count;

    token_owners[token_id] := to;

    UpdateBalance add_operation to;
    
    current_supply <- total_supply;
    new_supply = builtin add current_supply one;
    total_supply := new_supply
end

procedure SetTokenURI(token_id: Uint256, token_uri: String)
    is_empty_string = builtin eq token_uri empty_string;
    match is_empty_string with 
    | True => 
    | False =>
    token_uris[token_id] := token_uri
    end
end

procedure HandleMint(info: Pair ByStr20 String)
    match info with
    | Pair to token_uri =>
    MintToken to;
    token_id <- token_id_count;
    SetTokenURI token_id token_uri
    end
end

procedure BurnToken(token_id: Uint256)
    (* Check if token exists *)
    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some token_owner =>
    RequireOwnerOrOperator token_owner;
    (* Destroy existing token *)
    delete token_owners[token_id];
    delete token_uris[token_id];
    delete spenders[token_id];

    (* subtract one from the balance *)
    UpdateBalance sub_operation token_owner;
    (* subtract one from the total supply *)
    current_supply <- total_supply;
    new_supply = builtin sub current_supply one;
    total_supply := new_supply;

    e = {
        _eventname: "Burn";
        token_owner: token_owner;
        token_id: token_id
    };
    event e
    end
end

procedure TransferToken(to: ByStr20, token_id: Uint256)
    RequireValidDestination to;

    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some token_owner =>
    RequireAccessToTransfer token_owner token_id;
    RequireNotSelf token_owner to;
    
    (* change token_owner for that token_id *)
    token_owners[token_id] := to;

    delete spenders[token_id];

    (* subtract one from previous token owner balance *)
    UpdateBalance sub_operation token_owner;
    (* add one to the new token owner balance *)
    UpdateBalance add_operation to;

    e = {
        _eventname: "TransferFrom"; 
        from: token_owner;
        to: to;
        token_id: token_id
    };
    event e
    end
end

procedure HandleTransfer(info: Pair ByStr20 Uint256)
    match info with
    | Pair to token_id =>
    TransferToken to token_id
    end
end

transition Pause()
    RequireNotPaused;
    RequireContractOwner;

    is_paused := true;
    e = {
    _eventname: "Pause";
    is_paused: true
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_PauseCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    is_paused: true
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition Unpause()
    paused <- is_paused;
    match paused with
    | True =>
    | False =>
    error = NotPausedError;
    Throw error
    end;
    RequireContractOwner;

    is_paused := false;
    e = {
    _eventname: "Unpause";
    is_paused: false
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_UnpauseCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    is_paused: false
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition SetRoyaltyRecipient(to: ByStr20)
    RequireContractOwner;
    RequireValidDestination to;
    
    royalty_recipient := to;
    
    e = { 
    _eventname: "SetRoyaltyRecipient";
    to: to
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_SetRoyaltyRecipientCallback"; 
    _recipient: _sender;
    _amount: Uint128 0;
    to: to
    };
    msgs = one_msg msg_to_sender;
    send msgs  
end

transition SetRoyaltyFeeBPS(fee_bps: Uint128)
    RequireContractOwner;
    RequireValidRoyaltyFee fee_bps;
    royalty_fee_bps := fee_bps;
    
    e = { 
    _eventname: "SetRoyaltyFeeBPS";
    royalty_fee_bps: fee_bps
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_SetRoyaltyFeeBPSCallback"; 
    _recipient: _sender;
    _amount: Uint128 0;
    royalty_fee_bps: fee_bps
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition SetBaseURI(uri: String)
    RequireContractOwner;
    base_uri := uri;

    e = { 
    _eventname: "SetBaseURI";
    base_uri: uri
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_SetBaseURICallback"; 
    _recipient: _sender;
    _amount: Uint128 0;
    base_uri: uri
    };
    msgs = one_msg msg_to_sender;
    send msgs  
end

transition Mint(to: ByStr20, token_uri: String)
    RequireNotPaused;
    MintToken to;
    token_id <- token_id_count;
    SetTokenURI token_id token_uri;

    e = {
    _eventname: "Mint";
    to: to;
    token_id: token_id;
    token_uri: token_uri
    };
    event e;
    msg_to_recipient = {
    _tag: "ZRC6_RecipientAcceptMint";
    _recipient: to;
    _amount: Uint128 0
    };
    msg_to_sender = {
    _tag: "ZRC6_MintCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    to: to;
    token_id: token_id;
    token_uri: token_uri
    };
    msgs = two_msgs msg_to_recipient msg_to_sender;
    send msgs
end

transition BatchMint(to_token_uri_pair_list: List (Pair ByStr20 String))
    RequireNotPaused;
    cur_id <- token_id_count;
    start_id = builtin add cur_id one;
    forall to_token_uri_pair_list HandleMint;
    end_id <- token_id_count;
    e = {
    _eventname: "BatchMint";
    to_token_uri_pair_list: to_token_uri_pair_list;
    start_id: start_id;
    end_id: end_id
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_BatchMintCallback";
    _recipient: _sender;
    _amount: Uint128 0
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition Burn(token_id: Uint256)
    RequireNotPaused;
    (* Check if token exists *)
    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some token_owner =>
    BurnToken token_id;
    msg_to_sender = {
        _tag: "ZRC6_BurnCallback";
        _recipient: _sender;
        _amount: Uint128 0;
        token_owner: token_owner;
        token_id: token_id
    };
    msgs = one_msg msg_to_sender;
    send msgs
    end
end

transition BatchBurn(token_id_list: List Uint256)
    RequireNotPaused;
    forall token_id_list BurnToken;
    msg_to_sender = {
    _tag: "ZRC6_BatchBurnCallback";
    _recipient: _sender;
    _amount: Uint128 0
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition AddMinter(minter: ByStr20)
    RequireContractOwner;
    has_minter <- exists minters[minter];
    match has_minter with
    | True => 
    error = MinterFoundError;
    Throw error
    | False =>
    (* Add minter *)
    minters[minter] := true
    end;
    e = { 
    _eventname: "AddMinter";
    minter: minter
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_AddMinterCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    minter: minter
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition RemoveMinter(minter: ByStr20)
    RequireContractOwner;
    has_minter <- exists minters[minter];
    match has_minter with
    | False =>
    error = MinterNotFoundError;
    Throw error
    | True => 
    delete minters[minter]
    end;
    e = { 
    _eventname: "RemoveMinter";
    minter: minter
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_RemoveMinterCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    minter: minter
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition SetSpender(spender: ByStr20, token_id: Uint256)
    RequireNotSelf spender _sender;
    
    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some token_owner =>
    RequireOwnerOrOperator token_owner;
    
    (* Check if the spender exists *)
    maybe_spender <- spenders[token_id];
    match maybe_spender with
        | None =>
        | Some cur_spender =>
        has_spender = builtin eq cur_spender spender;
        match has_spender with 
        | False =>
        | True => 
            error = SpenderFoundError;
            Throw error
        end
    end;
        
    spenders[token_id] := spender;

    e = {
        _eventname: "SetSpender";
        token_owner: token_owner;
        spender: spender;
        token_id: token_id
    };
    event e;
    msg_to_sender = {
        _tag: "ZRC6_SetSpenderCallback";
        _recipient: _sender;
        _amount: Uint128 0;
        spender: spender;
        token_id: token_id
    };
    msgs = one_msg msg_to_sender;
    send msgs
    end
end

transition AddOperator(operator: ByStr20)
    RequireNotSelf operator _sender;
    
    maybe_bal <- balances[_sender];
    balance = get_bal maybe_bal;
    
    is_balance_zero = builtin eq zero balance;
    (* _sender must have at least 1 token *)
    match is_balance_zero with 
    | True =>    
    error = NotTokenOwnerError;
    Throw error
    | False =>
    has_operator <- exists operators[_sender][operator];
    match has_operator with
    | False =>
        (* Add operator *)
        operators[_sender][operator] := true
    | True =>
        error = OperatorFoundError;
        Throw error
    end;
    e = {
        _eventname: "AddOperator";
        token_owner: _sender;
        operator: operator
    };
    event e;
    msg_to_sender = {
        _tag: "ZRC6_AddOperatorCallback";
        _recipient: _sender;
        _amount: Uint128 0;
        operator: operator
    };
    msgs = one_msg msg_to_sender;
    send msgs
    end
end

transition RemoveOperator(operator: ByStr20)
    has_operator <- exists operators[_sender][operator];
    match has_operator with
    | False =>
    error = OperatorNotFoundError;
    Throw error
    | True =>
    (* Remove operator *)
    delete operators[_sender][operator]
    end;
    e = {
    _eventname: "RemoveOperator";
    token_owner: _sender;
    operator: operator
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_RemoveOperatorCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    operator: operator
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition TransferFrom(to: ByStr20, token_id: Uint256)
    RequireNotPaused;
    maybe_token_owner <- token_owners[token_id];
    match maybe_token_owner with
    | None =>
    error = TokenNotFoundError;
    Throw error
    | Some token_owner =>
    TransferToken to token_id;
    msg_to_recipient = {
        _tag: "ZRC6_RecipientAcceptTransferFrom";
        _recipient: to;
        _amount: Uint128 0;
        from: token_owner;
        to: to;
        token_id: token_id
    };
    msg_to_sender = {
        _tag: "ZRC6_TransferFromCallback";
        _recipient: _sender;
        _amount: Uint128 0;
        from: token_owner;
        to: to;
        token_id: token_id
    };
    msgs = two_msgs msg_to_recipient msg_to_sender;
    send msgs
    end
end

transition BatchTransferFrom(to_token_id_pair_list: List (Pair ByStr20 Uint256))
    RequireNotPaused;
    forall to_token_id_pair_list HandleTransfer;
    msg_to_sender = {
    _tag: "ZRC6_BatchTransferFromCallback";
    _recipient: _sender;
    _amount: Uint128 0
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition SetContractOwnershipRecipient(to: ByStr20)
    RequireContractOwner;
    RequireNotSelf to _sender;
    
    contract_ownership_recipient := to;

    e = {
    _eventname: "SetContractOwnershipRecipient";
    to: to
    };
    event e;
    msg_to_sender = {
    _tag: "ZRC6_SetContractOwnershipRecipientCallback";
    _recipient: _sender;
    _amount: Uint128 0;
    to: to
    };
    msgs = one_msg msg_to_sender;
    send msgs
end

transition AcceptContractOwnership()
    recipient <- contract_ownership_recipient;

    is_recipient = builtin eq _sender recipient;
    match is_recipient with
    | False =>
    error = NotContractOwnershipRecipientError;
    Throw error
    | True =>
    contract_owner := _sender;
    contract_ownership_recipient := zero_address;

    e = {
        _eventname: "AcceptContractOwnership";
        contract_owner: _sender
    };
    event e;
    msg_to_sender = {
        _tag: "ZRC6_AcceptContractOwnershipCallback";
        _recipient: _sender;
        _amount: Uint128 0;
        contract_owner: _sender
    };
    msgs = one_msg msg_to_sender;
    send msgs
    end
end
`;

    const init = [
      // this parameter is mandatory for all init arrays
      {
        vname: '_scilla_version',
        type: 'Uint32',
        value: '0',
      },
      {
        vname: 'initial_contract_owner',
        type: 'ByStr20',
        value: `0x0000000000000000000000000000000000000000`,
      },
      {
        vname: 'initial_base_uri',
        type: 'String',
        value: `www.example.com/`,
      },
      {
        vname: 'name',
        type: 'String',
        value: `test name`,
      },
      {
        vname: 'symbol',
        type: 'String',
        value: `test`,
      },
    ];

    const contract = zilliqa.contracts.new(code, init);

    const [deployTx, deployedContract] = await contract.deployWithoutConfirm(
      {
        version: VERSION,
        gasPrice: myGasPrice,
        gasLimit: Long.fromNumber(30000),
      },
      false,
    );

    // process confirm
    console.log(`The transaction id is:`, deployTx.id);
    console.log(deployTx);
    console.log(`Waiting transaction be confirmed`);
    const confirmedTxn = await deployTx.confirm(deployTx.id);

    console.log(`The transaction status is:`);
    console.log(confirmedTxn.receipt);
    if (confirmedTxn.receipt.success === true) {
      console.log(`Contract address is: ${deployedContract.address}`);
    }
  } catch (err) {
    console.log(err);
  }
}

testBlockchain();
```