"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n// import { useSession } from \"@supabase/auth-helpers-react\";\n// import { useState, useEffect } from \"react\";\n// import { useUser, useSupabaseClient } from \"@supabase/auth-helpers-react\";\n// import Image from \"next/image\";\n// import { getProfile, downloadAvatar } from \"./api/profile\";\n// export default function Home() {\n//   const session = useSession();\n//   const supabase = useSupabaseClient();\n//   const user = useUser();\n//   const [loading, setLoading] = useState(true);\n//   const [username, setUsername] = useState(null);\n//   const [avatar_url, setAvatarUrl] = useState(null);\n//   const [avatar_path, setAvatarPath] = useState(null);\n//   useEffect(() => {\n//     getProfile({\n//       supabase,\n//       setLoading,\n//       user,\n//       setUsername,\n//       setAvatarPath,\n//     });\n//   }, [session]);\n//   useEffect(() => {\n//     if (avatar_path) downloadAvatar({ supabase, avatar_path, setAvatarUrl });\n//   }, [avatar_path]);\n//   return (\n//     <>\n//       <div>\n//         <h1>{`WELCOME ${username}`}</h1>\n//         {avatar_url && (\n//           <div className=\"relative w-48 h-48\">\n//             <Image\n//               src={avatar_url}\n//               fill\n//               alt=\"avatar\"\n//               style={{ objectFit: \"cover\" }}\n//             />\n//           </div>\n//         )}\n//       </div>\n//     </>\n//   );\n// }\n\n\nfunction Home({ data: data1 , session  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Hello \",\n            data1 && data1.username\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.createServerSupabaseClient)(context);\n    // Check if we have a session\n    const { data: { session  }  } = await supabase.auth.getSession();\n    if (session) {\n        const userId = session.user.id;\n        const { data: data1 , error , status  } = await supabase.from(\"profiles\")// .select(`username, avatar_url`)\n        .select(`username`).eq(\"id\", userId).single();\n    }\n    console.log(\"data: \", data, \"session: \", session);\n    // if (!data) {\n    //   return {\n    //     redirect: {\n    //       destination: '/',\n    //       permanent: false,\n    //     },\n    //   }\n    // }\n    return {\n        props: {\n            data,\n            session\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0QsK0NBQStDO0FBQy9DLDZFQUE2RTtBQUM3RSxrQ0FBa0M7QUFDbEMsOERBQThEO0FBRTlELG1DQUFtQztBQUNuQyxrQ0FBa0M7QUFDbEMsMENBQTBDO0FBQzFDLDRCQUE0QjtBQUM1QixrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFFekQsc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLFVBQVU7QUFDVixtQkFBbUI7QUFFbkIsc0JBQXNCO0FBQ3RCLGdGQUFnRjtBQUNoRix1QkFBdUI7QUFFdkIsYUFBYTtBQUNiLFNBQVM7QUFDVCxjQUFjO0FBQ2QsMkNBQTJDO0FBQzNDLDJCQUEyQjtBQUMzQixpREFBaUQ7QUFDakQscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsNkJBQTZCO0FBQzdCLCtDQUErQztBQUMvQyxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CLGFBQWE7QUFDYixlQUFlO0FBQ2YsVUFBVTtBQUNWLE9BQU87QUFDUCxJQUFJOztBQUV1RTtBQUU1RCxTQUFTQyxLQUFLLEVBQUVDLE1BQUFBLE1BQUksRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFDOUMscUJBQU8sOERBQUNDOztZQUFJO1lBQU9GLFNBQVFBLE1BQUtHLFFBQVE7Ozs7Ozs7QUFDMUMsQ0FBQztBQUVNLGVBQWVDLG1CQUFtQkMsT0FBTyxFQUFFO0lBQ2hELE1BQU1DLFdBQVdSLHlGQUEwQkEsQ0FBQ087SUFDNUMsNkJBQTZCO0lBQzdCLE1BQU0sRUFDSkwsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FDbEIsR0FBRyxNQUFNSyxTQUFTQyxJQUFJLENBQUNDLFVBQVU7SUFFbEMsSUFBSVAsU0FBUztRQUNYLE1BQU1RLFNBQVNSLFFBQVFTLElBQUksQ0FBQ0MsRUFBRTtRQUU5QixNQUFNLEVBQUVYLE1BQUFBLE1BQUksRUFBRVksTUFBSyxFQUFFQyxPQUFNLEVBQUUsR0FBRyxNQUFNUCxTQUNuQ1EsSUFBSSxDQUFDLFdBQ04sa0NBQWtDO1NBQ2pDQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFDakJDLEVBQUUsQ0FBQyxNQUFNUCxRQUNUUSxNQUFNO0lBQ1gsQ0FBQztJQUNEQyxRQUFRQyxHQUFHLENBQUMsVUFBVW5CLE1BQU0sYUFBYUM7SUFFekMsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1QsTUFBTTtJQUNOLElBQUk7SUFFSixPQUFPO1FBQ0xtQixPQUFPO1lBQUVwQjtZQUFNQztRQUFRO0lBQ3pCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvY2tldHJpcC1hcHAvLi9wYWdlcy9ob21lLnRzeD80OGZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG4vLyBpbXBvcnQgeyBnZXRQcm9maWxlLCBkb3dubG9hZEF2YXRhciB9IGZyb20gXCIuL2FwaS9wcm9maWxlXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4vLyAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4vLyAgIGNvbnN0IHN1cGFiYXNlID0gdXNlU3VwYWJhc2VDbGllbnQoKTtcbi8vICAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbi8vICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4vLyAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4vLyAgIGNvbnN0IFthdmF0YXJfdXJsLCBzZXRBdmF0YXJVcmxdID0gdXNlU3RhdGUobnVsbCk7XG4vLyAgIGNvbnN0IFthdmF0YXJfcGF0aCwgc2V0QXZhdGFyUGF0aF0gPSB1c2VTdGF0ZShudWxsKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGdldFByb2ZpbGUoe1xuLy8gICAgICAgc3VwYWJhc2UsXG4vLyAgICAgICBzZXRMb2FkaW5nLFxuLy8gICAgICAgdXNlcixcbi8vICAgICAgIHNldFVzZXJuYW1lLFxuLy8gICAgICAgc2V0QXZhdGFyUGF0aCxcbi8vICAgICB9KTtcbi8vICAgfSwgW3Nlc3Npb25dKTtcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGlmIChhdmF0YXJfcGF0aCkgZG93bmxvYWRBdmF0YXIoeyBzdXBhYmFzZSwgYXZhdGFyX3BhdGgsIHNldEF2YXRhclVybCB9KTtcbi8vICAgfSwgW2F2YXRhcl9wYXRoXSk7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPGRpdj5cbi8vICAgICAgICAgPGgxPntgV0VMQ09NRSAke3VzZXJuYW1lfWB9PC9oMT5cbi8vICAgICAgICAge2F2YXRhcl91cmwgJiYgKFxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy00OCBoLTQ4XCI+XG4vLyAgICAgICAgICAgICA8SW1hZ2Vcbi8vICAgICAgICAgICAgICAgc3JjPXthdmF0YXJfdXJsfVxuLy8gICAgICAgICAgICAgICBmaWxsXG4vLyAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiXG4vLyAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICApfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC8+XG4vLyAgICk7XG4vLyB9XG5cbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkYXRhLCBzZXNzaW9uIH0pIHtcbiAgcmV0dXJuIDxkaXY+SGVsbG8ge2RhdGEgJiYgZGF0YS51c2VybmFtZX08L2Rpdj47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50KGNvbnRleHQpO1xuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2Vzc2lvblxuICBjb25zdCB7XG4gICAgZGF0YTogeyBzZXNzaW9uIH0sXG4gIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFNlc3Npb24oKTtcblxuICBpZiAoc2Vzc2lvbikge1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24udXNlci5pZDtcblxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHN0YXR1cyB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcbiAgICAgIC8vIC5zZWxlY3QoYHVzZXJuYW1lLCBhdmF0YXJfdXJsYClcbiAgICAgIC5zZWxlY3QoYHVzZXJuYW1lYClcbiAgICAgIC5lcShcImlkXCIsIHVzZXJJZClcbiAgICAgIC5zaW5nbGUoKTtcbiAgfVxuICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhLCBcInNlc3Npb246IFwiLCBzZXNzaW9uKTtcblxuICAvLyBpZiAoIWRhdGEpIHtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgcmVkaXJlY3Q6IHtcbiAgLy8gICAgICAgZGVzdGluYXRpb246ICcvJyxcbiAgLy8gICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhLCBzZXNzaW9uIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlU2VydmVyU3VwYWJhc2VDbGllbnQiLCJIb21lIiwiZGF0YSIsInNlc3Npb24iLCJkaXYiLCJ1c2VybmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdXBhYmFzZSIsImF1dGgiLCJnZXRTZXNzaW9uIiwidXNlcklkIiwidXNlciIsImlkIiwiZXJyb3IiLCJzdGF0dXMiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJzaW5nbGUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ \"./pages/login.tsx\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./pages/home.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_login__WEBPACK_IMPORTED_MODULE_2__]);\n_login__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//import styles from \"@/styles/Home.module.css\";\n\n\n\nfunction Index() {\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pocketrip\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex h-screen w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    style: {\n                        padding: \"50px 0 100px 0\"\n                    },\n                    children: !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 23\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 35\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUM3QixnREFBZ0Q7QUFDcEI7QUFDOEI7QUFDaEM7QUFFWCxTQUFTSSxRQUFRO0lBQzlCLE1BQU1DLFVBQVVILHdFQUFVQTtJQUUxQixxQkFDRTs7MEJBQ0UsOERBQUNGLGtEQUFJQTs7a0NBQ0gsOERBQUNNO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDQztvQkFBSUQsV0FBVTtvQkFBWUUsT0FBTzt3QkFBRUMsU0FBUztvQkFBaUI7OEJBQzNELENBQUNaLHdCQUFVLDhEQUFDSiw4Q0FBS0E7Ozs7NkNBQU0sOERBQUNFLDZDQUFJQTs7Ozs0QkFBRzs7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ja2V0cmlwLWFwcC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvY2tldHJpcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjUwcHggMCAxMDBweCAwXCIgfX0+XG4gICAgICAgICAgeyFzZXNzaW9uID8gPExvZ2luIC8+IDogPEhvbWUgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMb2dpbiIsInVzZVNlc3Npb24iLCJIb21lIiwiSW5kZXgiLCJzZXNzaW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"@supabase/auth-ui-react\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"@supabase/auth-ui-shared\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Login = ()=>{\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__.Auth, {\n        supabaseClient: supabase,\n        appearance: {\n            theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n        },\n        theme: \"dark\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\login.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ007QUFDWTtBQUVqRSxNQUFNRyxRQUFRLElBQU07SUFDbEIsTUFBTUMsV0FBV0YsK0VBQWlCQTtJQUVsQyxxQkFDRSw4REFBQ0YseURBQUlBO1FBQ0hLLGdCQUFnQkQ7UUFDaEJFLFlBQVk7WUFBRUMsT0FBT04sK0RBQVNBO1FBQUM7UUFDL0JNLE9BQU07Ozs7OztBQUdaO0FBRUEsaUVBQWVKLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2NrZXRyaXAtYXBwLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC11aS1yZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVTdXBhIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXNoYXJlZFwiO1xuaW1wb3J0IHsgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSB1c2VTdXBhYmFzZUNsaWVudCgpO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhcbiAgICAgIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZX1cbiAgICAgIGFwcGVhcmFuY2U9e3sgdGhlbWU6IFRoZW1lU3VwYSB9fVxuICAgICAgdGhlbWU9XCJkYXJrXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiQXV0aCIsIlRoZW1lU3VwYSIsInVzZVN1cGFiYXNlQ2xpZW50IiwiTG9naW4iLCJzdXBhYmFzZSIsInN1cGFiYXNlQ2xpZW50IiwiYXBwZWFyYW5jZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ }),

/***/ "@supabase/auth-helpers-nextjs":
/*!************************************************!*\
  !*** external "@supabase/auth-helpers-nextjs" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-nextjs");

/***/ }),

/***/ "@supabase/auth-helpers-react":
/*!***********************************************!*\
  !*** external "@supabase/auth-helpers-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-helpers-react");

/***/ }),

/***/ "@supabase/auth-ui-shared":
/*!*******************************************!*\
  !*** external "@supabase/auth-ui-shared" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@supabase/auth-ui-shared");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@supabase/auth-ui-react":
/*!******************************************!*\
  !*** external "@supabase/auth-ui-react" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@supabase/auth-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();