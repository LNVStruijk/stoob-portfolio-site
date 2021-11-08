"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ "./node_modules/react-audio-player/dist/bundle.js");
/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutMe */ "./components/AboutMe/index.js");
/* harmony import */ var _components_Shortcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Shortcut */ "./components/Shortcut/index.js");
/* harmony import */ var _components_PageWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PageWindow */ "./components/PageWindow/index.js");
/* harmony import */ var _components_StickyFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/StickyFooter */ "./components/StickyFooter/index.js");
/* harmony import */ var _components_CloseButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CloseButton */ "./components/CloseButton/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\WORK\\GITHUB REPO CLONE\\stoob-portfolio-site\\portfolio\\pages\\index.js",
    _s = $RefreshSig$();





 //importing the whole AboutMe folder

 //imports the Shortcut component

 //imports the PageWindow component








function Home() {
  _s();

  /**
   * constant that updates itself automatically using SET method of itself
   * useState() = checks for change in 'state' in website then updates the constant value automatically
   * useState is where you put DEFAULT value
   * https://reactjs.org/docs/hooks-state.html
   */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      mobileView = _useState[0],
      setMobileView = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      isGalleryVisible = _useState2[0],
      setIsGalleryVisible = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isAboutMeVisible = _useState3[0],
      setIsAboutMeVisible = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isContactMeVisible = _useState4[0],
      setIsContactMeVisible = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isTypographyVisible = _useState5[0],
      setTypographyVisible = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isPostersVisible = _useState6[0],
      setPostersVisible = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isPaintingsVisible = _useState7[0],
      setPaintingsVisible = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isOtherWorksVisible = _useState8[0],
      setOtherWorksVisible = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true),
      crtFilter = _useState9[0],
      setCrtFilter = _useState9[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    setMobileView(react_device_detect__WEBPACK_IMPORTED_MODULE_9__.isMobile);
  }, [react_device_detect__WEBPACK_IMPORTED_MODULE_9__.isMobile]);
  /**
   * this is the format for a method or function
   */

  var testMethod = function testMethod() {
    console.log("method activated");
  }; // const renderMobilePopUp = () => {
  //   if (mobileView) {
  //     return (
  //       <div className={styles.mobilePopUp}>
  //         <p>This site is better with desktop view enabled</p>
  //       </div>
  //     );
  //   }
  // };


  return (
    /*#__PURE__*/

    /**
     * anything here is rendered on the Home Page
     * except for the <HEAD> tag which is for the page's metadata like tab title
     */
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("title", {
          children: "Lucas Struijk"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("meta", {
          name: "description",
          content: "Created with Next JS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("link", {
          rel: "icon",
          href: "/portfolio-icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().crt),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("section", {
            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shortcuts),
            id: "Shortcut Rows",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shortcutGrid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setIsGalleryVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "featured works",
                  image: "Featured"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setIsAboutMeVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "about me",
                  image: "AboutMe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setIsContactMeVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "contact me",
                  image: "ContactMe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shortcutGrid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setTypographyVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "typography",
                  image: "Typography"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setPostersVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "posters",
                  image: "Posters"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setPaintingsVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "paintings",
                  image: "Paintings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shortcutGrid),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                name: 'say "hi" ',
                image: "Doom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                onClick: function onClick() {
                  return setOtherWorksVisible(true);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Shortcut__WEBPACK_IMPORTED_MODULE_4__.default, {
                  name: "other works",
                  image: "OtherWorks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().shortcutGrid)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("section", {
            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().windows),
            id: "Page Windows",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Featured Works",
              isVisible: isGalleryVisible,
              closeWindow: function closeWindow() {
                return setIsGalleryVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "About Me",
              isVisible: isAboutMeVisible,
              closeWindow: function closeWindow() {
                return setIsAboutMeVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Contact Me",
              isVisible: isContactMeVisible,
              closeWindow: function closeWindow() {
                return setIsContactMeVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Typography",
              isVisible: isTypographyVisible,
              closeWindow: function closeWindow() {
                return setTypographyVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Posters",
              isVisible: isPostersVisible,
              closeWindow: function closeWindow() {
                return setPostersVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Paintings",
              isVisible: isPaintingsVisible,
              closeWindow: function closeWindow() {
                return setPaintingsVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_PageWindow__WEBPACK_IMPORTED_MODULE_5__.default, {
              view: "Other Works",
              isVisible: isOtherWorksVisible,
              closeWindow: function closeWindow() {
                return setOtherWorksVisible(false);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("video", {
          autoPlay: true,
          muted: true,
          loop: true,
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_12___default().backgroundVideo),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("source", {
            src: "/videos/backgroundVideoCompressed.mp4",
            type: "video/mp4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_StickyFooter__WEBPACK_IMPORTED_MODULE_6__.default, {
          currentWindow: isGalleryVisible ? "Featured Works" : isAboutMeVisible ? "About Me" : isContactMeVisible ? "Contact Me" : isTypographyVisible ? "Typography" : isPostersVisible ? "Posters" : isPaintingsVisible ? "Paintings" : isOtherWorksVisible ? "Other Works" : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this)]
    }, void 0, true)
  );
}

_s(Home, "v3rdJWC2vU6gOdL8N3Sp4kWGkRQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmFjYTc5MDRkZjA3M2Y4NTRmMGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUM2Qzs7Q0FDRTs7Q0FDSTs7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU2MsSUFBVCxHQUFnQjtBQUFBOztBQUM3QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxrQkFBb0NKLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9LLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBRUEsbUJBQWdETiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEQ7QUFBQSxNQUFPTyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQWdEUiwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEQ7QUFBQSxNQUFPUyxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBQ0EsbUJBQW9EViwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFBQSxNQUFPVyxrQkFBUDtBQUFBLE1BQTJCQyxxQkFBM0I7O0FBQ0EsbUJBQW9EWiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFBQSxNQUFPYSxtQkFBUDtBQUFBLE1BQTRCQyxvQkFBNUI7O0FBQ0EsbUJBQThDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFBQSxNQUFPZSxnQkFBUDtBQUFBLE1BQXlCQyxpQkFBekI7O0FBQ0EsbUJBQWtEaEIsK0NBQVEsQ0FBQyxLQUFELENBQTFEO0FBQUEsTUFBT2lCLGtCQUFQO0FBQUEsTUFBMkJDLG1CQUEzQjs7QUFDQSxtQkFBb0RsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFBQSxNQUFPbUIsbUJBQVA7QUFBQSxNQUE0QkMsb0JBQTVCOztBQUVBLG1CQUFrQ3BCLCtDQUFRLENBQUMsSUFBRCxDQUExQztBQUFBLE1BQU9xQixTQUFQO0FBQUEsTUFBa0JD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QUFBa0MsbUJBQVMsRUFBRTNCLGtGQUE3QztBQUFBLGlDQUNFO0FBQ0UsZUFBRyxFQUFFLHVDQURQO0FBRUUsZ0JBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJHRixlQTRHRSwrREFBQyw2REFBRDtBQUNFLHVCQUFhLEVBQ1hjLGdCQUFnQixHQUNaLGdCQURZLEdBRVpFLGdCQUFnQixHQUNoQixVQURnQixHQUVoQkUsa0JBQWtCLEdBQ2xCLFlBRGtCLEdBRWxCRSxtQkFBbUIsR0FDbkIsWUFEbUIsR0FFbkJFLGdCQUFnQixHQUNoQixTQURnQixHQUVoQkUsa0JBQWtCLEdBQ2xCLFdBRGtCLEdBRWxCRSxtQkFBbUIsR0FDbkIsYUFEbUIsR0FFbkI7QUFoQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUxGO0FBOElEOztHQXRMdUJmOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tIFwicmVhY3QtYXVkaW8tcGxheWVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBBYm91dE1lIGZyb20gXCIuLi9jb21wb25lbnRzL0Fib3V0TWVcIjsgLy9pbXBvcnRpbmcgdGhlIHdob2xlIEFib3V0TWUgZm9sZGVyXHJcbmltcG9ydCBTaG9ydGN1dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9ydGN1dFwiOyAvL2ltcG9ydHMgdGhlIFNob3J0Y3V0IGNvbXBvbmVudFxyXG5pbXBvcnQgUGFnZVdpbmRvdyBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlV2luZG93XCI7IC8vaW1wb3J0cyB0aGUgUGFnZVdpbmRvdyBjb21wb25lbnRcclxuaW1wb3J0IFN0aWNreUZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TdGlja3lGb290ZXJcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Nsb3NlQnV0dG9uXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSBcInJlYWN0LWRldmljZS1kZXRlY3RcIjtcclxuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAvKipcclxuICAgKiBjb25zdGFudCB0aGF0IHVwZGF0ZXMgaXRzZWxmIGF1dG9tYXRpY2FsbHkgdXNpbmcgU0VUIG1ldGhvZCBvZiBpdHNlbGZcclxuICAgKiB1c2VTdGF0ZSgpID0gY2hlY2tzIGZvciBjaGFuZ2UgaW4gJ3N0YXRlJyBpbiB3ZWJzaXRlIHRoZW4gdXBkYXRlcyB0aGUgY29uc3RhbnQgdmFsdWUgYXV0b21hdGljYWxseVxyXG4gICAqIHVzZVN0YXRlIGlzIHdoZXJlIHlvdSBwdXQgREVGQVVMVCB2YWx1ZVxyXG4gICAqIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1zdGF0ZS5odG1sXHJcbiAgICovXHJcbiAgY29uc3QgW21vYmlsZVZpZXcsIHNldE1vYmlsZVZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbaXNHYWxsZXJ5VmlzaWJsZSwgc2V0SXNHYWxsZXJ5VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNBYm91dE1lVmlzaWJsZSwgc2V0SXNBYm91dE1lVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzQ29udGFjdE1lVmlzaWJsZSwgc2V0SXNDb250YWN0TWVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNUeXBvZ3JhcGh5VmlzaWJsZSwgc2V0VHlwb2dyYXBoeVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Bvc3RlcnNWaXNpYmxlLCBzZXRQb3N0ZXJzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzUGFpbnRpbmdzVmlzaWJsZSwgc2V0UGFpbnRpbmdzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzT3RoZXJXb3Jrc1Zpc2libGUsIHNldE90aGVyV29ya3NWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2NydEZpbHRlciwgc2V0Q3J0RmlsdGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TW9iaWxlVmlldyhpc01vYmlsZSk7XHJcbiAgfSwgW2lzTW9iaWxlXSk7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoaXMgaXMgdGhlIGZvcm1hdCBmb3IgYSBtZXRob2Qgb3IgZnVuY3Rpb25cclxuICAgKi9cclxuICBjb25zdCB0ZXN0TWV0aG9kID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJtZXRob2QgYWN0aXZhdGVkXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IHJlbmRlck1vYmlsZVBvcFVwID0gKCkgPT4ge1xyXG4gIC8vICAgaWYgKG1vYmlsZVZpZXcpIHtcclxuICAvLyAgICAgcmV0dXJuIChcclxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vYmlsZVBvcFVwfT5cclxuICAvLyAgICAgICAgIDxwPlRoaXMgc2l0ZSBpcyBiZXR0ZXIgd2l0aCBkZXNrdG9wIHZpZXcgZW5hYmxlZDwvcD5cclxuICAvLyAgICAgICA8L2Rpdj5cclxuICAvLyAgICAgKTtcclxuICAvLyAgIH1cclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLyoqXHJcbiAgICAgKiBhbnl0aGluZyBoZXJlIGlzIHJlbmRlcmVkIG9uIHRoZSBIb21lIFBhZ2VcclxuICAgICAqIGV4Y2VwdCBmb3IgdGhlIDxIRUFEPiB0YWcgd2hpY2ggaXMgZm9yIHRoZSBwYWdlJ3MgbWV0YWRhdGEgbGlrZSB0YWIgdGl0bGVcclxuICAgICAqL1xyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkx1Y2FzIFN0cnVpams8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGVkIHdpdGggTmV4dCBKU1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvcG9ydGZvbGlvLWljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcnR9PlxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNydFN3aXRjaH0gb25DbGljaz17KCk9PiB7Y3J0RmlsdGVyID8gc2V0Q3J0RmlsdGVyKGZhbHNlKSA6IHNldENydEZpbHRlcih0cnVlKX19PlxyXG4gICAgICAgICAgPHA+Q1JUPC9wPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgey8qIHtyZW5kZXJNb2JpbGVQb3BVcCgpfSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zaG9ydGN1dHN9IGlkPXtcIlNob3J0Y3V0IFJvd3NcIn0+XHJcbiAgICAgICAgICAgIHsvKiBTSE9SVENVVCBST1cgMSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG9ydGN1dEdyaWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRJc0dhbGxlcnlWaXNpYmxlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgPFNob3J0Y3V0IG5hbWU9e1wiZmVhdHVyZWQgd29ya3NcIn0gaW1hZ2U9e1wiRmVhdHVyZWRcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0SXNBYm91dE1lVmlzaWJsZSh0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICA8U2hvcnRjdXQgbmFtZT17XCJhYm91dCBtZVwifSBpbWFnZT17XCJBYm91dE1lXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvbnRhY3RNZVZpc2libGUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPFNob3J0Y3V0IG5hbWU9e1wiY29udGFjdCBtZVwifSBpbWFnZT17XCJDb250YWN0TWVcIn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU0hPUlRDVVQgUk9XIDIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcnRjdXRHcmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldFR5cG9ncmFwaHlWaXNpYmxlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxTaG9ydGN1dCBuYW1lPXtcInR5cG9ncmFwaHlcIn0gaW1hZ2U9e1wiVHlwb2dyYXBoeVwifSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0UG9zdGVyc1Zpc2libGUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPFNob3J0Y3V0IG5hbWU9e1wicG9zdGVyc1wifSBpbWFnZT17XCJQb3N0ZXJzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRQYWludGluZ3NWaXNpYmxlKHRydWUpfT5cclxuICAgICAgICAgICAgICAgIDxTaG9ydGN1dCBuYW1lPXtcInBhaW50aW5nc1wifSBpbWFnZT17XCJQYWludGluZ3NcIn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogU0hPUlRDVVQgUk9XIDMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcnRjdXRHcmlkfT5cclxuICAgICAgICAgICAgICA8U2hvcnRjdXQgbmFtZT17J3NheSBcImhpXCIgJ30gaW1hZ2U9e1wiRG9vbVwifSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0T3RoZXJXb3Jrc1Zpc2libGUodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPFNob3J0Y3V0IG5hbWU9e1wib3RoZXIgd29ya3NcIn0gaW1hZ2U9e1wiT3RoZXJXb3Jrc1wifSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBQTEFZRVIgUk9XICovfVxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaG9ydGN1dEdyaWR9PlxyXG4gICAgICAgICAgICAgIDxSZWFjdEF1ZGlvUGxheWVyIHNyYz1cIm15X2F1ZGlvX2ZpbGUub2dnXCIgYXV0b1BsYXkgY29udHJvbHMgLz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIFRFU1QgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2hvcnRjdXRHcmlkfT48L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53aW5kb3dzfSBpZD17XCJQYWdlIFdpbmRvd3NcIn0+XHJcbiAgICAgICAgICAgIHsvKiBHQUxMRVJZIFZJRVcgKi99XHJcbiAgICAgICAgICAgIDxQYWdlV2luZG93XHJcbiAgICAgICAgICAgICAgdmlldz17XCJGZWF0dXJlZCBXb3Jrc1wifVxyXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17aXNHYWxsZXJ5VmlzaWJsZX1cclxuICAgICAgICAgICAgICBjbG9zZVdpbmRvdz17KCkgPT4gc2V0SXNHYWxsZXJ5VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQUJPVVQgTUUgVklFVyAqL31cclxuICAgICAgICAgICAgPFBhZ2VXaW5kb3dcclxuICAgICAgICAgICAgICB2aWV3PXtcIkFib3V0IE1lXCJ9XHJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXtpc0Fib3V0TWVWaXNpYmxlfVxyXG4gICAgICAgICAgICAgIGNsb3NlV2luZG93PXsoKSA9PiBzZXRJc0Fib3V0TWVWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIENPTlRBQ1QgTUUgVklFVyAqL31cclxuICAgICAgICAgICAgPFBhZ2VXaW5kb3dcclxuICAgICAgICAgICAgICB2aWV3PXtcIkNvbnRhY3QgTWVcIn1cclxuICAgICAgICAgICAgICBpc1Zpc2libGU9e2lzQ29udGFjdE1lVmlzaWJsZX1cclxuICAgICAgICAgICAgICBjbG9zZVdpbmRvdz17KCkgPT4gc2V0SXNDb250YWN0TWVWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUWVBPR1JBUEhZIFZJRVcgKi99XHJcbiAgICAgICAgICAgIDxQYWdlV2luZG93XHJcbiAgICAgICAgICAgICAgdmlldz17XCJUeXBvZ3JhcGh5XCJ9XHJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXtpc1R5cG9ncmFwaHlWaXNpYmxlfVxyXG4gICAgICAgICAgICAgIGNsb3NlV2luZG93PXsoKSA9PiBzZXRUeXBvZ3JhcGh5VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiBQT1NURVJTIFZJRVcgKi99XHJcbiAgICAgICAgICAgIDxQYWdlV2luZG93XHJcbiAgICAgICAgICAgICAgdmlldz17XCJQb3N0ZXJzXCJ9XHJcbiAgICAgICAgICAgICAgaXNWaXNpYmxlPXtpc1Bvc3RlcnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgIGNsb3NlV2luZG93PXsoKSA9PiBzZXRQb3N0ZXJzVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiBQQUlOVElOR1MgVklFVyAqL31cclxuICAgICAgICAgICAgPFBhZ2VXaW5kb3dcclxuICAgICAgICAgICAgICB2aWV3PXtcIlBhaW50aW5nc1wifVxyXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17aXNQYWludGluZ3NWaXNpYmxlfVxyXG4gICAgICAgICAgICAgIGNsb3NlV2luZG93PXsoKSA9PiBzZXRQYWludGluZ3NWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIE9USEVSIFdPUktTIFZJRVcgKi99XHJcbiAgICAgICAgICAgIDxQYWdlV2luZG93XHJcbiAgICAgICAgICAgICAgdmlldz17XCJPdGhlciBXb3Jrc1wifVxyXG4gICAgICAgICAgICAgIGlzVmlzaWJsZT17aXNPdGhlcldvcmtzVmlzaWJsZX1cclxuICAgICAgICAgICAgICBjbG9zZVdpbmRvdz17KCkgPT4gc2V0T3RoZXJXb3Jrc1Zpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8dmlkZW8gYXV0b1BsYXk9e3RydWV9IG11dGVkIGxvb3AgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZFZpZGVvfT5cclxuICAgICAgICAgIDxzb3VyY2VcclxuICAgICAgICAgICAgc3JjPXtcIi92aWRlb3MvYmFja2dyb3VuZFZpZGVvQ29tcHJlc3NlZC5tcDRcIn1cclxuICAgICAgICAgICAgdHlwZT1cInZpZGVvL21wNFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvdmlkZW8+XHJcblxyXG4gICAgICAgIDxTdGlja3lGb290ZXJcclxuICAgICAgICAgIGN1cnJlbnRXaW5kb3c9e1xyXG4gICAgICAgICAgICBpc0dhbGxlcnlWaXNpYmxlXHJcbiAgICAgICAgICAgICAgPyBcIkZlYXR1cmVkIFdvcmtzXCJcclxuICAgICAgICAgICAgICA6IGlzQWJvdXRNZVZpc2libGVcclxuICAgICAgICAgICAgICA/IFwiQWJvdXQgTWVcIlxyXG4gICAgICAgICAgICAgIDogaXNDb250YWN0TWVWaXNpYmxlXHJcbiAgICAgICAgICAgICAgPyBcIkNvbnRhY3QgTWVcIlxyXG4gICAgICAgICAgICAgIDogaXNUeXBvZ3JhcGh5VmlzaWJsZVxyXG4gICAgICAgICAgICAgID8gXCJUeXBvZ3JhcGh5XCJcclxuICAgICAgICAgICAgICA6IGlzUG9zdGVyc1Zpc2libGVcclxuICAgICAgICAgICAgICA/IFwiUG9zdGVyc1wiXHJcbiAgICAgICAgICAgICAgOiBpc1BhaW50aW5nc1Zpc2libGVcclxuICAgICAgICAgICAgICA/IFwiUGFpbnRpbmdzXCJcclxuICAgICAgICAgICAgICA6IGlzT3RoZXJXb3Jrc1Zpc2libGVcclxuICAgICAgICAgICAgICA/IFwiT3RoZXIgV29ya3NcIlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiUmVhY3RBdWRpb1BsYXllciIsInN0eWxlcyIsIkFib3V0TWUiLCJTaG9ydGN1dCIsIlBhZ2VXaW5kb3ciLCJTdGlja3lGb290ZXIiLCJDbG9zZUJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJpc01vYmlsZSIsIlJlYWN0VG9vbHRpcCIsIkhvbWUiLCJtb2JpbGVWaWV3Iiwic2V0TW9iaWxlVmlldyIsImlzR2FsbGVyeVZpc2libGUiLCJzZXRJc0dhbGxlcnlWaXNpYmxlIiwiaXNBYm91dE1lVmlzaWJsZSIsInNldElzQWJvdXRNZVZpc2libGUiLCJpc0NvbnRhY3RNZVZpc2libGUiLCJzZXRJc0NvbnRhY3RNZVZpc2libGUiLCJpc1R5cG9ncmFwaHlWaXNpYmxlIiwic2V0VHlwb2dyYXBoeVZpc2libGUiLCJpc1Bvc3RlcnNWaXNpYmxlIiwic2V0UG9zdGVyc1Zpc2libGUiLCJpc1BhaW50aW5nc1Zpc2libGUiLCJzZXRQYWludGluZ3NWaXNpYmxlIiwiaXNPdGhlcldvcmtzVmlzaWJsZSIsInNldE90aGVyV29ya3NWaXNpYmxlIiwiY3J0RmlsdGVyIiwic2V0Q3J0RmlsdGVyIiwidGVzdE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJjcnQiLCJjb250YWluZXIiLCJzaG9ydGN1dHMiLCJzaG9ydGN1dEdyaWQiLCJ3aW5kb3dzIiwiYmFja2dyb3VuZFZpZGVvIl0sInNvdXJjZVJvb3QiOiIifQ==