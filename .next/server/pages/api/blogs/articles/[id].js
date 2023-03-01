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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectionString = process.env.MONGODB_URI;\nasync function handler(req, res) {\n    await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(connectionString);\n    console.log(\"req.method: \", req.method);\n    console.log(\"req.query.id\", req.query.id);\n    const id = req.query.id;\n    if (req.method === \"GET\") {\n        // Get only one document\n        const doc = await Article.findOne({\n            _id: id\n        });\n        res.status(200).json(doc);\n    } else if (req.method === \"DELETE\") {\n        const deletedDoc = await Article.deleteOne({\n            _id: id\n        });\n        res.status(200).json(deletedDoc);\n    } else if (req.method === \"PUT\") {\n        console.log(\"id\", req.query.id);\n        console.log(req.body);\n        const updatedDoc = await Article.updateOne({\n            _id: id\n        }, req.body);\n        res.status(200).json(updatedDoc);\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\",\n            \"DELETE\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\nconst articleSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    content: String\n});\nconsole.log(\"Mongoose Models\", mongoose__WEBPACK_IMPORTED_MODULE_0__.models);\nconst Article = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.article || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"article\", articleSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3MvYXJ0aWNsZXMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFDekQsTUFBTUksbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFakMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTVYsaURBQU9BLENBQUNJO0lBQ2RPLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JILElBQUlJLE1BQU07SUFDdENGLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JILElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtJQUV4QyxNQUFNQSxLQUFLTixJQUFJSyxLQUFLLENBQUNDLEVBQUU7SUFDdkIsSUFBSU4sSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDdEIsd0JBQXdCO1FBQ3hCLE1BQU1HLE1BQU0sTUFBTUMsUUFBUUMsT0FBTyxDQUFDO1lBQUVDLEtBQUtKO1FBQUc7UUFDNUNMLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO0lBQ3pCLE9BQU8sSUFBSVAsSUFBSUksTUFBTSxLQUFLLFVBQVU7UUFDaEMsTUFBTVMsYUFBYSxNQUFNTCxRQUFRTSxTQUFTLENBQUM7WUFBRUosS0FBS0o7UUFBRztRQUNyREwsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0M7SUFDekIsT0FBTyxJQUFJYixJQUFJSSxNQUFNLEtBQUssT0FBTztRQUM3QkYsUUFBUUMsR0FBRyxDQUFDLE1BQUtILElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtRQUM3QkosUUFBUUMsR0FBRyxDQUFDSCxJQUFJZSxJQUFJO1FBQ3BCLE1BQU1DLGFBQWEsTUFBTVIsUUFBUVMsU0FBUyxDQUFDO1lBQUNQLEtBQUtKO1FBQUUsR0FBR04sSUFBSWUsSUFBSTtRQUM5RGQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0k7SUFDekIsT0FBTztRQUNIZixJQUFJaUIsU0FBUyxDQUFDLFNBQVM7WUFBQztZQUFPO1NBQVM7UUFDeENqQixJQUFJVSxNQUFNLENBQUMsS0FBS1EsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFbkIsSUFBSUksTUFBTSxDQUFDLFlBQVksQ0FBQztJQUMxRCxDQUFDO0FBQ0wsQ0FBQztBQUlELE1BQU1nQixnQkFBZ0IsSUFBSTFCLDRDQUFNQSxDQUFDO0lBQzdCMkIsT0FBT0M7SUFDUEMsU0FBU0Q7QUFDYjtBQUVBcEIsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQlYsNENBQU1BO0FBQ3JDLE1BQU1lLFVBQVVmLDRDQUFNQSxFQUFFK0IsV0FBV2hDLCtDQUFLQSxDQUFDLFdBQVc0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9ibG9ncy9hcnRpY2xlcy9baWRdLmpzPzUyOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCJcbmNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgYXdhaXQgY29ubmVjdChjb25uZWN0aW9uU3RyaW5nKTtcbiAgICBjb25zb2xlLmxvZyhcInJlcS5tZXRob2Q6IFwiLCByZXEubWV0aG9kKVxuICAgIGNvbnNvbGUubG9nKFwicmVxLnF1ZXJ5LmlkXCIsIHJlcS5xdWVyeS5pZClcblxuICAgIGNvbnN0IGlkID0gcmVxLnF1ZXJ5LmlkXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIC8vIEdldCBvbmx5IG9uZSBkb2N1bWVudFxuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCBBcnRpY2xlLmZpbmRPbmUoeyBfaWQ6IGlkIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRvYylcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWREb2MgPSBhd2FpdCBBcnRpY2xlLmRlbGV0ZU9uZSh7IF9pZDogaWQgfSlcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGVsZXRlZERvYylcbiAgICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZCcscmVxLnF1ZXJ5LmlkKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICAgICAgY29uc3QgdXBkYXRlZERvYyA9IGF3YWl0IEFydGljbGUudXBkYXRlT25lKHtfaWQ6IGlkfSwgcmVxLmJvZHkpXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVwZGF0ZWREb2MpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCcsICdERUxFVEUnXSlcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKVxuICAgIH1cbn1cblxuXG5cbmNvbnN0IGFydGljbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICB0aXRsZTogU3RyaW5nLFxuICAgIGNvbnRlbnQ6IFN0cmluZyxcbn0pO1xuXG5jb25zb2xlLmxvZyhcIk1vbmdvb3NlIE1vZGVsc1wiLCBtb2RlbHMpXG5jb25zdCBBcnRpY2xlID0gbW9kZWxzPy5hcnRpY2xlIHx8IG1vZGVsKCdhcnRpY2xlJywgYXJ0aWNsZVNjaGVtYSk7Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsImNvbm5lY3Rpb25TdHJpbmciLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJkb2MiLCJBcnRpY2xlIiwiZmluZE9uZSIsIl9pZCIsInN0YXR1cyIsImpzb24iLCJkZWxldGVkRG9jIiwiZGVsZXRlT25lIiwiYm9keSIsInVwZGF0ZWREb2MiLCJ1cGRhdGVPbmUiLCJzZXRIZWFkZXIiLCJlbmQiLCJhcnRpY2xlU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJjb250ZW50IiwiYXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogs/articles/[id].js\n");

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