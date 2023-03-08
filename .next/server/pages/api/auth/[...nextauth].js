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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                console.log(\"credentials\", credentials);\n                if (credentials.username === \"a\" && credentials.password === \"a\") {\n                    var user = {\n                        id: \"1\",\n                        name: \"J Smith\",\n                        email: \"jsmith@example.com\"\n                    };\n                }\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNrQztBQUUzRCxNQUFNRSxjQUFjO0lBQ3ZCLGlEQUFpRDtJQUNqREMsUUFBT0MsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBRXpCQyxXQUFXO1FBQ1BOLHNFQUFtQkEsQ0FBQztZQUNoQixtRUFBbUU7WUFDbkVPLE1BQU07WUFDTixnRUFBZ0U7WUFDaEUsZ0dBQWdHO1lBQ2hHLG1EQUFtRDtZQUNuRCx5RUFBeUU7WUFDekVDLGFBQWE7Z0JBQ1RDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVlDLE1BQU07b0JBQVFDLGFBQWE7Z0JBQVM7Z0JBQ25FQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ3BEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHLEVBQUU7Z0JBQzlCLG1FQUFtRTtnQkFDbkVDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlVDtnQkFDM0IsSUFBSUEsWUFBWUMsUUFBUSxLQUFLLE9BQU9ELFlBQVlLLFFBQVEsS0FBSyxLQUFLO29CQUM5RCxJQUFJSyxPQUFPO3dCQUFFQyxJQUFJO3dCQUFLWixNQUFNO3dCQUFXYSxPQUFPO29CQUFxQjtnQkFDdkUsQ0FBQztnQkFFRCxJQUFJRixNQUFNO29CQUNOLGtFQUFrRTtvQkFDbEUsT0FBT0E7Z0JBQ1gsT0FBTztvQkFDSCwrRkFBK0Y7b0JBQy9GLE9BQU8sSUFBSTtnQkFFWCwySUFBMkk7Z0JBQy9JLENBQUM7WUFDTDtRQUNKO0tBQUc7QUFDWCxFQUFDO0FBRUQsaUVBQWVuQixnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIHNlY3JldDpwcm9jZXNzLmVudi5TRUNSRVQsXG5cbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICAvLyBUaGUgbmFtZSB0byBkaXNwbGF5IG9uIHRoZSBzaWduIGluIGZvcm0gKGUuZy4gXCJTaWduIGluIHdpdGguLi5cIilcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgICAgICAgIC8vIGBjcmVkZW50aWFsc2AgaXMgdXNlZCB0byBnZW5lcmF0ZSBhIGZvcm0gb24gdGhlIHNpZ24gaW4gcGFnZS5cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc3BlY2lmeSB3aGljaCBmaWVsZHMgc2hvdWxkIGJlIHN1Ym1pdHRlZCwgYnkgYWRkaW5nIGtleXMgdG8gdGhlIGBjcmVkZW50aWFsc2Agb2JqZWN0LlxuICAgICAgICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWRlbnRpYWxzJywgY3JlZGVudGlhbHMpXG4gICAgICAgICAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnVzZXJuYW1lID09PSAnYScgJiYgY3JlZGVudGlhbHMucGFzc3dvcmQgPT09ICdhJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlciA9IHsgaWQ6IFwiMVwiLCBuYW1lOiBcIkogU21pdGhcIiwgZW1haWw6IFwianNtaXRoQGV4YW1wbGUuY29tXCIgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB5b3UgcmV0dXJuIG51bGwgdGhlbiBhbiBlcnJvciB3aWxsIGJlIGRpc3BsYXllZCBhZHZpc2luZyB0aGUgdXNlciB0byBjaGVjayB0aGVpciBkZXRhaWxzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIHRodXMgdGhlIHVzZXIgd2lsbCBiZSBzZW50IHRvIHRoZSBlcnJvciBwYWdlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBxdWVyeSBwYXJhbWV0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF1dGhPcHRpb25zIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVCIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaWQiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();