---
sidebar_position: 9
---

# Testing the button

This section discusses deploying, interacting and testing the IncrementingButton contract and seeing if it meets the objectives set out in the introduction. This section discusses some of the sights developers will expect to encounter when interacting with contracts.

## IDE

The [Neo-Savant IDE](https://ide.zilliqa.com/#/) can be used for writing, testing and deploying Scilla contracts to different environments. We will be deploying this contract out to the simulated environment and we will try and press the button.

We create a new contract on the IDE using the "add contract" symbol at the top left next to files, which opens a new untitled scilla document. We can paste the contract defined so far. If we check the contract, it will be checked for syntax errors.

One warning is returned from our contract. ```No transition in contract IncrementingButton contains an accept statement``` This warning means that our contract does not have the ```accept``` keyword and currently will not accept zil. We expected our contract not to accept zil so this warning is acceptable.

![Docusaurus](/img/tutorials/incrementingbutton/ide-navbar.png)

At the top right, we can connect to a simulated environment where we have several accounts and test funds available. We can then select a random account that has been generated in our simulated environment session, on a successful account change the amount of zil should change to an amount.

![Docusaurus](/img/tutorials/incrementingbutton/ide-deployparameters.png)

Pressing the deploy button we can open the contract constructors and see it's immutable parameters which need defining. ```IncrementingButton``` has one immutable parameter defined earlier called ```contract_owner```. We need to provide this before we can deploy the contract.

```amount``` is any ZIL that needs to be accepted by the contract, like a sale or purchase. ```Gas Price``` is the amount paid for a unit of Gas -  know we need to pay some funds to have our transaction processed by the network, in our case we are deploying a contract to the network, this amount is in ```QA``` which is a small decimal unit of ```ZIL```

### Environments

Smart contracts can be deployed to the following environments

* mainnet
* testnet
* simulated-env
* localhost

### Deploy to Simulated-Environment

## Contract Interaction
