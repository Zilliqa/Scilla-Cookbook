---
tags:
  - adt
  - polymorphic
  - complex
  - composite
  - user
  - custom 
  - types
  - algebraic
---

# ADT

## Algebraic Data Types

In functional programming and type theory, an algebraic data type (ADT) is a kind of composite type, formed of two or more other primative types.

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

### ADT's in Data Structures

:::warn
You cannot remote state read a data structure which holds an ADT.
:::

### Bool

```ocaml
my_bool = True
```

### Option

```ocaml
let none_value = None {String}

let some_value = (* setup Option variable *)
  let ten = Int32 10 in (* setup variable 10 and chain to next line *)
  Some {Int32} ten (* create Option variable of type Int32 with Some value 10*)
```

### List

### Pair

### Nat

### User-defined

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

## Full ADT examples

### Parcel

```ocaml
scilla_version 0
(****************************************************************************)
(*   user defined algebraic data type (ADT) examples:                       *)
(*   a Parcel with a content consisting of one or two Item(s)               *)
(*   A single Item can be a Shirt or a Barbell and has a weight             *)
(*   A Parcel can have one Item or two Items in it and depending on the     *)
(*   total weight has a cost to ship assigned to it                         *)
(****************************************************************************)
library Adt

type Item = (* constructor argument is the weight of the item *)
  | Shirt of Uint32
  | Barbell of Uint32

type Parcel =
  | OneContent of Item (* a parcel with a single item as content *)
  | TwoContents of Item Item (* a parcel can be filled with 2 items *)

let weight_of_item = fun(i: Item) => (* how much an item weighs *)
  match i with
  | Shirt w => w
  | Barbell w => w
  end

let cost_per_weight = Uint32 5

let cost_of_parcel = fun(p: Parcel) => (* cost to ship the parcel *)
  let weight =
    match p with
    | OneContent c => (* parcel has only one item as content *)
        weight_of_item c
    | TwoContents c1 c2 => (* parcel has two items as content *)
        let w1 = weight_of_item c1 in
        let w2 = weight_of_item c2 in
        builtin add w1 w2 (* total weight is sum of the two *)
    end in
  builtin mul weight cost_per_weight (* cost is total weight times cost_per_weight *)


contract Adt
()

(* mutable fields declarations *)
field parcels : List (Pair Parcel Uint32) = Nil {(Pair Parcel Uint32)} (* a list of parcels and their cost to ship *)

procedure ComputeCostAndAdd(p: Parcel)
  (* compute cost to ship the new parcel *)
  cost = cost_of_parcel p;
  (* add it to the list of parcels *)
  l <- parcels;
  pair = Pair {Parcel Uint32} p cost;
  new_list = Cons {(Pair Parcel Uint32)} pair l; (* front insert *)
  parcels := new_list;
  ev = {_eventname : "AddToListOfParcelsSuccess"; cost_to_ship: cost; parcels: new_list};
  event ev
end

(* add parcels with different items to the list of parcels *)
transition AddParcelWithShirt(weight: Uint32)
  c = Shirt weight;
  p = OneContent c;
  ComputeCostAndAdd p
end

transition AddParcelWithBarbell(weight: Uint32)
  c = Barbell weight;
  p = OneContent c;
  ComputeCostAndAdd p
end

transition AddParcelWithTwoShirts(weight1: Uint32, weight2: Uint32)
  c1 = Shirt weight1;
  c2 = Shirt weight2;
  p = TwoContents c1 c2;
  ComputeCostAndAdd p
end

transition AddParcelWithShirtAndBarbell(weightS: Uint32, weightB: Uint32)
  c1 = Shirt weightS;
  c2 = Barbell weightB;
  p = TwoContents c1 c2;
  ComputeCostAndAdd p
end
```

### PlayerAge

```ocaml
scilla_version 0
(************************************************************************)
(* a map of ByStr20 (address) to a user defined algebraic data type     *)
(*   the ADT is a Player with an age that either plays tennis or runs   *)
(************************************************************************)
library AdtMap

type Sport =
  | Tennis
  | Run

type Player = (* Age and preferred Sport *)
  | Player of Uint32 Sport


contract AdtMap
()

(* mutable fields declarations *)
field players : Map ByStr20 Player = Emp ByStr20 Player (* players[address] = Player *)

procedure Add(age: Uint32, sport: Sport)
  player = Player age sport;
  players[_sender] := player
end

(* add sender as a Tennis player *)
transition AddTennis(age: Uint32)
  sport = Tennis;
  Add age sport
end
(* add sender as a Soccer player *)
transition AddRun(age: Uint32)
  sport = Run;
  Add age sport
end
(* change the age of sender, kepp its sport *)
transition ChangeAge(new_age: Uint32)
  player_o <- players[_sender]; (* look up in map *)
  match player_o with
  | Some player =>
    match player with (* get the entries and change age *)
    | Player age sport =>
      new_player = Player new_age sport;
      players[_sender] := new_player
    end (* player *)
  | None => (* sender is not in map, don't do anything *)
  end (* player_o *)
end
(* remove the sender from the map *)
transition Remove()
  delete players[_sender]
end
```

## Further Reading

[adt.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Adt.scilla)

[adtmap.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/AdtMap.scilla)

[Interfacing.scilla](https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Interfacing.scilla)

[readthedocs - User Defined ADTs](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=adt#user-defined-adts)
