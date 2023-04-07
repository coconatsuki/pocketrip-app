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

/***/ "./pages/api/profile.ts":
/*!******************************!*\
  !*** ./pages/api/profile.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"downloadAvatar\": function() { return /* binding */ downloadAvatar; },\n/* harmony export */   \"getProfile\": function() { return /* binding */ getProfile; }\n/* harmony export */ });\nconst getProfile = async (param)=>{\n    let { supabase , setLoading , user , setUsername , setAvatarPath  } = param;\n    try {\n        setLoading(true);\n        const { data: data1 , error , status  } = await supabase.from(\"profiles\").select(\"username, avatar_url\").eq(\"id\", user.id).single();\n        if (error && status !== 406) {\n            throw error;\n        }\n        if (data1) {\n            setUsername(data1.username);\n            setAvatarPath(data1.avatar_url);\n        }\n    } catch (error) {\n        alert(\"Error loading user data!\");\n        console.log(error);\n    } finally{\n        setLoading(false);\n    }\n    if (data) return data.username;\n};\nconst downloadAvatar = async (param)=>{\n    let { supabase , avatar_path , setAvatarUrl  } = param;\n    try {\n        const { data: data1 , error  } = await supabase.storage.from(\"avatars\").download(avatar_path);\n        if (error) {\n            throw error;\n        }\n        const url = URL.createObjectURL(data1);\n        setAvatarUrl(url);\n    } catch (error) {\n        console.log(\"Error downloading image: \", error.message);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGFBQWEsZUFNcEI7UUFOMkIsRUFDL0JDLFNBQVEsRUFDUkMsV0FBVSxFQUNWQyxLQUFJLEVBQ0pDLFlBQVcsRUFDWEMsY0FBYSxFQUNkO0lBQ0MsSUFBSTtRQUNGSCxXQUFXLElBQUk7UUFFZixNQUFNLEVBQUVJLE1BQUFBLE1BQUksRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUUsR0FBRyxNQUFNUCxTQUNuQ1EsSUFBSSxDQUFDLFlBQ0xDLE1BQU0sQ0FBRSx3QkFDUkMsRUFBRSxDQUFDLE1BQU1SLEtBQUtTLEVBQUUsRUFDaEJDLE1BQU07UUFFVCxJQUFJTixTQUFTQyxXQUFXLEtBQUs7WUFDM0IsTUFBTUQsTUFBTTtRQUNkLENBQUM7UUFFRCxJQUFJRCxPQUFNO1lBQ1JGLFlBQVlFLE1BQUtRLFFBQVE7WUFDekJULGNBQWNDLE1BQUtTLFVBQVU7UUFDL0IsQ0FBQztJQUNILEVBQUUsT0FBT1IsT0FBTztRQUNkUyxNQUFNO1FBQ05DLFFBQVFDLEdBQUcsQ0FBQ1g7SUFDZCxTQUFVO1FBQ1JMLFdBQVcsS0FBSztJQUNsQjtJQUNBLElBQUlJLE1BQU0sT0FBT0EsS0FBS1EsUUFBUTtBQUNoQyxFQUFFO0FBRUssTUFBTUssaUJBQWlCLGVBSXhCO1FBSitCLEVBQ25DbEIsU0FBUSxFQUNSbUIsWUFBVyxFQUNYQyxhQUFZLEVBQ2I7SUFDQyxJQUFJO1FBQ0YsTUFBTSxFQUFFZixNQUFBQSxNQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHLE1BQU1OLFNBQVNxQixPQUFPLENBQzNDYixJQUFJLENBQUMsV0FDTGMsUUFBUSxDQUFDSDtRQUNaLElBQUliLE9BQU87WUFDVCxNQUFNQSxNQUFNO1FBQ2QsQ0FBQztRQUNELE1BQU1pQixNQUFNQyxJQUFJQyxlQUFlLENBQUNwQjtRQUNoQ2UsYUFBYUc7SUFDZixFQUFFLE9BQU9qQixPQUFPO1FBQ2RVLFFBQVFDLEdBQUcsQ0FBQyw2QkFBNkJYLE1BQU1vQixPQUFPO0lBQ3hEO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvcHJvZmlsZS50cz85ZDkyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKHtcclxuICBzdXBhYmFzZSxcclxuICBzZXRMb2FkaW5nLFxyXG4gIHVzZXIsXHJcbiAgc2V0VXNlcm5hbWUsXHJcbiAgc2V0QXZhdGFyUGF0aCxcclxufSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHN0YXR1cyB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgLmZyb20oXCJwcm9maWxlc1wiKVxyXG4gICAgICAuc2VsZWN0KGB1c2VybmFtZSwgYXZhdGFyX3VybGApXHJcbiAgICAgIC5lcShcImlkXCIsIHVzZXIuaWQpXHJcbiAgICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgICBpZiAoZXJyb3IgJiYgc3RhdHVzICE9PSA0MDYpIHtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgc2V0VXNlcm5hbWUoZGF0YS51c2VybmFtZSk7XHJcbiAgICAgIHNldEF2YXRhclBhdGgoZGF0YS5hdmF0YXJfdXJsKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgYWxlcnQoXCJFcnJvciBsb2FkaW5nIHVzZXIgZGF0YSFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH1cclxuICBpZiAoZGF0YSkgcmV0dXJuIGRhdGEudXNlcm5hbWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZG93bmxvYWRBdmF0YXIgPSBhc3luYyAoe1xyXG4gIHN1cGFiYXNlLFxyXG4gIGF2YXRhcl9wYXRoLFxyXG4gIHNldEF2YXRhclVybCxcclxufSkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5zdG9yYWdlXHJcbiAgICAgIC5mcm9tKFwiYXZhdGFyc1wiKVxyXG4gICAgICAuZG93bmxvYWQoYXZhdGFyX3BhdGgpO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcclxuICAgIHNldEF2YXRhclVybCh1cmwpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm9yIGRvd25sb2FkaW5nIGltYWdlOiBcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZ2V0UHJvZmlsZSIsInN1cGFiYXNlIiwic2V0TG9hZGluZyIsInVzZXIiLCJzZXRVc2VybmFtZSIsInNldEF2YXRhclBhdGgiLCJkYXRhIiwiZXJyb3IiLCJzdGF0dXMiLCJmcm9tIiwic2VsZWN0IiwiZXEiLCJpZCIsInNpbmdsZSIsInVzZXJuYW1lIiwiYXZhdGFyX3VybCIsImFsZXJ0IiwiY29uc29sZSIsImxvZyIsImRvd25sb2FkQXZhdGFyIiwiYXZhdGFyX3BhdGgiLCJzZXRBdmF0YXJVcmwiLCJzdG9yYWdlIiwiZG93bmxvYWQiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/profile.ts\n"));

/***/ })

});