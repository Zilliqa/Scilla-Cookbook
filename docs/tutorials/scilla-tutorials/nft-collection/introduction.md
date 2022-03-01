---
sidebar_position: 1
---

# Introduction

We are going to utilise the [ZRC-6 non-fungible token contract](../../../recipes/scilla-recipes/nonfungible.md) to create and manage an art collection.

You don't need any previous blockchain experience, but general Javascript experience will be useful.

## NFT collection

NFT collection is a walkthrough tutorial of the steps required to setup an NFT project on Zilliqa.

* Deploy a ZRC-6 contract to the network
* Make the art/resource assets public
  * Asset storage options
* Create and make the metadata for the asset public
  * base_uri vs token_uri
* Mint a token to an address
* Other typical NFT contract interactions

Once we have setup our contract and initially tested the creation (minting) process, we can begin to move the calling of NFT contract logic to Zilliqa-JS to help automate this process or move this into a web interface.

:::tip
If you found this guide useful, please consider contributing your knowledge and scripts.
:::