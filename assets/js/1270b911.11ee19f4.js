"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[8945],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),k=o,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1501:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={tags:["keywords"]},s="Glossary of keywords & conventions",c={unversionedId:"recipes/scilla-recipes/keywords",id:"recipes/scilla-recipes/keywords",isDocsHomePage:!1,title:"Glossary of keywords & conventions",description:"This page is responsible for some of the most common development and blockchain terms and the conventions to follow onchain or with interactions.",source:"@site/docs/recipes/scilla-recipes/keywords.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/keywords",permalink:"/Scilla-Cookbook/recipes/scilla-recipes/keywords",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/keywords.md",tags:[{label:"keywords",permalink:"/Scilla-Cookbook/tags/keywords"}],version:"current",frontMatter:{tags:["keywords"]},sidebar:"tutorialSidebar",previous:{title:"Integer",permalink:"/Scilla-Cookbook/recipes/scilla-recipes/integer"},next:{title:"List",permalink:"/Scilla-Cookbook/recipes/scilla-recipes/list"}},p=[{value:"Glossary",id:"glossary",children:[]},{value:"Keywords",id:"keywords",children:[]},{value:"Conventions",id:"conventions",children:[]},{value:"Conventional transition names",id:"conventional-transition-names",children:[{value:"ZRC-5 - convention for depositing zil",id:"zrc-5---convention-for-depositing-zil",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"glossary-of-keywords--conventions"},"Glossary of keywords & conventions"),(0,i.kt)("p",null,"This page is responsible for some of the most common development and blockchain terms and the conventions to follow onchain or with interactions."),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nonce")),(0,i.kt)("p",null,'An incrementing integer counter, safeguards from transactions being sent twice. The term stands for "number used once".'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gas price")),(0,i.kt)("p",null,"The amount paid for a unit of gas."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gas limit")),(0,i.kt)("p",null,"The amount of gas should be expended before erroring."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"signature")),(0,i.kt)("p",null,"Cryptographic hash of some data generated using a keypair."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"QA")),(0,i.kt)("p",null,"1 Unit of QA is worth 0.000001 LI and 0.000000000001 ZIL."),(0,i.kt)("p",null,"QA is used when speaking about small values. Default Scilla unit that can be represented as a Uint128."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LI")),(0,i.kt)("p",null,"1 unit of LI is worth 1000000 QA and 0.000001 ZIL."),(0,i.kt)("p",null,"LI is rarely used as a unit."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ZIL")),(0,i.kt)("p",null,"1 unit of ZIL is worth 1000000 LI and 1000000000000 QA."),(0,i.kt)("p",null,"ZIL is used when speaking about large values."),(0,i.kt)("h2",{id:"keywords"},"Keywords"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"accept")),(0,i.kt)("p",null,"Accepts an amount of ZIL into the contract."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_sender")),(0,i.kt)("p",null,"The address calling the contract."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_origin")),(0,i.kt)("p",null,"The original address that started the chain of calling."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_this_address")),(0,i.kt)("p",null,"Starts a pattern matching block"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"in")),(0,i.kt)("p",null,"Used to chain a logical structure through multiple variables."),(0,i.kt)("h2",{id:"conventions"},"Conventions"),(0,i.kt)("p",null,"The standard convention to writing procedure names is in ",(0,i.kt)("inlineCode",{parentName:"p"},"PascalCase"),"."),(0,i.kt)("p",null,"The standard convention to writing constants and variables is in ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case"),"."),(0,i.kt)("h2",{id:"conventional-transition-names"},"Conventional transition names"),(0,i.kt)("h3",{id:"zrc-5---convention-for-depositing-zil"},"ZRC-5 - convention for depositing zil"),(0,i.kt)("p",null,"For a smart contract to accept incoming ZIL, it needs to do so explicitly using the ",(0,i.kt)("inlineCode",{parentName:"p"},"accept")," statement. As such, any transition that does not have the accept statement will not be able to accept any incoming ZIL transfer."),(0,i.kt)("p",null,"However, there is currently no naming convention for transitions that can accept ZIL. As a result, cryptocurrency exchanges or cryptocurrency wallet providers do not know which ",(0,i.kt)("inlineCode",{parentName:"p"},"_tag")," to set, should they wish to transfer ZIL to a contract address."),(0,i.kt)("p",null,"By having a naming convention for transitions that can accept ZIL, one can easily transfer ZIL to a contract that follows this convention, thereby improving composability between multiple contracts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"(* Accepts funds *)\ntransition AddFunds ()\n  accept\nend\n")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"))}d.isMDXComponent=!0}}]);