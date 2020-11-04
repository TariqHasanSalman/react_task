webpackHotUpdate_N_E("pages/index",{

/***/ "./components/real-estat.js":
/*!**********************************!*\
  !*** ./components/real-estat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "C:\\Users\\Tariq\\Desktop\\mashvisor react task\\Project\\components\\real-estat.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var RealEstat = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(RealEstat, _React$Component);

  var _super = _createSuper(RealEstat);

  function RealEstat() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RealEstat);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RealEstat, [{
    key: "Compr",
    value: function Compr(url) {
      var img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');

      img.onload = function (a) {
        var canvas = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        var dataURI = canvas.toDataURL("image/jpg"); // convert base64/URLEncoded data component to raw binary data held in a string

        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);else byteString = unescape(dataURI.split(',')[1]); // separate out the mime component

        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to a typed array

        var ia = new Uint8Array(byteString.length);

        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }

        return callback(new Blob([ia], {
          type: mimeString
        }));
      };

      img.src = url;
    }
  }, {
    key: "getRate",
    value: function getRate() {
      var rate = 0;
      var rates = [];

      if (this.props.item.airbnb_ROI == null && this.props.item.traditional_ROI == null) {
        rate = 0;
      } else if (this.props.item.airbnb_ROI == null) {
        rate = this.props.item.traditional_ROI;
      } else if (this.props.item.traditional_ROI == null) {
        rate = this.props.item.airbnb_ROI;
      } else {
        rate = (this.props.item.airbnb_ROI + this.props.item.traditional_ROI) / 2;
      }

      for (var index = 0; index < 5; index++) {
        if (index < rate) {
          rates.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: " fas fa-star"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 22
          }, this));
        } else {
          rates.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            className: " far fa-star"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 22
          }, this));
        }
      }

      console.log(rate);
      console.log(rates);
      return rates;
    }
  }, {
    key: "getComp",
    value: function getComp(comperType) {
      var A = [];

      if (comperType != "rental_income") {
        if (this.props.item[comperType].airbnb != null) {
          var data = this.props.item[comperType].airbnb.toFixed(2);
          A.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 40
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 59
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, this));
        }

        if (this.props.item[comperType].traditional != null) {
          var _data = this.props.item[comperType].traditional.toFixed(2);

          A.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: _data
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 40
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: "%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 59
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, this));
        }

        return A;
      } else {
        if (this.props.item[comperType].airbnb != null) {
          var _data2 = this.props.item[comperType].airbnb.toFixed(0);

          A.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: _data2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 42
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 61
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 19
          }, this));
        }

        if (this.props.item[comperType].traditional != null) {
          var _data3 = this.props.item[comperType].traditional.toFixed(0);

          A.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: _data3
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 42
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              children: "$"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 61
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 19
          }, this));
        }

        return A;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "jsx-3759514156" + " " + "contanir",
        children: [this.Compr(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "jsx-3759514156" + " " + "img",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
            src: this.props.item.image_url,
            alt: "house",
            className: "jsx-3759514156"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "jsx-3759514156" + " " + "basic-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              style: {
                marginLeft: "3%"
              },
              className: "jsx-3759514156",
              children: [this.props.item.beds, " BDS | ", this.props.item.baths, " ba | ", this.props.item.sqft, " sqr"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              style: {
                "float": "right",
                marginRight: "3%"
              },
              className: "jsx-3759514156",
              children: [this.props.item.list_price, "$"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "jsx-3759514156" + " " + "data-section",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "jsx-3759514156" + " " + "location",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              className: "jsx-3759514156" + " " + "loc",
              children: this.props.item.address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
              className: "jsx-3759514156" + " " + "stars",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                className: "jsx-3759514156",
                children: this.getRate()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "jsx-3759514156" + " " + "comparison-section",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "jsx-3759514156",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {
                className: "jsx-3759514156"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 18
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "jsx-3759514156" + " " + "compare",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "jsx-3759514156" + " " + "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "jsx-3759514156" + " " + "col-3 offset-6 fontstyling",
                  children: "Airbnb"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "jsx-3759514156" + " " + "col-3 fontstyling",
                  children: "Trad."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 15
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "jsx-3759514156" + " " + "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "jsx-3759514156" + " " + "col-6",
                  children: "CASH ON CASH"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 13
                }, this), this.getComp("COC")]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 11
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "jsx-3759514156" + " " + "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "jsx-3759514156" + " " + "col-6",
                  children: "CAP RATE"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 13
                }, this), this.getComp("cap_rate")]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                className: "jsx-3759514156" + " " + "row",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "jsx-3759514156" + " " + "col-6",
                  children: " RENTAL INCOME"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 13
                }, this), this.getComp("rental_income")]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "jsx-3759514156",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("hr", {
                className: "jsx-3759514156"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 12
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 7
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "jsx-3759514156" + " " + "footer",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "jsx-3759514156",
              children: "VIEW NEIGHBORHOOD ANALYTICS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "3759514156",
          children: ".contanir.jsx-3759514156{margin-top:5%;width:100%;box-sizing:border-box;border-radius:20px 20px 0 0;border:1px solid #0259db94;overflow:hidden;font-size:1.2vw;}.img.jsx-3759514156 img.jsx-3759514156{max-width:100%;min-width:100%;max-height:auto;margin:0;box-sizing:border-box;}.img.jsx-3759514156{max-height:12vw;min-height:12vw;overflow:hidden;position:relative;}.basic-info.jsx-3759514156{font-size:1.2vw;background-color:rgb(0,0,0,0.65);width:100%;color:aliceblue;position:absolute;bottom:0;left:0;text-align:start;}.data-section.jsx-3759514156{margin-top:1.5%;font-size:1vw;position:relative;}.compare.jsx-3759514156{max-width:85%;margin-right:auto;}.location.jsx-3759514156,.comparison-section.jsx-3759514156{margin-bottom:1.5%;margin-right:3%;margin-left:3%;}.stars.jsx-3759514156{position:absolute;right:3%;color:#0257db;}.loc.jsx-3759514156{margin-left:2px;}.fontstyling.jsx-3759514156{font-weight:bold;}.footer.jsx-3759514156{padding:2%;color:#0257db;text-align:center;font-weight:bold;font-size:1.1vw;border-bottom:2px solid #0259db94;}hr.jsx-3759514156{height:2px;border-width:0;background-color:#0259db88;}.data-section.jsx-3759514156,.footer.jsx-3759514156,.basic-info.jsx-3759514156,.contanir.jsx-3759514156{font-size:0.9vw;}@media only screen and (max-width:700px){hr.jsx-3759514156{margin-top:1% !important;margin-bottom:1% !important;}.data-section.jsx-3759514156{margin-top:0;margin-top:0;font-size:2vw;}.img.jsx-3759514156{overflow:hidden;position:relative;max-height:100px;}.data-section.jsx-3759514156,.footer.jsx-3759514156,.basic-info.jsx-3759514156,.contanir.jsx-3759514156{font-size:0.8vw;}}@media only screen and (min-width:2000px){.data-section.jsx-3759514156,.footer.jsx-3759514156,.basic-info.jsx-3759514156,.contanir.jsx-3759514156{font-size:15px;}.img.jsx-3759514156{max-height:150px;min-height:150px;}}@media only screen and (max-width:400px){.img.jsx-3759514156{overflow:hidden;position:relative;max-height:70px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFyaXFcXERlc2t0b3BcXG1hc2h2aXNvciByZWFjdCB0YXNrXFxQcm9qZWN0XFxjb21wb25lbnRzXFxyZWFsLWVzdGF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9La0IsQUFHdUIsQUFVQyxBQU9DLEFBTUYsQUFXRSxBQU1GLEFBS0ssQUFLRCxBQUtGLEFBSWxCLEFBR2EsQUFTRCxBQUtNLEFBSVcsQUFJaEIsQUFNSyxBQU1BLEFBT0MsQUFJRSxBQVFHLFdBcERSLEFBU0EsRUFhSCxDQXBGQSxBQXdDTyxDQTlCSCxBQTZGZixDQXRGZ0IsQUFPbEIsQUFVZ0IsQUFxQmhCLEFBcUJBLEFBY29CLEFBTXBCLEFBbUIwQixDQXpEekIsQUFpRG9CLENBekRWLENBTE8sTUE1Q00sQUE4REosQUFpQlcsQ0FSSCxBQWFkLENBbENFLEdBeENFLEFBd0JFLEVBakJGLEFBd0JsQixFQWlEcUIsQUFpQm5CLEFBUXdCLENBdEVULEtBd0NmLENBbENGLEVBWW1CLEdBcERSLENBVm1CLENBaUJWLEFBa0JwQixDQVpXLENBc0JYLEFBdUVRLENBekJSLEVBcEJBLEFBUUUsRUFwRXNCLEtBYVIsQUF1Q0UsTUE3Q2xCLFNBakI2QixDQXdCWCxBQXVDbUIsQ0FwRHJDLGlCQWNTLFFBeEJTLENBeUJYLE9BQ1UsQUFzQ2pCLFFBL0RrQixTQTBCbEIsT0F4QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYXJpcVxcRGVza3RvcFxcbWFzaHZpc29yIHJlYWN0IHRhc2tcXFByb2plY3RcXGNvbXBvbmVudHNcXHJlYWwtZXN0YXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29tcHJlc3MgZnJvbSBcInJlYWN0LWltYWdlLWZpbGUtcmVzaXplclwiO1xyXG5cclxuY2xhc3MgUmVhbEVzdGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBDb21wcih1cmwpe1xyXG4gICAgIFxyXG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2Nyb3NzT3JpZ2luJywgJ2Fub255bW91cycpO1xyXG4gICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcywgMCwgMCk7XHJcbiAgICBcclxuICAgICAgdmFyIGRhdGFVUkkgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBnXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAvLyBjb252ZXJ0IGJhc2U2NC9VUkxFbmNvZGVkIGRhdGEgY29tcG9uZW50IHRvIHJhdyBiaW5hcnkgZGF0YSBoZWxkIGluIGEgc3RyaW5nXHJcbiAgICAgIHZhciBieXRlU3RyaW5nO1xyXG4gICAgICBpZiAoZGF0YVVSSS5zcGxpdCgnLCcpWzBdLmluZGV4T2YoJ2Jhc2U2NCcpID49IDApXHJcbiAgICAgICAgYnl0ZVN0cmluZyA9IGF0b2IoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGJ5dGVTdHJpbmcgPSB1bmVzY2FwZShkYXRhVVJJLnNwbGl0KCcsJylbMV0pO1xyXG4gICAgXHJcbiAgICAgIC8vIHNlcGFyYXRlIG91dCB0aGUgbWltZSBjb21wb25lbnRcclxuICAgICAgdmFyIG1pbWVTdHJpbmcgPSBkYXRhVVJJLnNwbGl0KCcsJylbMF0uc3BsaXQoJzonKVsxXS5zcGxpdCgnOycpWzBdO1xyXG4gICAgXHJcbiAgICAgIC8vIHdyaXRlIHRoZSBieXRlcyBvZiB0aGUgc3RyaW5nIHRvIGEgdHlwZWQgYXJyYXlcclxuICAgICAgdmFyIGlhID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZVN0cmluZy5sZW5ndGgpO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpYVtpXSA9IGJ5dGVTdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgQmxvYihbaWFdLCB7IHR5cGU6IG1pbWVTdHJpbmcgfSkpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpbWcuc3JjID0gdXJsO1xyXG4gICAgXHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG4gICBnZXRSYXRlKCkge1xyXG4gICAgIFxyXG4gICAgIGxldCByYXRlPTA7XHJcbiAgICAgbGV0IHJhdGVzPVtdO1xyXG4gICAgICBpZih0aGlzLnByb3BzLml0ZW0uYWlyYm5iX1JPST09bnVsbCYmdGhpcy5wcm9wcy5pdGVtLnRyYWRpdGlvbmFsX1JPST09bnVsbCl7XHJcbiAgICAgICAgcmF0ZT0wO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5pdGVtLmFpcmJuYl9ST0k9PW51bGwpe1xyXG4gICAgICAgIHJhdGU9dGhpcy5wcm9wcy5pdGVtLnRyYWRpdGlvbmFsX1JPSVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5wcm9wcy5pdGVtLnRyYWRpdGlvbmFsX1JPST09bnVsbCl7XHJcbiAgICAgICAgcmF0ZT10aGlzLnByb3BzLml0ZW0uYWlyYm5iX1JPSVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgcmF0ZT0odGhpcy5wcm9wcy5pdGVtLmFpcmJuYl9ST0krdGhpcy5wcm9wcy5pdGVtLnRyYWRpdGlvbmFsX1JPSSkvMlxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA1OyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGluZGV4PHJhdGUpIHtcclxuICAgICAgICAgIHJhdGVzLnB1c2goPHNwYW4gY2xhc3NOYW1lPVwiIGZhcyBmYS1zdGFyXCI+PC9zcGFuPik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICByYXRlcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT1cIiBmYXIgZmEtc3RhclwiPjwvc3Bhbj4pO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhyYXRlKVxyXG4gICAgICBjb25zb2xlLmxvZyhyYXRlcylcclxuICAgICAgcmV0dXJuICByYXRlcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q29tcChjb21wZXJUeXBlKXtcclxuICAgICAgbGV0IEE9W11cclxuICAgICAgaWYoY29tcGVyVHlwZSE9XCJyZW50YWxfaW5jb21lXCIpe1xyXG4gICAgICBpZih0aGlzLnByb3BzLml0ZW1bY29tcGVyVHlwZV0uYWlyYm5iICE9bnVsbCl7XHJcbiAgICAgICAgbGV0IGRhdGE9dGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLmFpcmJuYi50b0ZpeGVkKDIpO1xyXG4gICAgICAgIEEucHVzaCggPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPjxzcGFuPntkYXRhfTwvc3Bhbj48c3Bhbj4lPC9zcGFuPjwvZGl2Pik7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLnRyYWRpdGlvbmFsICE9bnVsbCl7XHJcbiAgICAgICAgbGV0IGRhdGE9dGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLnRyYWRpdGlvbmFsLnRvRml4ZWQoMilcclxuICAgICAgICBBLnB1c2goIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48c3Bhbj57ZGF0YX08L3NwYW4+PHNwYW4+JTwvc3Bhbj48L2Rpdj4pO1xyXG5cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gQTtcclxuICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLml0ZW1bY29tcGVyVHlwZV0uYWlyYm5iICE9bnVsbCl7XHJcbiAgICAgICAgICBsZXQgZGF0YT10aGlzLnByb3BzLml0ZW1bY29tcGVyVHlwZV0uYWlyYm5iLnRvRml4ZWQoMCk7XHJcbiAgICAgICAgICBBLnB1c2goIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48c3Bhbj57ZGF0YX08L3NwYW4+PHNwYW4+JDwvc3Bhbj48L2Rpdj4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLml0ZW1bY29tcGVyVHlwZV0udHJhZGl0aW9uYWwgIT1udWxsKXtcclxuICAgICAgICAgIGxldCBkYXRhPXRoaXMucHJvcHMuaXRlbVtjb21wZXJUeXBlXS50cmFkaXRpb25hbC50b0ZpeGVkKDApXHJcbiAgICAgICAgICBBLnB1c2goIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48c3Bhbj57ZGF0YX08L3NwYW4+PHNwYW4+JDwvc3Bhbj48L2Rpdj4pO1xyXG4gIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gQTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgIDwgZGl2IGNsYXNzTmFtZT1cImNvbnRhbmlyXCI+XHJcbiAgICAgICAgIHt0aGlzLkNvbXByKCl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1wiPiBcclxuICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuaXRlbS5pbWFnZV91cmx9IGFsdD1cImhvdXNlXCIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17e21hcmdpbkxlZnQ6IFwiMyVcIn19Pnt0aGlzLnByb3BzLml0ZW0uYmVkc30gQkRTIHwge3RoaXMucHJvcHMuaXRlbS5iYXRoc30gYmEgfCB7dGhpcy5wcm9wcy5pdGVtLnNxZnR9IHNxcjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBzdHlsZT17e2Zsb2F0OiBcInJpZ2h0XCIsbWFyZ2luUmlnaHQ6IFwiMyVcIn19Pnt0aGlzLnByb3BzLml0ZW0ubGlzdF9wcmljZX0kPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+IFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jXCI+e3RoaXMucHJvcHMuaXRlbS5hZGRyZXNzfTwvc3Bhbj5cclxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhcnNcIj5cclxuICAgICAgICAgIDxzcGFuPnt0aGlzLmdldFJhdGUoKX08L3NwYW4+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyaXNvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXY+PGhyLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYXJlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBvZmZzZXQtNiBmb250c3R5bGluZ1wiPkFpcmJuYjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgZm9udHN0eWxpbmdcIj5UcmFkLjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPkNBU0ggT04gQ0FTSDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICB0aGlzLmdldENvbXAoXCJDT0NcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPkNBUCBSQVRFPC9kaXY+XHJcbiAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcChcImNhcF9yYXRlXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj4gUkVOVEFMIElOQ09NRTwvZGl2PlxyXG4gICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICB0aGlzLmdldENvbXAoXCJyZW50YWxfaW5jb21lXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj48aHIvPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgIDxkaXY+VklFVyBORUlHSEJPUkhPT0QgQU5BTFlUSUNTPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmNvbnRhbmlye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDI1OWRiOTQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICAuaW1nIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgLmltZ3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMnZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEydnc7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmJhc2ljLWluZm97XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDAsIDAsMC42NSlcclxuICAgICAgO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRhLXNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS41JTtcclxuICAgICAgICBmb250LXNpemU6IDF2dztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5jb21wYXJle1xyXG4gICAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmxvY2F0aW9uLC5jb21wYXJpc29uLXNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgfVxyXG4gICAgICAuc3RhcnN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICBjb2xvcjogIzAyNTdkYjtcclxuICAgICAgfVxyXG4gICAgICAubG9je1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmZvbnRzdHlsaW5ne1xyXG4gICAgICBmb250LXdlaWdodDpib2xkXHJcbiAgICAgIDt9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vdGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgIGNvbG9yOiAjMDI1N2RiO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAgIzAyNTlkYjk0O1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICBocntcclxuICAgICAgICBoZWlnaHQ6MnB4O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDowO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAyNTlkYjg4O1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRhLXNlY3Rpb24sLmZvb3RlciAsLmJhc2ljLWluZm8sLmNvbnRhbmlye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45dnc7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIGhye1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMSUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206MSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAuZGF0YS1zZWN0aW9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBmb250LXNpemU6IDJ2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC5pbWd7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZGF0YS1zZWN0aW9uLC5mb290ZXIgLC5iYXNpYy1pbmZvLC5jb250YW5pcntcclxuICAgICAgICBmb250LXNpemU6IDAuOHZ3O1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDAwcHgpIHtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC5kYXRhLXNlY3Rpb24sLmZvb3RlciAsLmJhc2ljLWluZm8sLmNvbnRhbmlye1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFJlYWxFc3RhdDsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Tariq\\\\Desktop\\\\mashvisor react task\\\\Project\\\\components\\\\real-estat.js */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 8
      }, this);
    }
  }]);

  return RealEstat;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RealEstat);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWFsLWVzdGF0LmpzIl0sIm5hbWVzIjpbIlJlYWxFc3RhdCIsInVybCIsImltZyIsIkltYWdlIiwic2V0QXR0cmlidXRlIiwib25sb2FkIiwiYSIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImRhdGFVUkkiLCJ0b0RhdGFVUkwiLCJieXRlU3RyaW5nIiwic3BsaXQiLCJpbmRleE9mIiwiYXRvYiIsInVuZXNjYXBlIiwibWltZVN0cmluZyIsImlhIiwiVWludDhBcnJheSIsImxlbmd0aCIsImkiLCJjaGFyQ29kZUF0IiwiY2FsbGJhY2siLCJCbG9iIiwidHlwZSIsInNyYyIsInJhdGUiLCJyYXRlcyIsInByb3BzIiwiaXRlbSIsImFpcmJuYl9ST0kiLCJ0cmFkaXRpb25hbF9ST0kiLCJpbmRleCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY29tcGVyVHlwZSIsIkEiLCJhaXJibmIiLCJkYXRhIiwidG9GaXhlZCIsInRyYWRpdGlvbmFsIiwiQ29tcHIiLCJpbWFnZV91cmwiLCJtYXJnaW5MZWZ0IiwiYmVkcyIsImJhdGhzIiwic3FmdCIsIm1hcmdpblJpZ2h0IiwibGlzdF9wcmljZSIsImFkZHJlc3MiLCJnZXRSYXRlIiwiZ2V0Q29tcCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsUzs7Ozs7Ozs7Ozs7OzswQkFDRUMsRyxFQUFJO0FBRU4sVUFBSUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBVjtBQUNBRCxTQUFHLENBQUNFLFlBQUosQ0FBaUIsYUFBakIsRUFBZ0MsV0FBaEM7O0FBQ0FGLFNBQUcsQ0FBQ0csTUFBSixHQUFhLFVBQVVDLENBQVYsRUFBYTtBQUMxQixZQUFJQyxNQUFN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SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBNUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQXNDQTtBQUFBLGdEQUFlLFFBQWY7QUFBQSxtQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBOExEOzs7O0VBalNtQkMsNENBQUssQ0FBQ0MsUzs7QUFzU2I1RCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hY2QzNWRmNThlYjM5OWNiMTkzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbXByZXNzIGZyb20gXCJyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXJcIjtcclxuXHJcbmNsYXNzIFJlYWxFc3RhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgQ29tcHIodXJsKXtcclxuICAgICBcclxuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdjcm9zc09yaWdpbicsICdhbm9ueW1vdXMnKTtcclxuICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICBjYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMsIDAsIDApO1xyXG4gICAgXHJcbiAgICAgIHZhciBkYXRhVVJJID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZ1wiKTtcclxuICAgICAgICBcclxuICAgICAgLy8gY29udmVydCBiYXNlNjQvVVJMRW5jb2RlZCBkYXRhIGNvbXBvbmVudCB0byByYXcgYmluYXJ5IGRhdGEgaGVsZCBpbiBhIHN0cmluZ1xyXG4gICAgICB2YXIgYnl0ZVN0cmluZztcclxuICAgICAgaWYgKGRhdGFVUkkuc3BsaXQoJywnKVswXS5pbmRleE9mKCdiYXNlNjQnKSA+PSAwKVxyXG4gICAgICAgIGJ5dGVTdHJpbmcgPSBhdG9iKGRhdGFVUkkuc3BsaXQoJywnKVsxXSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBieXRlU3RyaW5nID0gdW5lc2NhcGUoZGF0YVVSSS5zcGxpdCgnLCcpWzFdKTtcclxuICAgIFxyXG4gICAgICAvLyBzZXBhcmF0ZSBvdXQgdGhlIG1pbWUgY29tcG9uZW50XHJcbiAgICAgIHZhciBtaW1lU3RyaW5nID0gZGF0YVVSSS5zcGxpdCgnLCcpWzBdLnNwbGl0KCc6JylbMV0uc3BsaXQoJzsnKVswXTtcclxuICAgIFxyXG4gICAgICAvLyB3cml0ZSB0aGUgYnl0ZXMgb2YgdGhlIHN0cmluZyB0byBhIHR5cGVkIGFycmF5XHJcbiAgICAgIHZhciBpYSA9IG5ldyBVaW50OEFycmF5KGJ5dGVTdHJpbmcubGVuZ3RoKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWFbaV0gPSBieXRlU3RyaW5nLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEJsb2IoW2lhXSwgeyB0eXBlOiBtaW1lU3RyaW5nIH0pKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW1nLnNyYyA9IHVybDtcclxuICAgIFxyXG4gICBcclxuICAgIFxyXG4gIH1cclxuICAgZ2V0UmF0ZSgpIHtcclxuICAgICBcclxuICAgICBsZXQgcmF0ZT0wO1xyXG4gICAgIGxldCByYXRlcz1bXTtcclxuICAgICAgaWYodGhpcy5wcm9wcy5pdGVtLmFpcmJuYl9ST0k9PW51bGwmJnRoaXMucHJvcHMuaXRlbS50cmFkaXRpb25hbF9ST0k9PW51bGwpe1xyXG4gICAgICAgIHJhdGU9MDtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMucHJvcHMuaXRlbS5haXJibmJfUk9JPT1udWxsKXtcclxuICAgICAgICByYXRlPXRoaXMucHJvcHMuaXRlbS50cmFkaXRpb25hbF9ST0lcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMucHJvcHMuaXRlbS50cmFkaXRpb25hbF9ST0k9PW51bGwpe1xyXG4gICAgICAgIHJhdGU9dGhpcy5wcm9wcy5pdGVtLmFpcmJuYl9ST0lcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgIHJhdGU9KHRoaXMucHJvcHMuaXRlbS5haXJibmJfUk9JK3RoaXMucHJvcHMuaXRlbS50cmFkaXRpb25hbF9ST0kpLzJcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChpbmRleDxyYXRlKSB7XHJcbiAgICAgICAgICByYXRlcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT1cIiBmYXMgZmEtc3RhclwiPjwvc3Bhbj4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgcmF0ZXMucHVzaCg8c3BhbiBjbGFzc05hbWU9XCIgZmFyIGZhLXN0YXJcIj48L3NwYW4+KTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocmF0ZSlcclxuICAgICAgY29uc29sZS5sb2cocmF0ZXMpXHJcbiAgICAgIHJldHVybiAgcmF0ZXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldENvbXAoY29tcGVyVHlwZSl7XHJcbiAgICAgIGxldCBBPVtdXHJcbiAgICAgIGlmKGNvbXBlclR5cGUhPVwicmVudGFsX2luY29tZVwiKXtcclxuICAgICAgaWYodGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLmFpcmJuYiAhPW51bGwpe1xyXG4gICAgICAgIGxldCBkYXRhPXRoaXMucHJvcHMuaXRlbVtjb21wZXJUeXBlXS5haXJibmIudG9GaXhlZCgyKTtcclxuICAgICAgICBBLnB1c2goIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48c3Bhbj57ZGF0YX08L3NwYW4+PHNwYW4+JTwvc3Bhbj48L2Rpdj4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMucHJvcHMuaXRlbVtjb21wZXJUeXBlXS50cmFkaXRpb25hbCAhPW51bGwpe1xyXG4gICAgICAgIGxldCBkYXRhPXRoaXMucHJvcHMuaXRlbVtjb21wZXJUeXBlXS50cmFkaXRpb25hbC50b0ZpeGVkKDIpXHJcbiAgICAgICAgQS5wdXNoKCA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+PHNwYW4+e2RhdGF9PC9zcGFuPjxzcGFuPiU8L3NwYW4+PC9kaXY+KTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIEE7XHJcbiAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLmFpcmJuYiAhPW51bGwpe1xyXG4gICAgICAgICAgbGV0IGRhdGE9dGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLmFpcmJuYi50b0ZpeGVkKDApO1xyXG4gICAgICAgICAgQS5wdXNoKCA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+PHNwYW4+e2RhdGF9PC9zcGFuPjxzcGFuPiQ8L3NwYW4+PC9kaXY+KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pdGVtW2NvbXBlclR5cGVdLnRyYWRpdGlvbmFsICE9bnVsbCl7XHJcbiAgICAgICAgICBsZXQgZGF0YT10aGlzLnByb3BzLml0ZW1bY29tcGVyVHlwZV0udHJhZGl0aW9uYWwudG9GaXhlZCgwKVxyXG4gICAgICAgICAgQS5wdXNoKCA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+PHNwYW4+e2RhdGF9PC9zcGFuPjxzcGFuPiQ8L3NwYW4+PC9kaXY+KTtcclxuICBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEE7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICA8IGRpdiBjbGFzc05hbWU9XCJjb250YW5pclwiPlxyXG4gICAgICAgICB7dGhpcy5Db21wcigpfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdcIj4gXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLml0ZW0uaW1hZ2VfdXJsfSBhbHQ9XCJob3VzZVwiLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3ttYXJnaW5MZWZ0OiBcIjMlXCJ9fT57dGhpcy5wcm9wcy5pdGVtLmJlZHN9IEJEUyB8IHt0aGlzLnByb3BzLml0ZW0uYmF0aHN9IGJhIHwge3RoaXMucHJvcHMuaXRlbS5zcWZ0fSBzcXI8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3tmbG9hdDogXCJyaWdodFwiLG1hcmdpblJpZ2h0OiBcIjMlXCJ9fT57dGhpcy5wcm9wcy5pdGVtLmxpc3RfcHJpY2V9JDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPiBcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvY1wiPnt0aGlzLnByb3BzLml0ZW0uYWRkcmVzc308L3NwYW4+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJzXCI+XHJcbiAgICAgICAgICA8c3Bhbj57dGhpcy5nZXRSYXRlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhcmlzb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2Pjxoci8+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFyZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgb2Zmc2V0LTYgZm9udHN0eWxpbmdcIj5BaXJibmI8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGZvbnRzdHlsaW5nXCI+VHJhZC48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5DQVNIIE9OIENBU0g8L2Rpdj5cclxuICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgdGhpcy5nZXRDb21wKFwiQ09DXCIpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5DQVAgUkFURTwvZGl2PlxyXG4gICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICB0aGlzLmdldENvbXAoXCJjYXBfcmF0ZVwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+IFJFTlRBTCBJTkNPTUU8L2Rpdj5cclxuICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgdGhpcy5nZXRDb21wKFwicmVudGFsX2luY29tZVwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+PGhyLz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlZJRVcgTkVJR0hCT1JIT09EIEFOQUxZVElDUzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YW5pcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAyNTlkYjk0O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmltZyBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWd7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTJ2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMnZ3O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5iYXNpYy1pbmZve1xyXG4gICAgICBmb250LXNpemU6IDEuMnZ3O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAwLCAwLDAuNjUpXHJcbiAgICAgIDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgfVxyXG4gICAgICAuZGF0YS1zZWN0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgICAuY29tcGFyZXtcclxuICAgICAgICBtYXgtd2lkdGg6IDg1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5sb2NhdGlvbiwuY29tcGFyaXNvbi1zZWN0aW9ue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXJze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMyU7XHJcbiAgICAgICAgY29sb3I6ICMwMjU3ZGI7XHJcbiAgICAgIH1cclxuICAgICAgLmxvY3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb250c3R5bGluZ3tcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZFxyXG4gICAgICA7fVxyXG4gICAgICBcclxuICAgICAgLmZvb3RlcntcclxuICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICBjb2xvcjogIzAyNTdkYjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjF2dztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgICMwMjU5ZGI5NDtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaHJ7XHJcbiAgICAgICAgaGVpZ2h0OjJweDtcclxuICAgICAgICBib3JkZXItd2lkdGg6MDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMjU5ZGI4ODtcclxuICAgICAgfVxyXG4gICAgICAuZGF0YS1zZWN0aW9uLC5mb290ZXIgLC5iYXNpYy1pbmZvLC5jb250YW5pcntcclxuICAgICAgICBmb250LXNpemU6IDAuOXZ3O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICBocntcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjElICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLmRhdGEtc2VjdGlvbntcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgZm9udC1zaXplOiAydnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAuaW1ne1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmRhdGEtc2VjdGlvbiwuZm9vdGVyICwuYmFzaWMtaW5mbywuY29udGFuaXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjh2dztcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwMHB4KSB7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICAuZGF0YS1zZWN0aW9uLC5mb290ZXIgLC5iYXNpYy1pbmZvLC5jb250YW5pcntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICAgICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBSZWFsRXN0YXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==