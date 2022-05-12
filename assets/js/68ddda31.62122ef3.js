"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3127],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:e},s),{},{components:n})):o.createElement(f,a({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1650:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},c="Introduction",u={unversionedId:"tutorials/scilla-tutorials/nft-collection/introduction",id:"tutorials/scilla-tutorials/nft-collection/introduction",isDocsHomePage:!1,title:"Introduction",description:"We are going to utilise the ZRC-6 non-fungible token Scilla contract to create and manage an art collection. We'll use the metadata definition described in ZRC-7 NFT Metadata Standard to describe our tokens with richer data than just an image.",source:"@site/docs/tutorials/scilla-tutorials/nft-collection/introduction.md",sourceDirName:"tutorials/scilla-tutorials/nft-collection",slug:"/tutorials/scilla-tutorials/nft-collection/introduction",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/nft-collection/introduction",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/nft-collection/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Testing the button",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/incrementing-button/local-testing"},next:{title:"Deploy ZRC-6",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/nft-collection/deploy-contract"}},s=[{value:"NFT collection",id:"nft-collection",children:[]}],p={toc:s};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We are going to utilise the ",(0,i.kt)("a",{parentName:"p",href:"/Scilla-Cookbook/recipes/scilla-recipes/nonfungible"},"ZRC-6 non-fungible token Scilla contract")," to create and manage an art collection. We'll use the metadata definition described in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/main/zrcs/zrc-7.md"},"ZRC-7 NFT Metadata Standard")," to describe our tokens with richer data than just an image."),(0,i.kt)("p",null,"You don't need any previous blockchain experience, but general Javascript and web hosting experience will be useful."),(0,i.kt)("h2",{id:"nft-collection"},"NFT collection"),(0,i.kt)("p",null,"NFT collection is a walkthrough tutorial of the steps required to setup an NFT project on Zilliqa."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deploy a ZRC-6 contract to the network"),(0,i.kt)("li",{parentName:"ul"},"Make the art/resource assets public",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Asset storage options"))),(0,i.kt)("li",{parentName:"ul"},"Create and make the metadata for the asset public",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"base_uri vs token_uri"))),(0,i.kt)("li",{parentName:"ul"},"Mint a token to an address"),(0,i.kt)("li",{parentName:"ul"},"Other typical NFT contract interactions")),(0,i.kt)("p",null,"Once we have setup our contract and initially tested the creation (minting) process, we can begin to move the calling of NFT contract logic to zilliqa-js to help automate this process or move this into a web interface."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you found this guide useful, please consider contributing your knowledge!"))))}d.isMDXComponent=!0}}]);