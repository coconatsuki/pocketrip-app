"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [avatar_path, setAvatarPath] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api_profile__WEBPACK_IMPORTED_MODULE_5__.getProfile)({\n            supabase,\n            setLoading,\n            user,\n            setUsername,\n            setAvatarPath\n        }).then((username)=>{\n            console.log(\"username? \".concat(!!username, \" \").concat(username));\n            if (!username) {\n                router.push(\"/profile\");\n            }\n        });\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (avatar_path) (0,_api_profile__WEBPACK_IMPORTED_MODULE_5__.downloadAvatar)({\n            supabase,\n            avatar_path,\n            setAvatarUrl\n        });\n    }, [\n        avatar_path\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"WELCOME \".concat(username)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                avatar_url && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-48 h-48\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: avatar_url,\n                        fill: true,\n                        alt: \"avatar\",\n                        style: {\n                            objectFit: \"cover\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"mAFvHrWtD/5Qohz+oWyUMlbXy+s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useSupabaseClient,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNkO0FBQ0o7QUFDa0M7QUFDM0M7QUFDNEI7QUFFNUMsU0FBU1MsT0FBTzs7SUFDN0IsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLFVBQVVYLHdFQUFVQTtJQUMxQixNQUFNWSxXQUFXUCwrRUFBaUJBO0lBQ2xDLE1BQU1RLE9BQU9ULHFFQUFPQTtJQUNwQixNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDLElBQUk7SUFDN0MsTUFBTSxDQUFDaUIsWUFBWUMsYUFBYSxHQUFHbEIsK0NBQVFBLENBQUMsSUFBSTtJQUNoRCxNQUFNLENBQUNtQixhQUFhQyxjQUFjLEdBQUdwQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWxEQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLHdEQUFVQSxDQUFDO1lBQ1RLO1lBQ0FHO1lBQ0FGO1lBQ0FJO1lBQ0FJO1FBQ0YsR0FBR0MsSUFBSSxDQUFDLENBQUNOLFdBQWE7WUFDcEJPLFFBQVFDLEdBQUcsQ0FBQyxhQUEyQlIsT0FBZCxDQUFDLENBQUNBLFVBQVMsS0FBWSxPQUFUQTtZQUN2QyxJQUFJLENBQUNBLFVBQVU7Z0JBQ2JOLE9BQU9lLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSDtJQUNGLEdBQUc7UUFBQ2Q7S0FBUTtJQUVaVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWtCLGFBQWFaLDREQUFjQSxDQUFDO1lBQUVJO1lBQVVRO1lBQWFEO1FBQWE7SUFDeEUsR0FBRztRQUFDQztLQUFZO0lBRWhCLHFCQUNFO2tCQUNFLDRFQUFDTTs7OEJBQ0MsOERBQUNDOzhCQUFJLFdBQW9CLE9BQVRYOzs7Ozs7Z0JBQ2ZFLDRCQUNDLDhEQUFDUTtvQkFBSUUsV0FBVTs4QkFDYiw0RUFBQ3RCLG1EQUFLQTt3QkFDSnVCLEtBQUtYO3dCQUNMWSxJQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFPOzRCQUFFQyxXQUFXO3dCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUMsQ0FBQztHQTlDdUJ4Qjs7UUFDUE4sa0RBQVNBO1FBQ1JILG9FQUFVQTtRQUNUSywyRUFBaUJBO1FBQ3JCRCxpRUFBT0E7OztLQUpFSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLnRzeD80OGZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VVc2VyLCB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IGdldFByb2ZpbGUsIGRvd25sb2FkQXZhdGFyIH0gZnJvbSBcIi4vYXBpL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdmF0YXJfdXJsLCBzZXRBdmF0YXJVcmxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdmF0YXJfcGF0aCwgc2V0QXZhdGFyUGF0aF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2ZpbGUoe1xuICAgICAgc3VwYWJhc2UsXG4gICAgICBzZXRMb2FkaW5nLFxuICAgICAgdXNlcixcbiAgICAgIHNldFVzZXJuYW1lLFxuICAgICAgc2V0QXZhdGFyUGF0aCxcbiAgICB9KS50aGVuKCh1c2VybmFtZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYHVzZXJuYW1lPyAkeyEhdXNlcm5hbWV9ICR7dXNlcm5hbWV9YCk7XG4gICAgICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXZhdGFyX3BhdGgpIGRvd25sb2FkQXZhdGFyKHsgc3VwYWJhc2UsIGF2YXRhcl9wYXRoLCBzZXRBdmF0YXJVcmwgfSk7XG4gIH0sIFthdmF0YXJfcGF0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57YFdFTENPTUUgJHt1c2VybmFtZX1gfTwvaDE+XG4gICAgICAgIHthdmF0YXJfdXJsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNDggaC00OFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17YXZhdGFyX3VybH1cbiAgICAgICAgICAgICAgZmlsbFxuICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZVVzZXIiLCJ1c2VTdXBhYmFzZUNsaWVudCIsIkltYWdlIiwiZ2V0UHJvZmlsZSIsImRvd25sb2FkQXZhdGFyIiwiSG9tZSIsInJvdXRlciIsInNlc3Npb24iLCJzdXBhYmFzZSIsInVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJhdmF0YXJfdXJsIiwic2V0QXZhdGFyVXJsIiwiYXZhdGFyX3BhdGgiLCJzZXRBdmF0YXJQYXRoIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJzcmMiLCJmaWxsIiwiYWx0Iiwic3R5bGUiLCJvYmplY3RGaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.tsx\n"));

/***/ })

});