---
sidebar_position: 2
---

# Zilliqa-JS Quickstart

## Getting started

You will need Node and NPM installed on your developer machine for this guide.

Read the [repo readme](https://github.com/Zilliqa/Zilliqa-JavaScript-Library) to get started with ```npm installing``` zilliqa-js to your local repo.

Create a burner testing wallet and fund it with tokens from the faucet.

:::danger
Do not publish your test wallet private key as a build artifact, your funds could be stolen
:::

Review the documentation from the [examples repo for zilliqa-js](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples)

Call a specific example by installing the dependencies and involking the example

```bash
cd Zilliqa-JavaScript-Library-Examples
cd node
npm i

node helloWorld.js
```

The console will respond with

```bash
My account address is: 0x8254b2C9aCdf181d5d6796d63320fBb20D4Edd12
My account bech32 address is: zil1sf2t9jdvmuvp6ht8jmtrxg8mkgx5ahgj6h833r

Your account balance is:
{ balance: '10722145999990000', nonce: 1468 }

Current Minimum Gas Price: 2000000000
My Gas Price 2000000000
Is the gas price sufficient? true

Sending a payment transaction to the network...

The transaction id is: 035a2ae08d0b4d12f31ee6c0315d91b4bb9150c1f078fc88e0ee3b5640f2d318

The transaction status is:
{ cumulative_gas: 50, epoch_num: '3129050', success: true }

Deploying a new contract....
Deployment Transaction ID: 6a67c5d1fb65f7fae9c02ee81b37fb5855bbfd3d17d163a908bb5f667419d1df

Deployment Transaction Receipt:
{ cumulative_gas: 482, epoch_num: '3129052', success: true }
The contract address is:
0xD1F5c962F1c6A77253BFD799B3472D05de414ae2

Calling setHello transition with msg: Hello, the time is 1629086853792
{
    "accepted": false,
    "cumulative_gas": 357,
    "epoch_num": "3129054",
    "event_logs": [
        {
            "_eventname": "setHello()",
            "address": "0xd1f5c962f1c6a77253bfd799b3472d05de414ae2",
            "params": [
                {
                    "type": "Int32",
                    "value": "2",
                    "vname": "code"
                }
            ]
        }
    ],
    "success": true
}

Getting contract state...
The state of the contract is:
{
    "_balance": "0",
    "welcome_msg": "Hello, the time is 1629086853792"
}
```

## Examples

```js
shows the javascript required to call a specific transition
callContract.js

shows the javascript required to create a list of signed batch transactions
createBatchTransaction.js

shows the javascript required to create a list of batch transactions with correct nonce
createBatchTransactionWithoutConfirm.js

shows the javascript required to post a raw transaction
createTransactionRaw.js

shows the javascript required to deploy a contract
deployContract.js

shows the javascript required to return all the particular transactions that happened for a particular block
getTxnBodiesForTxBlock.js

shows the javascript required to interact with the helloWorld tutorial scilla
helloWorld.js

shows the javascript required to listen for events
newEventLogSubscriptions.js

shows the javascript required to listen for new block events
newTxBlockSubscriptions.js

shows the javascript required to query init params, or state params including maps
queryState.js

get a particular transaction from a given transaction hash
queryTransaction.js

get the status of a particular transaction from a given transaction hash
queryTransactionStatus.js

shows the javascript required to sign a unsigned batch transaction
signBatchTransaction.js

walletSign.js
```
