"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93100],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a={title:"Contributing to apisix-ingress-controller"},s=void 0,c={unversionedId:"contribute",id:"contribute",isDocsHomePage:!1,title:"Contributing to apisix-ingress-controller",description:"\x3c!--",source:"@site/docs/apisix-ingress-controller/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/zh/docs/ingress-controller/contribute",editUrl:"https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/contribute.md",tags:[],version:"current",frontMatter:{title:"Contributing to apisix-ingress-controller"},sidebar:"docs",previous:{title:"Developing for Apache APISIX Ingress Controller",permalink:"/zh/docs/ingress-controller/development"},next:{title:"FAQ",permalink:"/zh/docs/ingress-controller/FAQ"}},u=[{value:"How to contribute",id:"how-to-contribute",children:[]},{value:"How to report a bug",id:"how-to-report-a-bug",children:[]},{value:"How to add a new feature or change an existing one",id:"how-to-add-a-new-feature-or-change-an-existing-one",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Firstly, thanks for your interest in contributing! I hope that this will be a\npleasant first experience for you, and that you will return to continue\ncontributing."),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("p",null,"Most of the contributions that we receive are code contributions, but you can\nalso contribute to the documentation or simply report solid bugs\nfor us to fix."),(0,i.kt)("p",null," For new contributors, please take a look at issues with a tag called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),"."),(0,i.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ensure the bug was not already reported")," by searching on GitHub under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"Issues"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you're unable to find an open issue addressing the problem, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/new"},"open a new one"),". Be sure to include a ",(0,i.kt)("strong",{parentName:"p"},"title and clear description"),", as much relevant information as possible, and a ",(0,i.kt)("strong",{parentName:"p"},"code sample")," or an ",(0,i.kt)("strong",{parentName:"p"},"executable test case")," demonstrating the expected behavior that is not occurring."))),(0,i.kt)("h2",{id:"how-to-add-a-new-feature-or-change-an-existing-one"},"How to add a new feature or change an existing one"),(0,i.kt)("p",null,"Before making any significant changes, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"open an issue"),". Discussing your proposed changes ahead of time will make the contribution process smooth for everyone."),(0,i.kt)("p",null,"Once we've discussed your changes and you've got your code ready, make sure that tests are passing and open your pull request. Your PR is most likely to be accepted if it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update the README.md with details of changes to the interface."),(0,i.kt)("li",{parentName:"ul"},"Includes tests for new functionality."),(0,i.kt)("li",{parentName:"ul"},'References the original issue in the description, e.g. "Resolves #123".'),(0,i.kt)("li",{parentName:"ul"},"Has a ",(0,i.kt)("a",{parentName:"li",href:"http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"},"good commit message"),".")))}p.isMDXComponent=!0}}]);