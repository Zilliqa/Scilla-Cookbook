---
tags:
  - folding
  - recursion
  - iterate

---

# Folding

Recursion in Scilla is presented by means of "folds" or structural traversals. To see how they are expressed, let us take a look at some Scilla.

```ocaml
type nat = Zero | Succ of nat
```

The following two library functions perform left/right folding over a natural number, with an "accumulator" z and an iterator f

```ocaml
let rec nat_fold_left f z n =
  match n with
    | Zero -> z
    | Succ n' ->
      let res = f z n' in
      nat_fold_left f res n'

let rec nat_fold_right f z n =
  match n with
    | Zero -> z
    | Succ n' ->
      let res = nat_fold_right f z n' in
      f n' res
```

Even though they are equivalent modulo the order of formals in f, nat_fold_left makes it easier to map the intuition "forward" iteration, which passes a modified accumulator further (i.e., the combination is performed on the forward step of the recursion), while nat_fold_right is better for "backwards" iteration, when the result is assembled based on what's accumulated in the later calls (i.e., the combination is performed on the backwards step of the recursion).

## Polymorphic specifications for folds

Notice that folds are polymorphic functions, as they can be instantiated with iterators of multiple different types. For instance, the type of nat_fold is forall 'T, ('T -> Nat -> 'T) -> 'T -> Nat -> 'T, where the type variable 'T accounts for the type of the accumulator and the final results.

Therefore, before being applied to arguments, folds need to be instantiated with argument types (those might themselves be type variables, if a fold is used within a body of a polymorphically-typed function, binding another type variable). For instance, in one of the examples below, nat_fold is instantiated before it is applied as follows:

```ocaml
let typed_folder = @nat_fold (Product Int Int) in
(* Using folder as a function of type nat -> (Product Int Int) *)
let folder = typed_folder iter_fun init_val in 
```

Similarly, the types for folds over the lists are as follows:

```ocaml
list_foldl: forall 'A . forall 'B . ('B -> 'A -> 'B) -> 'B -> (List 'A) -> 'B
list_foldr: forall 'A . forall 'B . ('A -> 'B -> 'B) -> 'B -> (List 'A) -> 'B
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

## Recursion example

```ocaml
(* Two examples how to implement recursive function calls using
   nat_fold and the builtin ADT Nat
   1) Adapted version of an example by Amrit that uses
    recursion to build a list [m, m+1, ..., n-2, n-1] where
    m and n are parameters
   2) Compute the factorial of a parameter n:
    n! = 0 if n=0,
    n! = n * (n-1) * ... * 1 if n>0                              *)

scilla_version 0

import IntUtils NatUtils

library Recursion

let zero32 = Uint32 0
let one32 = Uint32 1
let empty_list = Nil {Uint32}

let build_list : Uint32 -> Uint32 -> List Uint32 =
  fun (m : Uint32) =>
  fun (n : Uint32) =>
    let m_lt_n = builtin lt m n in (* if m >= n the list is empty *)
    match m_lt_n with
    | True =>
        let delta = builtin sub n m in
        let delta_nat = builtin to_nat delta in
        let acc_init = Pair {(List Uint32) Uint32} empty_list n in
        let one = Uint32 1 in
        let step =
          fun (xs_n : Pair (List Uint32) Uint32) =>
          fun (ignore : Nat) =>
          match xs_n with
          | Pair xs n =>
              let new_n = builtin sub n one in
              let new_xs = Cons {Uint32} new_n xs in
              Pair {(List Uint32) Uint32} new_xs new_n
          end in
        let fold = @nat_fold (Pair (List Uint32) Uint32) in (* from NatUtils *)
        let xs_m = fold step acc_init delta_nat in
        match xs_m with
        | Pair xs m => xs
        end
    | False => empty_list
    end (* m_lt_n *)

let factorial : Uint32 ->  Uint32 =
  fun (n : Uint32) =>
    let is_n_gt_zero = uint32_gt n zero32 in
    match is_n_gt_zero with
    | False => one32 (* 0!=1 *)
    | True => (* res = res * (n-1) unless n=1 then res = res *)
      let n_nat = builtin to_nat n in
      let acc_init = Pair {Uint32 Uint32} n n in
      let step =
        fun (current_acc : Pair Uint32 Uint32) =>
        fun (previous : Nat) =>
        let previous_int = nat_to_int previous in
        match current_acc with
        | Pair res n =>
          (* nat_fold goes down to Zero, need to stop at 1 *)
          let multiplier =
            let is_zero = is_some_zero previous in (* from NatUtils *)
            match is_zero with
            | True => one32
            | False => previous_int
            end in (* is_zero *)
          let new_res = builtin mul res multiplier in
          Pair {Uint32 Uint32} new_res previous_int
        end in
      let fold = @nat_fold (Pair Uint32 Uint32) in (* from NatUtils *)
      let result_pair = fold step acc_init n_nat in
      match result_pair with
      | Pair result n => result
      end
    end


contract Recursion()

(* create the list [m, m+1, ..., n-1] *)
transition CreateList(m : Uint32, n : Uint32)
 l = build_list m n;
 e = {_eventname : "CreateList"; list : l};
 event e
end

(* compute n! *)
transition Factorial(n: Uint32)
  f = factorial n;
  e = {_eventname: "Factorial"; n: n; n_factorial: f};
  event e
end
```

## Further Reading

[TheDrBee - Recursion.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/main/contracts/Recursion.scilla)
