"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5866],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:t},o),{},{components:n})):a.createElement(c,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61835:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={title:"limit-count"},d=void 0,p={unversionedId:"plugins/limit-count",id:"version-2.12/plugins/limit-count",isDocsHomePage:!1,title:"limit-count",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.12/plugins/limit-count.md",sourceDirName:"plugins",slug:"/plugins/limit-count",permalink:"/zh/docs/apisix/plugins/limit-count",editUrl:"https://github.com/apache/apisix/edit/release/2.12/docs/zh/latest/plugins/limit-count.md",tags:[],version:"2.12",frontMatter:{title:"limit-count"},sidebar:"version-2.12/docs",previous:{title:"limit-conn",permalink:"/zh/docs/apisix/plugins/limit-conn"},next:{title:"proxy-cache",permalink:"/zh/docs/apisix/plugins/proxy-cache"}},u=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",children:[]},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u5f00\u542f\u63d2\u4ef6",id:"\u5f00\u542f\u63d2\u4ef6",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u79fb\u9664\u63d2\u4ef6",id:"\u79fb\u9664\u63d2\u4ef6",children:[]}],o={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u76ee\u5f55"},"\u76ee\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E5%BD%95"},"\u76ee\u5f55")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%AE%80%E4%BB%8B"},"\u7b80\u4ecb")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%8F%82%E6%95%B0"},"\u53c2\u6570")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E5%BC%80%E5%90%AF%E6%8F%92%E4%BB%B6"},"\u5f00\u542f\u63d2\u4ef6")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E6%B5%8B%E8%AF%95%E6%8F%92%E4%BB%B6"},"\u6d4b\u8bd5\u63d2\u4ef6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E7%A7%BB%E9%99%A4%E6%8F%92%E4%BB%B6"},"\u79fb\u9664\u63d2\u4ef6"))),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"\u548c ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/reference/rate-limit"},"GitHub API \u7684\u9650\u901f")," \u7c7b\u4f3c\uff0c\n\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u8303\u56f4\u5185\uff0c\u9650\u5236\u603b\u7684\u8bf7\u6c42\u4e2a\u6570\u3002\u5e76\u4e14\u5728 HTTP \u54cd\u5e94\u5934\u4e2d\u8fd4\u56de\u5269\u4f59\u53ef\u4ee5\u8bf7\u6c42\u7684\u4e2a\u6570\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"count > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u65f6\u95f4\u7a97\u53e3\u5185\u7684\u8bf7\u6c42\u6570\u91cf\u9608\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_window"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"time_window > 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u7a97\u53e3\u7684\u5927\u5c0f\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u5c31\u4f1a\u91cd\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"var"'),(0,l.kt)("td",{parentName:"tr",align:null},'["var", "var_combination", "constant"]'),(0,l.kt)("td",{parentName:"tr",align:null},"key \u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"remote_addr"'),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u505a\u8bf7\u6c42\u8ba1\u6570\u7684\u4f9d\u636e\u3002\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' \u4e3a "constant"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u5e38\u91cf\u3002\u5982\u679c ',(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' \u4e3a "var"\uff0c\u90a3\u4e48 key \u4f1a\u88ab\u5f53\u4f5c\u53d8\u91cf\u540d\u79f0\u3002\u5982\u679c ',(0,l.kt)("inlineCode",{parentName:"td"},"key_type"),' \u4e3a "var_combination"\uff0c\u90a3\u4e48 key \u4f1a\u5f53\u4f5c\u53d8\u91cf\u7ec4\u3002\u6bd4\u5982\u5982\u679c\u8bbe\u7f6e "$remote_addr $consumer_name" \u4f5c\u4e3a key\uff0c\u90a3\u4e48\u63d2\u4ef6\u4f1a\u540c\u65f6\u53d7 remote_addr \u548c consumer_name \u4e24\u4e2a\u53d8\u91cf\u7684\u7ea6\u675f\u3002\u5982\u679c key \u7684\u503c\u4e3a\u7a7a\uff0c$remote_addr \u4f1a\u88ab\u4f5c\u4e3a\u9ed8\u8ba4 key\u3002')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_code"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"503"),(0,l.kt)("td",{parentName:"tr",align:null},"[200,...,599]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684 HTTP \u72b6\u6001\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rejected_msg"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bf7\u6c42\u8d85\u8fc7\u9608\u503c\u88ab\u62d2\u7edd\u65f6\uff0c\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},'"local"'),(0,l.kt)("td",{parentName:"tr",align:null},'["local", "redis", "redis-cluster"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u68c0\u7d22\u548c\u589e\u52a0\u9650\u5236\u7684\u901f\u7387\u9650\u5236\u7b56\u7565\u3002\u53ef\u9009\u7684\u503c\u6709\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"local"),"(\u8ba1\u6570\u5668\u88ab\u4ee5\u5185\u5b58\u65b9\u5f0f\u4fdd\u5b58\u5728\u8282\u70b9\u672c\u5730\uff0c\u9ed8\u8ba4\u9009\u9879) \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"redis"),"(\u8ba1\u6570\u5668\u4fdd\u5b58\u5728 Redis \u670d\u52a1\u8282\u70b9\u4e0a\uff0c\u4ece\u800c\u53ef\u4ee5\u8de8\u8282\u70b9\u5171\u4eab\u7ed3\u679c\uff0c\u901a\u5e38\u7528\u5b83\u6765\u5b8c\u6210\u5168\u5c40\u9650\u901f)\uff1b\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster"),"\uff0c\u8ddf redis \u529f\u80fd\u4e00\u6837\uff0c\u53ea\u662f\u4f7f\u7528 redis \u96c6\u7fa4\u65b9\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u9650\u6d41\u63d2\u4ef6\u529f\u80fd\u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\uff08\u4f8b\u5982\uff0cRedis \u8d85\u65f6\uff09\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002\u5f53\u503c\u8bbe\u7f6e\u4e3a true \u65f6\u5219\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\uff0c\u9ed8\u8ba4\u503c\u662f false\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show_limit_quota_header"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5728\u54cd\u5e94\u5934\u4e2d\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Limit")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"X-RateLimit-Remaining")," \uff08\u9650\u5236\u7684\u603b\u8bf7\u6c42\u6570\u548c\u5269\u4f59\u8fd8\u53ef\u4ee5\u53d1\u9001\u7684\u8bf7\u6c42\u6570\uff09\uff0c\u9ed8\u8ba4\u503c\u662f true\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u540c\u6837\u7684 group \u7684 Route \u5c06\u5171\u4eab\u540c\u6837\u7684\u9650\u6d41\u8ba1\u6570\u5668")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"redis")," \u5fc5\u987b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u670d\u52a1\u8282\u70b9\u7684\u5730\u5740\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_port"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"6379"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u670d\u52a1\u8282\u70b9\u7684\u7aef\u53e3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis"),"  \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster"),"  \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u670d\u52a1\u8282\u70b9\u7684\u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_database"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"redis_database >= 0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u670d\u52a1\u8282\u70b9\u4e2d\u4f7f\u7528\u7684 database\uff0c\u5e76\u4e14\u53ea\u9488\u5bf9\u975e Redis \u96c6\u7fa4\u6a21\u5f0f\uff08\u5355\u5b9e\u4f8b\u6a21\u5f0f\u6216\u8005\u63d0\u4f9b\u5355\u5165\u53e3\u7684 Redis \u516c\u6709\u4e91\u670d\u52a1\uff09\u751f\u6548\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u670d\u52a1\u8282\u70b9\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u8d85\u65f6\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_cluster_nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 policy \u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u65f6\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u96c6\u7fa4\u670d\u52a1\u8282\u70b9\u7684\u5730\u5740\u5217\u8868\uff08\u81f3\u5c11\u9700\u8981\u4e24\u4e2a\u5730\u5740\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redis_cluster_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 policy \u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u65f6\u5fc5\u586b"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"redis-cluster")," \u9650\u901f\u7b56\u7565\u65f6\uff0c\u8be5\u5c5e\u6027\u662f Redis \u96c6\u7fa4\u670d\u52a1\u8282\u70b9\u7684\u540d\u79f0\u3002")))),(0,l.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,l.kt)("h3",{id:"\u5f00\u542f\u63d2\u4ef6"},"\u5f00\u542f\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u4e0a\u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit count")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"route")," \u4e0a\u5f00\u542f\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit count")," \u63d2\u4ef6\uff0c\u5e76\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"var_combination"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key_type": "var_combination",\n            "key": "$consumer_name $remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:9001": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 web \u754c\u9762\u6765\u5b8c\u6210\u4e0a\u9762\u7684\u64cd\u4f5c\uff0c\u5148\u589e\u52a0\u4e00\u4e2a route\uff0c\u7136\u540e\u5728\u63d2\u4ef6\u9875\u9762\u4e2d\u6dfb\u52a0 limit-count \u63d2\u4ef6\uff1a\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.12/docs/assets/images/plugin/limit-count-1.png",alt:"\u6dfb\u52a0\u63d2\u4ef6"})),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u652f\u6301\u5728\u591a\u4e2a Route \u95f4\u5171\u4eab\u540c\u4e00\u4e2a\u9650\u6d41\u8ba1\u6570\u5668\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "group": "services_1#1640140620"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u6bcf\u4e2a\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"services_1#1640140620")," \u7684 Route \u90fd\u5c06\u5171\u4eab\u540c\u4e00\u4e2a\u6bcf\u4e2a IP \u5730\u5740\u6bcf\u5206\u949f\u53ea\u80fd\u8bbf\u95ee\u4e00\u6b21\u7684\u8ba1\u6570\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello"\n}\'\n\n$ curl -i http://127.0.0.1:9080/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "service_id": "1",\n    "uri": "/hello2"\n}\'\n\n$ curl -i http://127.0.0.1:9080/hello\nHTTP/1.1 200 ...\n\n$ curl -i http://127.0.0.1:9080/hello2\nHTTP/1.1 503 ...\n')),(0,l.kt)("p",null,"\u6ce8\u610f\u540c\u4e00\u4e2a group \u91cc\u9762\u7684 limit-count \u914d\u7f6e\u5fc5\u987b\u4e00\u6837\u3002\n\u6240\u4ee5\uff0c\u4e00\u65e6\u4fee\u6539\u4e86\u914d\u7f6e\uff0c\u6211\u4eec\u9700\u8981\u66f4\u65b0\u5bf9\u5e94\u7684 group \u7684\u503c\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u652f\u6301\u5728\u6240\u6709\u8bf7\u6c42\u95f4\u5171\u4eab\u540c\u4e00\u4e2a\u9650\u6d41\u8ba1\u6570\u5668\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/services/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 1,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "key_type": "constant",\n            "group": "services_1#1640140621"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"constant"),"\u3002\n\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"key_type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"constant"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"key")," \u7684\u503c\u5c06\u4f1a\u76f4\u63a5\u4f5c\u4e3a\u5e38\u91cf\u6765\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u6bcf\u4e2a\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"group")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"services_1#1640140620")," \u7684 Route \u4e0a\u7684\u6240\u6709\u8bf7\u6c42\uff0c\u90fd\u5c06\u5171\u4eab\u540c\u4e00\u4e2a\u6bcf\u5206\u949f\u53ea\u80fd\u8bbf\u95ee\u4e00\u6b21\u7684\u8ba1\u6570\u5668\uff0c\u5373\u4f7f\u5b83\u4eec\u6765\u81ea\u4e0d\u540c\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u4e00\u4e2a\u96c6\u7fa4\u7ea7\u522b\u7684\u6d41\u91cf\u63a7\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u501f\u52a9 redis server \u6765\u5b8c\u6210\u3002\u4e0d\u540c\u7684 APISIX \u8282\u70b9\u4e4b\u95f4\u5c06\u5171\u4eab\u6d41\u91cf\u9650\u901f\u7ed3\u679c\uff0c\u5b9e\u73b0\u96c6\u7fa4\u6d41\u91cf\u9650\u901f\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u542f\u7528\u5355 redis \u7b56\u7565\uff0c\u8bf7\u770b\u4e0b\u9762\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis",\n            "redis_host": "127.0.0.1",\n            "redis_port": 6379,\n            "redis_password": "password",\n            "redis_database": 1,\n            "redis_timeout": 1001\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"redis-cluster")," \u7b56\u7565:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr",\n            "policy": "redis-cluster",\n            "redis_cluster_nodes": [\n                "127.0.0.1:5000",\n                "127.0.0.1:5001"\n            ],\n            "redis_password": "password",\n            "redis_cluster_name": "redis-cluster-1"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4e0a\u8ff0\u914d\u7f6e\u9650\u5236\u4e86 60 \u79d2\u5185\u53ea\u80fd\u8bbf\u95ee 2 \u6b21\uff0c\u524d\u4e24\u6b21\u8bbf\u95ee\u90fd\u4f1a\u6b63\u5e38\u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,l.kt)("p",null,"\u54cd\u5e94\u5934\u91cc\u9762\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Limit")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining"),"\uff0c\u4ed6\u4eec\u7684\u542b\u4e49\u5206\u522b\u662f\u9650\u5236\u7684\u603b\u8bf7\u6c42\u6570\u548c\u5269\u4f59\u8fd8\u53ef\u4ee5\u53d1\u9001\u7684\u8bf7\u6c42\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\nConnection: keep-alive\nX-RateLimit-Limit: 2\nX-RateLimit-Remaining: 0\nServer: APISIX web server\n")),(0,l.kt)("p",null,"\u5f53\u4f60\u7b2c\u4e09\u6b21\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u6536\u5230\u5305\u542b 503 \u8fd4\u56de\u7801\u7684\u54cd\u5e94\u5934\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n<html>\n<head><title>503 Service Temporarily Unavailable</title></head>\n<body>\n<center><h1>503 Service Temporarily Unavailable</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u679c\u4f60\u8bbe\u7f6e\u4e86\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"rejected_msg")," \u7684\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},'"Requests are too frequent, please try again later."')," \uff0c\u5f53\u4f60\u7b2c\u4e09\u6b21\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u6536\u5230\u5982\u4e0b\u7684\u54cd\u5e94\u4f53\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 503 Service Temporarily Unavailable\nContent-Type: text/html\nContent-Length: 194\nConnection: keep-alive\nServer: APISIX web server\n\n{"error_msg":"Requests are too frequent, please try again later."}\n')),(0,l.kt)("p",null,"\u8fd9\u5c31\u8868\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"limit count")," \u63d2\u4ef6\u751f\u6548\u4e86\u3002"),(0,l.kt)("h2",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit count")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"limit count")," \u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);