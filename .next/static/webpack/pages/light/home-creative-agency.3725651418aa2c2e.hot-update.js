"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/light/home-creative-agency",{

/***/ "./src/components/CreativeAgency/Header.jsx":
/*!**************************************************!*\
  !*** ./src/components/CreativeAgency/Header.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _Common_StatementSplitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/StatementSplitter */ \"./src/components/Common/StatementSplitter.jsx\");\n/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/loadBackgroudImages */ \"./src/common/loadBackgroudImages.js\");\n/* harmony import */ var _data_Architecture_header_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/data/Architecture/header.json */ \"./src/data/Architecture/header.json\");\n\nvar _s = $RefreshSig$();\n\n\n//= Modules\n\n\n//= Components\n\n//= Scripts\n\n//= Data\n\nconst swiperOptions = {\n    modules: [\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,\n        swiper__WEBPACK_IMPORTED_MODULE_4__.Parallax\n    ],\n    speed: 1500,\n    autoplay: {\n        delay: 5000\n    },\n    parallax: true,\n    loop: true,\n    onSwiper: function(swiper) {\n        for(var i = 0; i < swiper.slides.length; i++){\n            swiper.slides[i].querySelector(\".bg-img\").setAttribute(\"data-swiper-parallax\", 0.75 * swiper.width);\n        }\n    },\n    onResize: function(swiper) {\n        swiper.update();\n    },\n    pagination: {\n        el: \".slider-prlx .swiper-pagination\",\n        type: \"fraction\",\n        clickable: true\n    },\n    navigation: {\n        nextEl: \".slider-prlx .next-ctrl\",\n        prevEl: \".slider-prlx .prev-ctrl\"\n    }\n};\nfunction Header() {\n    _s();\n    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoadSwiper(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (loadSwiper) (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    }, [\n        loadSwiper\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"slider arch-slider slider-prlx\",\n        children: [\n            loadSwiper && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                ...swiperOptions,\n                className: \"swiper-container parallax-slider\",\n                children: _data_Architecture_header_json__WEBPACK_IMPORTED_MODULE_7__.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-img valign\",\n                            \"data-background\": item.background,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-lg-7\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-lg-3 offset-lg-1 valign\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-auto explore\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/dark/project-details1\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"circle-button hover-anim\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"rotate-circle fz-30 text-u\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                    className: \"textcircle\",\n                                                                    viewBox: \"0 0 500 500\",\n                                                                    children: [\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                                id: \"textcircle1\",\n                                                                                d: \"M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                                lineNumber: 69,\n                                                                                columnNumber: 35\n                                                                            }, this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                            lineNumber: 68,\n                                                                            columnNumber: 33\n                                                                        }, this),\n                                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textPath\", {\n                                                                                xlinkHref: \"#textcircle1\",\n                                                                                textLength: \"900\",\n                                                                                children: \"Premio - Agencia - Creativa -\"\n                                                                            }, void 0, false, {\n                                                                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                                lineNumber: 75,\n                                                                                columnNumber: 35\n                                                                            }, this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                            lineNumber: 74,\n                                                                            columnNumber: 33\n                                                                        }, this)\n                                                                    ]\n                                                                }, void 0, true, {\n                                                                    fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                    lineNumber: 67,\n                                                                    columnNumber: 31\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                lineNumber: 66,\n                                                                columnNumber: 29\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"in-circle text-center\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                    children: \"2023\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                    lineNumber: 85,\n                                                                    columnNumber: 31\n                                                                }, this)\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 29\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                        lineNumber: 65,\n                                                        columnNumber: 27\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this)\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"setting\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"controls\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ion-chevron-right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ion-chevron-left\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Proyectos\\\\geekfolio_nextjs_new\\\\src\\\\components\\\\CreativeAgency\\\\Header.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"5/9B53sdUwAqGuPzFzERsrfJEZE=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DcmVhdGl2ZUFnZW5jeS9IZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQzdCLFdBQVc7QUFDd0M7QUFDaUI7QUFDcEUsY0FBYztBQUM4QztBQUM1RCxXQUFXO0FBQ29EO0FBQy9ELFFBQVE7QUFDMkM7QUFFbkQsTUFBTWEsZ0JBQWdCO0lBQ3BCQyxTQUFTO1FBQUNSLDhDQUFVQTtRQUFFQyw0Q0FBUUE7UUFBRUMsOENBQVVBO1FBQUVDLDRDQUFRQTtLQUFDO0lBQ3JETSxPQUFPO0lBQ1BDLFVBQVU7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFVBQVUsSUFBSTtJQUNkQyxNQUFNLElBQUk7SUFDVkMsVUFBVSxTQUFVQyxNQUFNLEVBQUU7UUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlELE9BQU9FLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFRixJQUFLO1lBQzdDRCxPQUFPRSxNQUFNLENBQUNELEVBQUUsQ0FDYkcsYUFBYSxDQUFDLFdBQ2RDLFlBQVksQ0FBQyx3QkFBd0IsT0FBT0wsT0FBT00sS0FBSztRQUM3RDtJQUNGO0lBQ0FDLFVBQVUsU0FBVVAsTUFBTSxFQUFFO1FBQzFCQSxPQUFPUSxNQUFNO0lBQ2Y7SUFDQUMsWUFBWTtRQUNWQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsV0FBVyxJQUFJO0lBQ2pCO0lBQ0FDLFlBQVk7UUFDVkMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7QUFDRjtBQUNBLFNBQVNDLFNBQVM7O0lBQ2hCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHdEMsK0NBQVFBLENBQUMsS0FBSztJQUVsREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkcUMsY0FBYyxJQUFJO0lBQ3BCLEdBQUcsRUFBRTtJQUVMckMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlvQyxZQUFZM0IsdUVBQW1CQTtJQUNyQyxHQUFHO1FBQUMyQjtLQUFXO0lBRWYscUJBQ0UsOERBQUNFO1FBQU9DLFdBQVU7O1lBQ2ZILDRCQUNDLDhEQUFDbEMsZ0RBQU1BO2dCQUFFLEdBQUdTLGFBQWE7Z0JBQUU0QixXQUFVOzBCQUNsQzdCLCtEQUFRLENBQUMsQ0FBQytCLHFCQUNULDhEQUFDdEMscURBQVdBO2tDQUNWLDRFQUFDdUM7NEJBQUlILFdBQVU7NEJBQWdCSSxtQkFBaUJGLEtBQUtHLFVBQVU7c0NBQzdELDRFQUFDRjtnQ0FBSUgsV0FBVTswQ0FDYiw0RUFBQ0c7b0NBQUlILFdBQVU7O3NEQUNiLDhEQUFDRzs0Q0FBSUgsV0FBVTs7Ozs7O3NEQUNmLDhEQUFDRzs0Q0FBSUgsV0FBVTtzREFDYiw0RUFBQ0c7Z0RBQUlILFdBQVU7MERBQ2IsNEVBQUN0QyxrREFBSUE7b0RBQUM0QyxNQUFLOzhEQUNULDRFQUFDSDt3REFBSUgsV0FBVTs7MEVBQ2IsOERBQUNHO2dFQUFJSCxXQUFVOzBFQUNiLDRFQUFDTztvRUFBSVAsV0FBVTtvRUFBYVEsU0FBUTs7c0ZBQ2xDLDhEQUFDQztzRkFDQyw0RUFBQ0M7Z0ZBQ0NDLElBQUc7Z0ZBQ0hDLEdBQUU7Ozs7Ozs7Ozs7O3NGQUdOLDhEQUFDQztzRkFDQyw0RUFBQ0M7Z0ZBQ0NDLFdBQVU7Z0ZBQ1ZDLFlBQVc7MEZBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEVBTVAsOERBQUNiO2dFQUFJSCxXQUFVOzBFQUNiLDRFQUFDaUI7OEVBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE1QkpmLEtBQUtTLEVBQUU7Ozs7Ozs7Ozs7MEJBeUMvQiw4REFBQ1I7Z0JBQUlILFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFJSCxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7c0NBQ2IsNEVBQUNuQjtnQ0FBRW1CLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDRzs0QkFBSUgsV0FBVTtzQ0FDYiw0RUFBQ25CO2dDQUFFbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QjtHQXJFU0o7S0FBQUE7QUF1RVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRpdmVBZ2VuY3kvSGVhZGVyLmpzeD8wMTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy89IE1vZHVsZXNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgQXV0b3BsYXksIFBhZ2luYXRpb24sIFBhcmFsbGF4IH0gZnJvbSBcInN3aXBlclwiO1xyXG4vLz0gQ29tcG9uZW50c1xyXG5pbXBvcnQgU3RhdGVtZW50U3BsaXR0ZXIgZnJvbSBcIi4uL0NvbW1vbi9TdGF0ZW1lbnRTcGxpdHRlclwiO1xyXG4vLz0gU2NyaXB0c1xyXG5pbXBvcnQgbG9hZEJhY2tncm91ZEltYWdlcyBmcm9tIFwiQC9jb21tb24vbG9hZEJhY2tncm91ZEltYWdlc1wiO1xyXG4vLz0gRGF0YVxyXG5pbXBvcnQgZGF0YSBmcm9tIFwiQC9kYXRhL0FyY2hpdGVjdHVyZS9oZWFkZXIuanNvblwiO1xyXG5cclxuY29uc3Qgc3dpcGVyT3B0aW9ucyA9IHtcclxuICBtb2R1bGVzOiBbTmF2aWdhdGlvbiwgQXV0b3BsYXksIFBhZ2luYXRpb24sIFBhcmFsbGF4XSxcclxuICBzcGVlZDogMTUwMCxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDUwMDAsXHJcbiAgfSxcclxuICBwYXJhbGxheDogdHJ1ZSxcclxuICBsb29wOiB0cnVlLFxyXG4gIG9uU3dpcGVyOiBmdW5jdGlvbiAoc3dpcGVyKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN3aXBlci5zbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc3dpcGVyLnNsaWRlc1tpXVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmJnLWltZ1wiKVxyXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN3aXBlci1wYXJhbGxheFwiLCAwLjc1ICogc3dpcGVyLndpZHRoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uUmVzaXplOiBmdW5jdGlvbiAoc3dpcGVyKSB7XHJcbiAgICBzd2lwZXIudXBkYXRlKCk7XHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogXCIuc2xpZGVyLXBybHggLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICB0eXBlOiBcImZyYWN0aW9uXCIsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6IFwiLnNsaWRlci1wcmx4IC5uZXh0LWN0cmxcIixcclxuICAgIHByZXZFbDogXCIuc2xpZGVyLXBybHggLnByZXYtY3RybFwiLFxyXG4gIH0sXHJcbn07XHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbbG9hZFN3aXBlciwgc2V0TG9hZFN3aXBlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkU3dpcGVyKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2FkU3dpcGVyKSBsb2FkQmFja2dyb3VkSW1hZ2VzKCk7XHJcbiAgfSwgW2xvYWRTd2lwZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2xpZGVyIGFyY2gtc2xpZGVyIHNsaWRlci1wcmx4XCI+XHJcbiAgICAgIHtsb2FkU3dpcGVyICYmIChcclxuICAgICAgICA8U3dpcGVyIHsuLi5zd2lwZXJPcHRpb25zfSBjbGFzc05hbWU9XCJzd2lwZXItY29udGFpbmVyIHBhcmFsbGF4LXNsaWRlclwiPlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctaW1nIHZhbGlnblwiIGRhdGEtYmFja2dyb3VuZD17aXRlbS5iYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctN1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgb2Zmc2V0LWxnLTEgdmFsaWduXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWF1dG8gZXhwbG9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RhcmsvcHJvamVjdC1kZXRhaWxzMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJ1dHRvbiBob3Zlci1hbmltXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdGF0ZS1jaXJjbGUgZnotMzAgdGV4dC11XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidGV4dGNpcmNsZVwiIHZpZXdCb3g9XCIwIDAgNTAwIDUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXh0Y2lyY2xlMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMjUwLDQwMCBhMTUwLDE1MCAwIDAsMSAwLC0zMDBhMTUwLDE1MCAwIDAsMSAwLDMwMFpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGxpbmtIcmVmPVwiI3RleHRjaXJjbGUxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dExlbmd0aD1cIjkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZW1pbyAtIEFnZW5jaWEgLSBDcmVhdGl2YSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRQYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4tY2lyY2xlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4yMDIzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tbmV4dCBzd2lwZXItbmF2LWN0cmwgbmV4dC1jdHJsIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1idXR0b24tcHJldiBzd2lwZXItbmF2LWN0cmwgcHJldi1jdHJsIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIkF1dG9wbGF5IiwiUGFnaW5hdGlvbiIsIlBhcmFsbGF4IiwiU3RhdGVtZW50U3BsaXR0ZXIiLCJsb2FkQmFja2dyb3VkSW1hZ2VzIiwiZGF0YSIsInN3aXBlck9wdGlvbnMiLCJtb2R1bGVzIiwic3BlZWQiLCJhdXRvcGxheSIsImRlbGF5IiwicGFyYWxsYXgiLCJsb29wIiwib25Td2lwZXIiLCJzd2lwZXIiLCJpIiwic2xpZGVzIiwibGVuZ3RoIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsIndpZHRoIiwib25SZXNpemUiLCJ1cGRhdGUiLCJwYWdpbmF0aW9uIiwiZWwiLCJ0eXBlIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsIkhlYWRlciIsImxvYWRTd2lwZXIiLCJzZXRMb2FkU3dpcGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImRpdiIsImRhdGEtYmFja2dyb3VuZCIsImJhY2tncm91bmQiLCJocmVmIiwic3ZnIiwidmlld0JveCIsImRlZnMiLCJwYXRoIiwiaWQiLCJkIiwidGV4dCIsInRleHRQYXRoIiwieGxpbmtIcmVmIiwidGV4dExlbmd0aCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CreativeAgency/Header.jsx\n"));

/***/ })

});