"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/avatar */ \"./pages/components/avatar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_path, setAvatarPath] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [displayUsernameWarning, setDisplayUsernameWarning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.getProfile)({\n                supabase,\n                setLoading,\n                user,\n                setUsername,\n                setAvatarPath\n            }).then(()=>{\n                checkUsername();\n            });\n        }\n        console.dir(session);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (avatar_path) (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.downloadAvatar)({\n            supabase,\n            avatar_path,\n            setAvatarUrl\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        avatar_path\n    ]);\n    async function updateProfile(event) {\n        event.preventDefault();\n        setLoading(true);\n        const updates = {\n            id: user.id,\n            username,\n            avatar_url: avatar_path,\n            updated_at: new Date()\n        };\n        const { error  } = await supabase.from(\"profiles\").upsert(updates);\n        if (error) {\n            alert(error.message);\n        }\n        setLoading(false);\n    }\n    function checkUsername() {\n        !username && setDisplayUsernameWarning(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: updateProfile,\n                className: \"form-widget\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        supabase: supabase,\n                        avatar_path: avatar_path,\n                        size: 150,\n                        onUpload: (event, url)=>{\n                            setAvatarPath(url);\n                            updateProfile(event);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                type: \"text\",\n                                value: user && user.email,\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"username\",\n                                type: \"text\",\n                                required: true,\n                                value: username || \"\",\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block primary\",\n                            type: \"submit\",\n                            disabled: loading,\n                            children: loading ? \"Loading ...\" : \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block\",\n                            type: \"button\",\n                            onClick: ()=>supabase.auth.signOut(),\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: username ? \"/home\" : \"/profile\",\n                onClick: checkUsername,\n                children: \"Go to Homepage\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            !username && displayUsernameWarning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-red-600 mx-8\",\n                children: \"Please provide a username\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n} // export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {\n //   const supabase = createServerSupabaseClient(ctx);\n //   const {\n //     data: { session },\n //   } = await supabase.auth.getSession();\n //   if (!session) {\n //     return {\n //       redirect: {\n //         destination: \"/login\",\n //         permanent: false,\n //       },\n //     };\n //   }\n //   return {\n //     props: {},\n //   };\n // };\n_s(Profile, \"/BB8CiCeWDuRWrG9IcZGPtaiUxU=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ0U7QUFDYztBQUNmO0FBRzlCO0FBRVk7QUFFMUIsU0FBU1MsVUFBVTs7SUFDaEMsTUFBTUMsV0FBV04sK0VBQWlCQTtJQUNsQyxNQUFNTyxVQUFVWCx3RUFBVUE7SUFDMUIsTUFBTVksT0FBT1QscUVBQU9BO0lBQ3BCLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBVSxJQUFJO0lBQ3BELE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBZ0IsSUFBSTtJQUM1RCxNQUFNLENBQUNnQixZQUFZQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBZ0IsSUFBSTtJQUMvRCxNQUFNLENBQUNrQixhQUFhQyxjQUFjLEdBQUduQiwrQ0FBUUEsQ0FBZ0IsSUFBSTtJQUNqRSxNQUFNLENBQUNvQix3QkFBd0JDLDBCQUEwQixHQUN2RHJCLCtDQUFRQSxDQUFVLEtBQUs7SUFFekJDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJVSxNQUFNO1lBQ1JQLHdEQUFVQSxDQUFDO2dCQUNUSztnQkFDQUk7Z0JBQ0FGO2dCQUNBSTtnQkFDQUk7WUFDRixHQUFHRyxJQUFJLENBQUMsSUFBTTtnQkFDWkM7WUFDRjtRQUNGLENBQUM7UUFDREMsUUFBUUMsR0FBRyxDQUFDZjtJQUNaLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUNBO0tBQVE7SUFFWlQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlpQixhQUFhYiw0REFBY0EsQ0FBQztZQUFFSTtZQUFVUztZQUFhRDtRQUFhO0lBQ3RFLHVEQUF1RDtJQUN6RCxHQUFHO1FBQUNDO0tBQVk7SUFFaEIsZUFBZVEsY0FBY0MsS0FBcUIsRUFBRTtRQUNsREEsTUFBTUMsY0FBYztRQUVwQmYsV0FBVyxJQUFJO1FBRWYsTUFBTWdCLFVBQVU7WUFDZEMsSUFBSW5CLEtBQUttQixFQUFFO1lBQ1hoQjtZQUNBRSxZQUFZRTtZQUNaYSxZQUFZLElBQUlDO1FBQ2xCO1FBRUEsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNeEIsU0FBU3lCLElBQUksQ0FBQyxZQUFZQyxNQUFNLENBQUNOO1FBRXpELElBQUlJLE9BQU87WUFDVEcsTUFBTUgsTUFBTUksT0FBTztRQUNyQixDQUFDO1FBQ0R4QixXQUFXLEtBQUs7SUFDbEI7SUFFQSxTQUFTVSxnQkFBZ0I7UUFDdkIsQ0FBQ1QsWUFBWU8sMEJBQTBCLElBQUk7SUFDN0M7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNpQjtnQkFBS0MsVUFBVWI7Z0JBQWVjLFdBQVU7O2tDQUN2Qyw4REFBQ2pDLDBEQUFNQTt3QkFDTEUsVUFBVUE7d0JBQ1ZTLGFBQWFBO3dCQUNidUIsTUFBTTt3QkFDTkMsVUFBVSxDQUFDZixPQUF1QmdCLE1BQWdCOzRCQUNoRHhCLGNBQWN3Qjs0QkFDZGpCLGNBQWNDO3dCQUNoQjs7Ozs7O2tDQUVGLDhEQUFDaUI7OzBDQUNDLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1qQixJQUFHO2dDQUFRa0IsTUFBSztnQ0FBT0MsT0FBT3RDLFFBQVFBLEtBQUt1QyxLQUFLO2dDQUFFQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBRW5FLDhEQUFDUDs7MENBQ0MsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FDQ2pCLElBQUc7Z0NBQ0hrQixNQUFLO2dDQUNMSSxRQUFRO2dDQUNSSCxPQUFPbkMsWUFBWTtnQ0FDbkJ1QyxVQUFVLENBQUNDLElBQU12QyxZQUFZdUMsRUFBRUMsTUFBTSxDQUFDTixLQUFLOzs7Ozs7Ozs7Ozs7a0NBRy9DLDhEQUFDTDtrQ0FDQyw0RUFBQ1k7NEJBQ0NoQixXQUFVOzRCQUNWUSxNQUFLOzRCQUNMRyxVQUFVdkM7c0NBRVRBLFVBQVUsZ0JBQWdCLFFBQVE7Ozs7Ozs7Ozs7O2tDQUd2Qyw4REFBQ2dDO2tDQUNDLDRFQUFDWTs0QkFDQ2hCLFdBQVU7NEJBQ1ZRLE1BQUs7NEJBQ0xTLFNBQVMsSUFBTWhELFNBQVNpRCxJQUFJLENBQUNDLE9BQU87c0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ3JELGtEQUFJQTtnQkFBQ3NELE1BQU05QyxXQUFXLFVBQVUsVUFBVTtnQkFBRTJDLFNBQVNsQzswQkFBZTs7Ozs7O1lBR3BFLENBQUNULFlBQVlNLHdDQUNaLDhEQUFDeUM7Z0JBQUtyQixXQUFVOzBCQUFvQjs7Ozs7Ozs7QUFJNUMsQ0FBQyxDQUVELGdGQUFnRjtDQUNoRixzREFBc0Q7Q0FFdEQsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QiwwQ0FBMEM7Q0FFMUMsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsU0FBUztDQUNULE1BQU07Q0FFTixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLE9BQU87Q0FDUCxLQUFLO0dBbEltQmhDOztRQUNMTCwyRUFBaUJBO1FBQ2xCSixvRUFBVUE7UUFDYkcsaUVBQU9BOzs7S0FIRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBkb3dubG9hZEF2YXRhciB9IGZyb20gXCIuL2FwaS9wcm9maWxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL2NvbXBvbmVudHMvYXZhdGFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYXZhdGFyX3VybCwgc2V0QXZhdGFyVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthdmF0YXJfcGF0aCwgc2V0QXZhdGFyUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZGlzcGxheVVzZXJuYW1lV2FybmluZywgc2V0RGlzcGxheVVzZXJuYW1lV2FybmluZ10gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgZ2V0UHJvZmlsZSh7XHJcbiAgICAgICAgc3VwYWJhc2UsXHJcbiAgICAgICAgc2V0TG9hZGluZyxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNldEF2YXRhclBhdGgsXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrVXNlcm5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRpcihzZXNzaW9uKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbc2Vzc2lvbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF2YXRhcl9wYXRoKSBkb3dubG9hZEF2YXRhcih7IHN1cGFiYXNlLCBhdmF0YXJfcGF0aCwgc2V0QXZhdGFyVXJsIH0pO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFthdmF0YXJfcGF0aF0pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlKGV2ZW50OiBTeW50aGV0aWNFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZXMgPSB7XHJcbiAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgYXZhdGFyX3VybDogYXZhdGFyX3BhdGgsXHJcbiAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwcm9maWxlc1wiKS51cHNlcnQodXBkYXRlcyk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1VzZXJuYW1lKCkge1xyXG4gICAgIXVzZXJuYW1lICYmIHNldERpc3BsYXlVc2VybmFtZVdhcm5pbmcodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3VwZGF0ZVByb2ZpbGV9IGNsYXNzTmFtZT1cImZvcm0td2lkZ2V0XCI+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc3VwYWJhc2U9e3N1cGFiYXNlfVxyXG4gICAgICAgICAgYXZhdGFyX3BhdGg9e2F2YXRhcl9wYXRofVxyXG4gICAgICAgICAgc2l6ZT17MTUwfVxyXG4gICAgICAgICAgb25VcGxvYWQ9eyhldmVudDogU3ludGhldGljRXZlbnQsIHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEF2YXRhclBhdGgodXJsKTtcclxuICAgICAgICAgICAgdXBkYXRlUHJvZmlsZShldmVudCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXIgJiYgdXNlci5lbWFpbH0gZGlzYWJsZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZSB8fCBcIlwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJsb2NrIHByaW1hcnlcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nIC4uLlwiIDogXCJVcGRhdGVcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBibG9ja1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxMaW5rIGhyZWY9e3VzZXJuYW1lID8gXCIvaG9tZVwiIDogXCIvcHJvZmlsZVwifSBvbkNsaWNrPXtjaGVja1VzZXJuYW1lfT5cclxuICAgICAgICBHbyB0byBIb21lcGFnZVxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIHshdXNlcm5hbWUgJiYgZGlzcGxheVVzZXJuYW1lV2FybmluZyAmJiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIG14LThcIj5QbGVhc2UgcHJvdmlkZSBhIHVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHg6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcclxuLy8gICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50KGN0eCk7XHJcblxyXG4vLyAgIGNvbnN0IHtcclxuLy8gICAgIGRhdGE6IHsgc2Vzc2lvbiB9LFxyXG4vLyAgIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKTtcclxuXHJcbi8vICAgaWYgKCFzZXNzaW9uKSB7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICByZWRpcmVjdDoge1xyXG4vLyAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxyXG4vLyAgICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICB9O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7fSxcclxuLy8gICB9O1xyXG4vLyB9O1xyXG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwiZ2V0UHJvZmlsZSIsImRvd25sb2FkQXZhdGFyIiwiTGluayIsIkF2YXRhciIsIlByb2ZpbGUiLCJzdXBhYmFzZSIsInNlc3Npb24iLCJ1c2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYXZhdGFyX3VybCIsInNldEF2YXRhclVybCIsImF2YXRhcl9wYXRoIiwic2V0QXZhdGFyUGF0aCIsImRpc3BsYXlVc2VybmFtZVdhcm5pbmciLCJzZXREaXNwbGF5VXNlcm5hbWVXYXJuaW5nIiwidGhlbiIsImNoZWNrVXNlcm5hbWUiLCJjb25zb2xlIiwiZGlyIiwidXBkYXRlUHJvZmlsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVzIiwiaWQiLCJ1cGRhdGVkX2F0IiwiRGF0ZSIsImVycm9yIiwiZnJvbSIsInVwc2VydCIsImFsZXJ0IiwibWVzc2FnZSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInNpemUiLCJvblVwbG9hZCIsInVybCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiZW1haWwiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImF1dGgiLCJzaWduT3V0IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});