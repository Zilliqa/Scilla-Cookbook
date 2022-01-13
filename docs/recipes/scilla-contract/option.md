---
tags:
  - option
  - optional
  - some
  - none
---

# Option

Optional values are specified using the type ```Option t```, where ```t``` is some type. The ```Option``` ADT has two constructors:

```Some``` represents the presence of a value. The Some constructor takes one argument (the value, of type t).

```None``` represents the absence of a value. The None constructor takes no arguments.

## Example Contract

```ocaml
scilla_version 0
(************************************************************************)
(* Scilla's Option type: a type that either is "empty" ("None") or has  *)
(* a Uint32 ("Some {Uint32}")                                           *)
(* How to i) create (with and without value), (ii) to extract the value *)
(* and iii) do different things depending if the Option is empty or not *)
(************************************************************************)
library Option

let empty_option = None {Uint32}

contract Option
()

(* mutable fields declarations *)
field opt : Option Uint32 = empty_option

(* give the option a value *)
transition SetTo(v: Uint32)
  o = Some {Uint32} v;
  opt := o
end

(* remove the value in the option *)
transition Clear()
  o = empty_option;
  opt := o
end

(* extract the value (if any) and emit *)
transition Emit()
  o <- opt;
  match o with (* depending on Option state, do different things *)
  | None =>
    ev = {_eventname: "EmitNone"};
    event ev
  | Some v =>
    ev = {_eventname: "EmitValue"; value: v};
    event ev
  end
end
```

## Further Reading

* [readthedocs - Option](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=option#option)
