"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs/add",{

/***/ "./pages/blogs/add.jsx":
/*!*****************************!*\
  !*** ./pages/blogs/add.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddBlogPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nfunction AddBlogPage() {\n    _s();\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const saveBlog = async (data)=>{\n        const response = await fetch(\"/api/blogs/articles\", {\n            method: \"POST\",\n            mode: \"cors\",\n            cache: \"no-cache\",\n            // credentials: \"same-origin\", // include, *same-origin, omit\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // redirect: \"follow\", // manual, *follow, error\n            referrerPolicy: \"no-referrer\",\n            // serialisation\n            body: JSON.stringify(data)\n        });\n        const result = await response.json(); // deserialise\n        if (result.error) {\n            alert(\"Error: \" + result.error);\n        } else {\n            alert(\"Blog saved\");\n            window.location.href = \"/blogs\";\n        }\n        console.log(result);\n        setData(JSON.stringify(data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            margin: \"1rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit(saveBlog),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"New Blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"title\",\n                    children: \"Title\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 53\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"title\",\n                    ...register(\"title\", {\n                        required: true\n                    }),\n                    placeholder: \"Blog Title\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 105\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"category\",\n                    children: \"Category\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                    id: \"category\",\n                    ...register(\"category\", {\n                        required: true\n                    }),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"\",\n                            children: \"Select...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"news\",\n                            children: \"News\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                            value: \"life\",\n                            children: \"Life\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"content\",\n                    children: \"Category\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 58\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    id: \"text\",\n                    ...register(\"content\"),\n                    placeholder: \"About you\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 88\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: data\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 30\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/add.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(AddBlogPage, \"1FG5gjVECrFwgDnYEb1pUdZ35ms=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = AddBlogPage;\nvar _c;\n$RefreshReg$(_c, \"AddBlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9hZGQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFFM0IsU0FBU0UsY0FBYzs7SUFDbEMsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLGFBQVksRUFBRSxHQUFHSCx3REFBT0E7SUFDMUMsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1PLFdBQVcsT0FBT0YsT0FBUztRQUM3QixNQUFNRyxXQUFXLE1BQU1DLE1BQU0sdUJBQXVCO1lBQ2hEQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsT0FBTztZQUNQLDZEQUE2RDtZQUM3REMsU0FBUztnQkFDUCxnQkFBZ0I7WUFFbEI7WUFDQSxnREFBZ0Q7WUFDaERDLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEJDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1o7UUFDdkI7UUFDRixNQUFNYSxTQUFTLE1BQU1WLFNBQVNXLElBQUksSUFBTSxjQUFjO1FBQ3RELElBQUlELE9BQU9FLEtBQUssRUFBRTtZQUNkQyxNQUFNLFlBQVlILE9BQU9FLEtBQUs7UUFDbEMsT0FBTztZQUNIQyxNQUFNO1lBQ05DLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1FBQzNCLENBQUM7UUFDREMsUUFBUUMsR0FBRyxDQUFDUjtRQUNaWixRQUFRVSxLQUFLQyxTQUFTLENBQUNaO0lBQzNCO0lBRUEscUJBQ0ksOERBQUNzQjtRQUFJQyxPQUFPO1lBQUVDLFFBQVE7UUFBTztrQkFDekIsNEVBQUNDO1lBQUtDLFVBQVUzQixhQUFhRzs7OEJBQ3pCLDhEQUFDeUI7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQU1DLFNBQVE7OEJBQVE7Ozs7Ozs4QkFBYSw4REFBQ0M7Ozs7OzhCQUNyQyw4REFBQ0M7b0JBQU1DLElBQUc7b0JBQVMsR0FBR2xDLFNBQVMsU0FBUzt3QkFBRW1DLFVBQVUsSUFBSTtvQkFBQyxFQUFFO29CQUFFQyxhQUFZOzs7Ozs7OEJBQWUsOERBQUNKOzs7Ozs4QkFFekYsOERBQUNGO29CQUFNQyxTQUFROzhCQUFXOzs7Ozs7OEJBQzFCLDhEQUFDTTtvQkFBT0gsSUFBRztvQkFBWSxHQUFHbEMsU0FBUyxZQUFZO3dCQUFFbUMsVUFBVSxJQUFJO29CQUFDLEVBQUU7O3NDQUM5RCw4REFBQ0c7NEJBQU9DLE9BQU07c0NBQUc7Ozs7OztzQ0FDakIsOERBQUNEOzRCQUFPQyxPQUFNO3NDQUFPOzs7Ozs7c0NBQ3JCLDhEQUFDRDs0QkFBT0MsT0FBTTtzQ0FBTzs7Ozs7Ozs7Ozs7OzhCQUNoQiw4REFBQ1A7Ozs7OzhCQUNWLDhEQUFDRjtvQkFBTUMsU0FBUTs4QkFBVTs7Ozs7OzhCQUFnQiw4REFBQ0M7Ozs7OzhCQUMxQyw4REFBQ1E7b0JBQVNOLElBQUc7b0JBQVEsR0FBR2xDLFNBQVMsVUFBVTtvQkFBRW9DLGFBQVk7Ozs7Ozs4QkFBYyw4REFBQ0o7Ozs7OzhCQUN4RSw4REFBQ0M7b0JBQU1RLE1BQUs7Ozs7Ozs4QkFDWiw4REFBQ0M7OEJBQUd4Qzs7Ozs7OzhCQUFTLDhEQUFDOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUIsQ0FBQztHQWxEdUJqQzs7UUFDZUQsb0RBQU9BOzs7S0FEdEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dzL2FkZC5qc3g/YTlhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQmxvZ1BhZ2UoKSB7XG4gICAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBzYXZlQmxvZyA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYmxvZ3MvYXJ0aWNsZXMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICAgICAgbW9kZTogXCJjb3JzXCIsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIiwgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICAgICAgLy8gY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIiwgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gcmVkaXJlY3Q6IFwiZm9sbG93XCIsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiBcIm5vLXJlZmVycmVyXCIsIC8vIG5vLXJlZmVycmVyLCAqbm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGUsIG9yaWdpbiwgb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luLCBzYW1lLW9yaWdpbiwgc3RyaWN0LW9yaWdpbiwgc3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpbiwgdW5zYWZlLXVybFxuICAgICAgICAgICAgLy8gc2VyaWFsaXNhdGlvblxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAgIC8vIGRlc2VyaWFsaXNlXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IFwiICsgcmVzdWx0LmVycm9yKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJCbG9nIHNhdmVkXCIpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Jsb2dzXCJcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHNldERhdGEoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtJyB9fT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc2F2ZUJsb2cpfT5cbiAgICAgICAgICAgICAgICA8aDE+TmV3IEJsb2c8L2gxPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGl0bGVcIiB7Li4ucmVnaXN0ZXIoXCJ0aXRsZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBwbGFjZWhvbGRlcj1cIkJsb2cgVGl0bGVcIiAvPjxiciAvPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiB7Li4ucmVnaXN0ZXIoXCJjYXRlZ29yeVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdC4uLjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV3c1wiPk5ld3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZmVcIj5MaWZlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250ZW50XCI+Q2F0ZWdvcnk8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRcIiB7Li4ucmVnaXN0ZXIoXCJjb250ZW50XCIpfSBwbGFjZWhvbGRlcj1cIkFib3V0IHlvdVwiIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgIDxwPntkYXRhfTwvcD48YnIgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VGb3JtIiwiQWRkQmxvZ1BhZ2UiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJzZXREYXRhIiwic2F2ZUJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiaGVhZGVycyIsInJlZmVycmVyUG9saWN5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiZXJyb3IiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsIm1hcmdpbiIsImZvcm0iLCJvblN1Ym1pdCIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsImlkIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwidGV4dGFyZWEiLCJ0eXBlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogs/add.jsx\n"));

/***/ })

});