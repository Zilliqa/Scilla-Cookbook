---
sidebar_position: 2
---

# Deploying a ZRC-6

Taking the example for [HelloWorld Scilla contract deployment](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/deployContract.js) we can extend this to deploy an NFT contract.

As we stated previously, to first do any NFT operations. We firstly need to create a contract to house the data association.

## Amendments made

Firstly, review the sample javascript for [deploying a contract](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/deployContract.js). 
The first change was to copy and paste the [ZRC-6 contract code](https://github.com/Zilliqa/ZRC/blob/main/zrcs/zrc-6.md) into this example program (highlighted).

Next, we need to change the immutable parameters being passed, this is on L106 of the [sample code for deploying a contract](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/deployContract.js#L106). As usual we always pass ```_scilla_version``` first, followed by our defined immutable parameters in the order they are expected.



## Example deployment code

```js {64,66}
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

    const code = ``;

    const init = [];

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
