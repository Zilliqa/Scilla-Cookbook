---
sidebar_position: 3
---
# Contract State

Review the javascript that defines [queryState.js](https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/queryState.js)

## Retrieve a contracts state

Now we have a contract deployed to testnet, and a script to be able to call the button for a given address. We now want to get the state of our contract to do some processing on a backend service. The contract state currently says our state for ```total_button_clicks``` is the value ```1```, but we need to pull that value into the backend.

![Docusaurus](/img/tutorials/incrementingbutton/IDE-state.png)

```js
const { Zilliqa } = require('@zilliqa-js/zilliqa');
const zilliqa = new Zilliqa('https://dev-api.zilliqa.com'); // network

const button_contract = 'fc5a92e656ec6ef16fddaf8f53902a9fff997ae1'; // omit 0x

async function GetState() {
  const contract = zilliqa.contracts.at(button_contract);

  // get everything in the state field
  // not as performant as retrieving a specific map entry or an individual state
  const allState = await contract.getState(); 
  console.log(allState);

  // get immutable parameters
  const initState = await contract.getInit();
  console.log(initState);

  // get a specific state field
  const state2 = await contract.getSubState('_balance');
  console.log(state2);

  // get a specific entry in a map.
  const state3 = await contract.getSubState('balances', [
    '0x381f4008505e940ad7681ec3468a719060caf796',
  ]);
  console.log(state3);

}

GetState();
```

For our example we can simplify this to just retrieve the state field ```total_button_clicks```.

```js
 const { Zilliqa } = require('@zilliqa-js/zilliqa');
 const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
 const button_contract = 'fc5a92e656ec6ef16fddaf8f53902a9fff997ae1'; // omit 0x
 
 async function GetState(){
   const contract = zilliqa.contracts.at(button_contract);
  
   console.log(`\n\nGetting a particular field in the contract`);
   const button_click_count_state = await contract.getSubState('total_count_clicks');
   console.log(button_click_count_state);
 }
 
 GetState();
```

The console, after waiting for the async call to be returned should reply with.

```bash
$ GetButtonState.js
Getting a particular field in the contract
{ total_count_clicks: '1' }
```
