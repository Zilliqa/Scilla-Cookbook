"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[139],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,d=m["".concat(c,".").concat(p)]||m[p]||b[p]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={tags:["BNum","block","number","date","time"]},c="BNum",u={unversionedId:"recipes/scilla-contract/bnum",id:"recipes/scilla-contract/bnum",isDocsHomePage:!1,title:"BNum",description:"Block Numbers (BNum) are a type used for tracking the current block number. Blockchain's don't have any concept of dates or times without external oracles - but we can use blocks as a primitive way to determine how much time has passed.",source:"@site/docs/recipes/scilla-contract/bnum.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/bnum",permalink:"/recipes/scilla-contract/bnum",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/recipes/scilla-contract/bnum.md",tags:[{label:"BNum",permalink:"/tags/b-num"},{label:"block",permalink:"/tags/block"},{label:"number",permalink:"/tags/number"},{label:"date",permalink:"/tags/date"},{label:"time",permalink:"/tags/time"}],version:"current",frontMatter:{tags:["BNum","block","number","date","time"]},sidebar:"tutorialSidebar",previous:{title:"Addresses",permalink:"/recipes/scilla-contract/address"},next:{title:"Contract to Contract interaction",permalink:"/recipes/scilla-contract/contracttocontract"}},s=[{value:"BNum Library Functions",id:"bnum-library-functions",children:[{value:"blk_leq",id:"blk_leq",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],b={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bnum"},"BNum"),(0,l.kt)("p",null,"Block Numbers (BNum) are a type used for tracking the current block number. Blockchain's don't have any concept of dates or times without external oracles - but we can use blocks as a primitive way to determine how much time has passed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\nlibrary BlockNumbers\n\nlet constant_bnum = BNum 1337\nlet fifty_bnum = BNum 50\n\ncontract BlockNumbers\n(\n    immutable_bnum: BNum\n)\n\nfield state_block : BNum = some_block_number\n\n\ntransition BNumMaths()\n    block_tx_is_processed_at <- & BLOCKNUMBER;\n\n    fifty_block_in_future = builtin badd block_tx_is_processed_at fifty_bnum; (* BNum *)\n\n    fifty_block_in_past = builtin bsub block_tx_is_processed_at fifty_bnum; (* Int256 *)\n\n    are_blocks_equal = builtin eq  block_tx_is_processed_at fifty_bnum; (* Bool *)\n\n    is_a_less_than_b = builtin blt block_tx_is_processed_at fifty_bnum (* Bool *)\nend\n")),(0,l.kt)("h2",{id:"bnum-library-functions"},"BNum Library Functions"),(0,l.kt)("h3",{id:"blk_leq"},"blk_leq"),(0,l.kt)("p",null,"blk_leq is a constant function that takes two blocks. It defines two boolean variables ",(0,l.kt)("inlineCode",{parentName:"p"},"bc1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bc2"),"."),(0,l.kt)("p",null,"If the first block is less than the second variable ",(0,l.kt)("inlineCode",{parentName:"p"},"bc1")," is set to true."),(0,l.kt)("p",null,"If the first block is equal to the second variable ",(0,l.kt)("inlineCode",{parentName:"p"},"bc2")," is set to true."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ORB")," builtin from the Bools.Util performs a logical OR operator, returning true if either ",(0,l.kt)("inlineCode",{parentName:"p"},"bc1")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"bc2")," are true."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ocaml"},"let blk_leq =\n  fun (blk1 : BNum) =>\n  fun (blk2 : BNum) =>\n    let bc1 = builtin blt blk1 blk2 in \n    let bc2 = builtin eq blk1 blk2 in \n    orb bc1 bc2\n\n...\n\ntransition BlockDifference(query_block: BNum, current_block: BNum)\n    less_or_equal_to_query = blk_leq query_block current_block;\nend\n\n")),(0,l.kt)("h2",{id:"further-reading"},"Further Reading"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=block#block-numbers"},"readthedocs - BNum")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/scilla/blob/master/tests/contracts/auction.scilla"},"auction.scilla")))}m.isMDXComponent=!0}}]);