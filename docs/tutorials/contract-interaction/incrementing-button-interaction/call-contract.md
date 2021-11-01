---
sidebar_position: 2
---
# Calling a Contract

Review the javascript that defines [callContract.js](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/callContract.js)

## Setup of project

Open a new Visual Studio Code (VSC) window and create a new project.

Open a terminal window and initalise npm with ```npm init``` and either press enter to skip and insert default values, or type the values, a file called ```package.json``` is created which will store our dependencies.

Now npm is setup, we can install the latest Zilliqa-JS, in the terminal type ```npm install @zilliqa-js/zilliqa```.

:::tip
This is the recommended way for frontend javascript frameworks such as React, Angular, VueJS, etc
:::

## Setup Zilliqa-JS

Now we have all the dependencies required, we can start to write some Javascript. Create a new file called ```index.js```.

The require statements are pulling in the logic from Zilliqa-JS to use later in our code.

For example the ```util``` class has methods dealing with BigNumbers and Zilliqa units. Similarly, the ```crypto``` class has methods dealing with converting an Base16 to Bech32 and resolving a Bech32 address from a private key string.

The notable mention of this snippet is the newing up of a new Zilliqa Object with a network address as a parameter, the value is the network we want to connect to, in this example its ```dev-api``` aka testnet. To determine what network parameters you need for a specific envrionment, consult the [developer network documentation](https://dev.zilliqa.com/docs/apis/api-introduction).

```js
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
```

In the below snippet, we begin to create some of the configuration needed later to send a transaction. ```VERSION``` will be used later in the transaction call. We then add a private key to the Zilliqa object so later we can execute against a specific address we own.

For our example, we ensure chainID and msgVersion are correct for testnet

```js
// these values can change depending on what network you are connecting on
const chainId = 333; // chainId of the developer testnet
const msgVersion = 1; // current msgVersion
const VERSION = bytes.pack(chainId, msgVersion);

// use a dotenv file for storing private keys, do not commit this directly to your repo
const privateKey = '';
// add the private key to the Zilliqa Object
zilliqa.wallet.addByPrivateKey(privateKey);
// resolve a Bech32 address from the private key
const address = getAddressFromPrivateKey(privateKey);
```

:::danger
Never commit a private key to a repo, use a dotenv file instead, use .gitignore to ignore .env
:::

In the below snippet, we begin to define an async function that will call the public transition. We define a custom gas price, and check this against the minimum price. We also define our testnet contract address.

```js
async function PressTheButton() {
  try {
    // Get ZIL Balance for our private key
    const balance = await zilliqa.blockchain.getBalance(address);
    // Get Minimum Gas Price from blockchain
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    // Create a custom gas price
    const myGasPrice = units.toQa('2000', units.Units.Li); 
    // Checks if your gas price is less than the minimum gas price
    const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); 
    // Point to your deployed contract on a specific network
    const deployedContract = zilliqa.contracts.at('zil19vdpfzgzemny6qep82vax3u82wysgy9yqcjlln',);
```

In the below example, we continue to define our async function. We now define a call to the previously defined contract transition with any associated vnames parameters. The below example shows a call to the ```HelloWorld``` contract's transition ```setHello```

Our example transition name is ```PressTheButton``` that takes no additional vnames so we can omit the collection of vnames.

```js
 const callTx = await deployedContract.callWithoutConfirm(
      'setHello', // transition name
      [
        { // followed by an object of each vname
          vname: 'msg', // vname  
          type: 'String', // type
          value: newMsg, //value
        },
      ],
      {
        // amount, gasPrice and gasLimit must be explicitly provided
        version: VERSION, // packed chainID + msgVersion
        amount: new BN(0), // ZIL to be sent
        gasPrice: myGasPrice, // Gas Price
        gasLimit: Long.fromNumber(8000), // Gas Limit
      },
      false, // Send to shard
    );
```

Our example would look like...

```js
 const callTx = await deployedContract.callWithoutConfirm(
      'PressTheButton', // transition name
      [], // no vnames
      {
        version: VERSION,
        amount: new BN(0), 
        gasPrice: myGasPrice, 
        gasLimit: Long.fromNumber(8000), 
      },
      false,
    );
```

We have now crafted our call to our contract. We now need to send this to an RPC node to be processed by the chain. Finally, we await the transitons confimation, if this is a success

```js {2}
    console.log(`Waiting transaction be confirmed`);
    const confirmedTxn = await callTx.confirm(callTx.id);

    console.log(`The transaction status is:`);
    console.log(confirmedTxn.receipt);
    if (confirmedTxn.receipt.success === true) 
    {
      console.log(`Button pressed by : ${address}`);
    }
  } catch (err) {
    console.log(err);
  }
}

PressTheButton();
```

Leaving us the full script for calling ```MyFirstButton```'s transition called ```PressTheButton``` on testnet.

The script can be called with the command ```node <script_name>.js```

```js
const { BN, Long, bytes, units } = require('@zilliqa-js/util');
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const {
  toBech32Address,
  getAddressFromPrivateKey,
} = require('@zilliqa-js/crypto');

const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');

const chainId = 333;
const msgVersion = 1; 
const VERSION = bytes.pack(chainId, msgVersion);

const privateKey = '';

zilliqa.wallet.addByPrivateKey(privateKey);
const address = getAddressFromPrivateKey(privateKey);

async function PressTheButton() {
  try {
    const balance = await zilliqa.blockchain.getBalance(address);
    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();
    const myGasPrice = units.toQa('2000', units.Units.Li); 
    const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); 
    const deployedContract = zilliqa.contracts.at('zil19vdpfzgzemny6qep82vax3u82wysgy9yqcjlln',);

    const callTx = await deployedContract.callWithoutConfirm(
        'PressTheButton', // transition name
        [], // no vnames
        {
        version: VERSION,
        amount: new BN(0), 
        gasPrice: myGasPrice, 
        gasLimit: Long.fromNumber(8000), 
        },
        false,
    );

    console.log(`Waiting transaction be confirmed`);
    const confirmedTxn = await callTx.confirm(callTx.id);

    console.log(`The transaction status is:`);
    console.log(confirmedTxn.receipt);
    if (confirmedTxn.receipt.success === true) 
    {
      console.log(`Button pressed by : ${address}`);
    }
  } 
  catch (err) 
  {
    console.log(err);
  }
}
PressTheButton();
```

The console, after waiting for the async call to be returned should reply with.

```bash
$ node PressTheButton.js
Waiting transaction be confirmed
The transaction status is:
{
  accepted: false,
  cumulative_gas: 339,
  epoch_num: '3436566',
  success: true
}
Button pressed by : 0x428A2aA43456FE7fd2De66E48C1fBf372eC10eAE
```
