"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4210],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),l=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(h,a(a({ref:e},u),{},{components:n})):i.createElement(h,a({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5867:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:9},s="Testing the button",l={unversionedId:"tutorials/scilla-contract/incrementing-button/basics-local-testing",id:"tutorials/scilla-contract/incrementing-button/basics-local-testing",isDocsHomePage:!1,title:"Testing the button",description:"This section discusses deploying, interacting and testing the IncrementingButton contract and seeing if it meets the objectives set out in the introduction. This section discusses some of the sights developers will expect to encounter when interacting with contracts.",source:"@site/docs/tutorials/scilla-contract/incrementing-button/basics-local-testing.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/basics-local-testing",permalink:"/tutorials/scilla-contract/incrementing-button/basics-local-testing",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/scilla-contract/incrementing-button/basics-local-testing.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/tutorials/scilla-contract/incrementing-button/basics-events"},next:{title:"Introduction",permalink:"/tutorials/contract-interaction/incrementing-button-interaction/introduction"}},u=[{value:"IDE",id:"ide",children:[{value:"Environments",id:"environments",children:[]},{value:"Deploy to Simulated-Environment",id:"deploy-to-simulated-environment",children:[]}]},{value:"Contract Interaction",id:"contract-interaction",children:[]}],d={toc:u};function p(t){var e=t.components,c=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-the-button"},"Testing the button"),(0,o.kt)("p",null,"This section discusses deploying, interacting and testing the IncrementingButton contract and seeing if it meets the objectives set out in the introduction. This section discusses some of the sights developers will expect to encounter when interacting with contracts."),(0,o.kt)("h2",{id:"ide"},"IDE"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://ide.zilliqa.com/#/"},"Neo-Savant IDE")," can be used for writing, testing and deploying Scilla contracts to different environments. We will be deploying this contract out to the simulated environment and we will try and press the button."),(0,o.kt)("p",null,'We create a new contract on the IDE using the "add contract" symbol at the top left next to files, which opens a new untitled scilla document. We can paste the contract defined so far. If we check the contract, it will be checked for syntax errors. '),(0,o.kt)("p",null,"One warning is returned from our contract. ",(0,o.kt)("inlineCode",{parentName:"p"},"No transition in contract IncrementingButton contains an accept statement")," This warning means that our contract does not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"accept")," keyword and currently will not accept zil. We expected our contract not to accept zil so this warning is acceptable."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:n(2558).Z})),(0,o.kt)("p",null,"At the top right, we can connect to a simulated environment where we have several accounts and test funds available. We can then select a random account that has been generated in our simulated environment session, on a successful account change the amount of zil should change to an amount."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:n(8806).Z})),(0,o.kt)("p",null,"Pressing the deploy button we can open the contract constructors and see it's immutable parameters which need defining. ",(0,o.kt)("inlineCode",{parentName:"p"},"IncrementingButton")," has one immutable parameter defined earlier called ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_owner"),". We need to provide this before we can deploy the contract. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"amount")," is any ZIL that needs to be accepted by the contract, like a sale or purchase. ",(0,o.kt)("inlineCode",{parentName:"p"},"Gas Price")," is the amount paid for a unit of Gas -  know we need to pay some funds to have our transaction processed by the network, in our case we are deploying a contract to the network, this amount is in ",(0,o.kt)("inlineCode",{parentName:"p"},"QA")," which is a small decimal unit of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIL")),(0,o.kt)("h3",{id:"environments"},"Environments"),(0,o.kt)("p",null,"Smart contracts can be deployed to the following environments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"mainnet"),(0,o.kt)("li",{parentName:"ul"},"testnet"),(0,o.kt)("li",{parentName:"ul"},"simulated-env"),(0,o.kt)("li",{parentName:"ul"},"localhost")),(0,o.kt)("h3",{id:"deploy-to-simulated-environment"},"Deploy to Simulated-Environment"),(0,o.kt)("h2",{id:"contract-interaction"},"Contract Interaction"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"-1"}))}p.isMDXComponent=!0},8806:function(t,e,n){e.Z=n.p+"assets/images/ide-deployparameters-e133c84f3abf4167dfdfa92d72438101.png"},2558:function(t,e,n){e.Z=n.p+"assets/images/ide-navbar-36aaf844937456f0cc2ccbb2e09044e1.png"}}]);