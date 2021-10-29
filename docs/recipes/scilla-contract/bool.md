---
tags:
  - bool
  - boolean
  - 'true'
  - 'false'
  - if

---

# Boolean

The boolean (bool) is a type which can have two values, true and false. A bool is considered an ADT when performing interactions with contracts.

Consider the below definition of creating a type similar to bool.

```ocaml
type Example = | True | False
```

The bool value can be returned from functions like ```builtin eq``` which leverages the two types of bool to return a value. The value ```is_equal``` is either true or false.

```ocaml
is_equal = builtin eq a b
```

Therefore, we can use bool ADT pattern matching to perform a basic if statement

```ocaml
match is_equal with
    | True =>
    | False =>
end
```

## Further Reading

[Bool](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=bool#boolean)

[BoolUtils](https://scilla.readthedocs.io/en/latest/stdlib.html?highlight=bool#boolutils)
