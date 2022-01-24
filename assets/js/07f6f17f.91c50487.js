"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45597],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l={title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",author:"Garry Chen",authorURL:"https://github.com/neaped",authorImageURL:"https://avatars.githubusercontent.com/u/3713305?v=4",keywords:["Kubernetes","Apache APISIX Ingress","Nocalhost","Controller","Development"],description:"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use IDE to develop and debug Apache APISIX Ingress Controller. Giving you the ability to comfortably develop and debug your remote apps with your existing skills.",tags:["Technology","Kubernetes"]},i=void 0,s={permalink:"/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes",source:"@site/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes.md",title:"Developing APISIX Ingress Controller with Nocalhost in Kubernetes",description:"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use IDE to develop and debug Apache APISIX Ingress Controller. Giving you the ability to comfortably develop and debug your remote apps with your existing skills.",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"Technology",permalink:"/blog/tags/technology"},{label:"Kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4,truncated:!0,authors:[{name:"Garry Chen",url:"https://github.com/neaped",imageURL:"https://avatars.githubusercontent.com/u/3713305?v=4"}],prevItem:{title:"Apache APISIX Path traversal in request_uri variable(CVE-2021-43557)",permalink:"/blog/2021/11/23/cve-2021-43557"},nextItem:{title:"Apache APISIX embraces the WASM ecosystem",permalink:"/blog/2021/11/19/apisix-supports-wasm"}},p={authorsImageUrls:[void 0]},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy Apache APISIX Ingress Controller",id:"deploy-apache-apisix-ingress-controller",children:[]},{value:"Developing",id:"developing",children:[{value:"Step 1: Start DevMode",id:"step-1-start-devmode",children:[]},{value:"Step 2: Change code and check result",id:"step-2-change-code-and-check-result",children:[]},{value:"Step 3. End DevMode",id:"step-3-end-devmode",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Step 1: Start remote debugging",id:"step-1-start-remote-debugging",children:[]},{value:"Step 2: Step through breakpoints",id:"step-2-step-through-breakpoints",children:[]}]},{value:"Remote Run",id:"remote-run",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article walks you through using Nocalhost to seamlessly connect your local development machine to a remote Kubernetes cluster, allowing you to use IDE to develop and debug Apache APISIX Ingress Controller. Giving you the ability to comfortably develop and debug your remote apps with your existing skills.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation. You can use any Kubernetes clusters that you have namespace admin privilege."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm v3.0+")," installed"),(0,r.kt)("li",{parentName:"ul"},"GoLand IDE 2020.03+ (Use GoLand 2021.2 in this article)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nocalhost.dev/docs/installation#install-jetbrains-plugin"},"Install Nocalhost JetBrains plugin")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"Go 1.13")," or later")),(0,r.kt)("h2",{id:"deploy-apache-apisix-ingress-controller"},"Deploy Apache APISIX Ingress Controller"),(0,r.kt)("p",null,"I'm going to deploy Apache APISIX Ingress Controller by Nocalhost within GoLand:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Nocalhost plugin within GoLand")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the cluster inspector to select the namespace that you want to deploy.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right-click the selected namespace, choose ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deploy Application")),", and select ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Helm Repo"))," as installation method.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the following dialog box, input:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"https://charts.apiseven.com")," as ",(0,r.kt)("inlineCode",{parentName:"li"},"Chart URL"))))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637131316244-f1a58c88-8628-4918-a4c4-1ad287742fd0.gif",alt:"Deploy APISIX ingress controller"})),(0,r.kt)("p",null,"Let's test the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," after deployment by enable the port-forwarding within IDE:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," workload in the cluster inspector, right-click and select the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Port Forward"))),(0,r.kt)("li",{parentName:"ol"},"Add the port-forwarding ",(0,r.kt)("inlineCode",{parentName:"li"},"8080:8080")),(0,r.kt)("li",{parentName:"ol"},"Visiting the ",(0,r.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in local and check the result")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637131450462-842c3baf-b7a4-4598-be0b-27486bf1cf28.gif",alt:"APISIX Ingress test"})),(0,r.kt)("h2",{id:"developing"},"Developing"),(0,r.kt)("h3",{id:"step-1-start-devmode"},"Step 1: Start DevMode"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click the deployment ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Start DevMode"))),(0,r.kt)("li",{parentName:"ol"},"Choose your source code directory if you have already cloned in local, or let Nocalhost clone the source code for you by entering the ",(0,r.kt)("strong",{parentName:"li"},"apache/apisix-ingress-controller")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller.git"},"repository URL")),(0,r.kt)("li",{parentName:"ol"},"Wait for the operations, Nocalhost will open the remote terminal within IDE after entering DevMode")),(0,r.kt)("p",null,"Now start the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," process by entering the following command in the remote terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go ingress --config-path conf/config-default.yaml\n")),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," has started, access the service by visiting ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," on local and check the result."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637131513751-b9184c10-4da3-4ab2-b403-56ae2360704a.gif",alt:"Enter DevMode"})),(0,r.kt)("h3",{id:"step-2-change-code-and-check-result"},"Step 2: Change code and check result"),(0,r.kt)("p",null,"Now I will make some code changes and check the result."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," process"),(0,r.kt)("li",{parentName:"ol"},"Search ",(0,r.kt)("inlineCode",{parentName:"li"},"healthz")," and find the ",(0,r.kt)("inlineCode",{parentName:"li"},"router.go")," file. Change the ",(0,r.kt)("inlineCode",{parentName:"li"},"healthzResponse")," status code from ",(0,r.kt)("inlineCode",{parentName:"li"},"ok")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello Nocalhost")),(0,r.kt)("li",{parentName:"ol"},"Start the process again and check the change result in local")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637131699629-a0766f66-0faa-4bf8-9013-284e5f2bdd57.gif",alt:"Code change"})),(0,r.kt)("h3",{id:"step-3-end-devmode"},"Step 3. End DevMode"),(0,r.kt)("p",null,"Now close the development window and end DevMode."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in the cluster inspector"),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"End DevMode")))),(0,r.kt)("p",null,"Nocalhost will make ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," end development mode, and reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller")," Pod to its original version. Enable the port-forwarding and check the result after ending DevMode."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637131766524-dba7b756-ae0b-42d1-8ff0-6ac14059ce11.gif",alt:"End DevMode"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code Change"),": All code changes in development mode will ",(0,r.kt)("strong",{parentName:"p"},"only take effect")," in the development container."),(0,r.kt)("p",null,"After exiting the development mode, Nocalhost will reset the remote container to its original state (before the code is modified). In this way, after exiting the development mode, the modification of the code will ",(0,r.kt)("strong",{parentName:"p"},"not")," cause any changes or impact on the original environment."),(0,r.kt)("h2",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"Debugging an application is not easy, and debugging an application in the Kubernetes cluster is even more difficult. Nocalhost is here to help by providing the same debugging experience you're used in the IDE when debugging in the remote Kubernetes cluster."),(0,r.kt)("h3",{id:"step-1-start-remote-debugging"},"Step 1: Start remote debugging"),(0,r.kt)("p",null,"We can start remote debugging by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," and choose ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remote Debug"))),(0,r.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into DevMode and run debug command defined in ",(0,r.kt)("a",{parentName:"li",href:"https://nocalhost.dev/zh-CN/docs/config/config-develop"},(0,r.kt)("inlineCode",{parentName:"a"},"dev config"))," automatically")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637132327260-7bba1d81-cf70-4982-9a07-51cc379e6bea.gif",alt:"Start remote debugging"})),(0,r.kt)("h3",{id:"step-2-step-through-breakpoints"},"Step 2: Step through breakpoints"),(0,r.kt)("p",null,"Now set a breakpoint on the ",(0,r.kt)("inlineCode",{parentName:"p"},"healthz")," function. Hover over just to the left of the line number and click on the red dot. Once it\u2019s set, visit ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/healthz"},(0,r.kt)("inlineCode",{parentName:"a"},"http://127.0.0.1:8080/healthz"))," in your local browser, GoLand should pop to the foreground. Click the play button to close the request and the progress should continue loading."),(0,r.kt)("p",null,"In addition, as I enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev.hotReload"),", so every time you make the code change, Nocalhost will automatically re-run the debug command. This is very useful when you make the code change and debug frequently."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637132455552-86f44c0c-94d1-4ad9-a79d-0e2c6957d60b.gif",alt:"Setting up breakpoints and run service"})),(0,r.kt)("h2",{id:"remote-run"},"Remote Run"),(0,r.kt)("p",null,"Not just remote debugging, Nocalhost also provides an easy way to run your Go service in the Kubernetes cluster, plus hot reload!"),(0,r.kt)("p",null,"You can using the remote run feature by:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," in cluster inspector, choose ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remote Run"))),(0,r.kt)("li",{parentName:"ol"},"Nocalhost will put ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller")," into development mode and and run start command defined in ",(0,r.kt)("a",{parentName:"li",href:"https://nocalhost.dev/zh-CN/docs/config/config-develop"},(0,r.kt)("inlineCode",{parentName:"a"},"dev config"))," automatically")),(0,r.kt)("p",null,"Now every time you make code changes, Nocalhost will automatically trigger the run command. You can now enjoy the hot reload for Go without complex configuration."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1637133046432-84810667-c3ee-4d71-8a33-eb1833fd9ce2.gif",alt:"Remote run"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We\u2019ve learned how to use Nocalhost to develop and debug the APISIX Ingress Controller in Kubernetes. Now, instead of waiting for slow local development processes, we can iterate quickly with an instant feedback loop and a productive cloud-native development environment."))}u.isMDXComponent=!0}}]);