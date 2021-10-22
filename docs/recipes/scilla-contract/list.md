---
tags:
  - List
---

# List

A list is a data type which can hold several instances of a singular type.

Consider the below definition of creating a List of Uint256.

```ocaml

```

## User Defined List Functions

The below snippets are user defined library snippets which involve the List type.

### listByStr20Contains

```ocaml
let listByStr20Contains =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listMemByStr20 = @list_mem ByStr20 in
      listMemByStr20 eqByStr20 bs list
```

### listByStr20Excludes

```ocaml
let listByStr20Excludes =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let b = listByStr20Contains list bs in negb b
```

### listByStr20FilterOut

```ocaml
let listByStr20FilterOut =
  fun(list: List ByStr20) =>
  fun(bs: ByStr20) =>
    let listByStr20Filter = @list_filter ByStr20 in
    let fn = fun(v: ByStr20) =>
      let b = builtin eq v bs in
       negb b in
      listByStr20Filter fn list
```

## Further Reading

[readthedocs - Addresses](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=bystr20#addresses)

[auction.scilla](https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla)

[unstoppabledomains_registry.scilla](https://github.com/Zilliqa/zli/blob/c35fbac35edb5c6987b8a5881490a7cacb4cb1be/testsuite/contracts/UnstoppableDomains/Registry.scilla)
