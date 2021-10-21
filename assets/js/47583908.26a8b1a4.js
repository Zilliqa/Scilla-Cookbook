"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6829],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7559:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={tags:["ownership"]},l="Ownership",s={unversionedId:"recipes/scilla-contract/ownership",id:"recipes/scilla-contract/ownership",isDocsHomePage:!1,title:"Ownership",description:"`ocaml",source:"@site/docs/recipes/scilla-contract/ownership.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/ownership",permalink:"/recipes/scilla-contract/ownership",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/recipes/scilla-contract/ownership.md",tags:[{label:"ownership",permalink:"/tags/ownership"}],version:"current",frontMatter:{tags:["ownership"]},sidebar:"tutorialSidebar",previous:{title:"Option",permalink:"/recipes/scilla-contract/option"},next:{title:"Polymorphic Types (ADTs)",permalink:"/recipes/scilla-contract/polymorphic-adt"}},p=[{value:"BNum Library Functions",id:"bnum-library-functions",children:[{value:"blk_leq",id:"blk_leq",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ownership"},"Ownership"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"")),(0,a.kt)("h2",{id:"bnum-library-functions"},"BNum Library Functions"),(0,a.kt)("h3",{id:"blk_leq"},"blk_leq"),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=shogi#user-defined-adts"},"readthedocs - user-defined ADTs")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=adt#more-adt-examples"},"readthedocs - ADT")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla"},"auction.scilla")))}d.isMDXComponent=!0}}]);