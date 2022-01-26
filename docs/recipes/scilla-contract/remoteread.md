---
tags:
  - Remote
  - State
  - Reads
  - RSR
---

# Remote State Reads

A remote state read is the mechanism to read another contract mutable parameter state from any another contract. These remote fetches can be implemented in a number of ways.

:::tip
Remote state reads only allow fetching of mutable fields, not immutable fields.
:::

## Address Subtyping

```ByStr20 with end```: Refers to an address that is in use. An address is in use if it either of the conditions is fulfilled
- balance greater than 0
- nonce of address greater than 0

```ByStr20 with contract end```: Refers to an contract address

```ByStr20 with contract field f1 : t1, field f2 : t2, ... end```: Refers to the address of a contract containing the mutable fields f1 of type t1, f2 of type t2, and so on. The contract in question may define more fields than the ones specified in the type, but the fields specified in the type must be defined in the contract.

## Inline remote state read

To perform a remote state read inline, the syntax  ```x <- & c.f``` is used.

The type of c must be some contract address type declaring the field f. For instance, if c has the type ```ByStr20 with contract field paused : Bool end``` then the value of ```field paused``` at address c can be fetched using the statement ```x <- & c.paused```.

## RSR Example - Passing a contract with a remote field

```ocaml
transition PassCGetRemoteValue(c: ByStr20 with contract field value: Uint128 end)
  value <- & c.value;
  ev = {_eventname : "ReadValueFromSetGet"; value: value};
  event ev
end
```

## RSR Example - Fetching a contract with a remote field

```ocaml
transition FetchRemoteValueFromC(c: ByStr20)
  contract_opt <- &c as ByStr20 with contract field value: Uint128 end;
  match contract_opt with
  | Some c =>
    value <- &c.value;
  | None => 
  end
end
```


## RSR Example - Fetching multiple remote fields

Users must declare the remote contract mutable fields for which they are trying to access. If the contract has more mutable fields than the user requires to read, they can be omitted. Maps can also be fetched.

```ocaml
field maybe_remote_value : Option Uint128 = None {Uint128}

transition RemoteReadsOfRemoteMap(
  remote: ByStr20 with contract
                       field admin : ByStr20 with contract
                                                  field f : ByStr20 with contract
                                                                         field g : Map Uint128 Uint128
                                                                         end
                                                  end
                       end)
  ad <-& remote.admin;
  this_f <-& ad.f;
  remote_key = Uint128 0;
  this_g <-& this_f.g[remote_key];
  maybe_remote_value := this_g
end
```

## Further Reading

* [Remote Read Implementation](https://github.com/Zilliqa/scilla/pull/1014/files)

* [Remote Read Testcase 1](https://github.com/Zilliqa/scilla/blob/ccf60d04f89202c5149461def28f390ad4bc5a7c/tests/contracts/remote_state_reads.scilla)

* [Remote Read Testcase 2](https://github.com/Zilliqa/scilla/blob/ccf60d04f89202c5149461def28f390ad4bc5a7c/tests/contracts/remote_state_reads_2.scilla)
