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
exports.id = "pages/api/employee/[id]";
exports.ids = ["pages/api/employee/[id]"];
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

/***/ "(api)/./pages/api/employee/[id].js":
/*!************************************!*\
  !*** ./pages/api/employee/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"data\");\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/employees.json\", \"utf8\");\n    const employees = JSON.parse(fileContents);\n    const p = employees.find((employee)=>employee.id == req.query.id);\n    console.debug(req.query.id, p);\n    if (!p) {\n        res.status(404).json({\n            message: \"Employee not found\"\n        });\n        return;\n    }\n    res.status(200).json(p);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZW1wbG95ZWUvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUNZO0FBQ3JCLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLGdCQUFnQk4sZ0RBQVMsQ0FBQ1EsUUFBUUMsR0FBRyxJQUFJO0lBQy9DLE1BQU1DLGVBQWUsTUFBTVIsaURBQVcsQ0FBQ0ksZ0JBQWdCLG1CQUFtQjtJQUMxRSxNQUFNTSxZQUFZQyxLQUFLQyxLQUFLLENBQUNKO0lBRTdCLE1BQU1LLElBQUlILFVBQVVJLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxFQUFFLElBQUlkLElBQUllLEtBQUssQ0FBQ0QsRUFBRTtJQUNsRUUsUUFBUUMsS0FBSyxDQUFDakIsSUFBSWUsS0FBSyxDQUFDRCxFQUFFLEVBQUVIO0lBRTVCLElBQUksQ0FBQ0EsR0FBRztRQUNOVixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO1FBQ3JEO0lBQ0YsQ0FBQztJQUNEbkIsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNSO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1tZ210LW5leHQvLi9wYWdlcy9hcGkvZW1wbG95ZWUvW2lkXS5qcz9kZTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gXCJmc1wiO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBqc29uRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoanNvbkRpcmVjdG9yeSArIFwiL2VtcGxveWVlcy5qc29uXCIsIFwidXRmOFwiKTtcbiAgY29uc3QgZW1wbG95ZWVzID0gSlNPTi5wYXJzZShmaWxlQ29udGVudHMpO1xuXG4gIGNvbnN0IHAgPSBlbXBsb3llZXMuZmluZCgoZW1wbG95ZWUpID0+IGVtcGxveWVlLmlkID09IHJlcS5xdWVyeS5pZCk7XG4gIGNvbnNvbGUuZGVidWcocmVxLnF1ZXJ5LmlkLCBwKTtcblxuICBpZiAoIXApIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiRW1wbG95ZWUgbm90IGZvdW5kXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHApO1xufSJdLCJuYW1lcyI6WyJwYXRoIiwicHJvbWlzZXMiLCJmcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZSIsImVtcGxveWVlcyIsIkpTT04iLCJwYXJzZSIsInAiLCJmaW5kIiwiZW1wbG95ZWUiLCJpZCIsInF1ZXJ5IiwiY29uc29sZSIsImRlYnVnIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/employee/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/employee/[id].js"));
module.exports = __webpack_exports__;

})();