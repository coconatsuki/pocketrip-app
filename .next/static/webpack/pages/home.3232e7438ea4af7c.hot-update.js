"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\n// import { useSession } from \"@supabase/auth-helpers-react\";\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = (param)=>{\n    let { username , avatar_path  } = param;\n    _s();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (avatar_path) {\n            setLoading(true);\n            (0,_api_profile__WEBPACK_IMPORTED_MODULE_5__.downloadAvatar)({\n                supabase,\n                avatar_path,\n                setAvatarUrl\n            }).then(()=>setLoading(false));\n        }\n    }, [\n        avatar_path\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"WELCOME \".concat(username)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                avatar_url && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-48 h-48\",\n                    children: loading ? \"loading\" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: avatar_url,\n                        fill: true,\n                        alt: \"avatar\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/profile\",\n                    children: \"Edit Profile\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Home, \"h517ZiUzqfhM/je+PwN8cg1ABYw=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7OztBQUNqQjtBQUNxQjtBQUNsQztBQUNGO0FBQ3dDO0FBSXJFLE1BQU1NLE9BR0QsU0FBK0I7UUFBOUIsRUFBRUMsU0FBUSxFQUFFQyxZQUFXLEVBQUU7O0lBQzdCLE1BQU1DLFdBQVdQLCtFQUFpQkE7SUFDbEMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFVLElBQUk7SUFDcEQsTUFBTSxDQUFDWSxZQUFZQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFnQixJQUFJO0lBRS9EQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU8sYUFBYTtZQUNmRyxXQUFXLElBQUk7WUFDZk4sNERBQWNBLENBQUM7Z0JBQUVJO2dCQUFVRDtnQkFBYUs7WUFBYSxHQUFHQyxJQUFJLENBQUMsSUFDM0RILFdBQVcsS0FBSztRQUVwQixDQUFDO0lBQ0gsR0FBRztRQUFDSDtLQUFZO0lBRWhCLHFCQUNFO2tCQUNFLDRFQUFDTzs7OEJBQ0MsOERBQUNDOzhCQUFJLFdBQW9CLE9BQVRUOzs7Ozs7Z0JBQ2ZLLDRCQUNDLDhEQUFDRztvQkFBSUUsV0FBVTs4QkFDWlAsVUFDQywwQkFFQSw4REFBQ1AsbURBQUtBO3dCQUNKZSxLQUFLTjt3QkFDTE8sSUFBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzs0QkFBRUMsV0FBVzt3QkFBUTs7Ozs7aUNBRS9COzs7Ozs7OEJBR0wsOERBQUNsQixrREFBSUE7b0JBQUNtQixNQUFLOzhCQUFXOzs7Ozs7Ozs7Ozs7O0FBSTlCO0dBdkNNakI7O1FBSWFKLDJFQUFpQkE7OztLQUo5Qkk7O0FBZ0ZOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUudHN4PzQ4ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGRvd25sb2FkQXZhdGFyLCBnZXRQcm9maWxlU2VydmVyU2lkZSB9IGZyb20gXCIuL2FwaS9wcm9maWxlXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLW5leHRqc1wiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0LCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlPHtcbiAgdXNlcm5hbWU6IHN0cmluZyB8IG51bGw7XG4gIGF2YXRhcl9wYXRoOiBzdHJpbmcgfCBudWxsO1xufT4gPSAoeyB1c2VybmFtZSwgYXZhdGFyX3BhdGggfSkgPT4ge1xuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbYXZhdGFyX3VybCwgc2V0QXZhdGFyVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGF2YXRhcl9wYXRoKSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZG93bmxvYWRBdmF0YXIoeyBzdXBhYmFzZSwgYXZhdGFyX3BhdGgsIHNldEF2YXRhclVybCB9KS50aGVuKCgpID0+XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2F2YXRhcl9wYXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPntgV0VMQ09NRSAke3VzZXJuYW1lfWB9PC9oMT5cbiAgICAgICAge2F2YXRhcl91cmwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy00OCBoLTQ4XCI+XG4gICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgXCJsb2FkaW5nXCJcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz17YXZhdGFyX3VybH1cbiAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+RWRpdCBQcm9maWxlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoXG4gIGN0eDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFxuKSA9PiB7XG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyU3VwYWJhc2VDbGllbnQoY3R4KTtcblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBzZXNzaW9uIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKTtcblxuICBpZiAoIXNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgZGVzdGluYXRpb246IFwiL2xvZ2luXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdCB1c2VySWQ6IHN0cmluZyA9IHNlc3Npb24udXNlci5pZDtcblxuICBjb25zdCB7IHVzZXJuYW1lLCBhdmF0YXJfdXJsIH0gPSBhd2FpdCBnZXRQcm9maWxlU2VydmVyU2lkZShzdXBhYmFzZSwgdXNlcklkKTtcblxuICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9wcm9maWxlXCIsXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB1c2VybmFtZSxcbiAgICAgIGF2YXRhcl9wYXRoOiBhdmF0YXJfdXJsLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU3VwYWJhc2VDbGllbnQiLCJJbWFnZSIsIkxpbmsiLCJkb3dubG9hZEF2YXRhciIsIkhvbWUiLCJ1c2VybmFtZSIsImF2YXRhcl9wYXRoIiwic3VwYWJhc2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImF2YXRhcl91cmwiLCJzZXRBdmF0YXJVcmwiLCJ0aGVuIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJzcmMiLCJmaWxsIiwiYWx0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.tsx\n"));

/***/ })

});