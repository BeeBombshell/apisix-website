"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11684],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,h=d["".concat(u,".").concat(g)]||d[g]||c[g]||a;return t?r.createElement(h,l(l({ref:n},s),{},{components:t})):r.createElement(h,l({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61227:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l={title:"External Plugin"},o=void 0,u={unversionedId:"external-plugin",id:"version-2.9/external-plugin",isDocsHomePage:!1,title:"External Plugin",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.9/external-plugin.md",sourceDirName:".",slug:"/external-plugin",permalink:"/docs/apisix/2.9/external-plugin",editUrl:"https://github.com/apache/apisix/edit/release/2.9/docs/en/latest/external-plugin.md",tags:[],version:"2.9",frontMatter:{title:"External Plugin"},sidebar:"version-2.9/docs",previous:{title:"Plugin Develop",permalink:"/docs/apisix/2.9/plugin-develop"},next:{title:"Plugin interceptors",permalink:"/docs/apisix/2.9/plugin-interceptors"}},p=[{value:"What are external plugin and plugin runner",id:"what-are-external-plugin-and-plugin-runner",children:[]},{value:"How does it work",id:"how-does-it-work",children:[]},{value:"Supported plugin runners",id:"supported-plugin-runners",children:[]},{value:"Configuration for plugin runner in APISIX",id:"configuration-for-plugin-runner-in-apisix",children:[]},{value:"FAQ",id:"faq",children:[{value:"When managing by APISIX, the runner can&#39;t access my environment variable",id:"when-managing-by-apisix-the-runner-cant-access-my-environment-variable",children:[]},{value:"APISIX terminates my runner with SIGKILL but not SIGTERM!",id:"apisix-terminates-my-runner-with-sigkill-but-not-sigterm",children:[]}]}],s={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-are-external-plugin-and-plugin-runner"},"What are external plugin and plugin runner"),(0,a.kt)("p",null,"APISIX supports writing plugins in Lua. This type of plugins will be executed\ninside APISIX. Sometimes you want to develop plugin in other languages, so APISIX\nprovides sidecars that loading your plugins and run them when the requests hit\nAPISIX. These sidecars are called plugin runners and your plugins are called\nexternal plugins."),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.9/docs/assets/images/external-plugin.png",alt:"external-plugin"})),(0,a.kt)("p",null,"When you configure a plugin runner in APISIX, APISIX will run the plugin runner\nas a subprocess. The process will belong to the same user of the APISIX\nprocess. When we restart or reload APISIX, the plugin runner will be restarted too."),(0,a.kt)("p",null,"Once you have configured ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-*")," plugins for a given route, the requests\nwhich hit the route will trigger RPC call from APISIX to the plugin runner via\nunix socket."),(0,a.kt)("p",null,"The plugin runner will handle the RPC call, create a fake request at its side,\nrun external plugins and return the result back to APISIX."),(0,a.kt)("p",null,"The target external plugins and the execution order are configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-*"),"\nplugins. Like other plugins, they can be enabled and reconfigured on the fly."),(0,a.kt)("h2",{id:"supported-plugin-runners"},"Supported plugin runners"),(0,a.kt)("p",null,"Java: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-java-plugin-runner"},"https://github.com/apache/apisix-java-plugin-runner"),"\nGo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-go-plugin-runner"},"https://github.com/apache/apisix-go-plugin-runner")),(0,a.kt)("h2",{id:"configuration-for-plugin-runner-in-apisix"},"Configuration for plugin runner in APISIX"),(0,a.kt)("p",null,"To run plugin runner in the prod, add the section below to ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ext-plugin:\n  cmd: ["blah"] # replace it to the real runner executable according to the runner you choice\n')),(0,a.kt)("p",null,"Then APISIX will manage the runner as its subprocess."),(0,a.kt)("p",null,"Note: APISIX can't manage the runner on the Mac in ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6"),"."),(0,a.kt)("p",null,"During development, we want to run the runner separately so that we can restart it without\nrestarting APISIX first."),(0,a.kt)("p",null,"By specifying the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"APISIX_LISTEN_ADDRESS"),", we can force the runner to\nlisten to a fixed address.\nFor instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"APISIX_LISTEN_ADDRESS=unix:/tmp/x.sock ./the_runner\n")),(0,a.kt)("p",null,"will force the runner to listen to ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/x.sock"),"."),(0,a.kt)("p",null,"Then you need to configure APISIX to send RPC to the fixed address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'ext-plugin:\n  # cmd: ["blah"] # don\'t configure the executable!\n  path_for_test: "/tmp/x.sock" # without \'unix:\' prefix\n')),(0,a.kt)("p",null,"In the prod environment, ",(0,a.kt)("inlineCode",{parentName:"p"},"path_for_test")," should not be used and the unix socket\npath will be generated dynamically."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"when-managing-by-apisix-the-runner-cant-access-my-environment-variable"},"When managing by APISIX, the runner can't access my environment variable"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.7"),", APISIX can pass environment to the runner."),(0,a.kt)("p",null,"However, Nginx will hide all environment variables by default. So you need to\ndeclare your variable first in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  envs:\n    - MY_ENV_VAR\n")),(0,a.kt)("h3",{id:"apisix-terminates-my-runner-with-sigkill-but-not-sigterm"},"APISIX terminates my runner with SIGKILL but not SIGTERM!"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.7"),", APISIX will stop the runner with SIGTERM when it is running on\nOpenResty 1.19+."),(0,a.kt)("p",null,"However, APISIX needs to wait the runner to quit so that we can ensure the resource\nfor the process group is freed."),(0,a.kt)("p",null,"Therefore, we send SIGTERM first. And then after 1 second, if the runner is still\nrunning, we will send SIGKILL."))}c.isMDXComponent=!0}}]);