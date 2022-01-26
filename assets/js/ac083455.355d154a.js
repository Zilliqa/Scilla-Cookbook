"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6204],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6016:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={tags:["Name","Service","Domain","Unstoppable"]},l="Zilliqa Name Service",c={unversionedId:"side-knowledge/name-service",id:"side-knowledge/name-service",isDocsHomePage:!1,title:"Zilliqa Name Service",description:"Developers may choose to intergrate with a Name Service which maps a users Zilliqa Address to a shorthand string 'test.zil', when funds are sent to test.zil - the application looksup the address to send to via an API call. Applications may choose to implement this lookup feature.",source:"@site/docs/side-knowledge/name-service.md",sourceDirName:"side-knowledge",slug:"/side-knowledge/name-service",permalink:"/side-knowledge/name-service",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-knowledge/name-service.md",tags:[{label:"Name",permalink:"/tags/name"},{label:"Service",permalink:"/tags/service"},{label:"Domain",permalink:"/tags/domain"},{label:"Unstoppable",permalink:"/tags/unstoppable"}],version:"current",frontMatter:{tags:["Name","Service","Domain","Unstoppable"]},sidebar:"tutorialSidebar",previous:{title:"Gas",permalink:"/side-knowledge/gas"},next:{title:"Scilla Test Suite",permalink:"/side-knowledge/scilla-test-suite"}},d=[{value:"Example domain call",id:"example-domain-call",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zilliqa-name-service"},"Zilliqa Name Service"),(0,o.kt)("p",null,"Developers may choose to intergrate with a Name Service which maps a users Zilliqa Address to a shorthand string 'test.zil', when funds are sent to test.zil - the application looksup the address to send to via an API call. Applications may choose to implement this lookup feature."),(0,o.kt)("h2",{id:"example-domain-call"},"Example domain call"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function getAddressFromDomain(user_address)\n{\n  if (!userInput.endsWith(".zil")) {\n    return {\'error\' : \'domain not registered\'};\n  }\n\n  const token = namehash(userInput);\n  const registryState =\n    await fetchZilliqa([UD_REGISTRY_CONTRACT_ADDRESS, "records", [token]]);\n\n  if (registryState.result == null) {\n    console.log(\'error :  domain not registered\')\n  }\n\n  const [ownerAddress, resolverAddress] = \n    registryState.result.records[token].arguments;\n  \n  if (resolverAddress === "0x0000000000000000000000000000000000000000") {\n    console.log(\'error :  resolver not configured\')\n  }\n\n  const recordResponse = await fetchZilliqa([\n    resolverAddress.replace("0x", ""),\n    "records",\n    []\n  ]);\n\n  data = {\n    ownerAddress,\n    resolverAddress,\n    records: recordResponse.result.records\n  };\n\n  if(typeof(data.records) != "undefined")\n  {\n    console.log(JSON.stringify(data.records)\n  }\n  else\n  {\n    console.log(\'error : domain registered, not configured\')\n  }\n}\n')),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.unstoppabledomains.com/send-and-receive-crypto-payments/resolution-libraries"},"Resolution Libraries - Unstoppable Domains")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/unstoppabledomains/how-to-resolve-zil-domain-names-f43da8fe37a9"},"How to resolve .zil domain names - Unstoppable Domains")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz?tab=state"},"Unstoppable Domains Registry Contract")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil15yw7wej02h6mm7z5f2dvwytfr5qn0z6vlwqug6?tab=state"},"Unstoppable Domains ProxyBestower Contract")))}u.isMDXComponent=!0}}]);