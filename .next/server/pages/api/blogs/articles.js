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
exports.id = "pages/api/blogs/articles";
exports.ids = ["pages/api/blogs/articles"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/blogs/articles/index.js":
/*!*******************************************!*\
  !*** ./pages/api/blogs/articles/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const connectionString = 'mongodb+srv://user1:V4DpK8vNGiyrKBd4@cluster0.xzkm7.mongodb.net/blogs'\nconst connectionString = process.env.MONGODB_URI;\nasync function handler(req, res) {\n    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);\n    console.log(\"req.method: \", req.method);\n    if (req.method === \"GET\") {\n        const docs = await Article.find();\n        res.status(200).json(docs);\n    } else if (req.method === \"POST\") {\n        console.log(typeof req.body);\n        // res.status(200).json(req.body)\n        const doc = await Article.create(req.body);\n        res.status(201).json(doc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\nconst articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    content: String\n});\nconsole.log(\"Mongoose Models\", mongoose__WEBPACK_IMPORTED_MODULE_0__.models);\nconst Article = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.article || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"article\", articleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBQ3pELG1HQUFtRztBQUNuRyxNQUFNSSxtQkFBbUJDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUVqQyxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxNQUFNVixpREFBT0EsQ0FBQ0k7SUFDZE8sUUFBUUMsR0FBRyxDQUFDLGdCQUFnQkgsSUFBSUksTUFBTTtJQUV0QyxJQUFJSixJQUFJSSxNQUFNLEtBQUssT0FBTztRQUN0QixNQUFNQyxPQUFPLE1BQU1DLFFBQVFDLElBQUk7UUFDL0JOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO0lBQ3pCLE9BQU8sSUFBSUwsSUFBSUksTUFBTSxLQUFLLFFBQVE7UUFDOUJGLFFBQVFDLEdBQUcsQ0FBQyxPQUFPSCxJQUFJVSxJQUFJO1FBQzNCLGlDQUFpQztRQUNqQyxNQUFNQyxNQUFNLE1BQU1MLFFBQVFNLE1BQU0sQ0FBQ1osSUFBSVUsSUFBSTtRQUN6Q1QsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0U7SUFDekIsT0FBTztRQUNIVixJQUFJWSxTQUFTLENBQUMsU0FBUztZQUFDO1lBQU87U0FBTztRQUN0Q1osSUFBSU8sTUFBTSxDQUFDLEtBQUtNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWQsSUFBSUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUMxRCxDQUFDO0FBQ0wsQ0FBQztBQUlELE1BQU1XLGdCQUFnQixJQUFJckIsNENBQU1BLENBQUM7SUFDN0JzQixPQUFPQztJQUNQQyxTQUFTRDtBQUNiO0FBRUFmLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWLDRDQUFNQTtBQUNyQyxNQUFNYSxVQUFVYiw0Q0FBTUEsRUFBRTBCLFdBQVczQiwrQ0FBS0EsQ0FBQyxXQUFXdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1tZ210LW5leHQvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvaW5kZXguanM/NjY1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIlxuLy8gY29uc3QgY29ubmVjdGlvblN0cmluZyA9ICdtb25nb2RiK3NydjovL3VzZXIxOlY0RHBLOHZOR2l5cktCZDRAY2x1c3RlcjAueHprbTcubW9uZ29kYi5uZXQvYmxvZ3MnXG5jb25zdCBjb25uZWN0aW9uU3RyaW5nID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGF3YWl0IGNvbm5lY3QoY29ubmVjdGlvblN0cmluZyk7XG4gICAgY29uc29sZS5sb2coXCJyZXEubWV0aG9kOiBcIiwgcmVxLm1ldGhvZClcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBjb25zdCBkb2NzID0gYXdhaXQgQXJ0aWNsZS5maW5kKClcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZG9jcylcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YocmVxLmJvZHkpKVxuICAgICAgICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbihyZXEuYm9keSlcbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgQXJ0aWNsZS5jcmVhdGUocmVxLmJvZHkpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKGRvYylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BPU1QnXSlcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgIH1cbn1cblxuXG5cbmNvbnN0IGFydGljbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIGNvbnRlbnQ6IFN0cmluZyxcbn0pO1xuXG5jb25zb2xlLmxvZyhcIk1vbmdvb3NlIE1vZGVsc1wiLCBtb2RlbHMpXG5jb25zdCBBcnRpY2xlID0gbW9kZWxzPy5hcnRpY2xlIHx8IG1vZGVsKCdhcnRpY2xlJywgYXJ0aWNsZVNjaGVtYSk7Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsImRvY3MiLCJBcnRpY2xlIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJib2R5IiwiZG9jIiwiY3JlYXRlIiwic2V0SGVhZGVyIiwiZW5kIiwiYXJ0aWNsZVNjaGVtYSIsInRpdGxlIiwiU3RyaW5nIiwiY29udGVudCIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/articles/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs/articles/index.js"));
module.exports = __webpack_exports__;

})();