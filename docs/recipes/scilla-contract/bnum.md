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

## Further Reading

[readthedocs - BNum](https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=block#block-numbers)

[auction.scilla](https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla)