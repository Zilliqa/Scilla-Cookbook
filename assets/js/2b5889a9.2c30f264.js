"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6622],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={tags:["dex","decentralised","exchange","swap"]},l="Decentralised exchange",c={unversionedId:"recipes/scilla-recipes/dex",id:"recipes/scilla-recipes/dex",isDocsHomePage:!1,title:"Decentralised exchange",description:"Decentralized exchanges (DEX) typically do not use order books to facilitate trades or set prices. Instead, these platforms employ liquidity pool protocols to determine asset pricing.",source:"@site/docs/recipes/scilla-recipes/dex.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/dex",permalink:"/recipes/scilla-recipes/dex",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/dex.md",tags:[{label:"dex",permalink:"/tags/dex"},{label:"decentralised",permalink:"/tags/decentralised"},{label:"exchange",permalink:"/tags/exchange"},{label:"swap",permalink:"/tags/swap"}],version:"current",frontMatter:{tags:["dex","decentralised","exchange","swap"]},sidebar:"tutorialSidebar",previous:{title:"Boolean",permalink:"/recipes/scilla-recipes/bool"},next:{title:"Recursion",permalink:"/recipes/scilla-recipes/folding"}},p=[{value:"What is Zilswap DEX",id:"what-is-zilswap-dex",children:[]},{value:"How does it work",id:"how-does-it-work",children:[]},{value:"What is Liquidity",id:"what-is-liquidity",children:[]},{value:"Zilswap DEX Contract",id:"zilswap-dex-contract",children:[]},{value:"Further reading",id:"further-reading",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decentralised-exchange"},"Decentralised exchange"),(0,i.kt)("p",null,"Decentralized exchanges (DEX) typically do not use order books to facilitate trades or set prices. Instead, these platforms employ liquidity pool protocols to determine asset pricing."),(0,i.kt)("p",null,"Peer-to-peer in nature, these exchanges execute trades between users\u2019 wallets instantly \u2014 a process some refer to as a swap. The DEX in this category are ranked in total value locked (TVL), or the value of assets held in the protocol's smart contracts."),(0,i.kt)("h2",{id:"what-is-zilswap-dex"},"What is Zilswap DEX"),(0,i.kt)("p",null,"Zilswap is the most popular DEX on Zilliqa with the most TVL."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1gkwt95a67lnpe774lcmz72y6ay4jh2asmmjw6u?tab=code"},"Zilswap DEX Contract")," is deployed at the mainnet address ",(0,i.kt)("inlineCode",{parentName:"p"},"zil1gkwt95a67lnpe774lcmz72y6ay4jh2asmmjw6u")),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,i.kt)("p",null,"Pairs (ZIL/Token) act as automated market makers, standing ready to accept one token for the other as long as the \u201cconstant product\u201d formula is preserved."),(0,i.kt)("p",null,"This formula, most simply expressed as ",(0,i.kt)("inlineCode",{parentName:"p"},"k = x * y"),", states that trades must not change the product (k) of a pair\u2019s reserve balances (x and y)."),(0,i.kt)("p",null,"This formula particularly desirable feature where it can always provide liquidity, no matter how large the order size nor how tiny the liquidity pool. The formula increases the price of the coin as the desired swap quantity increases. While larger orders tend to suffer, the DEX never has to worry about running out of liquidity."),(0,i.kt)("h2",{id:"what-is-liquidity"},"What is Liquidity"),(0,i.kt)("p",null,"Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for having an entry in the pool state. The deposit is a 50%/50% weighting with a 1000 ZIL minimum (2000 ZIL total value). The state tracks the pro-rata shares of the total reserves, and can be redeemed for the underlying assets at any time."),(0,i.kt)("h2",{id:"zilswap-dex-contract"},"Zilswap DEX Contract"),(0,i.kt)("p",null,"The Zilswap DEX has the following public transitions to facilitate in the swapping of tokens. It allows the swapping of ZIL or tokens with either an equal amount of one side of the trade and a dynamic calculated amount on the other. The DEX allows for adding and removing of liquidity. The DEX has some admin transitions for setting the fee and transferring the ownership."),(0,i.kt)("p",null,"These transitions are able to be called across contracts or interacted with through a Zilliqa SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition SetFee\n\ntransition TransferOwnership\n\ntransition AcceptPendingOwnership\n\ntransition AddLiquidity\n\ntransition RemoveLiquidity\n\ntransition SwapExactZILForTokens\n\ntransition SwapExactTokensForZIL\n\ntransition SwapZILForExactTokens\n\ntransition SwapTokensForExactZIL\n\ntransition SwapExactTokensForTokens\n\ntransition SwapTokensForExactTokens\n")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-by-example.html?highlight=list#exchange-specification"},"Scilla Documentation - Create a token exchange")))}u.isMDXComponent=!0}}]);