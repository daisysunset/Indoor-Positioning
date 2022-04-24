webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scatterplot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Scatterplot.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _BaseComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseComp */ \"./src/components/BaseComp.vue\");\n/* harmony import */ var vega_embed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vega-embed */ \"./node_modules/vega-embed/build/vega-embed.module.js\");\n\n\n\n\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      view: null\n    };\n  },\n  computed: {\n    vegaSpec: function vegaSpec() {\n      console.log(this.data);\n      return {\n        data: {\n          values: this.data\n        },\n        selection: {\n          brush: {\n            type: \"interval\"\n          },\n          multi: {\n            type: \"multi\"\n          }\n        },\n        mark: 'point',\n        encoding: {\n          x: {\n            field: this.encoding.x,\n            type: 'quantitative',\n            scale: {\n              domain: [0, 10]\n            }\n          },\n          y: {\n            field: this.encoding.y,\n            type: 'quantitative',\n            scale: {\n              domain: [0, 10]\n            }\n          },\n          color: {\n            condition: {\n              selection: \"brush\",\n              value: \"blue\"\n            },\n            value: \"grey\"\n          },\n          size: {\n            value: 50\n          }\n        },\n        width: 400,\n        height: 400\n      };\n    }\n  },\n  props: ['id', 'data', 'selection', 'encoding'],\n  watch: {\n    vegaSpec: function vegaSpec(value) {\n      return regeneratorRuntime.async(function vegaSpec$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return regeneratorRuntime.awrap(this.embedVegaSpec(this.value));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this);\n    },\n    selection: function selection(value) {\n      // 计算brush range\n      var range;\n      if (value.length === 0) range = [[0, 0], [0, 0]];else {\n        var xMin = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.minBy(value, this.encoding.x)[this.encoding.x];\n\n        var xMax = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.maxBy(value, this.encoding.x)[this.encoding.x];\n\n        var yMin = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.minBy(value, this.encoding.y)[this.encoding.y];\n\n        var yMax = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.maxBy(value, this.encoding.y)[this.encoding.y]; // 和通常range模型不一样\n\n\n        range = [[xMin, xMax], [yMax, yMin]];\n      } // 不会立即更新\n      // TODO: bug, interval范围可能包含别的点，得用multi处理才行\n\n      this.view.data('brush_store', [{\n        fields: [{\n          channel: 'x',\n          field: this.encoding.x,\n          type: 'R'\n        }, {\n          channel: 'y',\n          field: this.encoding.y,\n          type: 'R'\n        }],\n        unit: '',\n        values: range\n      }]); // 触发更新\n\n      this.view.runAsync();\n    }\n  },\n  // 初始化\n  mounted: function mounted() {\n    return regeneratorRuntime.async(function mounted$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return regeneratorRuntime.awrap(this.embedVegaSpec(this.vegaSpec));\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, null, this);\n  },\n  methods: {\n    embedVegaSpec: function embedVegaSpec(spec) {\n      var _this = this;\n\n      var view;\n      return regeneratorRuntime.async(function embedVegaSpec$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return regeneratorRuntime.awrap(Object(vega_embed__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"#\".concat(this.id), spec, {\n                renderer: 'svg'\n              }));\n\n            case 2:\n              view = _context3.sent.view;\n              // 监听数据变化\n              view.addDataListener('brush_store', function (name, value) {\n                var brushRange = [[value[0].values[0][0], value[0].values[0][1]], [value[0].values[1][1], value[0].values[1][0]]];\n\n                var selectedPts = _this.data.filter(function (v) {\n                  var x = v[_this.encoding.x];\n                  var y = v[_this.encoding.y];\n                  var inRange = x >= brushRange[0][0] && x <= brushRange[0][1] && y >= brushRange[1][0] && y <= brushRange[1][1];\n                  return inRange;\n                });\n\n                _this.$emit('brush', selectedPts);\n              });\n              this.view = view;\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, null, this);\n    }\n  },\n  components: {\n    Base: _BaseComp__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2NhdHRlcnBsb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TY2F0dGVycGxvdC52dWU/ZDZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPEJhc2U+XHJcbiAgICA8ZGl2IDppZD1cImlkXCI+PC9kaXY+XHJcbiAgPC9CYXNlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2VDb21wJ1xyXG5pbXBvcnQgZW1iZWQgZnJvbSAndmVnYS1lbWJlZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlldzogbnVsbCxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICB2ZWdhU3BlYygpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGE6IHsgdmFsdWVzOiB0aGlzLmRhdGEgfSxcclxuICAgICAgICBzZWxlY3Rpb246IHsgXHJcbiAgICAgICAgICBicnVzaDogeyB0eXBlOiBcImludGVydmFsXCIgfSxcclxuICAgICAgICAgIG11bHRpOiB7IHR5cGU6IFwibXVsdGlcIiB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXJrOiAncG9pbnQnLFxyXG4gICAgICAgIGVuY29kaW5nOiB7XHJcbiAgICAgICAgICB4OiB7IGZpZWxkOiB0aGlzLmVuY29kaW5nLngsIHR5cGU6ICdxdWFudGl0YXRpdmUnLCBzY2FsZTogeyBkb21haW46IFswLCAxMF0gfSB9LFxyXG4gICAgICAgICAgeTogeyBmaWVsZDogdGhpcy5lbmNvZGluZy55LCB0eXBlOiAncXVhbnRpdGF0aXZlJywgc2NhbGU6IHsgZG9tYWluOiBbMCwgMTBdIH0gfSxcclxuICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIGNvbmRpdGlvbjoge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGlvbjogXCJicnVzaFwiLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBcImJsdWVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogXCJncmV5XCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiA1MFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByb3BzOiBbJ2lkJywgJ2RhdGEnLCAnc2VsZWN0aW9uJywgJ2VuY29kaW5nJ10sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFzeW5jIHZlZ2FTcGVjKHZhbHVlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuZW1iZWRWZWdhU3BlYyh0aGlzLnZhbHVlKVxyXG4gICAgfSxcclxuICAgIHNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAvLyDorqHnrpdicnVzaCByYW5nZVxyXG4gICAgICBsZXQgcmFuZ2VcclxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmFuZ2UgPSBbWzAsIDBdLCBbMCwgMF1dXHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHhNaW4gPSBfLm1pbkJ5KHZhbHVlLCB0aGlzLmVuY29kaW5nLngpW3RoaXMuZW5jb2RpbmcueF1cclxuICAgICAgICBjb25zdCB4TWF4ID0gXy5tYXhCeSh2YWx1ZSwgdGhpcy5lbmNvZGluZy54KVt0aGlzLmVuY29kaW5nLnhdXHJcbiAgICAgICAgY29uc3QgeU1pbiA9IF8ubWluQnkodmFsdWUsIHRoaXMuZW5jb2RpbmcueSlbdGhpcy5lbmNvZGluZy55XVxyXG4gICAgICAgIGNvbnN0IHlNYXggPSBfLm1heEJ5KHZhbHVlLCB0aGlzLmVuY29kaW5nLnkpW3RoaXMuZW5jb2RpbmcueV1cclxuICAgICAgICAvLyDlkozpgJrluLhyYW5nZeaooeWei+S4jeS4gOagt1xyXG4gICAgICAgIHJhbmdlID0gW1t4TWluLCB4TWF4XSwgW3lNYXgsIHlNaW5dXVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyDkuI3kvJrnq4vljbPmm7TmlrBcclxuICAgICAgLy8gVE9ETzogYnVnLCBpbnRlcnZhbOiMg+WbtOWPr+iDveWMheWQq+WIq+eahOeCue+8jOW+l+eUqG11bHRp5aSE55CG5omN6KGMXHJcbiAgICAgIHRoaXMudmlldy5kYXRhKCdicnVzaF9zdG9yZScsIFt7XHJcbiAgICAgICAgZmllbGRzOiBbXHJcbiAgICAgICAgICB7IGNoYW5uZWw6ICd4JywgZmllbGQ6IHRoaXMuZW5jb2RpbmcueCwgdHlwZTogJ1InIH0sXHJcbiAgICAgICAgICB7IGNoYW5uZWw6ICd5JywgZmllbGQ6IHRoaXMuZW5jb2RpbmcueSwgdHlwZTogJ1InIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVuaXQ6ICcnLFxyXG4gICAgICAgIHZhbHVlczogcmFuZ2VcclxuICAgICAgfV0pXHJcbiAgICAgIC8vIOinpuWPkeabtOaWsFxyXG4gICAgICB0aGlzLnZpZXcucnVuQXN5bmMoKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8g5Yid5aeL5YyWXHJcbiAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgIGF3YWl0IHRoaXMuZW1iZWRWZWdhU3BlYyh0aGlzLnZlZ2FTcGVjKVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgZW1iZWRWZWdhU3BlYyhzcGVjKSB7XHJcbiAgICAgIGNvbnN0IHZpZXcgPSAoYXdhaXQgZW1iZWQoYCMke3RoaXMuaWR9YCwgc3BlYywge3JlbmRlcmVyOiAnc3ZnJ30pKS52aWV3XHJcbiAgICAgIC8vIOebkeWQrOaVsOaNruWPmOWMllxyXG4gICAgICB2aWV3LmFkZERhdGFMaXN0ZW5lcignYnJ1c2hfc3RvcmUnLCAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCBicnVzaFJhbmdlID0gW1xyXG4gICAgICAgICAgW3ZhbHVlWzBdLnZhbHVlc1swXVswXSwgdmFsdWVbMF0udmFsdWVzWzBdWzFdXSwgXHJcbiAgICAgICAgICBbdmFsdWVbMF0udmFsdWVzWzFdWzFdLCB2YWx1ZVswXS52YWx1ZXNbMV1bMF1dXHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RlZFB0cyA9IHRoaXMuZGF0YS5maWx0ZXIodiA9PiB7XHJcbiAgICAgICAgICBjb25zdCB4ID0gdlt0aGlzLmVuY29kaW5nLnhdXHJcbiAgICAgICAgICBjb25zdCB5ID0gdlt0aGlzLmVuY29kaW5nLnldXHJcbiAgICAgICAgICBjb25zdCBpblJhbmdlID0geCA+PSBicnVzaFJhbmdlWzBdWzBdIFxyXG4gICAgICAgICAgICAmJiB4IDw9IGJydXNoUmFuZ2VbMF1bMV0gXHJcbiAgICAgICAgICAgICYmIHkgPj0gYnJ1c2hSYW5nZVsxXVswXSBcclxuICAgICAgICAgICAgJiYgeSA8PSBicnVzaFJhbmdlWzFdWzFdXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBpblJhbmdlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnYnJ1c2gnLCBzZWxlY3RlZFB0cylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMudmlldyA9IHZpZXdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEJhc2VcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5ib3gge1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFWQTtBQWNBO0FBQ0E7QUF0QkE7QUF3QkE7QUEzQkE7QUE2QkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQTdCQTtBQStCQTtBQUNBO0FBcEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1RUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUhBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCQTtBQUNBO0FBREE7QUFsR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scatterplot.vue?vue&type=script&lang=js&\n");

/***/ })

})