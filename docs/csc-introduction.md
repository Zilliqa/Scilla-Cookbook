---
sidebar_position: 1
slug: /

id: csc-introduction
tags:
  - Start
  - Getting started
---

# Community Scilla Cookbook

## What is a Cookbook

Like an ordinary cookbook, you are not looking for a recipe that can be made from a certain ingredient or using a certain utensil, but you are looking to perform a specific task.

A programmers cookbook contains snippets of code to explain a concept to the reader. In our case, this is a Scilla and Scilla interactivity cookbook. The reader will find Scilla, Javascript and other snippets with a high level description.

The Community Scilla Cookbook (CSC) is maintained by the community and is a reference for various scilla related documents, contracts, howto's, tips and tricks. If you have found this documentation useful, consider contributing your knowledge.

## How can I contribute to the CSC

Join the Scilla development community on [Discord](https://discord.gg/nKznfCaZxy) and [Telegram](https://t.me/ZilliqaDevs) and get started discussing Zilliqa smart contract development!

Please ask any questions you have before raising a contribution and then follow the contribution section on the Github readme.

## What can I expect from the CSC

We abstract the development process into three distinct parts: contract development, blockchain interactions (Web3.0) and front-end implementation. The CSC is not concerned with the front-end implementation, every chef should be able to plate their creation to a front end framework of their choice. These front-end implementations should be omited from recipes defined in the CSC, but images or supporting content that help define the interaction can be submitted.

The CSC is intrested in capturing as many unique recipes in Scilla, Javascript, GO and other supported SDKs that do not duplicate existing text or examples. The CSC is intrested in capturing relevent subject matter to related topics that answer as many developers questions when they get started developing scilla.

## CSC Terminology

### Recipe

```text
A feature, concept, interaction at either the contract level or blockchain interaction level.
```

#### Examples of a recipe or it's content subject

```text
How to accept zil in a contract?
How do define an ADT?
What is a ByStr20?
What is an Ox address?
How to define a ByStr20 Option?
How to define a BNum Option?
How to provide ADT as transition arguments in zilliqa-js?
How to generate a wallet keypair?
How to pass a ByStr20 option in zilliqa-js?
How to pass a BNum option in zilliqa-js?
```

#### Examples of recipe pages structure

```text
recipes

  * scilla contract
    * ADT
      * defining adts
    * ByStr20
      * 0x addresses
    * Option
      * ByStr20
      * BNum
    * keywords
      * accept

  * blockchain interaction
    * zilliqa-js
      * adt
        * define adt as transition parameters
      * option
        * ByStr20
        * BNum
    * laksaj
      * generate-address
```

#### What infomation should recipe pages have?

If you find yourself wanting to contribute scilla specific snippets about a specific contract type or a specific chain interaction, it belongs in a recipe page.

Recipe pages should contain all the relevent infomation without duplicating text from elsewhere in the CSC. Pages should be as atomic and singular as possible. Adding more infomation to the parent page is always encoraged. Recipe pages should try and write as structured as possible leaving no ambiguity to the reader, be concise and succicent.

### Side-dishes

```text
A subject otherwise unrelated to scilla or chain interaction but is still useful infomation
for the wider developer community.
```

#### Examples of a side-dish or it's content subject

```text
Why contract ownership matters?
How does a Merkle tree work?
How does gas work?
Why does my transaction fail?
How many blocks are processed per day?
```

#### What infomation should side-dish pages have?

If you find yourself wanting to contribute general knowledge that doesn't belong specifically to scilla or chain interaction, it probably belongs on a side-dish page.

A side-dish can encompose topics and subjects as a catch all where the infomation is useful, but doesn't fall into a specific recipe or tutorial. These are flatly defined with no subfolder, and as such should try an encompass thoughts for both contract and interaction specific knowledge.

#### Examples of side-dish pages structure

```text
side-dishes
  * contract ownership
  * merkle trees
  * gas interaction
  * commonly thrown errors
  * block generation
```

### Tutorials

```text
Curated walkthrough guides detailing concepts at the beginner level.
Digestable content with an overarching goal or idea that is being conveyed.
```

#### Examples of a tutorial or it's content subject

```text
Beginner how to make a scilla contract?
Beginner how to hook my website up with zilpay
```

#### Examples of tutorial pages structure

```text
tutorials
  * scilla contract
    * my first contract

  * blockchain interaction
    * my first javascript interaction
```

#### What infomation should tutorial pages have?

Tutorial pages should be informative with details around the topic being discussed, write with enough infomation to convey the point without duplication across topics, write as structured as possible leaving no ambiguity to the reader. Reference standard recipe pages when you can.
