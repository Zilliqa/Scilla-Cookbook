---
tags:
  - proxy
  - push
  - pull
---

# Pattern (Push vs Pull)

Let's consider the scenario where we have some funds in a contract or a wallet and we are trying to distribute these to some addresses. You could choose to send these manually, one-by-one - or you could choose to automate batch sending these. In either case the token owner is sending ```n``` transactions to addresses.

Compare this to the Pull model. First, the entity responsible for the initiation of the transfer (e.g. the owner of a contract, or the contract itself) starts the process. Secondly, the smart contract has the responsibility of keeping track of all balances. The third participant is the receiver, who will not simply receive his funds via a transaction, but has to actively request a withdrawal, in order to isolate the process from other payout and contract logic.

Compartively the responsibility has swiched from the contract owner to send directly to many addresses - to the contract owner sending a batch transaction to the contract containing all the accounts and their associated rewards. Users can now claim these directly from the contract.
