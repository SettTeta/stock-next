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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                console.log(\"credentials\", credentials);\n                if (credentials.username === \"a\" && credentials.password === \"a\") {\n                    var user = {\n                        id: \"1\",\n                        name: \"J Smith\",\n                        email: \"jsmith@example.com\"\n                    };\n                }\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNrQztBQUUzRCxNQUFNRSxjQUFjO0lBQ3ZCLGlEQUFpRDtJQUNqREMsV0FBVztRQUNQRixzRUFBbUJBLENBQUM7WUFDaEIsbUVBQW1FO1lBQ25FRyxNQUFNO1lBQ04sZ0VBQWdFO1lBQ2hFLGdHQUFnRztZQUNoRyxtREFBbUQ7WUFDbkQseUVBQXlFO1lBQ3pFQyxhQUFhO2dCQUNUQyxVQUFVO29CQUFFQyxPQUFPO29CQUFZQyxNQUFNO29CQUFRQyxhQUFhO2dCQUFTO2dCQUNuRUMsVUFBVTtvQkFBRUgsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNwRDtZQUNBLE1BQU1HLFdBQVVOLFdBQVcsRUFBRU8sR0FBRyxFQUFFO2dCQUM5QixtRUFBbUU7Z0JBQ25FQyxRQUFRQyxHQUFHLENBQUMsZUFBZVQ7Z0JBQzNCLElBQUlBLFlBQVlDLFFBQVEsS0FBSyxPQUFPRCxZQUFZSyxRQUFRLEtBQUssS0FBSztvQkFDOUQsSUFBSUssT0FBTzt3QkFBRUMsSUFBSTt3QkFBS1osTUFBTTt3QkFBV2EsT0FBTztvQkFBcUI7Z0JBQ3ZFLENBQUM7Z0JBRUQsSUFBSUYsTUFBTTtvQkFDTixrRUFBa0U7b0JBQ2xFLE9BQU9BO2dCQUNYLE9BQU87b0JBQ0gsK0ZBQStGO29CQUMvRixPQUFPLElBQUk7Z0JBRVgsMklBQTJJO2dCQUMvSSxDQUFDO1lBQ0w7UUFDSjtLQUFHO0FBQ1gsRUFBQztBQUVELGlFQUFlZixnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N0b2NrLW1nbXQtbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gICAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgICAgICAgIC8vIFRoZSBuYW1lIHRvIGRpc3BsYXkgb24gdGhlIHNpZ24gaW4gZm9ybSAoZS5nLiBcIlNpZ24gaW4gd2l0aC4uLlwiKVxuICAgICAgICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxuICAgICAgICAgICAgLy8gYGNyZWRlbnRpYWxzYCBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxuICAgICAgICAgICAgLy8gWW91IGNhbiBzcGVjaWZ5IHdoaWNoIGZpZWxkcyBzaG91bGQgYmUgc3VibWl0dGVkLCBieSBhZGRpbmcga2V5cyB0byB0aGUgYGNyZWRlbnRpYWxzYCBvYmplY3QuXG4gICAgICAgICAgICAvLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cbiAgICAgICAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBsb2dpYyBoZXJlIHRvIGxvb2sgdXAgdGhlIHVzZXIgZnJvbSB0aGUgY3JlZGVudGlhbHMgc3VwcGxpZWRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlZGVudGlhbHMnLCBjcmVkZW50aWFscylcbiAgICAgICAgICAgICAgICBpZiAoY3JlZGVudGlhbHMudXNlcm5hbWUgPT09ICdhJyAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gJ2EnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VyID0geyBpZDogXCIxXCIsIG5hbWU6IFwiSiBTbWl0aFwiLCBlbWFpbDogXCJqc21pdGhAZXhhbXBsZS5jb21cIiB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHlvdSByZXR1cm4gbnVsbCB0aGVuIGFuIGVycm9yIHdpbGwgYmUgZGlzcGxheWVkIGFkdmlzaW5nIHRoZSB1c2VyIHRvIGNoZWNrIHRoZWlyIGRldGFpbHMuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhbHNvIFJlamVjdCB0aGlzIGNhbGxiYWNrIHdpdGggYW4gRXJyb3IgdGh1cyB0aGUgdXNlciB3aWxsIGJlIHNlbnQgdG8gdGhlIGVycm9yIHBhZ2Ugd2l0aCB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHF1ZXJ5IHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSldLFxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwidXNlciIsImlkIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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