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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/avatar */ \"./pages/components/avatar.tsx\");\n// import { useSession } from \"@supabase/auth-helpers-react\";\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Profile() {\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient)();\n    const session = useSession();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [avatar_path, setAvatarPath] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [displayUsernameWarning, setDisplayUsernameWarning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.getProfile)({\n                supabase,\n                setLoading,\n                user,\n                setUsername,\n                setAvatarPath\n            }).then(()=>{\n                checkUsername();\n            });\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (avatar_path) (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.downloadAvatar)({\n            supabase,\n            avatar_path,\n            setAvatarUrl\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        avatar_path\n    ]);\n    async function updateProfile(event) {\n        event.preventDefault();\n        setLoading(true);\n        const updates = {\n            id: user.id,\n            username,\n            avatar_url: avatar_path,\n            updated_at: new Date()\n        };\n        const { error  } = await supabase.from(\"profiles\").upsert(updates);\n        if (error) {\n            alert(error.message);\n        }\n        setLoading(false);\n    }\n    function checkUsername() {\n        !username && setDisplayUsernameWarning(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: updateProfile,\n                className: \"form-widget\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        supabase: supabase,\n                        avatar_path: avatar_path,\n                        size: 150,\n                        onUpload: (event, url)=>{\n                            setAvatarPath(url);\n                            updateProfile(event);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                type: \"text\",\n                                value: user && user.email,\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"username\",\n                                type: \"text\",\n                                required: true,\n                                value: username || \"\",\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block primary\",\n                            type: \"submit\",\n                            disabled: loading,\n                            children: loading ? \"Loading ...\" : \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block\",\n                            type: \"button\",\n                            onClick: ()=>supabase.auth.signOut(),\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: username ? \"/home\" : \"/profile\",\n                onClick: checkUsername,\n                children: \"Go to Homepage\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            !username && displayUsernameWarning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-red-600 mx-8\",\n                children: \"Please provide a username\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"/BB8CiCeWDuRWrG9IcZGPtaiUxU=\", true, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxJQUFJLENBQUNDLE9BQU87c0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ3BELGtEQUFJQTtnQkFBQ3FELE1BQU01QyxXQUFXLFVBQVUsVUFBVTtnQkFBRXlDLFNBQVNoQzswQkFBZTs7Ozs7O1lBR3BFLENBQUNULFlBQVlNLHdDQUNaLDhEQUFDdUM7Z0JBQUtyQixXQUFVOzBCQUFvQjs7Ozs7Ozs7QUFJNUMsQ0FBQztHQTVHdUIvQjs7UUFDTEwsMkVBQWlCQTtRQUVyQkQsaUVBQU9BOzs7S0FIRU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBkb3dubG9hZEF2YXRhciB9IGZyb20gXCIuL2FwaS9wcm9maWxlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuL2NvbXBvbmVudHMvYXZhdGFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcclxuICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYXZhdGFyX3VybCwgc2V0QXZhdGFyVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFthdmF0YXJfcGF0aCwgc2V0QXZhdGFyUGF0aF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZGlzcGxheVVzZXJuYW1lV2FybmluZywgc2V0RGlzcGxheVVzZXJuYW1lV2FybmluZ10gPVxyXG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgZ2V0UHJvZmlsZSh7XHJcbiAgICAgICAgc3VwYWJhc2UsXHJcbiAgICAgICAgc2V0TG9hZGluZyxcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNldEF2YXRhclBhdGgsXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNoZWNrVXNlcm5hbWUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdmF0YXJfcGF0aCkgZG93bmxvYWRBdmF0YXIoeyBzdXBhYmFzZSwgYXZhdGFyX3BhdGgsIHNldEF2YXRhclVybCB9KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbYXZhdGFyX3BhdGhdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvZmlsZShldmVudDogU3ludGhldGljRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVzID0ge1xyXG4gICAgICBpZDogdXNlci5pZCxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGF2YXRhcl91cmw6IGF2YXRhcl9wYXRoLFxyXG4gICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKFwicHJvZmlsZXNcIikudXBzZXJ0KHVwZGF0ZXMpO1xyXG5cclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tVc2VybmFtZSgpIHtcclxuICAgICF1c2VybmFtZSAmJiBzZXREaXNwbGF5VXNlcm5hbWVXYXJuaW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGRhdGVQcm9maWxlfSBjbGFzc05hbWU9XCJmb3JtLXdpZGdldFwiPlxyXG4gICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIHN1cGFiYXNlPXtzdXBhYmFzZX1cclxuICAgICAgICAgIGF2YXRhcl9wYXRoPXthdmF0YXJfcGF0aH1cclxuICAgICAgICAgIHNpemU9ezE1MH1cclxuICAgICAgICAgIG9uVXBsb2FkPXsoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50LCB1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBzZXRBdmF0YXJQYXRoKHVybCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2ZpbGUoZXZlbnQpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyICYmIHVzZXIuZW1haWx9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWUgfHwgXCJcIn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBibG9jayBwcmltYXJ5XCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZyAuLi5cIiA6IFwiVXBkYXRlXCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYmxvY2tcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VwYWJhc2UuYXV0aC5zaWduT3V0KCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TGluayBocmVmPXt1c2VybmFtZSA/IFwiL2hvbWVcIiA6IFwiL3Byb2ZpbGVcIn0gb25DbGljaz17Y2hlY2tVc2VybmFtZX0+XHJcbiAgICAgICAgR28gdG8gSG9tZXBhZ2VcclxuICAgICAgPC9MaW5rPlxyXG4gICAgICB7IXVzZXJuYW1lICYmIGRpc3BsYXlVc2VybmFtZVdhcm5pbmcgJiYgKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTYwMCBteC04XCI+UGxlYXNlIHByb3ZpZGUgYSB1c2VybmFtZTwvc3Bhbj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudChjdHgpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB7IHNlc3Npb24gfSxcclxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRTZXNzaW9uKCk7XHJcblxyXG4gIGlmICghc2Vzc2lvbikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogXCIvbG9naW5cIixcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sXHJcbiAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwiZ2V0UHJvZmlsZSIsImRvd25sb2FkQXZhdGFyIiwiTGluayIsIkF2YXRhciIsIlByb2ZpbGUiLCJzdXBhYmFzZSIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwidXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImF2YXRhcl91cmwiLCJzZXRBdmF0YXJVcmwiLCJhdmF0YXJfcGF0aCIsInNldEF2YXRhclBhdGgiLCJkaXNwbGF5VXNlcm5hbWVXYXJuaW5nIiwic2V0RGlzcGxheVVzZXJuYW1lV2FybmluZyIsInRoZW4iLCJjaGVja1VzZXJuYW1lIiwidXBkYXRlUHJvZmlsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVzIiwiaWQiLCJ1cGRhdGVkX2F0IiwiRGF0ZSIsImVycm9yIiwiZnJvbSIsInVwc2VydCIsImFsZXJ0IiwibWVzc2FnZSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsInNpemUiLCJvblVwbG9hZCIsInVybCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiZW1haWwiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImF1dGgiLCJzaWduT3V0IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});