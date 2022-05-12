"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3002],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(o),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5064:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={tags:["FAQ"]},c="FAQ",s={unversionedId:"side-knowledge/faq",id:"side-knowledge/faq",isDocsHomePage:!1,title:"FAQ",description:"A list of common FAQ's developers might have.",source:"@site/docs/side-knowledge/faq.md",sourceDirName:"side-knowledge",slug:"/side-knowledge/faq",permalink:"/Scilla-Cookbook/side-knowledge/faq",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-knowledge/faq.md",tags:[{label:"FAQ",permalink:"/Scilla-Cookbook/tags/faq"}],version:"current",frontMatter:{tags:["FAQ"]},sidebar:"tutorialSidebar",previous:{title:"Block production",permalink:"/Scilla-Cookbook/side-knowledge/blocks"},next:{title:"Gas",permalink:"/Scilla-Cookbook/side-knowledge/gas"}},d=[{value:"Why use Scilla over Solidity or other languages?",id:"why-use-scilla-over-solidity-or-other-languages",children:[]},{value:"How is Zilliqa&#39;s mining different compared to Bitcoin POW?",id:"how-is-zilliqas-mining-different-compared-to-bitcoin-pow",children:[]},{value:"How does Zilliqa core protocol work?",id:"how-does-zilliqa-core-protocol-work",children:[]},{value:"Further reading",id:"further-reading",children:[]}],u={toc:d};function p(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"A list of common FAQ's developers might have."),(0,i.kt)("h2",{id:"why-use-scilla-over-solidity-or-other-languages"},"Why use Scilla over Solidity or other languages?"),(0,i.kt)("p",null,"We believe in moving towards a language or a subset of an existing language grammar on which we\ncan prove safety properties about a contract. This will avoid most of the issues that existing contracts\nare facing, e.g., DAO and Parity. Without any formal proofs about the contracts, such situations are\nunavoidable."),(0,i.kt)("p",null,"Unlike Solidity, Scilla won\u2019t be Turing complete. The computation model will be based on communicating I/O automata (I/O Automata theory by Lynch and Tuttle (\u201981) with CPS style return of values. The front-end language can be close to Solidity. The rationale behind the choice is the following: not all applications require a Turing complete language."),(0,i.kt)("p",null,"Moreover, Turing complete languages are hard to reason about and hence prone to bugs. A non Turing-complete language becomes amenable to formal methods-based verification because of its simplicity. In more concrete terms, it becomes possible to prove interesting safety and liveness properties about a non-Turing complete program such as the funds never get locked, etc."),(0,i.kt)("h2",{id:"how-is-zilliqas-mining-different-compared-to-bitcoin-pow"},"How is Zilliqa's mining different compared to Bitcoin POW?"),(0,i.kt)("p",null,"Unlike Bitcoin, the mining process in Zilliqa is not directly based on PoW. Every Zilliqa node first does a PoW at the start of what is called a DS epoch. Once, a valid PoW solution is submitted to the network, each node will then have to participate in the PBFT consensus protocol. Consider the consensus protocol as a simple voting. If a super-majority of nodes vote for it, then the block will be considered valid and can be committed to the blockchain. Once a node has done PoW, it can vote for a certain number of blocks. Every block that gets committed to the blockchain will yield some reward."),(0,i.kt)("p",null,"The difference with Bitcoin is that in Bitcoin nodes do a PoW for every new block. For Zilliqa, a node will do a PoW for every 100 blocks. This also means that the energy footprint associated with PoW in Zilliqa is considerably lower."),(0,i.kt)("h2",{id:"how-does-zilliqa-core-protocol-work"},"How does Zilliqa core protocol work?"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://dev.zilliqa.com/docs/contributors/core-node-operation/"},"core protocol design")," documentation."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/_/downloads/en/latest/pdf/"},"PDF Scilla Docs")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.zilliqa.com/techfaq.pdf"},"Developer FAQ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.zilliqa.com/techfaq.pdf"},"Technical FAQ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.zilliqa.com/scilla-design-story-piece-by-piece-part-1-why-do-we-need-a-new-language-27d5f14ae661"},"Scilla Design Story")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dev.zilliqa.com/docs/contributors/core-node-operation/"},"Core protocol design")))}p.isMDXComponent=!0}}]);