---
tags:
  - Address
  - ByStr20
  - Bech32
  - Base16
---

# Addresses

Addresses come in two notations Bech32 or Base16. When we refer to a ByStr20 in scilla, we refer to the Base16 address.

Bech32's start with the prefix ```zil...``` whereas Base16's are prefixed with ```0x...```.

Converting a Bech32 into a Base16 and visa versa can be achieved manually though ```IDE>Tools>AddressConverter``` or programatically using programs like Zilliqa-JS

```text
Bech32 = zil1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3h6785s
Base16 = 0x1111111111111111111111111111111111111111
```

```ocaml
scilla_version 0

library ByStr

let constant_bystr = 0x1111111111111111111111111111111111111111

contract ByStr
(
    immutable_bystr: BNum
)

field state_bystr : ByStr20 = constant_bystr
```

## ByStr20 Library Functions

### equalByStr20

```ocaml
let eqByStr20 =
  fun(bs1: ByStr20) =>
  fun(bs2: ByStr20) =>
    builtin eq bs1 bs2
```

## Further Reading

[readthedocs - Addresses](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=bystr20#addresses)

[auction.scilla](https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla)

[unstoppabledomains_registry.scilla](https://github.com/Zilliqa/zli/blob/c35fbac35edb5c6987b8a5881490a7cacb4cb1be/testsuite/contracts/UnstoppableDomains/Registry.scilla)
