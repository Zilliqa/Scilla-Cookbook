"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3566],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=r,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},224:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={tags:["metatransaction","reference","contract","zrc-3"]},c="Metatransactions",l={unversionedId:"recipes/scilla-recipes/metatransactions",id:"recipes/scilla-recipes/metatransactions",isDocsHomePage:!1,title:"Metatransactions",description:"Meta Transactions are a broad concept borrowed from Ethereum where it is typically used to load authenticated data onto a smart contract. This pattern is needed for many Ethereum projects including the \u2018gasless\u2019 relay system whereby one or more nodes accept transactions signed with a hidden private key and then wrap that transaction in a Ethereum transaction.",source:"@site/docs/recipes/scilla-recipes/metatransactions.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/metatransactions",permalink:"/recipes/scilla-recipes/metatransactions",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/metatransactions.md",tags:[{label:"metatransaction",permalink:"/tags/metatransaction"},{label:"reference",permalink:"/tags/reference"},{label:"contract",permalink:"/tags/contract"},{label:"zrc-3",permalink:"/tags/zrc-3"}],version:"current",frontMatter:{tags:["metatransaction","reference","contract","zrc-3"]},sidebar:"tutorialSidebar",previous:{title:"Messages, Callbacks & Contract-to-Contract Interaction",permalink:"/recipes/scilla-recipes/messages"},next:{title:"Muti-signature contracts",permalink:"/recipes/scilla-recipes/mutisignature"}},p=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Docker Interaction",id:"docker-interaction",children:[{value:"Relayer responsibilities",id:"relayer-responsibilities",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metatransactions"},"Metatransactions"),(0,i.kt)("p",null,"Meta Transactions are a broad concept borrowed from Ethereum where it is typically used to load authenticated data onto a smart contract. This pattern is needed for many Ethereum projects including the \u2018gasless\u2019 relay system whereby one or more nodes accept transactions signed with a hidden private key and then wrap that transaction in a Ethereum transaction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-3.md"},"ZRC-3")," defines the technical specification that another contract with the ability to perform transitions with metatransactions should consume."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"It\u2019s equivalent to adding a checkbook to your bank account (contract). Through the metatransaction which is defined by all the variables to show proof that the owner of the funds did authorize this exact spend in the form of a cryptographic signature of the entire message hash."),(0,i.kt)("p",null,"Metatransactions provide an alternative flow for users just getting started with their cryptocurrency and wallets. It allows for gasless transactions, cutting out the barrier of getting ZIL from an exchange or via mining before a Dapp user can interact with the smart contract."),(0,i.kt)("p",null,"It can also be seen as a way to defer the processing of transactions or even to guard a transition that requires multiparty authorization, although those applications are left to implementations and future standards."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/reference/MetaFungibleToken.scilla"},"The ZRC-3 contract")," adds a metatransfer transition to the existing ZRC-2 interface."),(0,i.kt)("h2",{id:"docker-interaction"},"Docker Interaction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starling-foundries/relay.js"},"relay.js")," is a repository containing the cheque relay to forward metatransactions to zilliqa network (sometimes called a bouncer proxy)."),(0,i.kt)("p",null,"This contract is based largely on the recommendations of EIP-965. It accomplishes similar goals, but also adds a functionality for gasless metatransactions. In this implementation the cheque is a message containing these parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JS"},'{\n         "from" : "0xa0000000...",\n           "to" : "0xb0000000...",\n       "amount" : 100,\n     "contract" : "0x12395345...",\n          "fee" : 2,\n        "nonce" : 12,\n    "signature" : "0xasdlj3io2j...",\n    "pubkey"    : "asdfg123..." \n}\n')),(0,i.kt)("p",null,"Note that the recipient, amount, contract, fee and nonce values are hashed and signed client-side before submitting the metatransaction to an arbotarily relay which can use this metatransaction as a spend-by-proxy. Both the relay and sender can be confident that parameters are properly validated on-chain, only a valid metatransaction can be spent and it can only be spent once."),(0,i.kt)("p",null,"This spend function does not replace the normal Transfer transition or the OperatorSend functionality already possible with ZRC2, instead it offers a third method for authorizing these transfers. One in which the holder of a token with spending authority is not presumed to have the Zil onhand to pay for transactions. It also optionally allows for paying transaction fees in tokens."),(0,i.kt)("p",null,"Posession of a metatransaction authorizes a relayer to submit this cheque on their behalf. This does not guarantee the funds, as any other transactions spending funds will be ordered like any other within the blockchain. This is by design as it removes the main way relays can abuse power - by censoring transactions."),(0,i.kt)("p",null,"If a relayer does not submit the cheque in a timely manner, the token holder has the opportunity to send the same metatransaction to the voidcheque transition to ensure the stalled transaction is not processed later."),(0,i.kt)("h3",{id:"relayer-responsibilities"},"Relayer responsibilities"),(0,i.kt)("p",null,"The relayer provides a public endpoint for recieving metatransactions, chequeing it's target contract and can validate any parameters to avoid wasting its own gas with a transaction that might be refused due to balance or previous spending of the metatransaction."),(0,i.kt)("p",null,"It may optionally report a minimum fee, but it cannot charge a fee that the token owner did not approve in the signed metatransaction. The anticipated malevolent behavior - a relayer censoring transactions - is mitigated by the possibility for multiple relayers."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/builders-of-zilliqa/zrc3s-grand-rewrite-22558797ea0"},"Medium - ZRC3\u2019s Grand Rewrite")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-3.md"},"ZRC-3 Specification")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/reference/MetaFungibleToken.scilla"},"ZRC-3 - Contract")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/tree/master/example/zrc3"},"ZRC3 - Interaction")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starling-foundries/relay.js"},'relay.js "bouncer proxy" - Docker Interaction')))}h.isMDXComponent=!0}}]);