"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Titulo(props) {\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            props.funcaoAlerta('QUALQUER COISA'),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-21563d4e62a33c38\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"jsx-21563d4e62a33c38\",\n                    children: props.children\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASUS NB\\\\Desktop\\\\Alura\\\\ImersaoReact\\\\pages\\\\index.js\",\n                    lineNumber: 7,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS NB\\\\Desktop\\\\Alura\\\\ImersaoReact\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"21563d4e62a33c38\",\n                children: \"\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\nfunction HomePage() {\n    var testef = function testef(arg) {\n        return console.log(arg);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n            funcaoAlerta: testef,\n            children: \"Bem vindo ao nosso discord!\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS NB\\\\Desktop\\\\Alura\\\\ImersaoReact\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS NB\\\\Desktop\\\\Alura\\\\ImersaoReact\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n}\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztTQUFTQSxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO0lBQ3BCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztJQUNqQixNQUFNOztZQUVHQSxLQUFLLENBQUNHLFlBQVksQ0FBQyxDQUFnQjt3RkFDbkNDLENBQUc7O29IQUNDQyxDQUFFOzs4QkFBRUwsS0FBSyxDQUFDTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQyxDQUFDO0tBZlFQLE1BQU07U0FnQk5RLFFBQVEsR0FBRyxDQUFDO1FBQ1JDLE1BQU0sR0FBZixRQUFRLENBQUNBLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUNGUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sR0FBRztJQUV2QixDQUFDO0lBQ0QsTUFBTSw2RUFDREwsQ0FBRzs4RkFDQ0wsTUFBTTtZQUFDSSxZQUFZLEVBQUVLLE1BQU07c0JBQUUsQ0FBMkI7Ozs7Ozs7Ozs7O0FBSXJFLENBQUM7TUFaUUQsUUFBUTtBQWVqQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvcHMuZnVuY2FvQWxlcnRhKCdRVUFMUVVFUiBDT0lTQScpfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy5jaGlsZHJlbn08L2gxPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gICAgZnVuY3Rpb24gdGVzdGVmKGFyZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZylcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUaXR1bG8gZnVuY2FvQWxlcnRhPXt0ZXN0ZWZ9PkJlbSB2aW5kbyBhbyBub3NzbyBkaXNjb3JkITwvVGl0dWxvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIlRpdHVsbyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImZ1bmNhb0FsZXJ0YSIsImRpdiIsImgxIiwiY2hpbGRyZW4iLCJIb21lUGFnZSIsInRlc3RlZiIsImFyZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});