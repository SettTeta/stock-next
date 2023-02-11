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
exports.id = "pages/api/product/[id]";
exports.ids = ["pages/api/product/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\");\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/products.json\", \"utf8\");\n    const products = JSON.parse(fileContents);\n    const p = products.find((product)=>product.id == req.query.id);\n    console.debug(req.query.id, p);\n    if (!p) {\n        res.status(404).json({\n            message: \"Product not found\"\n        });\n        return;\n    }\n    res.status(200).json(p);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdC9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdCO0FBQ1k7QUFDckIsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsZ0JBQWdCTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUk7SUFDL0MsTUFBTUMsZUFBZSxNQUFNUixpREFBVyxDQUFDSSxnQkFBZ0Isa0JBQWtCO0lBQ3pFLE1BQU1NLFdBQVdDLEtBQUtDLEtBQUssQ0FBQ0o7SUFFNUIsTUFBTUssSUFBSUgsU0FBU0ksSUFBSSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLEVBQUUsSUFBSWQsSUFBSWUsS0FBSyxDQUFDRCxFQUFFO0lBQy9ERSxRQUFRQyxLQUFLLENBQUNqQixJQUFJZSxLQUFLLENBQUNELEVBQUUsRUFBRUg7SUFFNUIsSUFBSSxDQUFDQSxHQUFHO1FBQ05WLElBQUlpQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBb0I7UUFDcEQ7SUFDRixDQUFDO0lBQ0RuQixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9wcm9kdWN0L1tpZF0uanM/MjdjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIjtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIik7XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGZzLnJlYWRGaWxlKGpzb25EaXJlY3RvcnkgKyBcIi9wcm9kdWN0cy5qc29uXCIsIFwidXRmOFwiKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBKU09OLnBhcnNlKGZpbGVDb250ZW50cyk7XG5cbiAgY29uc3QgcCA9IHByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcmVxLnF1ZXJ5LmlkKTtcbiAgY29uc29sZS5kZWJ1ZyhyZXEucXVlcnkuaWQsIHApO1xuXG4gIGlmICghcCkge1xuICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJQcm9kdWN0IG5vdCBmb3VuZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICByZXMuc3RhdHVzKDIwMCkuanNvbihwKTtcbn0iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJwcm9kdWN0cyIsIkpTT04iLCJwYXJzZSIsInAiLCJmaW5kIiwicHJvZHVjdCIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwiZGVidWciLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/product/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/product/[id].js"));
module.exports = __webpack_exports__;

})();