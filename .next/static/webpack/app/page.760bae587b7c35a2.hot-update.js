"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Navbar/index.js":
/*!****************************************!*\
  !*** ./src/components/Navbar/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ \"(app-pages-browser)/./src/components/Navbar/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const links = [\n        {\n            name: \"dashboard\",\n            url: \"/dashboard\"\n        },\n        {\n            name: \"team\",\n            url: \"/team\"\n        },\n        {\n            name: \"workspaces\",\n            url: \"/workspaces\"\n        }\n    ];\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().linksContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/logo.png\",\n                                alt: \"Logo\",\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        links.map((link, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: link.url,\n                                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                                children: link.name\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logout-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut,\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbar),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().linksContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/dashboard\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/login\",\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navLink),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().divlogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/logo.png\",\n                            alt: \"Logo\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\VsCode\\\\MonotoringApp\\\\src\\\\components\\\\Navbar\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Navbar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDeUM7QUFDWjtBQUN5QjtBQUNDO0FBRXhDLFNBQVNNOztJQUN0QixNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcEMsTUFBTU8sUUFBUTtRQUNaO1lBQ0VDLE1BQU07WUFDTkMsS0FBSztRQUNQO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLEtBQUs7UUFDUDtLQUNEO0lBRUQsSUFBSUgsU0FBUztRQUNYLHFCQUNFLDhEQUFDSTtZQUFJQyxXQUFXYixrRUFBYTs7OEJBQzNCLDhEQUFDZTtvQkFBSUYsV0FBV2IsMEVBQXFCOztzQ0FDbkMsOERBQUNpQjs0QkFBRUMsTUFBSztzQ0FDTiw0RUFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQVlDLEtBQUk7Z0NBQU9SLFdBQVdiLGdFQUFXOzs7Ozs7Ozs7Ozt3QkFFdkRTLE1BQU1jLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzs0QkFDaEIscUJBQ0UsOERBQUN4QixpREFBSUE7Z0NBQWFpQixNQUFNTSxLQUFLYixHQUFHO2dDQUFFRSxXQUFXYixtRUFBYzswQ0FDeER3QixLQUFLZCxJQUFJOytCQUREZTs7Ozs7d0JBSWY7Ozs7Ozs7OEJBRUYsOERBQUNWO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDYzt3QkFBT2QsV0FBV2IsbUVBQWM7d0JBQUU0QixTQUFTekIsb0RBQU9BO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztJQU03RCxPQUFPO1FBQ0wscUJBQ0UsOERBQUNTO1lBQUlDLFdBQVdiLGtFQUFhO3NCQUMzQiw0RUFBQ2U7Z0JBQUlGLFdBQVdiLDBFQUFxQjs7a0NBQ3JDLDhEQUFDQyxpREFBSUE7d0JBQUNpQixNQUFLO3dCQUFhTCxXQUFXYixtRUFBYztrQ0FBRTs7Ozs7O2tDQUduRCw4REFBQ0MsaURBQUlBO3dCQUFDaUIsTUFBSzt3QkFBU0wsV0FBV2IsbUVBQWM7a0NBQUU7Ozs7OztrQ0FHL0MsOERBQUNlO3dCQUFJRixXQUFXYixtRUFBYztrQ0FDNUIsNEVBQUNtQjs0QkFBSUMsS0FBSTs0QkFBWUMsS0FBSTs0QkFBT1IsV0FBV2IsZ0VBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLOUQ7QUFDRjtHQXhEd0JNOztRQUNJSix1REFBVUE7OztLQURkSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanM/MTM1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkdyb3VwIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJkYXNoYm9hcmRcIixcbiAgICAgIHVybDogXCIvZGFzaGJvYXJkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInRlYW1cIixcbiAgICAgIHVybDogXCIvdGVhbVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJ3b3Jrc3BhY2VzXCIsXG4gICAgICB1cmw6IFwiL3dvcmtzcGFjZXNcIixcbiAgICB9LFxuICBdO1xuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rc0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSBocmVmPXtsaW5rLnVybH0gY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30+XG4gICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlua30gb25DbGljaz17c2lnbk91dH0+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua3NDb250YWluZXJ9PlxuICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiIGNsYXNzTmFtZT17c3R5bGVzLm5hdkxpbmt9PlxuICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaW5rfT5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2bG9nb30+XG4gICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIk5hdmJhciIsImRhdGEiLCJzZXNzaW9uIiwibGlua3MiLCJuYW1lIiwidXJsIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2YmFyIiwiZGl2IiwibGlua3NDb250YWluZXIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImxvZ28iLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJuYXZMaW5rIiwiYnV0dG9uIiwib25DbGljayIsImRpdmxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar/index.js\n"));

/***/ })

});