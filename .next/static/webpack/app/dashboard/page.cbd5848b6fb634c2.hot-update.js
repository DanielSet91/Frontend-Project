"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const links = [\n        {\n            name: \"dashboard\",\n            url: \"/dashboard\"\n        },\n        {\n            name: \"team\",\n            url: \"/team\"\n        },\n        {\n            name: \"workspaces\",\n            url: \"/workspaces\"\n        }\n    ];\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().linksContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/logo.png\",\n                                alt: \"Logo\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        links.map((link, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: link.url,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                                children: link.name\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logout-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbar),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().linksContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/logo.png\",\n                            alt: \"Logo\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/login\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Navbar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDeUM7QUFDWjtBQUN5QjtBQUV2QyxTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0osMkRBQVVBO0lBQ3BDLE1BQU1LLFFBQVE7UUFDWjtZQUNFQyxNQUFNO1lBQ05DLEtBQUs7UUFDUDtRQUNBO1lBQ0VELE1BQU07WUFDTkMsS0FBSztRQUNQO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7S0FDRDtJQUVELElBQUlILFNBQVM7UUFDWCxxQkFDRSw4REFBQ0k7WUFBSUMsV0FBV1gsa0VBQWE7OzhCQUMzQiw4REFBQ2E7b0JBQUlGLFdBQVdYLDBFQUFxQjs7c0NBQ25DLDhEQUFDZTs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQVlDLEtBQUk7Z0NBQU9SLFdBQVdYLGdFQUFXOzs7Ozs7Ozs7Ozt3QkFFdkRPLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzs0QkFDaEIscUJBQ0UsOERBQUN0QixpREFBSUE7Z0NBQWFlLE1BQU1NLEtBQUtiLEdBQUc7Z0NBQUVFLFdBQVdYLG1FQUFjOzBDQUN4RHNCLEtBQUtkLElBQUk7K0JBRERlOzs7Ozt3QkFJZjs7Ozs7Ozs4QkFFRiw4REFBQ1Y7b0JBQUlGLFdBQVU7OEJBQ2IsNEVBQUNjO3dCQUFPZCxXQUFXWCxtRUFBYzt3QkFBRTBCLFNBQVN2QixvREFBT0E7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTTdELE9BQU87UUFDTCxxQkFDRSw4REFBQ087WUFBSUMsV0FBV1gsa0VBQWE7c0JBQzNCLDRFQUFDYTtnQkFBSUYsV0FBV1gsMEVBQXFCOztrQ0FDckMsOERBQUNlO3dCQUFFQyxNQUFLO2tDQUNKLDRFQUFDQzs0QkFBSUMsS0FBSTs0QkFBWUMsS0FBSTs0QkFBT1IsV0FBV1gsZ0VBQVc7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ0MsaURBQUlBO3dCQUFDZSxNQUFLO3dCQUFTTCxXQUFXWCxtRUFBYztrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNdkQ7QUFDRjtHQXJEd0JJOztRQUNJRix1REFBVUE7OztLQURkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanM/MTM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiZGFzaGJvYXJkXCIsXG4gICAgICB1cmw6IFwiL2Rhc2hib2FyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ0ZWFtXCIsXG4gICAgICB1cmw6IFwiL3RlYW1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwid29ya3NwYWNlc1wiLFxuICAgICAgdXJsOiBcIi93b3Jrc3BhY2VzXCIsXG4gICAgfSxcbiAgXTtcblxuICBpZiAoc2Vzc2lvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3NDb250YWluZXJ9PlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gaHJlZj17bGluay51cmx9IGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9PlxuICAgICAgICAgICAgICAgIHtsaW5rLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ291dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9IG9uQ2xpY2s9e3NpZ25PdXR9PlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZiYXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmtzQ29udGFpbmVyfT5cbiAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfT5cbiAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTGluayIsInVzZVNlc3Npb24iLCJzaWduT3V0IiwiTmF2YmFyIiwiZGF0YSIsInNlc3Npb24iLCJsaW5rcyIsIm5hbWUiLCJ1cmwiLCJuYXYiLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJkaXYiLCJsaW5rc0NvbnRhaW5lciIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwibG9nbyIsIm1hcCIsImxpbmsiLCJpbmRleCIsIm5hdkxpbmsiLCJCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/index.js\n"));

/***/ })

});