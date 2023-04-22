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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/avatar */ \"./pages/components/avatar.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Profile() {\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_path, setAvatarPath] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [displayUsernameWarning, setDisplayUsernameWarning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (user) {\n            (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.getProfile)({\n                supabase,\n                setLoading,\n                user,\n                setUsername,\n                setAvatarPath\n            }).then(()=>{\n                checkUsername();\n            });\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (avatar_path) (0,_api_profile__WEBPACK_IMPORTED_MODULE_3__.downloadAvatar)({\n            supabase,\n            avatar_path,\n            setAvatarUrl\n        });\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        avatar_path\n    ]);\n    async function updateProfile(event) {\n        event.preventDefault();\n        setLoading(true);\n        const updates = {\n            id: user.id,\n            username,\n            avatar_url: avatar_path,\n            updated_at: new Date()\n        };\n        const { error  } = await supabase.from(\"profiles\").upsert(updates);\n        if (error) {\n            alert(error.message);\n        }\n        setLoading(false);\n    }\n    function checkUsername() {\n        !username && setDisplayUsernameWarning(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: updateProfile,\n                className: \"form-widget\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        supabase: supabase,\n                        avatar_path: avatar_path,\n                        size: 150,\n                        onUpload: (event, url)=>{\n                            setAvatarPath(url);\n                            updateProfile(event);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"email\",\n                                type: \"text\",\n                                value: user && user.email,\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"username\",\n                                type: \"text\",\n                                required: true,\n                                value: username || \"\",\n                                onChange: (e)=>setUsername(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block primary\",\n                            type: \"submit\",\n                            disabled: loading,\n                            children: loading ? \"Loading ...\" : \"Update\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button block\",\n                            type: \"button\",\n                            onClick: ()=>supabase.auth.signOut(),\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: username ? \"/home\" : \"/profile\",\n                onClick: checkUsername,\n                children: \"Go to Homepage\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            !username && displayUsernameWarning && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-red-600 mx-8\",\n                children: \"Please provide a username\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\profile.tsx\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Profile, \"/BB8CiCeWDuRWrG9IcZGPtaiUxU=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUNDLE9BQU87c0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ25ELGtEQUFJQTtnQkFBQ29ELE1BQU01QyxXQUFXLFVBQVUsVUFBVTtnQkFBRXlDLFNBQVNoQzswQkFBZTs7Ozs7O1lBR3BFLENBQUNULFlBQVlNLHdDQUNaLDhEQUFDdUM7Z0JBQUtyQixXQUFVOzBCQUFvQjs7Ozs7Ozs7QUFJNUMsQ0FBQztHQTVHdUI5Qjs7UUFDTEwsMkVBQWlCQTtRQUNsQkosb0VBQVVBO1FBQ2JHLGlFQUFPQTs7O0tBSEVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2ZpbGUudHN4P2RjZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVVzZXIsIHVzZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZmlsZSwgZG93bmxvYWRBdmF0YXIgfSBmcm9tIFwiLi9hcGkvcHJvZmlsZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqc1wiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiLi9jb21wb25lbnRzL2F2YXRhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcclxuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2F2YXRhcl91cmwsIHNldEF2YXRhclVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYXZhdGFyX3BhdGgsIHNldEF2YXRhclBhdGhdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2Rpc3BsYXlVc2VybmFtZVdhcm5pbmcsIHNldERpc3BsYXlVc2VybmFtZVdhcm5pbmddID1cclxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGdldFByb2ZpbGUoe1xyXG4gICAgICAgIHN1cGFiYXNlLFxyXG4gICAgICAgIHNldExvYWRpbmcsXHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBzZXRVc2VybmFtZSxcclxuICAgICAgICBzZXRBdmF0YXJQYXRoLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBjaGVja1VzZXJuYW1lKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtzZXNzaW9uXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXZhdGFyX3BhdGgpIGRvd25sb2FkQXZhdGFyKHsgc3VwYWJhc2UsIGF2YXRhcl9wYXRoLCBzZXRBdmF0YXJVcmwgfSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW2F2YXRhcl9wYXRoXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGUoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlcyA9IHtcclxuICAgICAgaWQ6IHVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBhdmF0YXJfdXJsOiBhdmF0YXJfcGF0aCxcclxuICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcInByb2ZpbGVzXCIpLnVwc2VydCh1cGRhdGVzKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrVXNlcm5hbWUoKSB7XHJcbiAgICAhdXNlcm5hbWUgJiYgc2V0RGlzcGxheVVzZXJuYW1lV2FybmluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dXBkYXRlUHJvZmlsZX0gY2xhc3NOYW1lPVwiZm9ybS13aWRnZXRcIj5cclxuICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBzdXBhYmFzZT17c3VwYWJhc2V9XHJcbiAgICAgICAgICBhdmF0YXJfcGF0aD17YXZhdGFyX3BhdGh9XHJcbiAgICAgICAgICBzaXplPXsxNTB9XHJcbiAgICAgICAgICBvblVwbG9hZD17KGV2ZW50OiBTeW50aGV0aWNFdmVudCwgdXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgc2V0QXZhdGFyUGF0aCh1cmwpO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9maWxlKGV2ZW50KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlciAmJiB1c2VyLmVtYWlsfSBkaXNhYmxlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYmxvY2sgcHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyBcIkxvYWRpbmcgLi4uXCIgOiBcIlVwZGF0ZVwifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGJsb2NrXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1cGFiYXNlLmF1dGguc2lnbk91dCgpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPExpbmsgaHJlZj17dXNlcm5hbWUgPyBcIi9ob21lXCIgOiBcIi9wcm9maWxlXCJ9IG9uQ2xpY2s9e2NoZWNrVXNlcm5hbWV9PlxyXG4gICAgICAgIEdvIHRvIEhvbWVwYWdlXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgeyF1c2VybmFtZSAmJiBkaXNwbGF5VXNlcm5hbWVXYXJuaW5nICYmIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgbXgtOFwiPlBsZWFzZSBwcm92aWRlIGEgdXNlcm5hbWU8L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyU3VwYWJhc2VDbGllbnQoY3R4KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogeyBzZXNzaW9uIH0sXHJcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xyXG5cclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VVc2VyIiwidXNlU3VwYWJhc2VDbGllbnQiLCJnZXRQcm9maWxlIiwiZG93bmxvYWRBdmF0YXIiLCJMaW5rIiwiQXZhdGFyIiwiUHJvZmlsZSIsInN1cGFiYXNlIiwic2Vzc2lvbiIsInVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJhdmF0YXJfdXJsIiwic2V0QXZhdGFyVXJsIiwiYXZhdGFyX3BhdGgiLCJzZXRBdmF0YXJQYXRoIiwiZGlzcGxheVVzZXJuYW1lV2FybmluZyIsInNldERpc3BsYXlVc2VybmFtZVdhcm5pbmciLCJ0aGVuIiwiY2hlY2tVc2VybmFtZSIsInVwZGF0ZVByb2ZpbGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXBkYXRlcyIsImlkIiwidXBkYXRlZF9hdCIsIkRhdGUiLCJlcnJvciIsImZyb20iLCJ1cHNlcnQiLCJhbGVydCIsIm1lc3NhZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJzaXplIiwib25VcGxvYWQiLCJ1cmwiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImVtYWlsIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhdXRoIiwic2lnbk91dCIsImhyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

});