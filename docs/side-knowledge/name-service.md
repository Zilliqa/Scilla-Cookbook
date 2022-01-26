---
tags:
  - Name
  - Service
  - Domain
  - Unstoppable
---

# Zilliqa Name Service

Developers may choose to intergrate with a Name Service which maps a users Zilliqa Address to a shorthand string 'test.zil', when funds are sent to test.zil - the application looksup the address to send to via an API call. Applications may choose to implement this lookup feature.

## Example domain call

```js
async function getAddressFromDomain(user_address)
{
  if (!userInput.endsWith(".zil")) {
    return {'error' : 'domain not registered'};
  }

  const token = namehash(userInput);
  const registryState =
    await fetchZilliqa([UD_REGISTRY_CONTRACT_ADDRESS, "records", [token]]);

  if (registryState.result == null) {
    console.log('error :  domain not registered')
  }

  const [ownerAddress, resolverAddress] = 
    registryState.result.records[token].arguments;
  
  if (resolverAddress === "0x0000000000000000000000000000000000000000") {
    console.log('error :  resolver not configured')
  }

  const recordResponse = await fetchZilliqa([
    resolverAddress.replace("0x", ""),
    "records",
    []
  ]);

  data = {
    ownerAddress,
    resolverAddress,
    records: recordResponse.result.records
  };

  if(typeof(data.records) != "undefined")
  {
    console.log(JSON.stringify(data.records)
  }
  else
  {
    console.log('error : domain registered, not configured')
  }
}
```

## Further Reading

[Resolution Libraries - Unstoppable Domains](https://docs.unstoppabledomains.com/send-and-receive-crypto-payments/resolution-libraries)

[How to resolve .zil domain names - Unstoppable Domains](https://medium.com/unstoppabledomains/how-to-resolve-zil-domain-names-f43da8fe37a9)

[Unstoppable Domains Registry Contract](https://viewblock.io/zilliqa/address/zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz?tab=state)

[Unstoppable Domains ProxyBestower Contract](https://viewblock.io/zilliqa/address/zil15yw7wej02h6mm7z5f2dvwytfr5qn0z6vlwqug6?tab=state)