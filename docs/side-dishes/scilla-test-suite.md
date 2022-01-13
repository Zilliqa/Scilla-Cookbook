---
tags:
  - gold
  - test
---

# Scilla Test Suite

Please read the [Scilla Testing readme](https://github.com/Zilliqa/scilla/tree/ccf60d04f89202c5149461def28f390ad4bc5a7c#running-the-testsuite) on how to run the test suite.

The testsuite is based on the OUnit2 framework and is driven by the main module in tests/Testsuite.ml from the scilla repo.

There are several types of tests run in the testsuite. For instance, contracts tests run a full transition on a contract with all input data provided, and eval tests only test expression evaluation. The range of testsuites can be found [here](https://github.com/Zilliqa/scilla/tree/ccf60d04f89202c5149461def28f390ad4bc5a7c/tests).

There is a lot of useful scilla infomation within the test structures such as [this file containing all the ways to perform a RSR](https://github.com/Zilliqa/scilla/blob/ccf60d04f89202c5149461def28f390ad4bc5a7c/tests/contracts/remote_state_reads.scilla)

## Further reading

* [gold scilla test scillibs](https://github.com/Zilliqa/scilla/tree/master/tests/checker/good)

* [gold expected scillibs test output](https://github.com/Zilliqa/scilla/tree/master/tests/checker/good/gold)
