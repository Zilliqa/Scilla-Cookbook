---
tags:
  - folding
  - recursion
  - iterate

---

# Folding (Recursion)

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

## Further Reading