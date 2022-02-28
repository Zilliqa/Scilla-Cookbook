---
sidebar_position: 2
---

# Deploy ZRC-6

For our examples, we'll be taking advantage of the simulated environment functionality of the [Scilla IDE](https://ide.zilliqa.com/#/). This will speed up our productivity as we won't need to wait long for transactions to confirm. With simulated environment confirmed, the populated addresses should be funded, if not claim some from the simulated environment [faucet](https://dev-wallet.zilliqa.com/faucet?network=isolated_server).

![Docusaurus](/img/tutorials/MyNFTProject/zrc6-params.png)

Copy the contract from the ZRC standard for [ZRC-6](https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-6.md) - create a new blank Scilla file - paste in the copied contract and rename the IDE file to ZRC-6.

Press deploy and the deployment initisation window will appear. Change Gas price to ```2000000000``` and gas limit to ```30000```. The default amount is too small for the amount of bytes we are trying to deploy.

```initial_contract_owner``` This is an address you control that's considered the lead administrator of the contract. This address can later give other addresses permission to have ```Mint``` permissions or ```Operator``` permissions.

```initial_base_uri``` We'll come back to this later in detail. This is an optional way of providing metadata/images for your tokens by using an API. 
An example is when ```initial_base_uri``` is set to ```www.api.example.com/``` and token_id ```1``` is queried, ecosystem partners will look at ```www.api.example.com/1```. 

```name``` The name of your NFT contract. (MyNFTProject)

```symbol``` The ticker symbol of your NFT contract. (MNP)

With our immutable variables filled out, we can deploy our contract to the network.