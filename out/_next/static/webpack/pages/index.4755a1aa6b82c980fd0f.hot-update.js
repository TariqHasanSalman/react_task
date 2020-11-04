webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ "./data/data.js");
/* harmony import */ var _real_estat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-estat */ "./components/real-estat.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\mashvisor react task\\Project\\components\\Home.tsx",
    _s = $RefreshSig$();



/* readig real-estats from json file */



function Home() {
  _s();

  var _this2 = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      PageNum = _useState[0],
      setPageNum = _useState[1];

  function setbuttons() {
    var _this = this;

    /* creating group of buttons to move through pages */
    var list = [];

    var _loop = function _loop(i) {
      list.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: function onClick() {
          return pressButon(i);
        },
        className: "btn btn-primary",
        children: i + 1
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 18
      }, _this));
    };

    for (var i = 0; i < _data_data__WEBPACK_IMPORTED_MODULE_2__["default"].length / 8; i++) {
      _loop(i);
    }

    return list;
  }

  function pressButon(i) {
    /* changing the state when a page button pressed*/
    setPageNum(PageNum = i);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-174534703" + " " + "display",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-174534703" + " " + "proportes",
      children: _data_data__WEBPACK_IMPORTED_MODULE_2__["default"].slice(PageNum * 8, PageNum * 8 + 8).map(function (item) {
        /* looping through real-estats and slice its array based on pageNumber */
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-174534703" + " " + "item",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_real_estat__WEBPACK_IMPORTED_MODULE_3__["default"], {
            item: item
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this2), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, _this2);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-174534703" + " " + "buttonsGroup",
      children: setbuttons()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "174534703",
      children: ".display.jsx-174534703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.buttonsGroup.jsx-174534703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:auto;margin-right:auto;margin-top :3%;margin-bottom:2%;}.proportes.jsx-174534703{overflow:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:92%;margin-right:auto;margin-left:auto;margin-top:3%;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.item.jsx-174534703{width:23%;}@media only screen and (max-width:700px){.main-flex.jsx-174534703{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flexitems.jsx-174534703{max-width:99vw;min-width:99vw;}.search-container.jsx-174534703{min-width:50%;max-width:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-right:auto;margin-left:auto;}app-search.jsx-174534703{width:100%;float:right;}.container.jsx-174534703{margin-top:0;}}@media only screen and (max-width:700px){.filters.jsx-174534703{font-size:1vw;}.item.jsx-174534703{width:45%;margin-left:2%;}}@media only screen and (min-width:2000px){.item.jsx-174534703{width:350px !important;margin-left:2%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXG1hc2h2aXNvciByZWFjdCB0YXNrXFxQcm9qZWN0XFxjb21wb25lbnRzXFxIb21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2lCLEFBR2lDLEFBS0EsQUFTRCxBQWFkLEFBSWdCLEFBT0ksQUFLRCxBQVNILEFBSUUsQUFLQyxBQUdOLEFBUWUsVUE3QzNCLEFBc0NpQixDQWpDQSxBQXFCSCxFQUlaLENBMUNXLEFBNkJNLEFBa0JqQixDQXZCaUIsUUFlakIsQUFtQmlCLEVBUG5CLElBckJpQixDQUpmLFFBaUNBLG9DQXpFcUIsQUFLSCxXQTJCTSxHQWpCYixjQUNJLENBNkJNLGlCQTVCUCxpQkFDSCxNQVpLLFFBYUMsQ0FsQnJCLFFBTXFCLEdBMkJqQixTQVkrQixNQXRDakIsZUFDRSxpQkFDakIsVUFVYyx5REFDYyxrQkEwQlAsa0JBQ0QsaUJBQ25CLHNFQTFCSCxXQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXG1hc2h2aXNvciByZWFjdCB0YXNrXFxQcm9qZWN0XFxjb21wb25lbnRzXFxIb21lLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9wcyBmcm9tIFwiLi4vZGF0YS9kYXRhXCIgLyogcmVhZGlnIHJlYWwtZXN0YXRzIGZyb20ganNvbiBmaWxlICovXHJcbmltcG9ydCBSZWFsRXN0YXQgZnJvbSBcIi4vcmVhbC1lc3RhdFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAgSG9tZSgpe1xyXG4gIGxldCBbUGFnZU51bSwgc2V0UGFnZU51bV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0YnV0dG9ucygpey8qIGNyZWF0aW5nIGdyb3VwIG9mIGJ1dHRvbnMgdG8gbW92ZSB0aHJvdWdoIHBhZ2VzICovXHJcbiAgICBsZXQgbGlzdD1bXTtcclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aC84OyBpKyspIHtcclxuICAgICAgICAgICAgIGxpc3QucHVzaChcclxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGtleT17aX0gb25DbGljaz17KCkgPT4gcHJlc3NCdXRvbihpKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+e2krMX08L2J1dHRvbj5cclxuICAgICAgICAgICAgIClcclxuICAgICB9XHJcbiAgICAgcmV0dXJuIGxpc3Q7XHJcbiBcclxuIH1cclxuIGZ1bmN0aW9uIHByZXNzQnV0b24oaSl7LyogY2hhbmdpbmcgdGhlIHN0YXRlIHdoZW4gYSBwYWdlIGJ1dHRvbiBwcmVzc2VkKi9cclxuc2V0UGFnZU51bShQYWdlTnVtPWkpXHJcbiB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcG9ydGVzXCI+e1xyXG4gICAgICAgIHByb3BzLnNsaWNlKFBhZ2VOdW0qOCxQYWdlTnVtKjgrOCkubWFwKGl0ZW09PnsvKiBsb29waW5nIHRocm91Z2ggcmVhbC1lc3RhdHMgYW5kIHNsaWNlIGl0cyBhcnJheSBiYXNlZCBvbiBwYWdlTnVtYmVyICovXHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiID5cclxuICAgICAgICAgICAgPFJlYWxFc3RhdCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19PjwvUmVhbEVzdGF0PiB7Lyogc2VuZGluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSByZWFsLWVzdGF0IGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNHcm91cFwiPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIHtzZXRidXR0b25zKCl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kaXNwbGF5e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5idXR0b25zR3JvdXB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgOjMlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAucHJvcG9ydGVze1xyXG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzphdXRvO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6OTIlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozJTtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIzJVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW4tZmxleHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZsZXhpdGVtc3tcclxuICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTl2dztcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTl2dztcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFwcC1zZWFyY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcnN7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYCB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbiAgIFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Tariq\\\\Desktop\\\\mashvisor react task\\\\Project\\\\components\\\\Home.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(Home, "YVdbdFdR8k81Ug4x5rsvxwCNzmA=");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLnRzeCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJQYWdlTnVtIiwic2V0UGFnZU51bSIsInNldGJ1dHRvbnMiLCJsaXN0IiwiaSIsInB1c2giLCJwcmVzc0J1dG9uIiwicHJvcHMiLCJsZW5ndGgiLCJzbGljZSIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQzs7QUFDakM7QUFDQTtBQUVlLFNBQVVBLElBQVYsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxDQUFELENBRFA7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxVQURlOztBQUc3QixXQUFTQyxVQUFULEdBQXFCO0FBQUE7O0FBQUM7QUFDcEIsUUFBSUMsSUFBSSxHQUFDLEVBQVQ7O0FBRG1CLCtCQUVUQyxDQUZTO0FBR1ZELFVBQUksQ0FBQ0UsSUFBTCxlQUNJO0FBQWdCLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxVQUFVLENBQUNGLENBQUQsQ0FBaEI7QUFBQSxTQUF6QjtBQUE4QyxpQkFBUyxFQUFDLGlCQUF4RDtBQUFBLGtCQUEyRUEsQ0FBQyxHQUFDO0FBQTdFLFNBQWFBLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBSFU7O0FBRWxCLFNBQUssSUFBSUEsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0csa0RBQUssQ0FBQ0MsTUFBTixHQUFhLENBQWpDLEVBQW9DSixDQUFDLEVBQXJDLEVBQXlDO0FBQUEsWUFBaENBLENBQWdDO0FBSXhDOztBQUNELFdBQU9ELElBQVA7QUFFSDs7QUFDRCxXQUFTRyxVQUFULENBQW9CRixDQUFwQixFQUFzQjtBQUFDO0FBQ3hCSCxjQUFVLENBQUNELE9BQU8sR0FBQ0ksQ0FBVCxDQUFWO0FBQ0U7O0FBRUEsc0JBQ0U7QUFBQSx1Q0FBZSxTQUFmO0FBQUEsNEJBQ0k7QUFBQSx5Q0FBZSxXQUFmO0FBQUEsZ0JBQ0FHLGtEQUFLLENBQUNFLEtBQU4sQ0FBWVQsT0FBTyxHQUFDLENBQXBCLEVBQXNCQSxPQUFPLEdBQUMsQ0FBUixHQUFVLENBQWhDLEVBQW1DVSxHQUFuQyxDQUF1QyxVQUFBQyxJQUFJLEVBQUU7QUFBQztBQUMxQyw0QkFDSTtBQUFBLDZDQUFlLE1BQWY7QUFBQSxrQ0FDSixxRUFBQyxtREFBRDtBQUF5QixnQkFBSSxFQUFFQTtBQUEvQixhQUFnQkEsSUFBSSxDQUFDQyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQU1ILE9BUEQ7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSTtBQUFBLHlDQUFlLGNBQWY7QUFBQSxnQkFFQ1YsVUFBVTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVHRDs7R0F4SHdCSixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3NTVhMWFhNmI4MmM5ODBmZDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvcHMgZnJvbSBcIi4uL2RhdGEvZGF0YVwiIC8qIHJlYWRpZyByZWFsLWVzdGF0cyBmcm9tIGpzb24gZmlsZSAqL1xyXG5pbXBvcnQgUmVhbEVzdGF0IGZyb20gXCIuL3JlYWwtZXN0YXRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIEhvbWUoKXtcclxuICBsZXQgW1BhZ2VOdW0sIHNldFBhZ2VOdW1dID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNldGJ1dHRvbnMoKXsvKiBjcmVhdGluZyBncm91cCBvZiBidXR0b25zIHRvIG1vdmUgdGhyb3VnaCBwYWdlcyAqL1xyXG4gICAgbGV0IGxpc3Q9W107XHJcbiAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGgvODsgaSsrKSB7XHJcbiAgICAgICAgICAgICBsaXN0LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e2l9IG9uQ2xpY2s9eygpID0+IHByZXNzQnV0b24oaSl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntpKzF9PC9idXR0b24+XHJcbiAgICAgICAgICAgICApXHJcbiAgICAgfVxyXG4gICAgIHJldHVybiBsaXN0O1xyXG4gXHJcbiB9XHJcbiBmdW5jdGlvbiBwcmVzc0J1dG9uKGkpey8qIGNoYW5naW5nIHRoZSBzdGF0ZSB3aGVuIGEgcGFnZSBidXR0b24gcHJlc3NlZCovXHJcbnNldFBhZ2VOdW0oUGFnZU51bT1pKVxyXG4gfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BvcnRlc1wiPntcclxuICAgICAgICBwcm9wcy5zbGljZShQYWdlTnVtKjgsUGFnZU51bSo4KzgpLm1hcChpdGVtPT57LyogbG9vcGluZyB0aHJvdWdoIHJlYWwtZXN0YXRzIGFuZCBzbGljZSBpdHMgYXJyYXkgYmFzZWQgb24gcGFnZU51bWJlciAqL1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiA+XHJcbiAgICAgICAgICAgIDxSZWFsRXN0YXQga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfT48L1JlYWxFc3RhdD4gey8qIHNlbmRpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcmVhbC1lc3RhdCBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zR3JvdXBcIj5cclxuICAgICAgICAgICBcclxuICAgICAgICB7c2V0YnV0dG9ucygpfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGlzcGxheXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uc0dyb3Vwe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wIDozJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLnByb3BvcnRlc3tcclxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6YXV0bztcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkyJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMyVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluLWZsZXh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mbGV4aXRlbXN7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk5dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDk5dnc7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhcHAtc2VhcmNoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXJze1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG4gICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==