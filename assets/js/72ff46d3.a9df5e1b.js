"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68077],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,v=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9645:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s={title:"DNS"},a=void 0,c={unversionedId:"discovery/dns",id:"discovery/dns",isDocsHomePage:!1,title:"DNS",description:"\x3c!--",source:"@site/docs/apisix/discovery/dns.md",sourceDirName:"discovery",slug:"/discovery/dns",permalink:"/docs/apisix/next/discovery/dns",editUrl:"https://github.com/apache/apisix/edit/master/docs/en/latest/discovery/dns.md",tags:[],version:"current",frontMatter:{title:"DNS"},sidebar:"docs",previous:{title:"Integration service discovery registry",permalink:"/docs/apisix/next/discovery"},next:{title:"consul_kv",permalink:"/docs/apisix/next/discovery/consul_kv"}},l=[{value:"service discovery via DNS",id:"service-discovery-via-dns",children:[{value:"SRV record",id:"srv-record",children:[]}]}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#srv-record"},"SRV record"))))),(0,i.kt)("h2",{id:"service-discovery-via-dns"},"service discovery via DNS"),(0,i.kt)("p",null,"Some service discovery system, like Consul, support exposing service information\nvia DNS. Therefore we can use this way to discover service directly."),(0,i.kt)("p",null,"First of all, we need to configure the address of DNS servers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'# add this to config.yaml\ndiscovery:\n   dns:\n     servers:\n       - "127.0.0.1:8600"          # use the real address of your dns server\n')),(0,i.kt)("p",null,"Unlike configuring the domain in the Upstream's ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," field, service discovery via\nDNS will return all records. For example, with upstream configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"and ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," be resolved as ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.2"),", this result will be the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "weight": 1},\n        {"host": "1.1.1.2", "weight": 1}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that all the IPs from ",(0,i.kt)("inlineCode",{parentName:"p"},"test.consul.service")," share the same weight."),(0,i.kt)("p",null,"The resolved records will be cached according to their TTL.\nFor service whose record is not in the cache, we will query it in the order of ",(0,i.kt)("inlineCode",{parentName:"p"},"SRV -> A -> AAAA -> CNAME"),".\nWhen we refresh the cache record, we will try from the last previously successful type."),(0,i.kt)("p",null,"If you want to specify the port for the upstream server, you can add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "test.consul.service:1980",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"Another way to do it is via the SRV record, see below."),(0,i.kt)("h3",{id:"srv-record"},"SRV record"),(0,i.kt)("p",null,"By using SRV record you can specify the port and the weight of a service."),(0,i.kt)("p",null,"Assumed you have the SRV record like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"; under the section of blah.service\nA       300 IN      A     1.1.1.1\nB       300 IN      A     1.1.1.2\nB       300 IN      A     1.1.1.3\n\n; name  TTL         type    priority    weight  port\nsrv     86400 IN    SRV     10          60      1980 A\nsrv     86400 IN    SRV     20          20      1981 B\n")),(0,i.kt)("p",null,"Upstream configuration like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "discovery_type": "dns",\n    "service_name": "srv.blah.service",\n    "type": "roundrobin"\n}\n')),(0,i.kt)("p",null,"is the same as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "type": "roundrobin",\n    "nodes": [\n        {"host": "1.1.1.1", "port": 1980, "weight": 60, "priority": -10},\n        {"host": "1.1.1.2", "port": 1981, "weight": 10, "priority": -20},\n        {"host": "1.1.1.3", "port": 1981, "weight": 10, "priority": -20}\n    ]\n}\n')),(0,i.kt)("p",null,"Note that two records of domain B split the weight evenly.\nFor SRV record, nodes with lower priority are chosen first, so the final priority is negative."),(0,i.kt)("p",null,"As for 0 weight SRV record, the ",(0,i.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc2782.txt"},"RFC 2782")," says:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Domain administrators SHOULD use Weight 0 when there isn't any server\nselection to do, to make the RR easier to read for humans (less\nnoisy).  In the presence of records containing weights greater\nthan 0, records with weight 0 should have a very small chance of\nbeing selected.")),(0,i.kt)("p",null,'We treat weight 0 record has a weight of 1 so the node "have a very small chance of\nbeing selected", which is also the common way to treat this type of record.'))}d.isMDXComponent=!0}}]);