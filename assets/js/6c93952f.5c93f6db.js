"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[9826],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},883:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=r(7462),n=r(3366),s=(r(7294),r(3905)),o=["components"],i={tags:["Address","ByStr20","Bech32","Base16"]},l="Addresses",c={unversionedId:"recipes/scilla-recipes/addresses",id:"recipes/scilla-recipes/addresses",isDocsHomePage:!1,title:"Addresses",description:"Addresses on the network can either be a wallet or a contract. Addresses come in two format Bech32 or Base16. Bech32's start with the prefix `zil1...` whereas Base16's are prefixed with `0x...`.",source:"@site/docs/recipes/scilla-recipes/addresses.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/addresses",permalink:"/Scilla-Cookbook/recipes/scilla-recipes/addresses",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/addresses.md",tags:[{label:"Address",permalink:"/Scilla-Cookbook/tags/address"},{label:"ByStr20",permalink:"/Scilla-Cookbook/tags/by-str-20"},{label:"Bech32",permalink:"/Scilla-Cookbook/tags/bech-32"},{label:"Base16",permalink:"/Scilla-Cookbook/tags/base-16"}],version:"current",frontMatter:{tags:["Address","ByStr20","Bech32","Base16"]},sidebar:"tutorialSidebar",previous:{title:"Community Scilla Cookbook",permalink:"/Scilla-Cookbook/"},next:{title:"Algebraic data types",permalink:"/Scilla-Cookbook/recipes/scilla-recipes/adt"}},p=[{value:"Address subtypes",id:"address-subtypes",children:[]},{value:"Further reading",id:"further-reading",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"addresses"},"Addresses"),(0,s.kt)("p",null,"Addresses on the network can either be a wallet or a contract. Addresses come in two format Bech32 or Base16. Bech32's start with the prefix ",(0,s.kt)("inlineCode",{parentName:"p"},"zil1...")," whereas Base16's are prefixed with ",(0,s.kt)("inlineCode",{parentName:"p"},"0x..."),"."),(0,s.kt)("p",null,"Converting a Bech32 into a Base16 and vice versa can be achieved manually though our ",(0,s.kt)("a",{parentName:"p",href:"https://ide.zilliqa.com/"},"Neo-Savant IDE"),(0,s.kt)("inlineCode",{parentName:"p"},"(Tools>AddressConverter)")," or programmatically using programs like ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"},"zilliqa-js"),". When we refer to a ByStr20 address in Scilla, we refer to the Base16 address."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Bech32 = zil1zyg3zyg3zyg3zyg3zyg3zyg3zyg3zyg3h6785s\nBase16 = 0x1111111111111111111111111111111111111111\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\n\nlibrary Example\n\nlet constant_bystr = 0x1111111111111111111111111111111111111111\n\ncontract Example\n(\n    immutable_bystr: ByStr20\n)\n\nfield addr_bystr : ByStr20 = constant_bystr\n")),(0,s.kt)("h2",{id:"address-subtypes"},"Address subtypes"),(0,s.kt)("p",null,"We can infer subtypes of Address such as 'A contract on the network' or 'A user or contract on the network' to give some type safety when trying to use contracts or addresses that might not exist"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"  (* any valid bytes of string length 20, not guaranteed to be valid *)\n  ByStr20\n  (* guarantees to be either a contract or a user with some balance or nonce >= 1*)\n  ByStr20 with end\n  (* guarantees to be a contract *)\n  ByStr20 with contract end\n")),(0,s.kt)("p",null,"Read more on ",(0,s.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=with%20end#address-subtyping"},"Address subtyping here.")),(0,s.kt)("h2",{id:"further-reading"},"Further reading"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=bystr20#addresses"},"Scilla Documentation - Addresses")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla"},"auction.scilla")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/zli/blob/c35fbac35edb5c6987b8a5881490a7cacb4cb1be/testsuite/contracts/UnstoppableDomains/Registry.scilla"},"unstoppabledomains_registry.scilla")))}u.isMDXComponent=!0}}]);