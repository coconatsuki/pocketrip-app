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

/***/ "./pages/api/profile.ts":
/*!******************************!*\
  !*** ./pages/api/profile.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"downloadAvatar\": () => (/* binding */ downloadAvatar),\n/* harmony export */   \"getProfile\": () => (/* binding */ getProfile),\n/* harmony export */   \"getProfileServerSide\": () => (/* binding */ getProfileServerSide)\n/* harmony export */ });\nconst getProfile = async ({ supabase , setLoading , user , setUsername , setAvatarPath  })=>{\n    let username;\n    try {\n        setLoading(true);\n        const { data , error , status  } = await supabase.from(\"profiles\").select(`username, avatar_url`).eq(\"id\", user.id).single();\n        if (error && status !== 406) {\n            throw error;\n        }\n        if (data) {\n            setUsername(data.username);\n            setAvatarPath(data.avatar_url);\n            username = data.username;\n        }\n    } catch (error) {\n        alert(\"Error loading user data!\");\n        console.log(error);\n    } finally{\n        setLoading(false);\n    }\n    return username;\n};\nconst downloadAvatar = async ({ supabase , avatar_path , setAvatarUrl  })=>{\n    try {\n        const { data , error  } = await supabase.storage.from(\"avatars\").download(avatar_path);\n        if (error) {\n            throw error;\n        }\n        const url = URL.createObjectURL(data);\n        setAvatarUrl(url);\n    } catch (error) {\n        console.log(\"Error downloading image: \", error.message);\n    }\n};\nconst getProfileServerSide = async (supabase, userId)=>{\n    try {\n        const { data , error  } = await supabase.from(\"profiles\").select(`username, avatar_url`).eq(\"id\", userId).single();\n        if (error) {\n            throw error;\n        }\n        return {\n            username: data.username,\n            avatar_url: data.avatar_url\n        };\n    } catch (error) {\n        console.log(\"Error getting user data\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxhQUFhLE9BQU8sRUFDL0JDLFNBQVEsRUFDUkMsV0FBVSxFQUNWQyxLQUFJLEVBQ0pDLFlBQVcsRUFDWEMsY0FBYSxFQUNkLEdBQUs7SUFDSixJQUFJQztJQUNKLElBQUk7UUFDRkosV0FBVyxJQUFJO1FBRWYsTUFBTSxFQUFFSyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUFFLEdBQUcsTUFBTVIsU0FDbkNTLElBQUksQ0FBQyxZQUNMQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUM3QkMsRUFBRSxDQUFDLE1BQU1ULEtBQUtVLEVBQUUsRUFDaEJDLE1BQU07UUFFVCxJQUFJTixTQUFTQyxXQUFXLEtBQUs7WUFDM0IsTUFBTUQsTUFBTTtRQUNkLENBQUM7UUFFRCxJQUFJRCxNQUFNO1lBQ1JILFlBQVlHLEtBQUtELFFBQVE7WUFDekJELGNBQWNFLEtBQUtRLFVBQVU7WUFDN0JULFdBQVdDLEtBQUtELFFBQVE7UUFDMUIsQ0FBQztJQUNILEVBQUUsT0FBT0UsT0FBTztRQUNkUSxNQUFNO1FBQ05DLFFBQVFDLEdBQUcsQ0FBQ1Y7SUFDZCxTQUFVO1FBQ1JOLFdBQVcsS0FBSztJQUNsQjtJQUNBLE9BQU9JO0FBQ1QsRUFBRTtBQUVLLE1BQU1hLGlCQUFpQixPQUFPLEVBQ25DbEIsU0FBUSxFQUNSbUIsWUFBVyxFQUNYQyxhQUFZLEVBQ2IsR0FBSztJQUNKLElBQUk7UUFDRixNQUFNLEVBQUVkLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUcsTUFBTVAsU0FBU3FCLE9BQU8sQ0FDM0NaLElBQUksQ0FBQyxXQUNMYSxRQUFRLENBQUNIO1FBQ1osSUFBSVosT0FBTztZQUNULE1BQU1BLE1BQU07UUFDZCxDQUFDO1FBQ0QsTUFBTWdCLE1BQU1DLElBQUlDLGVBQWUsQ0FBQ25CO1FBQ2hDYyxhQUFhRztJQUNmLEVBQUUsT0FBT2hCLE9BQU87UUFDZFMsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QlYsTUFBTW1CLE9BQU87SUFDeEQ7QUFDRixFQUFFO0FBRUssTUFBTUMsdUJBQXVCLE9BQU8zQixVQUFVNEIsU0FBVztJQUM5RCxJQUFJO1FBQ0YsTUFBTSxFQUFFdEIsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNUCxTQUMzQlMsSUFBSSxDQUFDLFlBQ0xDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEVBQzdCQyxFQUFFLENBQUMsTUFBTWlCLFFBQ1RmLE1BQU07UUFDVCxJQUFJTixPQUFPO1lBQ1QsTUFBTUEsTUFBTTtRQUNkLENBQUM7UUFDRCxPQUFPO1lBQUVGLFVBQVVDLEtBQUtELFFBQVE7WUFBRVMsWUFBWVIsS0FBS1EsVUFBVTtRQUFDO0lBQ2hFLEVBQUUsT0FBT1AsT0FBTztRQUNkUyxRQUFRQyxHQUFHLENBQUM7SUFDZDtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb2NrZXRyaXAtYXBwLy4vcGFnZXMvYXBpL3Byb2ZpbGUudHM/OWQ5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0UHJvZmlsZSA9IGFzeW5jICh7XHJcbiAgc3VwYWJhc2UsXHJcbiAgc2V0TG9hZGluZyxcclxuICB1c2VyLFxyXG4gIHNldFVzZXJuYW1lLFxyXG4gIHNldEF2YXRhclBhdGgsXHJcbn0pID0+IHtcclxuICBsZXQgdXNlcm5hbWU7XHJcbiAgdHJ5IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciwgc3RhdHVzIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgICAuZnJvbShcInByb2ZpbGVzXCIpXHJcbiAgICAgIC5zZWxlY3QoYHVzZXJuYW1lLCBhdmF0YXJfdXJsYClcclxuICAgICAgLmVxKFwiaWRcIiwgdXNlci5pZClcclxuICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgIGlmIChlcnJvciAmJiBzdGF0dXMgIT09IDQwNikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRVc2VybmFtZShkYXRhLnVzZXJuYW1lKTtcclxuICAgICAgc2V0QXZhdGFyUGF0aChkYXRhLmF2YXRhcl91cmwpO1xyXG4gICAgICB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KFwiRXJyb3IgbG9hZGluZyB1c2VyIGRhdGEhXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcbiAgcmV0dXJuIHVzZXJuYW1lO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRvd25sb2FkQXZhdGFyID0gYXN5bmMgKHtcclxuICBzdXBhYmFzZSxcclxuICBhdmF0YXJfcGF0aCxcclxuICBzZXRBdmF0YXJVcmwsXHJcbn0pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2Uuc3RvcmFnZVxyXG4gICAgICAuZnJvbShcImF2YXRhcnNcIilcclxuICAgICAgLmRvd25sb2FkKGF2YXRhcl9wYXRoKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XHJcbiAgICBzZXRBdmF0YXJVcmwodXJsKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBkb3dubG9hZGluZyBpbWFnZTogXCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlU2VydmVyU2lkZSA9IGFzeW5jIChzdXBhYmFzZSwgdXNlcklkKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKFwicHJvZmlsZXNcIilcclxuICAgICAgLnNlbGVjdChgdXNlcm5hbWUsIGF2YXRhcl91cmxgKVxyXG4gICAgICAuZXEoXCJpZFwiLCB1c2VySWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLCBhdmF0YXJfdXJsOiBkYXRhLmF2YXRhcl91cmwgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBnZXR0aW5nIHVzZXIgZGF0YVwiKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJnZXRQcm9maWxlIiwic3VwYWJhc2UiLCJzZXRMb2FkaW5nIiwidXNlciIsInNldFVzZXJuYW1lIiwic2V0QXZhdGFyUGF0aCIsInVzZXJuYW1lIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiZnJvbSIsInNlbGVjdCIsImVxIiwiaWQiLCJzaW5nbGUiLCJhdmF0YXJfdXJsIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiZG93bmxvYWRBdmF0YXIiLCJhdmF0YXJfcGF0aCIsInNldEF2YXRhclVybCIsInN0b3JhZ2UiLCJkb3dubG9hZCIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1lc3NhZ2UiLCJnZXRQcm9maWxlU2VydmVyU2lkZSIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/profile.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ \"./pages/login.tsx\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @supabase/auth-helpers-nextjs */ \"@supabase/auth-helpers-nextjs\");\n/* harmony import */ var _supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/profile */ \"./pages/api/profile.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_login__WEBPACK_IMPORTED_MODULE_5__]);\n_login__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//import styles from \"@/styles/Home.module.css\";\n\n\n\n\n\n\nfunction Index() {\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (session) {\n            router.push(\"/\");\n        }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, [\n        session\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Pocketrip\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex h-screen w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    style: {\n                        padding: \"50px 0 100px 0\"\n                    },\n                    children: !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 24\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nconst getServerSideProps = async (ctx)=>{\n    const supabase = (0,_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_6__.createServerSupabaseClient)(ctx);\n    const { data: { session  }  } = await supabase.auth.getSession();\n    if (session && session.user.id) {\n        const userId = session.user.id;\n        const { username  } = await (0,_api_profile__WEBPACK_IMPORTED_MODULE_7__.getProfileServerSide)(supabase, userId);\n        if (username) {\n            return {\n                redirect: {\n                    destination: \"/home\",\n                    permanent: false\n                }\n            };\n        } else {\n            return {\n                redirect: {\n                    destination: \"/profile\",\n                    permanent: false\n                }\n            };\n        }\n    }\n    return {\n        props: {\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDN0IsZ0RBQWdEO0FBQ1U7QUFDbEI7QUFDTjtBQUNOO0FBQytDO0FBRXRCO0FBRXRDLFNBQVNPLFFBQVE7SUFDOUIsTUFBTUMsVUFBVVAsd0VBQVVBO0lBQzFCLE1BQU1RLFNBQVNQLHNEQUFTQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlLLFNBQVM7WUFDWEMsT0FBT0MsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNELHVEQUF1RDtJQUN6RCxHQUFHO1FBQUNGO0tBQVE7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNSLGtEQUFJQTs7a0NBQ0gsOERBQUNXO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDQztvQkFBSUQsV0FBVTtvQkFBWUUsT0FBTzt3QkFBRUMsU0FBUztvQkFBaUI7OEJBQzNELENBQUNkLHlCQUFXLDhEQUFDSiw4Q0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7QUFFTSxNQUFNbUIscUJBQXFCLE9BQU9DLE1BQW1DO0lBQzFFLE1BQU1DLFdBQVdwQix5RkFBMEJBLENBQUNtQjtJQUU1QyxNQUFNLEVBQ0pFLE1BQU0sRUFBRWxCLFFBQU8sRUFBRSxHQUNsQixHQUFHLE1BQU1pQixTQUFTRSxJQUFJLENBQUNDLFVBQVU7SUFFbEMsSUFBSXBCLFdBQVdBLFFBQVFxQixJQUFJLENBQUNDLEVBQUUsRUFBRTtRQUM5QixNQUFNQyxTQUFTdkIsUUFBUXFCLElBQUksQ0FBQ0MsRUFBRTtRQUU5QixNQUFNLEVBQUVFLFNBQVEsRUFBRSxHQUNoQixNQUFNMUIsa0VBQW9CQSxDQUFDbUIsVUFBVU07UUFFdkMsSUFBSUMsVUFBVTtZQUNaLE9BQU87Z0JBQ0xDLFVBQVU7b0JBQ1JDLGFBQWE7b0JBQ2JDLFdBQVcsS0FBSztnQkFDbEI7WUFDRjtRQUNGLE9BQU87WUFDTCxPQUFPO2dCQUNMRixVQUFVO29CQUNSQyxhQUFhO29CQUNiQyxXQUFXLEtBQUs7Z0JBQ2xCO1lBQ0Y7UUFDRixDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTEMsT0FBTztRQUdQO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ja2V0cmlwLWFwcC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbi8vaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLWhlbHBlcnMtbmV4dGpzXCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGdldFByb2ZpbGVTZXJ2ZXJTaWRlIH0gZnJvbSBcIi4vYXBpL3Byb2ZpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24pIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc2Vzc2lvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9ja2V0cmlwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIHctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiNTBweCAwIDEwMHB4IDBcIiB9fT5cbiAgICAgICAgICB7IXNlc3Npb24gJiYgPExvZ2luIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHg6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQpID0+IHtcbiAgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUNsaWVudChjdHgpO1xuXG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IHNlc3Npb24gfSxcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0U2Vzc2lvbigpO1xuXG4gIGlmIChzZXNzaW9uICYmIHNlc3Npb24udXNlci5pZCkge1xuICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24udXNlci5pZDtcblxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfTogeyB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCB9ID1cbiAgICAgIGF3YWl0IGdldFByb2ZpbGVTZXJ2ZXJTaWRlKHN1cGFiYXNlLCB1c2VySWQpO1xuXG4gICAgaWYgKHVzZXJuYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9ob21lXCIsXG4gICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgZGVzdGluYXRpb246IFwiL3Byb2ZpbGVcIixcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAvLyBpbml0aWFsU2Vzc2lvbjogc2Vzc2lvbixcbiAgICAgIC8vIHNlc3Npb24sXG4gICAgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsImNyZWF0ZVNlcnZlclN1cGFiYXNlQ2xpZW50IiwiZ2V0UHJvZmlsZVNlcnZlclNpZGUiLCJJbmRleCIsInNlc3Npb24iLCJyb3V0ZXIiLCJwdXNoIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJzdXBhYmFzZSIsImRhdGEiLCJhdXRoIiwiZ2V0U2Vzc2lvbiIsInVzZXIiLCJpZCIsInVzZXJJZCIsInVzZXJuYW1lIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/auth-ui-react */ \"@supabase/auth-ui-react\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-ui-shared */ \"@supabase/auth-ui-shared\");\n/* harmony import */ var _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"@supabase/auth-helpers-react\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Login = ()=>{\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_3__.useSupabaseClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_auth_ui_react__WEBPACK_IMPORTED_MODULE_1__.Auth, {\n        supabaseClient: supabase,\n        appearance: {\n            theme: _supabase_auth_ui_shared__WEBPACK_IMPORTED_MODULE_2__.ThemeSupa\n        },\n        theme: \"dark\",\n        providers: [\n            \"google\",\n            \"facebook\"\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\"\n        }, void 0, false, void 0, void 0)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\login.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ007QUFDWTtBQUVqRSxNQUFNRyxRQUFRLElBQU07SUFDbEIsTUFBTUMsV0FBV0YsK0VBQWlCQTtJQUVsQyxxQkFDRSw4REFBQ0YseURBQUlBO1FBQ0hLLGdCQUFnQkQ7UUFDaEJFLFlBQVk7WUFBRUMsT0FBT04sK0RBQVNBO1FBQUM7UUFDL0JNLE9BQU07UUFDTkMsV0FBVztZQUFDO1lBQVU7U0FBVztRQUNqQ0Msd0JBQVUsOERBQUNDO1lBQU1DLE1BQUs7Ozs7Ozs7QUFHNUI7QUFFQSxpRUFBZVIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvY2tldHJpcC1hcHAvLi9wYWdlcy9sb2dpbi50c3g/NzI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoIH0gZnJvbSBcIkBzdXBhYmFzZS9hdXRoLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVN1cGEgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtdWktc2hhcmVkXCI7XG5pbXBvcnQgeyB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aFxuICAgICAgc3VwYWJhc2VDbGllbnQ9e3N1cGFiYXNlfVxuICAgICAgYXBwZWFyYW5jZT17eyB0aGVtZTogVGhlbWVTdXBhIH19XG4gICAgICB0aGVtZT1cImRhcmtcIlxuICAgICAgcHJvdmlkZXJzPXtbXCJnb29nbGVcIiwgXCJmYWNlYm9va1wiXX1cbiAgICAgIGNoaWxkcmVuPXs8aW5wdXQgdHlwZT1cInRleHRcIiAvPn1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiQXV0aCIsIlRoZW1lU3VwYSIsInVzZVN1cGFiYXNlQ2xpZW50IiwiTG9naW4iLCJzdXBhYmFzZSIsInN1cGFiYXNlQ2xpZW50IiwiYXBwZWFyYW5jZSIsInRoZW1lIiwicHJvdmlkZXJzIiwiY2hpbGRyZW4iLCJpbnB1dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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