"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogs",{

/***/ "./pages/blogs/index.jsx":
/*!*******************************!*\
  !*** ./pages/blogs/index.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { blogs  } = param;\n    function deleteBlog(id) {\n        fetch(\"http://localhost:3000/api/blogs/articles/\".concat(id), {\n            method: \"DELETE\"\n        }).then((res)=>res.json()).then((data)=>{\n            // alert(\"Deleting \" + id)\n            window.location.reload(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Blogs\"\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Blogs\"\n            }, void 0, false, {\n                fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: blogs.map((blog)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/blogs/\".concat(blog._id),\n                                        children: blog.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>deleteBlog(blog._id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, blog._id, true, {\n                            fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                fileName: \"/Users/mingteta/Documents/School Work/Web-Dev/stock-next/pages/blogs/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDQTtBQUNlOztBQUU1QixTQUFTSSxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUO0lBRTNCLFNBQVNDLFdBQVdDLEVBQUUsRUFBRTtRQUN0QkMsTUFBTSw0Q0FBK0MsT0FBSEQsS0FDaEQ7WUFDRUUsUUFBUTtRQUNWLEdBQ0NDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRO1lBQ1osMEJBQTBCO1lBQzFCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxLQUFLO1FBQzlCO0lBRUo7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSUE7MEJBQ0gsNEVBQUNpQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFNLDRFQUFDQzs4QkFFSmYsTUFBTWdCLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUTt3QkFDaEIscUJBQ0UsOERBQUNDOzs4Q0FDQyw4REFBQ0M7OENBQ0MsNEVBQUN2QixrREFBSUE7d0NBQUN3QixNQUFNLFVBQW1CLE9BQVRILEtBQUtJLEdBQUc7a0RBQzNCSixLQUFLTCxLQUFLOzs7Ozs7Ozs7Ozs4Q0FHZiw4REFBQ087OENBQ0MsNEVBQUNHO3dDQUFPQyxTQUFTLElBQU10QixXQUFXZ0IsS0FBS0ksR0FBRztrREFBRzs7Ozs7Ozs7Ozs7OzJCQVB4Q0osS0FBS0ksR0FBRzs7Ozs7b0JBV3JCOzs7Ozs7Ozs7OzswQkFJSiw4REFBQ0c7Ozs7Ozs7QUFLUCxDQUFDO0tBN0N1QnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dzL2luZGV4LmpzeD80MTY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGJsb2dzIH0pIHtcblxuICBmdW5jdGlvbiBkZWxldGVCbG9nKGlkKSB7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYmxvZ3MvYXJ0aWNsZXMvJHtpZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gYWxlcnQoXCJEZWxldGluZyBcIiArIGlkKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcbiAgICAgIH0pXG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QmxvZ3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPkJsb2dzPC9oMT5cbiAgICAgIDx0YWJsZT48dGJvZHk+XG4gICAgICAgIHtcbiAgICAgICAgICBibG9ncy5tYXAoYmxvZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtibG9nLl9pZH0+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9ncy8ke2Jsb2cuX2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlQmxvZyhibG9nLl9pZCl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgICA8cD5cbiAgICAgIDwvcD5cblxuICAgIDwvPlxuICApXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ibG9ncy9hcnRpY2xlcy9gKVxuICBjb25zdCBibG9ncyA9IGF3YWl0IHJlcy5qc29uKClcbiAgLy8gY29uc29sZS5kZWJ1ZygnYmxvZyAxJywgYmxvZ3MpXG4gIHJldHVybiB7IHByb3BzOiB7IGJsb2dzIH0gfVxufSJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImJsb2dzIiwiZGVsZXRlQmxvZyIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRpdGxlIiwiaDEiLCJ0YWJsZSIsInRib2R5IiwibWFwIiwiYmxvZyIsInRyIiwidGQiLCJocmVmIiwiX2lkIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogs/index.jsx\n"));

/***/ })

});