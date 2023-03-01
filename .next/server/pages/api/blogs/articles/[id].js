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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// const connectionString = 'mongodb+srv://user1:2bhEHe22GdtH1idX@cluster0.t27tcax.mongodb.net/blogs'\nconst connectionString = process.env.MONGODB_URI;\nasync function handler(req, res) {\n    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);\n    console.log(\"req.method: \", req.method);\n    console.log(\"req.query.id\", req.query.id);\n    const id = req.query.id;\n    if (req.method === \"GET\") {\n        // Get only one document\n        const doc = await Article.findOne({\n            _id: id\n        });\n        res.status(200).json(doc);\n    } else if (req.method === \"DELETE\") {\n        const deletedDoc = await Article.deleteOne({\n            _id: id\n        });\n        res.status(200).json(deletedDoc);\n    } else if (req.method === \"PUT\") {\n        console.log(\"id\", req.query.id);\n        console.log(req.body);\n        const updatedDoc = await Article.updateOne({\n            _id: id\n        }, req.body);\n        res.status(200).json(updatedDoc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"DELETE\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\nconst articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    content: String\n});\nconsole.log(\"Mongoose Models\", mongoose__WEBPACK_IMPORTED_MODULE_0__.models);\nconst Article = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.article || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"article\", articleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFDekQscUdBQXFHO0FBQ3JHLE1BQU1JLG1CQUFtQkMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBRWpDLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1WLGlEQUFPQSxDQUFDSTtJQUNkTyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSSxNQUFNO0lBQ3RDRixRQUFRQyxHQUFHLENBQUMsZ0JBQWdCSCxJQUFJSyxLQUFLLENBQUNDLEVBQUU7SUFFeEMsTUFBTUEsS0FBS04sSUFBSUssS0FBSyxDQUFDQyxFQUFFO0lBQ3ZCLElBQUlOLElBQUlJLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLHdCQUF3QjtRQUN4QixNQUFNRyxNQUFNLE1BQU1DLFFBQVFDLE9BQU8sQ0FBQztZQUFFQyxLQUFLSjtRQUFHO1FBQzVDTCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtJQUN6QixPQUFPLElBQUlQLElBQUlJLE1BQU0sS0FBSyxVQUFVO1FBQ2hDLE1BQU1TLGFBQWEsTUFBTUwsUUFBUU0sU0FBUyxDQUFDO1lBQUVKLEtBQUtKO1FBQUc7UUFDckRMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO0lBQ3pCLE9BQU8sSUFBSWIsSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDN0JGLFFBQVFDLEdBQUcsQ0FBQyxNQUFLSCxJQUFJSyxLQUFLLENBQUNDLEVBQUU7UUFDN0JKLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSWUsSUFBSTtRQUNwQixNQUFNQyxhQUFhLE1BQU1SLFFBQVFTLFNBQVMsQ0FBQztZQUFDUCxLQUFLSjtRQUFFLEdBQUdOLElBQUllLElBQUk7UUFDOURkLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNJO0lBQ3pCLE9BQU87UUFDSGYsSUFBSWlCLFNBQVMsQ0FBQyxTQUFTO1lBQUM7WUFBTztTQUFTO1FBQ3hDakIsSUFBSVUsTUFBTSxDQUFDLEtBQUtRLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRW5CLElBQUlJLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFFMUQsQ0FBQztBQUNMLENBQUM7QUFJRCxNQUFNZ0IsZ0JBQWdCLElBQUkxQiw0Q0FBTUEsQ0FBQztJQUM3QjJCLE9BQU9DO0lBQ1BDLFNBQVNEO0FBQ2I7QUFFQXBCLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJWLDRDQUFNQTtBQUNyQyxNQUFNZSxVQUFVZiw0Q0FBTUEsRUFBRStCLFdBQVdoQywrQ0FBS0EsQ0FBQyxXQUFXNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdG9jay1tZ210LW5leHQvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvW2lkXS5qcz81Mjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIG1vZGVsLCBtb2RlbHMsIFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiXG4vLyBjb25zdCBjb25uZWN0aW9uU3RyaW5nID0gJ21vbmdvZGIrc3J2Oi8vdXNlcjE6MmJoRUhlMjJHZHRIMWlkWEBjbHVzdGVyMC50Mjd0Y2F4Lm1vbmdvZGIubmV0L2Jsb2dzJ1xuY29uc3QgY29ubmVjdGlvblN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICBhd2FpdCBjb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcpO1xuICAgIGNvbnNvbGUubG9nKFwicmVxLm1ldGhvZDogXCIsIHJlcS5tZXRob2QpXG4gICAgY29uc29sZS5sb2coXCJyZXEucXVlcnkuaWRcIiwgcmVxLnF1ZXJ5LmlkKVxuXG4gICAgY29uc3QgaWQgPSByZXEucXVlcnkuaWRcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgICAgLy8gR2V0IG9ubHkgb25lIGRvY3VtZW50XG4gICAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IEFydGljbGUuZmluZE9uZSh7IF9pZDogaWQgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZG9jKVxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZERvYyA9IGF3YWl0IEFydGljbGUuZGVsZXRlT25lKHsgX2lkOiBpZCB9KVxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkZWxldGVkRG9jKVxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2lkJyxyZXEucXVlcnkuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgICAgICBjb25zdCB1cGRhdGVkRG9jID0gYXdhaXQgQXJ0aWNsZS51cGRhdGVPbmUoe19pZDogaWR9LCByZXEuYm9keSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXBkYXRlZERvYylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ0RFTEVURSddKVxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApXG5cbiAgICB9XG59XG5cblxuXG5jb25zdCBhcnRpY2xlU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBjb250ZW50OiBTdHJpbmcsXG59KTtcblxuY29uc29sZS5sb2coXCJNb25nb29zZSBNb2RlbHNcIiwgbW9kZWxzKVxuY29uc3QgQXJ0aWNsZSA9IG1vZGVscz8uYXJ0aWNsZSB8fCBtb2RlbCgnYXJ0aWNsZScsIGFydGljbGVTY2hlbWEpOyJdLCJuYW1lcyI6WyJjb25uZWN0IiwibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJxdWVyeSIsImlkIiwiZG9jIiwiQXJ0aWNsZSIsImZpbmRPbmUiLCJfaWQiLCJzdGF0dXMiLCJqc29uIiwiZGVsZXRlZERvYyIsImRlbGV0ZU9uZSIsImJvZHkiLCJ1cGRhdGVkRG9jIiwidXBkYXRlT25lIiwic2V0SGVhZGVyIiwiZW5kIiwiYXJ0aWNsZVNjaGVtYSIsInRpdGxlIiwiU3RyaW5nIiwiY29udGVudCIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/articles/[id].js\n");

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