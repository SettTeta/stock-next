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
exports.id = "pages/api/blogs/articles/[id]";
exports.ids = ["pages/api/blogs/articles/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/blogs/articles/[id].js":
/*!******************************************!*\
  !*** ./pages/api/blogs/articles/[id].js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const connectionString = 'mongodb+srv://user1:2bhEHe22GdtH1idX@cluster0.t27tcax.mongodb.net/blogs'\nconst connectionString = process.env.MONGODB_URI;\nasync function handler(req, res) {\n    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);\n    console.log(\"req.method: \", req.method);\n    console.log(\"req.query.id\", req.query.id);\n    const id = req.query.id;\n    if (req.method === \"GET\") {\n        // Get only one document\n        const doc = await Article.findOne({\n            _id: id\n        });\n        res.status(200).json(doc);\n    } else if (req.method === \"DELETE\") {\n        const deletedDoc = await Article.deleteOne({\n            _id: id\n        });\n        res.status(200).json(deletedDoc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"DELETE\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\nconst articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    content: String\n});\nconsole.log(\"Mongoose Models\", mongoose__WEBPACK_IMPORTED_MODULE_0__.models);\nconst Article = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.article || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"article\", articleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFDekQscUdBQXFHO0FBQ3JHLE1BQU1JLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRWpDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1WLGlEQUFPQSxDQUFDSTtJQUNkTyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSSxNQUFNO0lBQ3RDRixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSyxLQUFLLENBQUNDLEVBQUU7SUFFeEMsTUFBTUEsS0FBS04sSUFBSUssS0FBSyxDQUFDQyxFQUFFO0lBQ3ZCLElBQUlOLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLHdCQUF3QjtRQUN4QixNQUFNRyxNQUFNLE1BQU1DLFFBQVFDLE9BQU8sQ0FBQztZQUFFQyxLQUFLSjtRQUFHO1FBQzVDTCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtJQUN6QixPQUFPLElBQUlQLElBQUlJLE1BQU0sS0FBSyxVQUFVO1FBQ2hDLE1BQU1TLGFBQWEsTUFBTUwsUUFBUU0sU0FBUyxDQUFDO1lBQUVKLEtBQUtKO1FBQUc7UUFDckRMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO0lBQ3pCLE9BQU87UUFDSFosSUFBSWMsU0FBUyxDQUFDLFNBQVM7WUFBQztZQUFPO1NBQVM7UUFDeENkLElBQUlVLE1BQU0sQ0FBQyxLQUFLSyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUVoQixJQUFJSSxNQUFNLENBQUMsWUFBWSxDQUFDO0lBRTFELENBQUM7QUFDTCxDQUFDO0FBSUQsTUFBTWEsZ0JBQWdCLElBQUl2Qiw0Q0FBTUEsQ0FBQztJQUM3QndCLE9BQU9DO0lBQ1BDLFNBQVNEO0FBQ2I7QUFFQWpCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWLDRDQUFNQTtBQUNyQyxNQUFNZSxVQUFVZiw0Q0FBTUEsRUFBRTRCLFdBQVc3QiwrQ0FBS0EsQ0FBQyxXQUFXeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1tZ210LW5leHQvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvW2lkXS5qcz81Mjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIG1vZGVsLCBtb2RlbHMsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiXG4vLyBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gJ21vbmdvZGIrc3J2Oi8vdXNlcjE6MmJoRUhlMjJHZHRIMWlkWEBjbHVzdGVyMC50Mjd0Y2F4Lm1vbmdvZGIubmV0L2Jsb2dzJ1xuY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBhd2FpdCBjb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKFwicmVxLm1ldGhvZDogXCIsIHJlcS5tZXRob2QpXG4gICAgY29uc29sZS5sb2coXCJyZXEucXVlcnkuaWRcIiwgcmVxLnF1ZXJ5LmlkKVxuXG4gICAgY29uc3QgaWQgPSByZXEucXVlcnkuaWRcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gR2V0IG9ubHkgb25lIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IEFydGljbGUuZmluZE9uZSh7IF9pZDogaWQgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZG9jKVxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZERvYyA9IGF3YWl0IEFydGljbGUuZGVsZXRlT25lKHsgX2lkOiBpZCB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkZWxldGVkRG9jKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnREVMRVRFJ10pXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IE5vdCBBbGxvd2VkYClcblxuICAgIH1cbn1cblxuXG5cbmNvbnN0IGFydGljbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIGNvbnRlbnQ6IFN0cmluZyxcbn0pO1xuXG5jb25zb2xlLmxvZyhcIk1vbmdvb3NlIE1vZGVsc1wiLCBtb2RlbHMpXG5jb25zdCBBcnRpY2xlID0gbW9kZWxzPy5hcnRpY2xlIHx8IG1vZGVsKCdhcnRpY2xlJywgYXJ0aWNsZVNjaGVtYSk7Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJkb2MiLCJBcnRpY2xlIiwiZmluZE9uZSIsIl9pZCIsInN0YXR1cyIsImpzb24iLCJkZWxldGVkRG9jIiwiZGVsZXRlT25lIiwic2V0SGVhZGVyIiwiZW5kIiwiYXJ0aWNsZVNjaGVtYSIsInRpdGxlIiwiU3RyaW5nIiwiY29udGVudCIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/articles/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogs/articles/[id].js"));
module.exports = __webpack_exports__;

})();