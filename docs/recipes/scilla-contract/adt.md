---
tags:
  - ADT
  - Polymorphic
  - Complex
  - Composite
  - User
  - Custom Types
---

# ADTs (Algeberic Data Types)

In functional programming and type theory, an algebraic data type is a kind of composite type, formed of two or more other primative types.

```ocaml
type MyAdt =
  | MyConstructor1 of Int32 String
  | MyConstructor2 of ByStr20
  | MyConstructor3
```

An ADT is defined using one or more constructors (not to be confused with constructors from object-oriented languages). A value of type MyAdt is constructed using exactly one of these constructors. In this example, a MyAdt value constructed using MyConstructor1 will contain a tuple comprised of an Int32 value and a String value. A MyAdt value constructed using MyConstructor3 on the other hand will not contain any further values inside it.

The example we saw previously defines an ADT whose composite types are fixed. A polymorphic ADT allows using type variables in place of concrete constituent types, for substitution later. Let's see an example.

```ocaml
type 'A MyPAdt =
  | MyPConstructor1 of 'A String
  | MyPConstructor2 of ByStr20
  | MyPConstructor3
```

MyPAdt is a polymorphic ADT with a type parameter (variable) 'A. When MyPAdt is, for example, instantiated with the type parameter 'A set to Int32, then MyPAdt will be the same as MyAdt. List, the Scilla built-in ADT is, for example, a polymorphic ADT. When we write List Int32, it means that we have instantiated List ADT with Int32. This in-built ADT, if it wasn't in-built, would look like.

```ocaml
type 'A List =
  | Cons of 'A ('A List)
  | Nil
```

At the moment, Scilla does not support user-defined polymorphic ADTs. Only the in-built ADTs List, Pair and Option are polymorphic. Users can define concrete ADTs such as MyAdt.

## Bool

```ocaml
my_bool = True
```

## Option

```ocaml
let none_value = None {String}

let some_value = (* setup Option variable *)
  let ten = Int32 10 in (* setup variable 10 and chain to next line *)
  Some {Int32} ten (* create Option variable of type Int32 with Some value 10*)
```

## List

## Pair

## Nat

## User-defined

```ocaml
type SwapDirection = | ZilToToken | TokenToZil

procedure Example(direction: SwapDirection)
    match direction with
      | ZilToToken => 
      | TokenToZil => 
    end
end
```

```ocaml
type Pool = | Pool of Uint128 Uint128 

procedure Example(pool: Pool)
  match pool with
    | Pool x y =>
  end
end
```

```ocaml
type Game = | Game of (Option ByStr20) Uint128

procedure Example(game: Game)
  match game with
    | Game maybe_bystr game_int =>
      (* At this point you have the Optional and the int value*)
      match maybe_bystr with
        | Some some_bystr =>
          (* At this point you have Some bystr20 value and the int value *)
        | None =>
          (* At this point you have only the int value*)
      end
  end
end
```

## Further Reading