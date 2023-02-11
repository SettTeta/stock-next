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
exports.id = "pages/api/employee";
exports.ids = ["pages/api/employee"];
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

/***/ "(api)/./pages/api/employee/index.js":
/*!*************************************!*\
  !*** ./pages/api/employee/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    //Find the absolute path of the json directory\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/employees.json\", \"utf8\");\n    //Return the content of the data file in json format \n    res.status(200).json(JSON.parse(fileContents));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFDWTtBQUNyQixlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Qyw4Q0FBOEM7SUFDOUMsTUFBTUMsZ0JBQWdCTixnREFBUyxDQUFDUSxRQUFRQyxHQUFHLElBQUk7SUFDL0MsbUNBQW1DO0lBQ25DLE1BQU1DLGVBQWUsTUFBTVIsaURBQVcsQ0FBQ0ksZ0JBQWdCLG1CQUFtQjtJQUMxRSxxREFBcUQ7SUFDckRELElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0w7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9lbXBsb3llZS9pbmRleC5qcz85ODQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vRmluZCB0aGUgYWJzb2x1dGUgcGF0aCBvZiB0aGUganNvbiBkaXJlY3RvcnlcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScpO1xuICAvL1JlYWQgdGhlIGpzb24gZGF0YSBmaWxlIGRhdGEuanNvblxuICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy9lbXBsb3llZXMuanNvbicsICd1dGY4Jyk7XG4gIC8vUmV0dXJuIHRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGZpbGUgaW4ganNvbiBmb3JtYXQgXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKEpTT04ucGFyc2UoZmlsZUNvbnRlbnRzKSk7XG59Il0sIm5hbWVzIjpbInBhdGgiLCJwcm9taXNlcyIsImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlIiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/index.js"));
module.exports = __webpack_exports__;

})();