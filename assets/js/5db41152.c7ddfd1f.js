"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63940],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38772:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const i=t.p+"assets/images/custom-menu-5864870af8570eafa48286d309246701.gif",a=(t.p,t.p,{id:"mui-custom-sider",title:"Sider",swizzle:!0}),s=void 0,l={unversionedId:"api-reference/mui/customization/mui-custom-sider",id:"api-reference/mui/customization/mui-custom-sider",title:"Sider",description:"You can access the logout, dashboard, items elements and collapsed state that we use in our default Sider component by using render properties. Customize it to your needs or you can create a custom ` component and use it either by passing it to ` or using a Custom Layout.",source:"@site/docs/api-reference/mui/customization/sider.md",sourceDirName:"api-reference/mui/customization",slug:"/api-reference/mui/customization/mui-custom-sider",permalink:"/docs/api-reference/mui/customization/mui-custom-sider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/customization/sider.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669812736,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{id:"mui-custom-sider",title:"Sider",swizzle:!0},sidebar:"someSidebar",previous:{title:"Layout",permalink:"/docs/api-reference/mui/customization/mui-custom-layout"},next:{title:"Packages",permalink:"/docs/packages"}},p={},d=[{value:"Customize Sider by Using <code>render</code> property",id:"customize-sider-by-using-render-property",level:2},{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," elements and ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state that we use in our default ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"render")," properties. Customize it to your needs or you can create a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"<Sider />")," component and use it either by passing it to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine />"))," or using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/customization/mui-custom-layout"},"Custom Layout"),"."),(0,r.kt)("h2",{id:"customize-sider-by-using-render-property"},"Customize Sider by Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"render")," property"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Box, ListItemText, Sider } from "@pankod/refine-mui";\n\nconst PostList: React.FC = () => {\n    return <div>PostList Page</div>;\n};\n\nconst App: React.FC = () => {\n    const API_URL = "https://api.fake-rest.refine.dev";\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n            Sider={Sider}\n            Layout={({ children, Sider, Header, Footer, OffLayoutArea }) => (\n                <Box display="flex" flexDirection="row">\n                    // highlight-start\n                    <Sider\n                        render={({ items }) => {\n                            return (\n                                <>\n                                    <ListItemText primary="Custom Element" />\n                                    {items}\n                                </>\n                            );\n                        }}\n                    />\n                    // highlight-end\n                    <Box\n                        sx={{\n                            display: "flex",\n                            flexDirection: "column",\n                            flex: 1,\n                            minHeight: "100vh",\n                        }}\n                    >\n                        {Header && <Header />}\n                        <Box\n                            component="main"\n                            sx={{\n                                p: { xs: 1, md: 2, lg: 3 },\n                                flexGrow: 1,\n                                bgcolor: (theme) =>\n                                    theme.palette.background.default,\n                            }}\n                        >\n                            {children}\n                        </Box>\n                        {Footer && <Footer />}\n                    </Box>\n                    {OffLayoutArea && <OffLayoutArea />}\n                </Box>\n            )}\n        />\n    );\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"collapsed")," state to manage the component that you want to add to your ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," component.")),(0,r.kt)("h2",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,r.kt)("p",null,"You can also customize your Sider component by creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component."),(0,r.kt)("p",null,"When you examine the code of the live-preview example below, you will see the same code that we used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"default sider")," component. You can create a customized ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomSider")," component for yourself by following this code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomSider.tsx"',title:'"src/CustomSider.tsx"'},'import React, { useState } from "react";\nimport { RefineLayoutSiderProps } from "@pankod/refine-ui-types";\nimport {\n    Box,\n    Drawer,\n    List,\n    ListItemButton,\n    ListItemIcon,\n    ListItemText,\n    Collapse,\n    Tooltip,\n    Button,\n    IconButton,\n} from "@mui/material";\nimport {\n    ListOutlined,\n    Logout,\n    ExpandLess,\n    ExpandMore,\n    ChevronLeft,\n    ChevronRight,\n    MenuRounded,\n    Dashboard,\n} from "@mui/icons-material";\nimport {\n    CanAccess,\n    ITreeMenu,\n    useIsExistAuthentication,\n    useLogout,\n    useTitle,\n    useTranslate,\n    useRouterContext,\n    useMenu,\n    useRefineContext,\n} from "@pankod/refine-core";\n\nimport { Title as DefaultTitle } from "../title";\n\nexport const Sider: React.FC<RefineLayoutSiderProps> = ({ render }) => {\n    const [collapsed, setCollapsed] = useState(false);\n    const [opened, setOpened] = useState(false);\n\n    const drawerWidth = () => {\n        if (collapsed) return 64;\n        return 200;\n    };\n\n    const t = useTranslate();\n    const { Link } = useRouterContext();\n    const { hasDashboard } = useRefineContext();\n    const translate = useTranslate();\n\n    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();\n    const isExistAuthentication = useIsExistAuthentication();\n    const { mutate: mutateLogout } = useLogout();\n    const Title = useTitle();\n\n    const [open, setOpen] = useState<{ [k: string]: any }>({});\n\n    React.useEffect(() => {\n        setOpen((previousOpen) => {\n            const previousOpenKeys: string[] = Object.keys(previousOpen);\n            const uniqueKeys = new Set([\n                ...previousOpenKeys,\n                ...defaultOpenKeys,\n            ]);\n            const uniqueKeysRecord = Object.fromEntries(\n                Array.from(uniqueKeys.values()).map((key) => [key, true]),\n            );\n            return uniqueKeysRecord;\n        });\n    }, [defaultOpenKeys]);\n\n    const RenderToTitle = Title ?? DefaultTitle;\n\n    const handleClick = (key: string) => {\n        setOpen({ ...open, [key]: !open[key] });\n    };\n\n    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {\n        return tree.map((item: ITreeMenu) => {\n            const { icon, label, route, name, children, parentName } = item;\n            const isOpen = open[route || ""] || false;\n\n            const isSelected = route === selectedKey;\n            const isNested = !(parentName === undefined);\n\n            if (children.length > 0) {\n                return (\n                    <CanAccess\n                        key={route}\n                        resource={name.toLowerCase()}\n                        action="list"\n                        params={{\n                            resource: item,\n                        }}\n                    >\n                        <div key={route}>\n                            <Tooltip\n                                title={label ?? name}\n                                placement="right"\n                                disableHoverListener={!collapsed}\n                                arrow\n                            >\n                                <ListItemButton\n                                    onClick={() => {\n                                        if (collapsed) {\n                                            setCollapsed(false);\n                                            if (!isOpen) {\n                                                handleClick(route || "");\n                                            }\n                                        } else {\n                                            handleClick(route || "");\n                                        }\n                                    }}\n                                    sx={{\n                                        pl: isNested ? 4 : 2,\n                                        justifyContent: "center",\n                                        "&.Mui-selected": {\n                                            "&:hover": {\n                                                backgroundColor: "transparent",\n                                            },\n                                            backgroundColor: "transparent",\n                                        },\n                                    }}\n                                >\n                                    <ListItemIcon\n                                        sx={{\n                                            justifyContent: "center",\n                                            minWidth: 36,\n                                            color: "primary.contrastText",\n                                        }}\n                                    >\n                                        {icon ?? <ListOutlined />}\n                                    </ListItemIcon>\n                                    <ListItemText\n                                        primary={label}\n                                        primaryTypographyProps={{\n                                            noWrap: true,\n                                            fontSize: "14px",\n                                            fontWeight: isSelected\n                                                ? "bold"\n                                                : "normal",\n                                        }}\n                                    />\n                                    {!collapsed &&\n                                        (isOpen ? (\n                                            <ExpandLess />\n                                        ) : (\n                                            <ExpandMore />\n                                        ))}\n                                </ListItemButton>\n                            </Tooltip>\n                            {!collapsed && (\n                                <Collapse\n                                    in={open[route || ""]}\n                                    timeout="auto"\n                                    unmountOnExit\n                                >\n                                    <List component="div" disablePadding>\n                                        {renderTreeView(children, selectedKey)}\n                                    </List>\n                                </Collapse>\n                            )}\n                        </div>\n                    </CanAccess>\n                );\n            }\n\n            return (\n                <CanAccess\n                    key={route}\n                    resource={name.toLowerCase()}\n                    action="list"\n                    params={{ resource: item }}\n                >\n                    <Tooltip\n                        title={label ?? name}\n                        placement="right"\n                        disableHoverListener={!collapsed}\n                        arrow\n                    >\n                        <ListItemButton\n                            component={Link}\n                            to={route}\n                            selected={isSelected}\n                            onClick={() => {\n                                setOpened(false);\n                            }}\n                            sx={{\n                                pl: isNested ? 4 : 2,\n                                py: isNested ? 1.25 : 1,\n                                "&.Mui-selected": {\n                                    "&:hover": {\n                                        backgroundColor: "transparent",\n                                    },\n                                    backgroundColor: "transparent",\n                                },\n                                justifyContent: "center",\n                            }}\n                        >\n                            <ListItemIcon\n                                sx={{\n                                    justifyContent: "center",\n                                    minWidth: 36,\n                                    color: "primary.contrastText",\n                                }}\n                            >\n                                {icon ?? <ListOutlined />}\n                            </ListItemIcon>\n                            <ListItemText\n                                primary={label}\n                                primaryTypographyProps={{\n                                    noWrap: true,\n                                    fontSize: "14px",\n                                    fontWeight: isSelected ? "bold" : "normal",\n                                }}\n                            />\n                        </ListItemButton>\n                    </Tooltip>\n                </CanAccess>\n            );\n        });\n    };\n\n    const dashboard = hasDashboard ? (\n        <CanAccess resource="dashboard" action="list">\n            <Tooltip\n                title={translate("dashboard.title", "Dashboard")}\n                placement="right"\n                disableHoverListener={!collapsed}\n                arrow\n            >\n                <ListItemButton\n                    component={Link}\n                    to="/"\n                    selected={selectedKey === "/"}\n                    onClick={() => {\n                        setOpened(false);\n                    }}\n                    sx={{\n                        pl: 2,\n                        py: 1,\n                        "&.Mui-selected": {\n                            "&:hover": {\n                                backgroundColor: "transparent",\n                            },\n                            backgroundColor: "transparent",\n                        },\n                        justifyContent: "center",\n                    }}\n                >\n                    <ListItemIcon\n                        sx={{\n                            justifyContent: "center",\n                            minWidth: 36,\n                            color: "primary.contrastText",\n                        }}\n                    >\n                        <Dashboard />\n                    </ListItemIcon>\n                    <ListItemText\n                        primary={translate("dashboard.title", "Dashboard")}\n                        primaryTypographyProps={{\n                            noWrap: true,\n                            fontSize: "14px",\n                            fontWeight: selectedKey === "/" ? "bold" : "normal",\n                        }}\n                    />\n                </ListItemButton>\n            </Tooltip>\n        </CanAccess>\n    ) : null;\n\n    const logout = isExistAuthentication && (\n        <Tooltip\n            title={t("buttons.logout", "Logout")}\n            placement="right"\n            disableHoverListener={!collapsed}\n            arrow\n        >\n            <ListItemButton\n                key="logout"\n                onClick={() => mutateLogout()}\n                sx={{ justifyContent: "center" }}\n            >\n                <ListItemIcon\n                    sx={{\n                        justifyContent: "center",\n                        minWidth: 36,\n                        color: "primary.contrastText",\n                    }}\n                >\n                    <Logout />\n                </ListItemIcon>\n                <ListItemText\n                    primary={t("buttons.logout", "Logout")}\n                    primaryTypographyProps={{\n                        noWrap: true,\n                        fontSize: "14px",\n                    }}\n                />\n            </ListItemButton>\n        </Tooltip>\n    );\n\n    const items = renderTreeView(menuItems, selectedKey);\n\n    const renderSider = () => {\n        if (render) {\n            return render({\n                dashboard,\n                logout,\n                items,\n            });\n        }\n        return (\n            <>\n                {dashboard}\n                {items}\n                {logout}\n            </>\n        );\n    };\n\n    const drawer = (\n        <List disablePadding sx={{ mt: 1, color: "primary.contrastText" }}>\n            {renderSider()}\n        </List>\n    );\n\n    return (\n        <>\n            <Box\n                sx={{\n                    width: { xs: drawerWidth() },\n                    display: {\n                        xs: "none",\n                        md: "block",\n                    },\n                    transition: "width 0.3s ease",\n                }}\n            />\n            <Box\n                component="nav"\n                sx={{\n                    position: "fixed",\n                    zIndex: 1101,\n                    width: { sm: drawerWidth() },\n                    display: "flex",\n                }}\n            >\n                <Drawer\n                    variant="temporary"\n                    open={opened}\n                    onClose={() => setOpened(false)}\n                    ModalProps={{\n                        keepMounted: true, // Better open performance on mobile.\n                    }}\n                    sx={{\n                        display: { sm: "block", md: "none" },\n                        "& .MuiDrawer-paper": {\n                            width: 256,\n                            bgcolor: "secondary.main",\n                        },\n                    }}\n                >\n                    <Box\n                        sx={{\n                            height: 64,\n                            display: "flex",\n                            alignItems: "center",\n                            justifyContent: "center",\n                        }}\n                    >\n                        <RenderToTitle collapsed={false} />\n                    </Box>\n                    {drawer}\n                </Drawer>\n                <Drawer\n                    variant="permanent"\n                    PaperProps={{ elevation: 1 }}\n                    sx={{\n                        display: { xs: "none", md: "block" },\n                        "& .MuiDrawer-paper": {\n                            width: drawerWidth,\n                            bgcolor: "secondary.main",\n                            overflow: "hidden",\n                            transition:\n                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",\n                        },\n                    }}\n                    open\n                >\n                    <Box\n                        sx={{\n                            height: 64,\n                            display: "flex",\n                            alignItems: "center",\n                            justifyContent: "center",\n                        }}\n                    >\n                        <RenderToTitle collapsed={collapsed} />\n                    </Box>\n                    <Box\n                        sx={{\n                            flexGrow: 1,\n                            overflowX: "hidden",\n                            overflowY: "auto",\n                        }}\n                    >\n                        {drawer}\n                    </Box>\n                    <Button\n                        sx={{\n                            background: "rgba(0,0,0,.5)",\n                            color: "primary.contrastText",\n                            textAlign: "center",\n                            borderRadius: 0,\n                            borderTop: "1px solid #ffffff1a",\n                        }}\n                        fullWidth\n                        size="large"\n                        onClick={() => setCollapsed((prev) => !prev)}\n                    >\n                        {collapsed ? <ChevronRight /> : <ChevronLeft />}\n                    </Button>\n                </Drawer>\n                <Box\n                    sx={{\n                        display: { xs: "block", md: "none" },\n                        position: "fixed",\n                        top: "64px",\n                        left: "0px",\n                        borderRadius: "0 6px 6px 0",\n                        bgcolor: "secondary.main",\n                        zIndex: 1199,\n                        width: "36px",\n                    }}\n                >\n                    <IconButton\n                        sx={{ color: "#fff", width: "36px" }}\n                        onClick={() => setOpened((prev) => !prev)}\n                    >\n                        <MenuRounded />\n                    </IconButton>\n                </Box>\n            </Box>\n        </>\n    );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We create a recursive ",(0,r.kt)("inlineCode",{parentName:"p"},"renderTreeView")," function to create menu items from the list of resources passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),". We get the ",(0,r.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to create a multi-level menu, you can take a look at this ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"multi-level menu"))," example and also ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced-tutorials/multi-level-menu/"},(0,r.kt)("inlineCode",{parentName:"a"},"here"))," is the guide.")),(0,r.kt)("p",null,"We can override the default sider and show the custom menu we implemented in its place by passing a custom component to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,r.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomMenu } from "./CustomMenu";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n            // highlight-next-line\n            Sider={CustomMenu}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,r.kt)("div",{classname:"img-container"},(0,r.kt)("div",{classname:"window"},(0,r.kt)("div",{classname:"control red"}),(0,r.kt)("div",{classname:"control orange"}),(0,r.kt)("div",{classname:"control green"})),(0,r.kt)("img",{src:i,alt:"Custom Menu"})))}u.isMDXComponent=!0}}]);