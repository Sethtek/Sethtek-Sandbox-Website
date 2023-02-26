"use strict";(self.webpackChunksethtek_sandbox_website=self.webpackChunksethtek_sandbox_website||[]).push([[929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6914:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},s="Manage Docs Versions",i={unversionedId:"docusaurus-tutorials/tutorial-extras/manage-docs-versions",id:"docusaurus-tutorials/tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/docusaurus-tutorials/tutorial-extras/manage-docs-versions.md",sourceDirName:"docusaurus-tutorials/tutorial-extras",slug:"/docusaurus-tutorials/tutorial-extras/manage-docs-versions",permalink:"/docs/docusaurus-tutorials/tutorial-extras/manage-docs-versions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docusaurus-tutorials/tutorial-extras/manage-docs-versions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"Translate your site",permalink:"/docs/docusaurus-tutorials/tutorial-extras/translate-your-site"}},l={},u=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,o.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,o.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,o.kt)("p",null,"Release a version 1.0 of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.kt)("p",null,"Your docs now have 2 versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,o.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,o.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,o.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,o.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:r(386).Z,width:"370",height:"302"})),(0,o.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}p.isMDXComponent=!0},386:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);