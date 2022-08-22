---
tags:
  - folding
  - recursion
  - iterate

---

# Recursion

Recursion in Scilla takes some collection type with a beginning and end like a Natural number or the entries of a finite List and can process some logic based on that.

## forall List entries, call procedure

Lets assume we are dealing with a  ```Map of ByStr20 Uint128```. This map stores user wallets to token account values.

```ocaml
let user_map : Map ByStr20 Uint128 = Emp ByStr20 Uint128
```

We want to create some functionality to do something to these entries, our example usecase will be give every user in the Map a singular token everytime a Transition is called.

We cannot use a ```Map``` directly in forall, but we can use the builtin ```builtin to_list map_name``` to return us a list based on the current state of the map. We can use this to iterate, this will cost gas for the conversion equal to the elements being transformed from Map entry into List entry. When ```RewardEveryoneOneToken``` passes  ```user_map_as_list``` to ```GiveReward``` it passes each element as a ```Pair ByStr20 Uint128``` to which the developer then parses these types out to use them.

```ocaml
transition RewardEveryoneOneToken()
  (* read the whole map *)
  full_read_user_map <- user_map;

  (* convert each Map element to a List *)
  user_map_as_list =  builtin to_list full_read_user_map;

  (* when we iterate a MappedList, it's passed as a Pair of map_key, map_value*)
  forall user_map_as_list GiveReward;
end
```

```ocaml
let uint128_one = Uint128 1

procedure GiveReward(user_amount_pair : Pair ByStr20 Uint128)
 (* get the first value of a Pair of ByStr20 Uint128 *)
  user_address =
    let fst_user_address = @fst ByStr20 Uint128 in
      fst_user_address user_amount_pair;

 (* get the second value of a Pair of ByStr20 Uint128 *)
  user_amount =
    let snd_user_amount = @snd ByStr20 Uint128 in
      snd_user_amount user_amount_pair;

  (* user_amount += 1 *)
  user_amount_plus_rewards = builtin add user_amount uint128_one;

  (* set this value in state *)
  user_map[user_address] := user_amount_plus_rewards
end
```

## Fibonacci folding example

```ocaml
let fib = fun (n : Nat) =>
  let iter_fun =
    fun (res : Product Int Int) => fun (n: Nat) =>
      match res with
      | Pair x y => let z = builtin add x y in Pair {Int Int} z x
      end
    in
  let zero = 0 in
  let one = 1 in
  let init_val = Pair {Int Int} one zero in
  let typed_folder = @nat_fold (Product Int Int) in
  let folder = typed_folder iter_fun init_val in
  let res = folder n in
  match res with | Pair x y => x end
```

## Multiple argument forall

The below example `ForAllWithArgs` shows a possibility on how to work around a limitation of forall. Namely that forall calls a procedure that takes exactly one argument for each element of a list one-by-one. 

It is, however, not possible to pass another argument possibly of a different type in the same call, or a parameter. One could use a field to "pass" the parameter, writing its value before calling forall and reading it in the procedure. However, this still does not allow passing a different second argument in each call, rather this is gas expensive and hacky solution.

The solution presented here constructs a list holding Pairs of the first and second argument (using list_zip from ListUtils), and this list of pairs is passed to forall. Consequently, the procedure takes an argument of such a pair type. Inside the procedure the pair is split in its two elements (using fst and snd from PairUtils) and this gives the two arguments from the Pair.

```ocaml
(* forall calls a procedure with each element of a list as its argument       *)
(* one after the other. However, it is not possible to call a procedure       *)
(* with more than one argument using forall. One solution is shown here:      *)
(* - create a 2nd list holding the 2nd arguments                              *)
(* - use list_zip to create a list holding pairs with elements of both lists  *)
(* - define the procedure to take as argument a pair (holding same types)     *)
(* - use forall on this list calling the procedure for each of its elements   *)
(* - in the procedure extract the two elements of the pair: the 2nd entry     *)
(*   is the second argument, or the parameter                                 *)

scilla_version 0

import ListUtils PairUtils

library ForAllWithArgs


let one   = Uint32 1
let two   = Uint32 2
let three = Uint32 3

let mOne = Int32 -1
let mTwo = Int32 -2
let mThree = Int32 -3

let create_3el_list =
  tfun 'A =>
  fun (e1 : 'A) =>
  fun (e2 : 'A) =>
  fun (e3 : 'A) =>
    let nil = Nil {'A} in
    let le3 = Cons {'A} e3 nil in (* insert in front *)
    let le2e3 = Cons {'A} e2 le3 in
    Cons {'A} e1 le2e3 (* [e1, e2, e3] *)

contract ForAllWithArgs()

field results: List Int32 = Nil {Int32}

procedure Product(p: Pair Uint32 Int32)
  (* compute the product of the pairs' elements (integer product) *)
  arg1 =
    let f = @fst Uint32 Int32 in
    f p;
  arg2 =
    let s = @snd Uint32 Int32 in
    s p;
  arg1_int  = builtin to_int32 arg1; (* arg1 is a Uint32, convert to Int32 *)
  match arg1_int with
  | Some int =>
    prod = builtin mul int arg2;
    current_list <- results;
    new_list = Cons {Int32} prod current_list;
    results := new_list
  | None =>
  end
end

transition ForAllProductWithArg()
  uints =
    let cr = @create_3el_list Uint32 in
    cr one two three;
  ints =
    let cr = @create_3el_list Int32 in
    cr mOne mTwo mThree;
  pairs = (* create a list of pairs p_i = (arg1_i, arg2_i), i=0,1,2 *)
    let zip = @list_zip Uint32 Int32 in
    zip uints ints;
  forall pairs Product;
  res <- results;
  (* expected result: [3*(-3), 2*(-2), 1*(-1)] = [-9, -4, -1] *)
  ev = {_eventname: "Results"; products: res};
  event ev
end
```

## Further reading

[TheDrBee - Recursion.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/main/contracts/Recursion.scilla)
[TheDrBee - ForAllWithArgs.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/main/contracts/ForAllWithArgs.scilla)