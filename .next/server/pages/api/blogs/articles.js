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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectionString = process.env.MONGODB_URI;\nasync function handler(req, res) {\n    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);\n    console.log(\"req.method: \", req.method);\n    if (req.method === \"GET\") {\n        const docs = await Article.find();\n        res.status(200).json(docs);\n    } else if (req.method === \"POST\") {\n        console.log(typeof req.body);\n        // res.status(200).json(req.body)\n        const doc = await Article.create(req.body);\n        res.status(201).json(doc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"POST\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\nconst articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    content: String\n});\nconsole.log(\"Mongoose Models\", mongoose__WEBPACK_IMPORTED_MODULE_0__.models);\nconst Article = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.article || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"article\", articleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBQ3pELE1BQU1JLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBR2pDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1WLGlEQUFPQSxDQUFDSTtJQUNkTyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSSxNQUFNO0lBRXRDLElBQUlKLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLE1BQU1DLE9BQU8sTUFBTUMsUUFBUUMsSUFBSTtRQUMvQk4sSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7SUFDekIsT0FBTyxJQUFJTCxJQUFJSSxNQUFNLEtBQUssUUFBUTtRQUM5QkYsUUFBUUMsR0FBRyxDQUFDLE9BQU9ILElBQUlVLElBQUk7UUFDM0IsaUNBQWlDO1FBQ2pDLE1BQU1DLE1BQU0sTUFBTUwsUUFBUU0sTUFBTSxDQUFDWixJQUFJVSxJQUFJO1FBQ3pDVCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtJQUN6QixPQUFPO1FBQ0hWLElBQUlZLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBTztTQUFPO1FBQ3RDWixJQUFJTyxNQUFNLENBQUMsS0FBS00sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFZCxJQUFJSSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzFELENBQUM7QUFDTCxDQUFDO0FBSUQsTUFBTVcsZ0JBQWdCLElBQUlyQiw0Q0FBTUEsQ0FBQztJQUM3QnNCLE9BQU9DO0lBQ1BDLFNBQVNEO0FBQ2I7QUFFQWYsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlYsNENBQU1BO0FBQ3JDLE1BQU1hLFVBQVViLDRDQUFNQSxFQUFFMEIsV0FBVzNCLCtDQUFLQSxDQUFDLFdBQVd1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9ibG9ncy9hcnRpY2xlcy9pbmRleC5qcz82NjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIG1vZGVsLCBtb2RlbHMsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiXG5jb25zdCBjb25uZWN0aW9uU3RyaW5nID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgYXdhaXQgY29ubmVjdChjb25uZWN0aW9uU3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyhcInJlcS5tZXRob2Q6IFwiLCByZXEubWV0aG9kKVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBBcnRpY2xlLmZpbmQoKVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkb2NzKVxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZihyZXEuYm9keSkpXG4gICAgICAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlcS5ib2R5KVxuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCBBcnRpY2xlLmNyZWF0ZShyZXEuYm9keSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oZG9jKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUE9TVCddKVxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgfVxufVxuXG5cblxuY29uc3QgYXJ0aWNsZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgY29udGVudDogU3RyaW5nLFxufSk7XG5cbmNvbnNvbGUubG9nKFwiTW9uZ29vc2UgTW9kZWxzXCIsIG1vZGVscylcbmNvbnN0IEFydGljbGUgPSBtb2RlbHM/LmFydGljbGUgfHwgbW9kZWwoJ2FydGljbGUnLCBhcnRpY2xlU2NoZW1hKTsiXSwibmFtZXMiOlsiY29ubmVjdCIsIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiY29ubmVjdGlvblN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwiZG9jcyIsIkFydGljbGUiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsImJvZHkiLCJkb2MiLCJjcmVhdGUiLCJzZXRIZWFkZXIiLCJlbmQiLCJhcnRpY2xlU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJjb250ZW50IiwiYXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/articles/index.js\n");

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