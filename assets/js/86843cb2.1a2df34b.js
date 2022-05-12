"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1032:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:4},l="Creating metadata for a token",d={unversionedId:"tutorials/scilla-tutorials/nft-collection/public-metadata",id:"tutorials/scilla-tutorials/nft-collection/public-metadata",isDocsHomePage:!1,title:"Creating metadata for a token",description:"The below is an example of what metadata for a token should be presented. Read the document for ZRC-7 nonfungible token metadata standardisation for the full standard specification.",source:"@site/docs/tutorials/scilla-tutorials/nft-collection/public-metadata.md",sourceDirName:"tutorials/scilla-tutorials/nft-collection",slug:"/tutorials/scilla-tutorials/nft-collection/public-metadata",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/nft-collection/public-metadata",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/nft-collection/public-metadata.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Making resources public",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/nft-collection/public-resources"},next:{title:"Minting a token",permalink:"/Scilla-Cookbook/tutorials/scilla-tutorials/nft-collection/minting-token"}},c=[{value:"Making metadata public",id:"making-metadata-public",children:[]},{value:"When to use base URI",id:"when-to-use-base-uri",children:[]},{value:"When to use token URI",id:"when-to-use-token-uri",children:[]},{value:"Creating project level metadata",id:"creating-project-level-metadata",children:[]},{value:"Metadata API scaffolding",id:"metadata-api-scaffolding",children:[{value:"Contract state",id:"contract-state",children:[]},{value:"Metadata exists for an existing token",id:"metadata-exists-for-an-existing-token",children:[]},{value:"Metadata does not exist for a burnt token",id:"metadata-does-not-exist-for-a-burnt-token",children:[]},{value:"Metadata not exposed for non minted tokens",id:"metadata-not-exposed-for-non-minted-tokens",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-metadata-for-a-token"},"Creating metadata for a token"),(0,i.kt)("p",null,"The below is an example of what metadata for a token should be presented. Read the document for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-7.md"},"ZRC-7 nonfungible token metadata standardisation")," for the full standard specification."),(0,i.kt)("p",null,"Take note of the metadata 'resource' being the previously uploaded resource file location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{3,4,5}","{3,4,5}":!0},'{\n  "name": "Creature #101",\n  "resources": [\n    { "uri": "ipfs://QmZILGa7zXUbixvYJpgkRkaSCYEBtSwgVtfzkoD3YkNsE1" }\n  ],\n  "attributes": [\n    {\n      "trait_type": "Background",\n      "value": "Black"\n    },\n    {\n      "trait_type": "Eyes",\n      "value": "Big"\n    },\n    {\n      "trait_type": "Mouth",\n      "value": "Grin"\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"making-metadata-public"},"Making metadata public"),(0,i.kt)("p",null,"Previously we uploaded our image resource, which is attached on our metadata json object on lines 3-5. This metadata json also needs to be uploaded so we can use the metadata link on the token."),(0,i.kt)("p",null,"By having the image wrapped inside the metadata, it allows us to pass both the image and some richer details of the token, instead of passing just the image alone."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"we can give our metadata mutability using base_uri or immutability using token_uri"))),(0,i.kt)("h2",{id:"when-to-use-base-uri"},"When to use base URI"),(0,i.kt)("p",null,"Now with our image and metadata uploaded, we can decide if we want an API to serve the metadata, or if we want to directly embed it onto the token."),(0,i.kt)("p",null,"The advantage of having an API serve the metadata is that a developer can control what the API is exposing. If files on IPFS need to change, the API can handle showing the correct file or data whilst hiding the data for tokens yet to be minted. In the case of when files need to change whilst embedded them onto the token, this is not possible as when a token_uri is set, the value is then immutable."),(0,i.kt)("p",null,"The developer can set base_uri to an API they control. An example is when ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_base_uri")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"www.api.example.com/")," and token_id is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", ecosystem partners will query ",(0,i.kt)("inlineCode",{parentName:"p"},"www.api.example.com/1")," when looking up details for token_id 1."),(0,i.kt)("p",null,"Once the minting phase is complete and if the metadata won't change in the future. Developers may choose to remove the API and change base_uri to some folder of decentralised storage. An IPFS folder is the recommended solution. The base_uri would become ",(0,i.kt)("inlineCode",{parentName:"p"},"ipfs://QmeUhYpVsJUD2ekWnbSsvjQ2vSBWDbrC2PmnjdCswYTjDF/")," and the same logic of having the token_id become part of the query string. ",(0,i.kt)("inlineCode",{parentName:"p"},"ipfs://QmeUhYpVsJUD2ekWnbSsvjQ2vSBWDbrC2PmnjdCswYTjDF/1")),(0,i.kt)("h2",{id:"when-to-use-token-uri"},"When to use token URI"),(0,i.kt)("p",null,"An advantage of embedding the file onto the token is that it's quick and easy with no API required. But then is immutable for further changes. It is recommended to use a solution like decentralised storage to ensure your content isn't taken offline at any stage if opting for a token_uri implementation."),(0,i.kt)("p",null,"It's possible to have a ",(0,i.kt)("inlineCode",{parentName:"p"},"base_uri")," set and have set a ",(0,i.kt)("inlineCode",{parentName:"p"},"token_uri"),"  for a token_id. In this case, the standard says that ",(0,i.kt)("inlineCode",{parentName:"p"},"token_uri")," overrides ",(0,i.kt)("inlineCode",{parentName:"p"},"base_uri")," if both are present."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since the metadata is immutable and cannot be changed, it's recommended to use base URI to have control over changing the value if it becomes unavailable in the future."))),(0,i.kt)("h2",{id:"creating-project-level-metadata"},"Creating project level metadata"),(0,i.kt)("p",null,"An NFT contract can also expose metadata at the collection level. Project level metadata can be found in the location ",(0,i.kt)("inlineCode",{parentName:"p"},"<base_uri>metadata.json")," where base_uri looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"www.api.example.com/")," and the file ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.json")," can be found in the root of that directory structure."),(0,i.kt)("p",null,"Some ecosystem partners may choose to present data about a collection from this section, as it reduces the amount of friction needed for an ecosystem to display content in a generic way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Unique and Diverse Creatures",\n  "description": "10,000 unique and diverse creatures living on the blockchain.",\n  "external_url": "https://example.com/creature",\n  "animation_url": "https://animation.example.com/creature"\n}\n')),(0,i.kt)("h2",{id:"metadata-api-scaffolding"},"Metadata API scaffolding"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For our example we will use token_uri, so have no need for this API."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"base_uri")," can be useful to use when you want to guard or change metadata frequently. The API is where you would decide on what to show depending on the current mint count state."),(0,i.kt)("p",null,"The below is a very simple express.js API."),(0,i.kt)("p",null,"It currently reads a parameter passed with the GET request called ",(0,i.kt)("inlineCode",{parentName:"p"},"token_uri"),". It then queries this against an NFT contract checking how many tokens have currently been minted. If then does a further check to see if the token_id has been burnt. The API responds with different HTTP codes depending on which case the logic can match against."),(0,i.kt)("p",null,"This can be extended to show metadata for correct requests to the API for a project level implementation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express')\nconst app = express()\nconst port = 3000;\n\nconst { Zilliqa } = require('@zilliqa-js/zilliqa');\nconst zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\nconst nftContract = '18d1f737c1a1102cca966bf82dfe459e35fbd524';\n\napp.get('/', async (req, res) => {\n    if(Number.isInteger(parseInt(req.query.token_id))) {\n        const currentTokenID = await getCurrentTokenID()\n        if(req.query.token_id <= currentTokenID) {\n            const isBurnt = await isTokenIDBurnt(req.query.token_id)\n            if(!isBurnt) {\n                // fetch and return your current implementation of metadata.json\n                res.send(`token_id sent is ${req.query.token_id} and this token_id hasn't been burnt, current token_id onchain is ${currentTokenID}`) \n            } \n            else {\n                res.status(404).send(`requested token_id ${req.query.token_id} has been burnt!`);\n            }\n        } \n        else {\n            res.status(403).send(`requested token_id ${req.query.token_id} is greater than what was found onchain ${currentTokenID}`);\n        }\n    } \n    else {\n        res.status(400).send(`input ${req.query.token_id} is NaN ${typeof req.query.token_id}`);\n    }\n});\n\nasync function getCurrentTokenID() {\n    const stateTokenID = await zilliqa.blockchain.getSmartContractSubState(\n        nftContract,\n        'token_id_count',\n        [],\n    );\n    //console.log(stateTokenID.result.token_id_count);\n    return stateTokenID.result.token_id_count\n}\n\nasync function isTokenIDBurnt(token_id) {\n    const stateTokenOwner = await zilliqa.blockchain.getSmartContractSubState(\n        nftContract,\n        'token_owners',\n        [token_id],\n    );\n    //console.log(stateTokenOwner.result.token_owners);\n    if(stateTokenOwner.result === null ) return true\n    else if (stateTokenOwner.result.token_owners !== null) return false\n}\n\napp.listen(port, () => console.log(`Listening on ${port}`))\n")),(0,i.kt)("h3",{id:"contract-state"},"Contract state"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'token_owners\n{\n  "1": "0x24ddedbf3a3df608f4c9fbf56153866947e1b159",\n  "2": "0x24ddedbf3a3df608f4c9fbf56153866947e1b159",\n  "3": "0x24ddedbf3a3df608f4c9fbf56153866947e1b159"\n}\n')),(0,i.kt)("h3",{id:"metadata-exists-for-an-existing-token"},"Metadata exists for an existing token"),(0,i.kt)("p",null,"In this case, the token exists in state and has not been burnt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:3000/?token_id=3'\n\n200 token_id sent is 3 and this token_id hasn't been burnt, current token_id onchain is 4\n")),(0,i.kt)("h3",{id:"metadata-does-not-exist-for-a-burnt-token"},"Metadata does not exist for a burnt token"),(0,i.kt)("p",null,"In this case, the token has been burnt and metadata shouldn't be retrieved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:3000/?token_id=4'\n\n404 requested token_id 4 has been burnt!\n")),(0,i.kt)("h3",{id:"metadata-not-exposed-for-non-minted-tokens"},"Metadata not exposed for non minted tokens"),(0,i.kt)("p",null,"In this case, the token requested does not exist on the chain and shouldn't be exposed until this token has been minted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:3000/?token_id=5'\n\n403 requested token_id 5 is greater than what was found onchain 4\n")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/how-to/best-practices-for-nft-data"},"ipfs.io - Best Practices For NFT Data")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/main/zrcs/zrc-7.md#i-what-is-metadata-and-token-uri"},"Zilliqa Github - What is Metadata and Token URI?")))}p.isMDXComponent=!0}}]);