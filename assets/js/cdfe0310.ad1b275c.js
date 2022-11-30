"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),a=n(96193);const i={id:"boolean",title:"Boolean",swizzle:!0},l=void 0,s={unversionedId:"api-reference/antd/components/fields/boolean",id:"api-reference/antd/components/fields/boolean",title:"Boolean",description:"This field is used to display boolean values. It uses the `` values from Ant Design.",source:"@site/docs/api-reference/antd/components/fields/boolean.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/boolean",permalink:"/docs/api-reference/antd/components/fields/boolean",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/fields/boolean.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669812736,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{id:"boolean",title:"Boolean",swizzle:!0},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/antd/components/buttons/show-button"},next:{title:"Date",permalink:"/docs/api-reference/antd/components/fields/date"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const f={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This field is used to display boolean values. It uses the ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/tooltip/#header"},(0,r.kt)("inlineCode",{parentName:"a"},"<Tooltip>"))," values from Ant Design."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Let's see how we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"<BooleanField>")," with the example in the post list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    // highlight-start\n    BooleanField,\n    Icons\n    // highlight-end\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { CloseCircleOutlined, CheckCircleOutlined } = Icons;\n\n    return (\n        <List>\n            <Table rowKey="id">\n                ...\n                <Table.Column\n                    dataIndex="status"\n                    title="Published"\n                    render={(value) => (\n                        // highlight-start\n                        <BooleanField\n                            value={value === "published"}\n                            trueIcon={<CheckCircleOutlined />}\n                            falseIcon={<CloseCircleOutlined />}\n                            valueLabelTrue="published"\n                            valueLabelFalse="unpublished"\n                        />\n                        // highlight-end\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,r.kt)("br",null),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:a.Z,alt:"BooleanField"})),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(d,{module:"@pankod/refine-antd/BooleanField","title-description":"The text shown in the tooltip","title-default":"`value` ? `valueLabelTrue` : `valueLabelFalse`","trueIcon-default":"[`<CheckOutlined />`](https://ant.design/components/icon/)","falseIcon-default":"[`<CloseOutlined />`](https://ant.design/components/icon/)",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/tooltip/#API"},"Tooltip"),".")))}m.isMDXComponent=!0},96193:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/booleanfield-9251dcad2775a42bcc8448ad723c9128.png"}}]);