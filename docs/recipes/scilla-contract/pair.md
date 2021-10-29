---
tags:

---

# Pair

```ocaml
(* transition with Pair (Uint32, String) argument *)
transition PairTest(pair: Pair Uint32 String)
  ev = {_eventname: "PairTest"; pair: pair };
  event ev
end
```

## Further Reading
