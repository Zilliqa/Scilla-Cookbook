---
sidebar_position: 5
---

# Minting a token

With the metadata available and a decision made on if the project is using ```token_uri``` or ```base_uri``` we can begin the final step, minting a token.

## base_uri

As discussed previously, the base_uri mode offloads the handling of images and metadata to the API and as such, the minter does not have to provide a token_uri as that is calculated by base_uri/token_id. If a token_uri is provided here, then base_uri is overridden to show the token_uri for this particular token.

![Docusaurus](/img/tutorials/MyNFTProject/mint-base.png)

Another advantage of base_uri is that since no token_uri needs to be provided, you can BatchMint several tokens whilst not providing a token_uri.

## token_uri

If you are not providing a base_uri, every token is expected to have a ```token_uri``` where the metadata can be found.

![Docusaurus](/img/tutorials/MyNFTProject/mint-token.png)

## Contract state

After you've minted a test NFT, check the contract state and receipt to ensure the token mint was a success.

![Docusaurus](/img/tutorials/MyNFTProject/token-state.png)

## Contract administrative addresses

```Minters``` are privileged addresses that are allowed to Mint NFTs unconditionally, the contract owner can add other minting addresses they would like to control. This functionality is useful for when we want to delegate a proxy address to be responsible for minting. Owners can also revoke the Mint permission.

```Operators``` are privileged addresses that have the ability to arbitrarily move tokens to and from addresses. Similar to ```ApproveAllowance```, a token owner has to explicitly set an address for this functionality to be operable. This functionality is useful when you want to move NFT's to/from in the future, in the case where the user moves an NFT away from their address the ```Transfer``` transition will fail.

Royalty defaults on deploy to 10%. Contract owners can call SetRoyaltyFeeBPS with a basis points value to set a new royalty amount. The royalty recipient address defaults to the contract owner on deploy. Contract owners can call SetRoyaltyRecipient with a new royalty recipient to change the value of where royalties should be sent.

The contract also supports pausing of operations and changing the contract owner.

## Summary

We've covered the whole process of deploying an NFT project to a network. The next steps are to build a front end interface to interact with your project directly. Creating new Scilla contracts to handle onchain logic around your NFT collection as we'll cover in the next section will also be key. We don't extend or change the NFT contract further than deploying the contracts. Indexers will be keying into the contract immutable, mutable and transition names, ecosystem partners will not want to write an edgecase for every project which wants to differ from the standard. 
