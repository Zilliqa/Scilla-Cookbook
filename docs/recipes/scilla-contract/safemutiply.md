---
tags:
  - option
  - optional
  - some
  - none
---

# Safe Mutiplication

When your are working with numbers in any programming language you are subject to overflows. An overflow happens when the value of number is bigger than the maximum possible value offered by the machine.

For example if you’re using an unsigned integer in Scilla. The possible values of your variable ranges from 0 to  2^256 (1.1579209e+77). So it means that if you’re around the maximum value and increment your variable it will error as it overflows the maximum value range.

If developers want to mutiple two ```Uint128``` together, they should firstly upcast their current values into ```Uint256``` so it doesn't overflow, and then perform the mutiplication, finally downcasting the value to a ```Uint128``` after performing the division.

## Further Reading
