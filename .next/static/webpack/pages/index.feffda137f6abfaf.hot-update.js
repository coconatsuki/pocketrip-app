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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/account */ \"./pages/components/account.tsx\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const session = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const supabase = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient)();\n    const user = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [avatar_path, setAvatarPath] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [uploadingAvatar, setUploadingAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getProfile();\n    }, [\n        session\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (avatar_path) downloadAvatar(avatar_path);\n    }, [\n        avatar_path\n    ]);\n    const getProfile = async ()=>{\n        try {\n            setLoading(true);\n            const { data , error , status  } = await supabase.from(\"profiles\").select(\"username, avatar_url\").eq(\"id\", user.id).single();\n            if (error && status !== 406) {\n                throw error;\n            }\n            if (data) {\n                setUsername(data.username);\n                setAvatarPath(data.avatar_url);\n            }\n        } catch (error) {\n            alert(\"Error loading user data!\");\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const updateProfile = async (user)=>{\n        try {\n            setLoading(true);\n            const updates = {\n                id: user.id,\n                username,\n                avatar_url,\n                updated_at: new Date().toISOString()\n            };\n            const { error  } = await supabase.from(\"profiles\").upsert(updates);\n            if (error) throw error;\n            alert(\"Profile updated!\");\n        } catch (error) {\n            alert(\"Error updating the data!\");\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const downloadAvatar = async (path)=>{\n        try {\n            const { data , error  } = await supabase.storage.from(\"avatars\").download(path);\n            if (error) {\n                throw error;\n            }\n            const avatarUrl = URL.createObjectURL(data);\n            setAvatarUrl(avatarUrl);\n        } catch (error) {\n            console.log(\"Error downloading image: \", error);\n        }\n    };\n    const onAvatarUpload = async (newAvatarUrl)=>{\n        setAvatarUrl(newAvatarUrl);\n        updateProfile(user);\n    };\n    const uploadAvatar = async (event)=>{\n        try {\n            setUploadingAvatar(true);\n            if (!event.target.files || event.target.files.length === 0) {\n                throw new Error(\"You must select an image to upload.\");\n            }\n            const file = event.target.files[0];\n            const fileExt = file.name.split(\".\").pop();\n            const fileName = \"\".concat(user.uid, \".\").concat(fileExt);\n            const filePath = \"\".concat(fileName);\n            const { error: uploadError  } = await supabase.storage.from(\"avatars\").upload(filePath, file, {\n                upsert: true\n            });\n            if (uploadError) {\n                throw uploadError;\n            }\n            onAvatarUpload(filePath);\n        } catch (error) {\n            alert(\"Error uploading avatar!\");\n            console.log(error);\n        } finally{\n            setUploadingAvatar(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !username ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_account__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            session: session,\n            supabase: supabase,\n            user: user,\n            loading: loading,\n            username: username,\n            setUsername: setUsername,\n            avatarUrl: avatar_url,\n            setAvatarUrl: setAvatarUrl,\n            updateProfile: updateProfile,\n            downloadAvatar: downloadAvatar,\n            onAvatarUpload: onAvatarUpload,\n            uploadAvatar: uploadAvatar,\n            uploadingAvatar: uploadingAvatar\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n            lineNumber: 126,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"WELCOME \".concat(username)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 143,\n                    columnNumber: 11\n                }, this),\n                avatar_url && !uploadingAvatar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-50 h-50 relative\",\n                    style: {\n                        width: \"50px\",\n                        height: \"200px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: avatar_url,\n                        fill: true,\n                        sizes: \"(max-width: 768px) 200px, (max-width: 1200px) 400px\",\n                        alt: \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n                    lineNumber: 145,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\natsu\\\\OneDrive\\\\CODE\\\\pocketrip-app\\\\pages\\\\home.tsx\",\n            lineNumber: 142,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"rcj7yn+ou0JBBHvfSsJLnReUzrA=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient,\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = Home;\n{\n/* <Image src={avatar_url} width={400} height={400} alt=\"avatar\" /> */ }{\n/* <img\r\nsrc={avatar_url}\r\nalt=\"Avatar\"\r\nclassName=\"avatar image\"\r\nstyle={{ height: 200, width: 200 }}\r\n/> */ }var _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUUMsUUFBUTtvQkFBUTs4QkFFeEMsNEVBQUMvRCxtREFBS0E7d0JBQ0pnRSxLQUFLdkQ7d0JBQ0x3RCxJQUFJO3dCQUNKQyxPQUFNO3dCQUNOQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2dCQUtiOztBQUdQLENBQUM7R0ExSnVCbEU7O1FBQ05OLG9FQUFVQTtRQUNUSSwyRUFBaUJBO1FBQ3JCRCxpRUFBT0E7OztLQUhFRztBQTRKeEI7QUFDRSxvRUFBb0UsR0FDdEUsQ0FFQTtBQUNFOzs7OztHQUtDLEdBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/NDhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9jb21wb25lbnRzL2FjY291bnRcIjtcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJAc3VwYWJhc2UvYXV0aC1oZWxwZXJzLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVXNlciwgdXNlU3VwYWJhc2VDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBzdXBhYmFzZSA9IHVzZVN1cGFiYXNlQ2xpZW50KCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFthdmF0YXJfdXJsLCBzZXRBdmF0YXJVcmxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2F2YXRhcl9wYXRoLCBzZXRBdmF0YXJQYXRoXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1cGxvYWRpbmdBdmF0YXIsIHNldFVwbG9hZGluZ0F2YXRhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQcm9maWxlKCk7XHJcbiAgfSwgW3Nlc3Npb25dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdmF0YXJfcGF0aCkgZG93bmxvYWRBdmF0YXIoYXZhdGFyX3BhdGgpO1xyXG4gIH0sIFthdmF0YXJfcGF0aF0pO1xyXG5cclxuICBjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHN0YXR1cyB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbShcInByb2ZpbGVzXCIpXHJcbiAgICAgICAgLnNlbGVjdChgdXNlcm5hbWUsIGF2YXRhcl91cmxgKVxyXG4gICAgICAgIC5lcShcImlkXCIsIHVzZXIuaWQpXHJcbiAgICAgICAgLnNpbmdsZSgpO1xyXG5cclxuICAgICAgaWYgKGVycm9yICYmIHN0YXR1cyAhPT0gNDA2KSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0QXZhdGFyUGF0aChkYXRhLmF2YXRhcl91cmwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIGxvYWRpbmcgdXNlciBkYXRhIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZmlsZSA9IGFzeW5jICh1c2VyKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlcyA9IHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBhdmF0YXJfdXJsLFxyXG4gICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oXCJwcm9maWxlc1wiKS51cHNlcnQodXBkYXRlcyk7XHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XHJcbiAgICAgIGFsZXJ0KFwiUHJvZmlsZSB1cGRhdGVkIVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgdXBkYXRpbmcgdGhlIGRhdGEhXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkb3dubG9hZEF2YXRhciA9IGFzeW5jIChwYXRoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgICAgLmZyb20oXCJhdmF0YXJzXCIpXHJcbiAgICAgICAgLmRvd25sb2FkKHBhdGgpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhdmF0YXJVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xyXG4gICAgICBzZXRBdmF0YXJVcmwoYXZhdGFyVXJsKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZG93bmxvYWRpbmcgaW1hZ2U6IFwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25BdmF0YXJVcGxvYWQgPSBhc3luYyAobmV3QXZhdGFyVXJsKSA9PiB7XHJcbiAgICBzZXRBdmF0YXJVcmwobmV3QXZhdGFyVXJsKTtcclxuICAgIHVwZGF0ZVByb2ZpbGUodXNlcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBsb2FkQXZhdGFyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRVcGxvYWRpbmdBdmF0YXIodHJ1ZSk7XHJcblxyXG4gICAgICBpZiAoIWV2ZW50LnRhcmdldC5maWxlcyB8fCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3Qgc2VsZWN0IGFuIGltYWdlIHRvIHVwbG9hZC5cIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgIGNvbnN0IGZpbGVFeHQgPSBmaWxlLm5hbWUuc3BsaXQoXCIuXCIpLnBvcCgpO1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGAke3VzZXIudWlkfS4ke2ZpbGVFeHR9YDtcclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtmaWxlTmFtZX1gO1xyXG5cclxuICAgICAgY29uc3QgeyBlcnJvcjogdXBsb2FkRXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLnN0b3JhZ2VcclxuICAgICAgICAuZnJvbShcImF2YXRhcnNcIilcclxuICAgICAgICAudXBsb2FkKGZpbGVQYXRoLCBmaWxlLCB7IHVwc2VydDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgIGlmICh1cGxvYWRFcnJvcikge1xyXG4gICAgICAgIHRocm93IHVwbG9hZEVycm9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvbkF2YXRhclVwbG9hZChmaWxlUGF0aCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydChcIkVycm9yIHVwbG9hZGluZyBhdmF0YXIhXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRVcGxvYWRpbmdBdmF0YXIoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IXVzZXJuYW1lID8gKFxyXG4gICAgICAgIDxBY2NvdW50XHJcbiAgICAgICAgICBzZXNzaW9uPXtzZXNzaW9ufVxyXG4gICAgICAgICAgc3VwYWJhc2U9e3N1cGFiYXNlfVxyXG4gICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICBzZXRVc2VybmFtZT17c2V0VXNlcm5hbWV9XHJcbiAgICAgICAgICBhdmF0YXJVcmw9e2F2YXRhcl91cmx9XHJcbiAgICAgICAgICBzZXRBdmF0YXJVcmw9e3NldEF2YXRhclVybH1cclxuICAgICAgICAgIHVwZGF0ZVByb2ZpbGU9e3VwZGF0ZVByb2ZpbGV9XHJcbiAgICAgICAgICBkb3dubG9hZEF2YXRhcj17ZG93bmxvYWRBdmF0YXJ9XHJcbiAgICAgICAgICBvbkF2YXRhclVwbG9hZD17b25BdmF0YXJVcGxvYWR9XHJcbiAgICAgICAgICB1cGxvYWRBdmF0YXI9e3VwbG9hZEF2YXRhcn1cclxuICAgICAgICAgIHVwbG9hZGluZ0F2YXRhcj17dXBsb2FkaW5nQXZhdGFyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT57YFdFTENPTUUgJHt1c2VybmFtZX1gfTwvaDE+XHJcbiAgICAgICAgICB7YXZhdGFyX3VybCAmJiAhdXBsb2FkaW5nQXZhdGFyICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNTAgaC01MCByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2F2YXRhcl91cmx9XHJcbiAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAyMDBweCwgKG1heC13aWR0aDogMTIwMHB4KSA0MDBweFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbntcclxuICAvKiA8SW1hZ2Ugc3JjPXthdmF0YXJfdXJsfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gYWx0PVwiYXZhdGFyXCIgLz4gKi9cclxufVxyXG5cclxue1xyXG4gIC8qIDxpbWdcclxuc3JjPXthdmF0YXJfdXJsfVxyXG5hbHQ9XCJBdmF0YXJcIlxyXG5jbGFzc05hbWU9XCJhdmF0YXIgaW1hZ2VcIlxyXG5zdHlsZT17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDIwMCB9fVxyXG4vPiAqL1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBY2NvdW50IiwidXNlU2Vzc2lvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVXNlciIsInVzZVN1cGFiYXNlQ2xpZW50IiwiSW1hZ2UiLCJIb21lIiwic2Vzc2lvbiIsInN1cGFiYXNlIiwidXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImF2YXRhcl91cmwiLCJzZXRBdmF0YXJVcmwiLCJhdmF0YXJfcGF0aCIsInNldEF2YXRhclBhdGgiLCJ1cGxvYWRpbmdBdmF0YXIiLCJzZXRVcGxvYWRpbmdBdmF0YXIiLCJnZXRQcm9maWxlIiwiZG93bmxvYWRBdmF0YXIiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXMiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsInNpbmdsZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZVByb2ZpbGUiLCJ1cGRhdGVzIiwidXBkYXRlZF9hdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwc2VydCIsInBhdGgiLCJzdG9yYWdlIiwiZG93bmxvYWQiLCJhdmF0YXJVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbkF2YXRhclVwbG9hZCIsIm5ld0F2YXRhclVybCIsInVwbG9hZEF2YXRhciIsImV2ZW50IiwidGFyZ2V0IiwiZmlsZXMiLCJsZW5ndGgiLCJFcnJvciIsImZpbGUiLCJmaWxlRXh0IiwibmFtZSIsInNwbGl0IiwicG9wIiwiZmlsZU5hbWUiLCJ1aWQiLCJmaWxlUGF0aCIsInVwbG9hZEVycm9yIiwidXBsb2FkIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZmlsbCIsInNpemVzIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.tsx\n"));

/***/ })

});