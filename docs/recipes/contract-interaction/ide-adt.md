---
tags:
  - IDE 
  - Interaction
  - call 
  - type
---

# IDE Interaction

Developers may want to deploy contracts through the IDE for testing which require complex types or interaction. This page specifies the untypical interactions developers may have with the IDE

## Contract Immutable ADT's

### List

```ocaml
transition Test(input: List Uint256)
```

```json
["1","2","3"]
```

### Pair

```ocaml
transition Test(input: List (Pair ByStr20 Uint256))
```

```json
[{
  "constructor":"Pair",
  "argtypes": [
      "ByStr20",
      "Uint256"
    ],
    "arguments": [
      "0x0496a854570f27687B6f401d5e209fD14c3F3061",
      "5"
    ]
}]```
