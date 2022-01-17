import {
    API,
    JSCodeshift,
    Collection,
    FileInfo,
    ImportSpecifier,
    JSXExpressionContainer,
    ObjectExpression,
    ObjectProperty,
    Identifier,
} from "jscodeshift";
import fs from "fs";
import path from "path";
import { install, remove } from "../helpers";
import checkPackageLock from "../helpers/checkPackageLock";

export const parser = "tsx";

const availableRefineAntdImports = [
    "Authenticated",
    "AuthenticatedProps",
    "CanAccess",
    "CanAccessProps",
    "Refine",
    "RefineProps",
    "LayoutWrapperProps",
    "LayoutWrapper",
    "DefaultLayout",
    "RouteChangeHandler",
    "UndoableQueue",
    "defaultAccessControlContext",
    "AccessControlContext",
    "AccessControlContextProvider",
    "CanParams",
    "CanReturnType",
    "IAccessControlContext",
    "TLogoutVariables",
    "TLogoutData",
    "IAuthContext",
    "Pagination",
    "Search",
    "CrudOperators",
    "CrudFilter",
    "CrudSort",
    "CrudFilters",
    "CrudSorting",
    "CustomResponse",
    "GetListResponse",
    "CreateResponse",
    "CreateManyResponse",
    "UpdateResponse",
    "UpdateManyResponse",
    "GetOneResponse",
    "GetManyResponse",
    "DeleteOneResponse",
    "DeleteManyResponse",
    "IDataContext",
    "IDataContextProvider",
    "defaultDataProvider",
    "DataContext",
    "DataContextProvider",
    "ILiveContext",
    "ILiveContextProvider",
    "LiveContext",
    "LiveContextProvider",
    "defaultNotificationProvider",
    "NotificationContext",
    "NotificationContextProvider",
    "RefineContext",
    "RefineContextProvider",
    "ResourceContext",
    "ResourceContextProvider",
    "IResourceContext",
    "OptionsProps",
    "ResourceProps",
    "IResourceComponentsProps",
    "IResourceComponents",
    "IResourceItem",
    "RouterContext",
    "RouterContextProvider",
    "IRouterProvider",
    "IRouterContext",
    "PromptProps",
    "TranslationContext",
    "TranslationContextProvider",
    "Translate",
    "I18nProvider",
    "ITranslationContext",
    "UnsavedWarnContext",
    "UnsavedWarnContextProvider",
    "IUnsavedWarnContext",
    "importCSVMapper",
    "userFriendlyResourceName",
    "userFriendlySecond",
    "parseTableParams",
    "parseTableParamsFromQuery",
    "stringifyTableParams",
    "compareFilters",
    "unionFilters",
    "setInitialFilters",
    "file2Base64",
    "UseCanProps",
    "useCan",
    "useCanWithoutCache",
    "useAuthenticated",
    "useCheckError",
    "useGetIdentity",
    "useIsAuthenticated",
    "UseLoginReturnType",
    "useLogin",
    "useLogout",
    "usePermissions",
    "useIsExistAuthentication",
    "unionFilters",
    "useApiUrl",
    "UseCreateReturnType",
    "useCreate",
    "UseCreateManyReturnType",
    "useCreateMany",
    "UseCustomProps",
    "useCustom",
    "useDelete",
    "useDeleteMany",
    "UseListProps",
    "useList",
    "UseManyProps",
    "useMany",
    "UseOneProps",
    "useOne",
    "UseUpdateReturnType",
    "useUpdate",
    "useUpdateMany",
    "CSVDownloadProps",
    "LabelKeyObject",
    "useExport",
    "Authenticated",
    "CanAccess",
    "ErrorComponent",
    "LayoutWrapper",
    "LoginPage",
    "ReadyPage",
    "Refine",
    "RouteChangeHandler",
    "UndoableQueue",
    "file2Base64",
    "importCSVMapper",
    "parseTableParams",
    "parseTableParamsFromQuery",
    "setInitialFilters",
    "stringifyTableParams",
    "unionFilters",
    "useApiUrl",
    "useAuthenticated",
    "useCacheQueries",
    "useCan",
    "useCanWithoutCache",
    "useCancelNotification",
    "useCheckError",
    "useCreate",
    "useCreateMany",
    "useCustom",
    "useDelete",
    "useDeleteMany",
    "useExport",
    "useGetIdentity",
    "useGetLocale",
    "useGetManyQueries",
    "useGetOneQueries",
    "useHandleNotification",
    "useImport",
    "useIsAuthenticated",
    "useIsExistAuthentication",
    "useList",
    "useListResourceQueries",
    "useLiveMode",
    "useLogin",
    "useLogout",
    "useMany",
    "useMutationMode",
    "useNavigation",
    "useNotification",
    "useOne",
    "usePermissions",
    "usePublish",
    "useRedirectionAfterSubmission",
    "useRefineContext",
    "useResource",
    "useResourceSubscription",
    "useResourceWithRoute",
    "useRouterContext",
    "useSetLocale",
    "useShow",
    "useSubscription",
    "useSyncWithLocation",
    "useTitle",
    "useTranslate",
    "useUpdate",
    "useUpdateMany",
    "useWarnAboutChange",
    "userFriendlyResourceName",
    "AuthenticatedProps",
    "CanAccessProps",
    "RefineProps",
    "LayoutWrapperProps",
    "LiveModeProps",
    "UseResourceSubscriptionProps",
    "PublishType",
    "UseSubscriptionProps",
    "LiveEvent",
    "HistoryType",
    "UseRedirectionAfterSubmissionType",
    "UseWarnAboutChangeType",
    "UseMutationModeType",
    "useRefineContext",
    "UseSyncWithLocationType",
    "TitleProps",
    "UseResourceType",
    "useResourceWithRoute",
    "useShowReturnType",
    "useShowProps",
    "UseGetLocaleType",
    "Fields",
    "NestedField",
    "QueryBuilderOptions",
    "MetaDataQuery",
    "VariableOptions",
    "HttpError",
    "BaseRecord",
    "Option",
    "IState",
    "IAuthUserReducer",
    "IResourceReducer",
    "MapDataFn",
    "MutationMode",
    "IUndoableQueue",
    "RedirectionTypes",
    "ResourceErrorRouterParams",
    "ResourceRouterParams",
    "SuccessErrorNotification",
    "OpenNotificationParams",
];

function updateRefineImports(j: JSCodeshift, root: Collection<any>) {
    const refineCoreImports = root.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine-core",
        },
    });

    if (refineCoreImports.length === 0) {
        const coreImports: ImportSpecifier[] = [];
        const antdImports: ImportSpecifier[] = [];
        // Import refine core
        const refineImport = root.find(j.ImportDeclaration, {
            source: {
                value: "@pankod/refine",
            },
        });

        refineImport.replaceWith((path) => {
            for (const item of path.node.specifiers) {
                if (!availableRefineAntdImports.includes(item.local.name)) {
                    coreImports.push(item as ImportSpecifier);
                } else {
                    antdImports.push(item as ImportSpecifier);
                }
            }

            path.node.specifiers = path.node.specifiers.filter(
                (p) => !antdImports.includes(p as ImportSpecifier),
            );

            path.node.source.value = "@pankod/refine-core";

            return path.node;
        });

        const configProviderJSXAttribute = root.find(j.JSXAttribute, {
            name: {
                name: "configProviderProps",
            },
        });

        if (configProviderJSXAttribute.length > 0) {
            antdImports.push(j.importSpecifier(j.identifier("ConfigProvider")));
        }

        const refineElement = root.find(j.JSXElement, {
            openingElement: {
                name: {
                    name: "Refine",
                },
            },
        });

        if (refineElement.length > 0) {
            const notificationProviderJSXAttribute = root.find(j.JSXAttribute, {
                name: {
                    name: "notificationProvider",
                },
            });

            if (notificationProviderJSXAttribute.length === 0) {
                antdImports.push(
                    j.importSpecifier(j.identifier("notificationProvider")),
                );
            }
        }

        if (antdImports.length > 0) {
            root.find(j.ImportDeclaration, {
                source: {
                    value: "@pankod/refine-core",
                },
            }).insertAfter(
                j.importDeclaration(
                    antdImports,
                    j.literal("@pankod/refine-antd"),
                ),
            );
        }

        if (coreImports.length === 0) {
            refineImport.remove();
        }
    } else {
        console.log(
            "WARNING: A refine core package from @pankod/refine-core is already imported. This tool will not make any migration for refine core.",
        );
        return;
    }
}

const moveConfigProvider = (j: JSCodeshift, root: Collection<any>) => {
    const refineElement = root.find(j.JSXElement, {
        openingElement: {
            name: {
                name: "Refine",
            },
        },
    });

    if (refineElement.length === 0) {
        return;
    }

    const notificationProviderJSXAttribute = root.find(j.JSXAttribute, {
        name: {
            name: "notificationProvider",
        },
    });

    if (notificationProviderJSXAttribute.length === 0) {
        refineElement.forEach((path) => {
            path.node.openingElement.attributes.push(
                j.jsxAttribute(
                    j.jsxIdentifier("notificationProvider"),
                    j.jsxExpressionContainer(
                        j.identifier("notificationProvider"),
                    ),
                ),
            );
        });
    }

    const configProviderJSXAttribute = root.find(j.JSXAttribute, {
        name: {
            name: "configProviderProps",
        },
    });

    if (configProviderJSXAttribute.length > 0) {
        const configProviderValue = (
            (
                configProviderJSXAttribute.nodes()[0]
                    .value as JSXExpressionContainer
            ).expression as ObjectExpression
        ).properties;

        const newConfigProviderElement = j.jsxElement(
            j.jsxOpeningElement(
                j.jsxIdentifier("ConfigProvider"),
                configProviderValue.map((p: ObjectProperty) =>
                    j.jsxAttribute(
                        j.jsxIdentifier((p.key as Identifier).name),
                        j.jsxExpressionContainer(p.value as any),
                    ),
                ),
            ),
            j.jsxClosingElement(j.jsxIdentifier("ConfigProvider")),
            refineElement.nodes(),
        );

        refineElement.replaceWith(newConfigProviderElement);

        configProviderJSXAttribute.remove();
    }
};

const updateSetEditIdToSetId = (j: JSCodeshift, root: Collection<any>) => {
    const updatedFormHooks = [
        "useEditableTable",
        "useModalForm",
        "useDrawerForm",
    ];

    for (const formHook of updatedFormHooks) {
        const useEditableTableHook = root.find(j.CallExpression, {
            callee: {
                name: formHook,
            },
        });

        useEditableTableHook.forEach((path) => {
            const setEditIdProperty = path.parentPath.node.id.properties.find(
                (p) => p.value.name === "setEditId",
            );

            if (setEditIdProperty) {
                setEditIdProperty.value.name = "setId: setEditId";
            }
        });
    }
};

const packagesToUpdate = [
    "@pankod/refine-airtable",
    "@pankod/refine-altogic",
    "@pankod/refine-graphql",
    "@pankod/refine-hasura",
    "@pankod/refine-nestjsx-crud",
    "@pankod/refine-nextjs-router",
    "@pankod/refine-react-router",
    "@pankod/refine-simple-rest",
    "@pankod/refine-strapi",
    "@pankod/refine-strapi-graphql",
    "@pankod/refine-supabase",
    "@pankod/refine-appwrite",
    "@pankod/refine-ably",
    "@pankod/@pankod/refine-strapi-v4",
];

export async function postTransform(files: any, flags: any) {
    const rootDir = path.join(process.cwd(), files[0]);
    const packageJsonPath = path.join(rootDir, "package.json");
    const useYarn = checkPackageLock(rootDir) === "yarn.lock";
    let packageJsonData;

    try {
        packageJsonData = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    } catch (err) {
        console.error(
            `Error: failed to load package.json from ${packageJsonPath}, ensure provided directory is root.`,
        );
    }

    const dependenciesToInstall: Array<{
        name: string;
        version: string;
    }> = [
        {
            name: "@pankod/refine-core",
            version: "3.x.x",
        },
        {
            name: "@pankod/refine-antd",
            version: "3.x.x",
        },
    ];

    for (const key of Object.keys(packageJsonData.dependencies)) {
        if (packagesToUpdate.includes(key)) {
            dependenciesToInstall.push({
                name: key,
                version: "3.x.x",
            });
        }
    }

    if (!flags.dry) {
        await install(
            rootDir,
            dependenciesToInstall.map((dep) => `${dep.name}@${dep.version}`),
            {
                useYarn,
                isOnline: true,
            },
        );

        await remove(rootDir, ["@pankod/refine"], {
            useYarn,
        });
    }
}

export default function transformer(file: FileInfo, api: API): string {
    const j = api.jscodeshift;
    const source = j(file.source);

    const refineImports = source.find(j.ImportDeclaration, {
        source: {
            value: "@pankod/refine",
        },
    });

    if (refineImports.length === 0) {
        return;
    }

    updateRefineImports(j, source);
    moveConfigProvider(j, source);
    updateSetEditIdToSetId(j, source);

    return source.toSource();
}
