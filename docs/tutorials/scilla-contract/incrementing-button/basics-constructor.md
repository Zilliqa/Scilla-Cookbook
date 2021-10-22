---
sidebar_position: 2
---

# Constructor name

A contract is declared using the ```contract``` keyword that starts the scope of the contract.
The next keyword passed is the contract name. Only one constructor is able to be defined per contract.
When deploying a contract to the network, developers will be asked to define the variables passed into the constructor.

:::caution
A constructor (**immutable**) variable cannot be changed after deployment.
:::

This example contract name is defined as ```IncrementingButton```. A contract declaration is followed by the declaration of its immutable parameters, the scope of which is defined by ```()```.

```IncrementingButton``` currently does not have any immutable variables defined.

```ocaml
contract IncrementingButton()
```

We will improve our contract by providing an immutable variable called ```contract_owner```

Each immutable parameter is declared in the following pattern ```vname: vtype``` where ```vname``` is the parameter name and ```vtype``` is the parameter type. Mutiple parameters are delimited with a  ```,```.

```contract_owner``` defines the owner of the contract. There will be transitions defined later that only the ```contract_owner``` can access.

```ocaml {3}
contract IncrementingButton
(
  contract_owner: ByStr20
)
```

These initalisation parameters can be viewed publically from the ```state``` of the contract.

We are still missing required fields that stop our contract being compiled correctly. See the next topic about Scilla Versions.
