"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[5657],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8645:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Constructor name",s={unversionedId:"tutorials/scilla-contract/incrementing-button/basics-constructor",id:"tutorials/scilla-contract/incrementing-button/basics-constructor",isDocsHomePage:!1,title:"Constructor name",description:"A contract is declared using the `contract` keyword that starts the scope of the contract.",source:"@site/docs/tutorials/scilla-contract/incrementing-button/basics-constructor.md",sourceDirName:"tutorials/scilla-contract/incrementing-button",slug:"/tutorials/scilla-contract/incrementing-button/basics-constructor",permalink:"/tutorials/scilla-contract/incrementing-button/basics-constructor",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorials/scilla-contract/incrementing-button/basics-constructor.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tutorials/scilla-contract/incrementing-button/basics-introduction"},next:{title:"Version Headers",permalink:"/tutorials/scilla-contract/incrementing-button/basics-versionheader"}},u=[],p={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constructor-name"},"Constructor name"),(0,o.kt)("p",null,"A contract is declared using the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," keyword that starts the scope of the contract.\nThe next keyword passed is the contract name. Only one constructor is able to be defined per contract.\nWhen deploying a contract to the network, developers will be asked to define the variables passed into the constructor."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A constructor (",(0,o.kt)("strong",{parentName:"p"},"immutable"),") variable cannot be changed after deployment."))),(0,o.kt)("p",null,"This example contract name is defined as ",(0,o.kt)("inlineCode",{parentName:"p"},"IncrementingButton"),". A contract declaration is followed by the declaration of its immutable parameters, the scope of which is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"()"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IncrementingButton")," currently does not have any immutable variables defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"contract IncrementingButton()\n")),(0,o.kt)("p",null,"We will improve our contract by providing an immutable variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_owner")),(0,o.kt)("p",null,"Each immutable parameter is declared in the following pattern ",(0,o.kt)("inlineCode",{parentName:"p"},"vname: vtype")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"vname")," is the parameter name and ",(0,o.kt)("inlineCode",{parentName:"p"},"vtype")," is the parameter type. Mutiple parameters are delimited with a  ",(0,o.kt)("inlineCode",{parentName:"p"},","),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contract_owner")," defines the owner of the contract. There will be transitions defined later that only the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_owner")," can access."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"contract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n")),(0,o.kt)("p",null,"These initalisation parameters can be viewed publically from the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," of the contract."),(0,o.kt)("p",null,"We are still missing required fields that stop our contract being compiled correctly. See the next topic about Scilla Versions."))}m.isMDXComponent=!0}}]);