"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9153],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=l(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(h,c(c({ref:e},d),{},{components:a})):r.createElement(h,c({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8855:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},c="Introduction",i={unversionedId:"build/smart-contract/intro",id:"build/smart-contract/intro",title:"Introduction",description:"Smart contracts are programs that can interact with the blockchain, which can be viewed as a decentralized database. They allow developers to build decentralized applications (dApps) with controlled execution of contractual terms, where code is law.",source:"@site/docs/build/smart-contract/intro.md",sourceDirName:"build/smart-contract",slug:"/build/smart-contract/intro",permalink:"/docu-dev/docs/build/smart-contract/intro",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/smart-contract/intro.md",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1686060174,formattedLastUpdatedAt:"Jun 6, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"buildSidebar",previous:{title:"Quickstart",permalink:"/docu-dev/docs/build/quickstart"},next:{title:"Prerequisites",permalink:"/docu-dev/docs/build/smart-contract/prerequisites"}},s={},l=[{value:"But Technically, What is a Smart Contract?",id:"but-technically-what-is-a-smart-contract",level:2},{value:"Limitations of Smart Contracts",id:"limitations-of-smart-contracts",level:2}],d={toc:l},u="wrapper";function p(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Smart contracts are programs that can interact with the blockchain, which can be viewed as a ",(0,n.kt)("em",{parentName:"p"},"decentralized database"),". They allow developers to build decentralized applications (dApps) with controlled execution of contractual terms, where ",(0,n.kt)("strong",{parentName:"p"},"code is law"),"."),(0,n.kt)("h2",{id:"but-technically-what-is-a-smart-contract"},"But Technically, What is a Smart Contract?"),(0,n.kt)("p",null,"Smart contracts are human-readable code that can be compiled and deployed on a blockchain. In this context, a smart contract can be seen as a ",(0,n.kt)("em",{parentName:"p"},"stored procedure")," that can modify the data, interact with other smart contracts, and can be called by end users."),(0,n.kt)("p",null,"Thanks to the ",(0,n.kt)("strong",{parentName:"p"},"asynchronous execution of smart contracts"),", they can even automatically wake up at a specific time or when the ledger reaches a specific condition, such as the data of a smart contract having a specific value."),(0,n.kt)("h2",{id:"limitations-of-smart-contracts"},"Limitations of Smart Contracts"),(0,n.kt)("p",null,"While smart contracts have many benefits, they also have limitations."),(0,n.kt)("p",null,"For example, smart contracts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Are small, and storage has a cost."),(0,n.kt)("li",{parentName:"ul"},"Have short execution times, and execution has a cost, often called gas, and there is a gas limit for a given slot."),(0,n.kt)("li",{parentName:"ul"},"Must be deterministic, which implies that all their parameters are public and they can only access information on the blockchain.")))}p.isMDXComponent=!0}}]);