---
tags:
  - view
  - viewer
  - pattern
---

# Pattern (Viewer)

The viewer pattern is a standardised way of implementing functions that return a value without using callbacks.

In the first contract the transition ```Function_with_return_value``` is a general function, which might perform state updates as well as returning a value. The transition ```View_function``` is a view function which returns a value, but which doesn't perform state updates.

In the second contract the transition ```Call_and_read_return_value``` calls the view function (it could have been the non-view function instead - the pattern is the same from the calling contract's perspective), and also calls a transition on itself. The call to self is executed after the view function is called, so the return value is available to be remote read once the call to self is executed.

```ocaml
scilla_version 0

library Lib

let compute_the_value =
  fun (input_1 : ...) =>
  fun (input_2 : ...) =>
    ...
    =>
    ...

contract ContractWithReturnValues()

field state_field_1 : Uint128 = ...
field state_field_2 : String = ...
...

field return_value_1 : ... = ...
field return_value_2 : ... = ...

(* Perform a computation and state updates, and store the result in the field return_value_1 for the caller to read *)
transition Function_with_return_value(param1 : ..., param2 : ..., ...)
  <compute whatever needs to be computed, including state updates>;
  res = <the result that needs to be returned>;
  return_value_1 := res
end

(* Perform a computation without state updates, and store the result in the field return_value_2 for the caller to read *)
transition View_function(param1 : ..., param2 : ..., ...)
  (* A view function always follows this exact pattern *)
  (* Read the state fields needed to do the computation*)
  s1 <- state_field_1;
  s2 <- state_field_2;
  ...
  sn <- state_field_n;
  res = compute_the_value param1 param2 ... s1 s2 ...;
  return_value_2 := res
end

(* *********************************************************************************************** *)

scilla_version 0

contract CallingContract(contract_with_return_values : ByStr20 with contract field return_value_2 : ... end)

transition Call_and_read_return_value(...)
  remote <- contract_with_return_values;
  msg1 = { _recipient : remote; _tag : "View_function"; param1 : ... ; param2 : ...; ...};
  send msg1;
  msg2 = { _recipient : _this_address; _tag : "Read_Return_value"; ...};
  send msg2
end

transition Read_Return_value(...)
  return_value <-& contract_with_return_values.return_value_2;
  <use the returned value for further computation>
end
```
