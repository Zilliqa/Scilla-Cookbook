"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[5146],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?t.createElement(h,a(a({ref:n},u),{},{components:r})):t.createElement(h,a({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},923:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:5},l="Error handling",s={unversionedId:"tutorials/scilla-tutorials/incrementing-button/error-handling",id:"tutorials/scilla-tutorials/incrementing-button/error-handling",isDocsHomePage:!1,title:"Error handling",description:"In the below example we implement the ability to raise basic errors and stop execution.",source:"@site/docs/tutorials/scilla-tutorials/incrementing-button/error-handling.md",sourceDirName:"tutorials/scilla-tutorials/incrementing-button",slug:"/tutorials/scilla-tutorials/incrementing-button/error-handling",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/incrementing-button/error-handling",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/incrementing-button/error-handling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Procedures",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/incrementing-button/procedure"},next:{title:"Transitions",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/incrementing-button/transition"}},u=[{value:"IncrementingButton",id:"incrementingbutton",children:[]}],p={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"error-handling"},"Error handling"),(0,i.kt)("p",null,"In the below example we implement the ability to raise basic errors and stop execution."),(0,i.kt)("p",null,"Firstly, a Composite Type (ADT) Type ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," is defined with the constructor values we want to raise as errors."),(0,i.kt)("p",null,"Secondly, a library function called ",(0,i.kt)("inlineCode",{parentName:"p"},"make_error")," is defined. The function takes a variable called result of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," and matches that to an error code. This is wrapped in a JSON object storing both the error name and error code."),(0,i.kt)("p",null,"Lastly, we define a procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"ThrowError")," which takes an instance of a variable with type ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),". It then calls the library function and returns the error. The keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"throw")," stops the execution of the smart contract with the specific error passed."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Throwing errors with descriptive names helps users of your smart contracts debug what's wrong."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{8,9,10,12,13,14,15,16,17,18,19,20,33,34,35,36}","{8,9,10,12,13,14,15,16,17,18,19,20,33,34,35,36}":!0},'scilla_version 0\nlibrary IncrementingButton\n\nlet uint128_zero = Uint128 0\nlet uint128_one  = Uint128 1\n\n(* Error exception *)\ntype Error =\n  | NotContractOwner\n  | NotUniqueClicker\n\nlet make_error =\n  fun (result : Error) =>\n    let result_code = \n      match result with\n      | NotContractOwner             => Int32 -1\n      | NotUniqueClicker             => Int32 -2\n      end\n    in\n    { _exception : "Error"; code : result_code }  \n    \ncontract IncrementingButton\n(\n  contract_owner: ByStr20\n)\n\nfield current_clicker    : ByStr20 = contract_owner\nfield total_count_clicks : Uint128 = uint128_zero\n\n(* \n  Dev: Emit Errors \n*)\nprocedure ThrowError(err : Error)\n  e = make_error err;\n  throw e\nend\n')),(0,i.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,i.kt)("p",null,"In the previous section, we defined a pattern matching syntax that allowed branching depending on what the type was. For some paths of execution we want the logic to fail and stop executing. The procedures ",(0,i.kt)("inlineCode",{parentName:"p"},"IsContractOwner")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IsPreviousClicker")," should throw an error in some cases."),(0,i.kt)("p",null,"We define wrapping of a new error variable by referencing the ADT type of error ",(0,i.kt)("inlineCode",{parentName:"p"},"err = NotContractOwner")," and then calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"ThrowError")," procedure with the ",(0,i.kt)("inlineCode",{parentName:"p"},"err"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"ThrowError")," calls to the library function ",(0,i.kt)("inlineCode",{parentName:"p"},"make_error")," to wrap the error and then finally the error is thrown, stopping the execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3,14,15,24,25}","{3,14,15,24,25}":!0},"...\n\nprocedure ThrowError(err : Error)\n  e = make_error err;\n  throw e\nend\n\nprocedure IsContractOwner()\n  is_contract_owner = builtin eq contract_owner _sender;\n  match is_contract_owner with\n  | True => \n    (* No Operation - Continue contract execution *)\n  | False =>\n    err = NotContractOwner;\n    ThrowError err\n  end\nend\n\nprocedure IsPreviousClicker(new_clicker: ByStr20)\n  previous_clicker <- current_clicker;\n  is_previous_clicker = builtin eq previous_clicker _sender;\n  match is_previous_clicker with\n  | True => \n    err = NotUniqueClicker;\n    ThrowError err\n  | False =>\n    (* No Operation - Continue contract execution *)\n  end\nend\n\n")),(0,i.kt)("p",null,"In the next section, we will create logic that users can interact with to press the button, we will be concerned with the functionality and security of our button, combining the atomic logical blocks we have built with procedures."))}d.isMDXComponent=!0}}]);