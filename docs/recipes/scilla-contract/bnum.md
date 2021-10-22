---
tags:
  - BNum
  - block
  - number
  - date
  - time
---

# BNum

Block Numbers (BNum) are a type used for tracking the current block number. Blockchain's don't have any concept of dates or times without external oracles - but we can use blocks as a primitive way to determine how much time has passed.

```ocaml
scilla_version 0
library BlockNumbers

let constant_bnum = BNum 1337
let fifty_bnum = BNum 50

contract BlockNumbers
(
    immutable_bnum: BNum
)

field state_block : BNum = some_block_number


transition BNumMaths()
    block_tx_is_processed_at <- & BLOCKNUMBER;

    fifty_block_in_future = builtin badd block_tx_is_processed_at fifty_bnum; (* BNum *)

    fifty_block_in_past = builtin bsub block_tx_is_processed_at fifty_bnum; (* Int256 *)

    are_blocks_equal = builtin eq  block_tx_is_processed_at fifty_bnum; (* Bool *)

    is_a_less_than_b = builtin blt block_tx_is_processed_at fifty_bnum (* Bool *)
end
```

## BNum Library Functions

### blk_leq

blk_leq is a constant function that takes two blocks. It defines two boolean variables ```bc1``` and ```bc2```.

If the first block is less than the second variable ```bc1``` is set to true.

If the first block is equal to the second variable ```bc2``` is set to true.

The ```ORB``` builtin from the Bools.Util performs a logical OR operator, returning true if either ```bc1``` or ```bc2``` are true.

```ocaml
let blk_leq =
  fun (blk1 : BNum) =>
  fun (blk2 : BNum) =>
    let bc1 = builtin blt blk1 blk2 in 
    let bc2 = builtin eq blk1 blk2 in 
    orb bc1 bc2

...

transition BlockDifference(query_block: BNum, current_block: BNum)
    less_or_equal_to_query = blk_leq query_block current_block;
end

```

## Further Reading

[readthedocs - BNum](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=block#block-numbers)

[auction.scilla](https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla)
