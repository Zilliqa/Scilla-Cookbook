"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6204],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6016:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={tags:["Name","Service","Domain","Unstoppable"]},l="Zilliqa name service",c={unversionedId:"side-knowledge/name-service",id:"side-knowledge/name-service",isDocsHomePage:!1,title:"Zilliqa name service",description:"Developers may choose to integrate with a Name Service which maps a users Zilliqa Domain (testdomain.zil) to a Bech32 address(0xexample), when funds are sent to testdomain.zil - the function hashes the domain and looks it up on the Unstoppable Domain registry contract. Once the function has a result for a user domain, a key is used to call the the Unstoppable Domain resolver contract to send to via an API call. Developers may choose to implement this lookup feature to support ZNS in their application.",source:"@site/docs/side-knowledge/name-service.md",sourceDirName:"side-knowledge",slug:"/side-knowledge/name-service",permalink:"/Scilla-Cookbook/side-knowledge/name-service",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-knowledge/name-service.md",tags:[{label:"Name",permalink:"/Scilla-Cookbook/tags/name"},{label:"Service",permalink:"/Scilla-Cookbook/tags/service"},{label:"Domain",permalink:"/Scilla-Cookbook/tags/domain"},{label:"Unstoppable",permalink:"/Scilla-Cookbook/tags/unstoppable"}],version:"current",frontMatter:{tags:["Name","Service","Domain","Unstoppable"]},sidebar:"tutorialSidebar",previous:{title:"Malicious Addresses",permalink:"/Scilla-Cookbook/side-knowledge/malicious-addresses"},next:{title:"Scilla test suite",permalink:"/Scilla-Cookbook/side-knowledge/scilla-test-suite"}},d=[{value:"Example domain call",id:"example-domain-call",children:[]},{value:"Example Response",id:"example-response",children:[]},{value:"Further reading",id:"further-reading",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zilliqa-name-service"},"Zilliqa name service"),(0,o.kt)("p",null,"Developers may choose to integrate with a Name Service which maps a users Zilliqa Domain (testdomain.zil) to a Bech32 address(0xexample), when funds are sent to testdomain.zil - the function hashes the domain and looks it up on the Unstoppable Domain registry contract. Once the function has a result for a user domain, a key is used to call the the Unstoppable Domain resolver contract to send to via an API call. Developers may choose to implement this lookup feature to support ZNS in their application."),(0,o.kt)("h2",{id:"example-domain-call"},"Example domain call"),(0,o.kt)("p",null,"This test function queries the unstoppable domain contract state for a user domain."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Test domains"),(0,o.kt)("th",{parentName:"tr",align:null},"Expected result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"brad.zil"),(0,o.kt)("td",{parentName:"tr",align:null},"resolves without any errors")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"johnnyjumper.zil"),(0,o.kt)("td",{parentName:"tr",align:null},"domain has no BTC record")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unregistered.zil"),(0,o.kt)("td",{parentName:"tr",align:null},"domain is not registered")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"paulalcock.zil"),(0,o.kt)("td",{parentName:"tr",align:null},"domain is not configured")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const ZILLIQA_API = "https://api.zilliqa.com/";\nconst UD_REGISTRY_CONTRACT_ADDRESS = "9611c53BE6d1b32058b2747bdeCECed7e1216793";\nconst fetch = (...args) => import(\'node-fetch\').then(({default: fetch}) => fetch(...args));\nconst sha256 = require(\'js-sha256\');\n\nfunction namehash(name) {\n  const hashArray = hash(name);\n  return arrayToHex(hashArray);\n}\n\nfunction hash(name) {\n\n  if (!name) {\n      return new Uint8Array(32);\n  }\n  const [label, ...remainder] = name.split(\'.\');\n  const labelHash = sha256.array(label);\n  const remainderHash = hash(remainder.join(\'.\'));\n  return sha256.array(new Uint8Array([...remainderHash, ...labelHash]));\n}\n\nfunction arrayToHex(arr) {\n  return \'0x\' + Array.prototype.map.call(arr, x => (\'00\' + x.toString(16)).slice(-2)).join(\'\');\n}\n\nasync function fetchZilliqa(params) {\n  const body = {\n    method: "GetSmartContractSubState",\n    id: "1",\n    jsonrpc: "2.0",\n    params\n  };\n\n  return await fetch(ZILLIQA_API, {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json"\n    },\n    body: JSON.stringify(body),\n  }).then(res => res.json());\n}\n\nfunction displayError(message, cleanDom) {\n    console.log(message)\n  return ;\n}\n\nfunction displayResolution(resolution) {\n  const {\n    ownerAddress,\n    resolverAddress,\n    records\n  } = resolution;\n\n  console.log(`ownerAddress: ${ownerAddress}`);\n  console.log(`resolverAddress: ${resolverAddress}`);\n\n  Object.entries(records).map(([key, value]) => {\n    console.log(`${key} : ${value}`);\n  });\n}\n\nasync function ResolveZilDomain(userInput) {\n  console.log(data)\n  return data;\n}\n\nasync function getAddressFromDomain(user_address)\n{\n  if (!userInput.endsWith(".zil")) {\n    return {\'error\' : \'domain not registered\'};\n  }\n\n  const token = namehash(userInput);\n  const registryState =\n    await fetchZilliqa([\'0x9611c53BE6d1b32058b2747bdeCECed7e1216793\', "records", [token]]);\n\n  if (registryState.result == null) {\n    console.log(\'error :  domain not registered\')\n  }\n\n  const [ownerAddress, resolverAddress] = \n    registryState.result.records[token].arguments;\n  \n  if (resolverAddress === "0x0000000000000000000000000000000000000000") {\n    console.log(\'error :  resolver not configured\')\n  }\n\n  const recordResponse = await fetchZilliqa([\n    resolverAddress.replace("0x", ""),\n    "records",\n    []\n  ]);\n\n  data = {\n    ownerAddress,\n    resolverAddress,\n    records: recordResponse.result.records\n  };\n\n  if(typeof(data.records) != "undefined")\n  {\n    console.log(JSON.stringify(data.records)\n  }\n  else\n  {\n    console.log(\'error : domain registered, not configured\')\n  }\n}\n')),(0,o.kt)("h2",{id:"example-response"},"Example Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "crypto.BCH.address": "qrq4sk49ayvepqz7j7ep8x4km2qp8lauvcnzhveyu6",\n  "crypto.BTC.address": "1EVt92qQnaLDcmVFtHivRJaunG2mf2C3mB",\n  "crypto.DASH.address": "XnixreEBqFuSLnDSLNbfqMH1GsZk7cgW4j",\n  "crypto.ETH.address": "0x45b31e01AA6f42F0549aD482BE81635ED3149abb",\n  "crypto.LTC.address": "LetmswTW3b7dgJ46mXuiXMUY17XbK29UmL",\n  "crypto.XMR.address": "447d7TVFkoQ57k3jm3wGKoEAkfEym59mK96Xw5yWamDNFGaLKW5wL2qK5RMTDKGSvYfQYVN7dLSrLdkwtKH3hwbSCQCu26d",\n  "crypto.ZEC.address": "t1h7ttmQvWCSH1wfrcmvT4mZJfGw2DgCSqV",\n  "crypto.ZIL.address": "zil1yu5u4hegy9v3xgluweg4en54zm8f8auwxu0xxj",\n  "ipfs.html.value": "QmVaAtQbi3EtsfpKoLzALm6vXphdi2KjMgxEDKeGg6wHuK",\n  "ipfs.redirect_domain.value": "www.unstoppabledomains.com"\n}\n')),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unstoppabledomains.com/send-and-receive-crypto-payments/resolution-libraries"},"Resolution Libraries - Unstoppable Domains")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unstoppabledomains.com/send-and-receive-crypto-payments/direct-blockchain-calls/resolve-.zil-without-libraries"},"Resolving .zil domain with direct call")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/unstoppabledomains/how-to-resolve-zil-domain-names-f43da8fe37a9"},"How to resolve .zil domain names - Unstoppable Domains")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz?tab=state"},"Unstoppable Domains Registry Contract")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil15yw7wej02h6mm7z5f2dvwytfr5qn0z6vlwqug6?tab=state"},"Unstoppable Domains ProxyBestower Contract")))}m.isMDXComponent=!0}}]);