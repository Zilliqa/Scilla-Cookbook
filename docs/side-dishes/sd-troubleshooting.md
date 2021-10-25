---
tags:
  - error
  - transaction
---

# Transaction Errors and Troubleshooting

## Why does my transaction error?

This could be for a number of issues. Firstly, read and understand the error.

Lets take the below example where a user is trying to interface with Zilswap Dex.

![Docusaurus](/img/side-dishes/troubleshooting/troubleshooting-1.png)

Firstly, we can see the transition with the passed variables variables, and below that we can see the exception stack trace.

The error thrown reads ```Exception thrown: (Message [(_exception : (String "RequestedRatesCannotBeFulfilled"))]) :1```

If errors are well defined, it may be easy to spot what the problem is, in our case we do not know what ```RequestedRatesCannotBeFulfilled``` means.

This is a contract specific error and we will need to look at the Zilswap Dex contract to learn more.

Once we've searched the Zilswap Dex contract for the phrase ```RequestedRatesCannotBeFulfilled``` we find it posted in three places.

The first two do not concern us, as these are around ```AddLiquidity``` and ```RemoveLiquidity```.

The third and final place its mentioned is in the library function ```resultFor```.

We can find ```resultFor``` used in most of the swap transitions including our transition call ```SwapExactTokensForZIL```.

We have traced the error back to this particular logical block.

```ocaml
  let within_limits = withinLimits amount maybe_limit_amount exact_side in
  match within_limits with
  | False =>
     let e = "RequestedRatesCannotBeFulfilled" in Error e
  | True =>
     Result pool amount
  end 
```

We can further extrapolate on the intermeditely proceding code that this logical block is dealing with swapping user tokens against the liquidity pool - this error is returned when either the price moves and the amount of slippage determines that the trade calculation would not have enough tokens to procede and therefore throws this error.

## Further Reading
