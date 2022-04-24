webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scatterplot.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Scatterplot.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _BaseComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BaseComp */ \"./src/components/BaseComp.vue\");\n/* harmony import */ var vega_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vega-embed */ \"./node_modules/vega-embed/build/vega-embed.module.js\");\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      view: null\n    };\n  },\n  computed: {\n    vegaSpec: function vegaSpec() {\n      return {\n        data: {\n          values: this.data.concat([{\n            \"West-East\": 0.0,\n            \"North-South\": 0.0,\n            \"id\": \"f4041c\"\n          }, {\n            \"West-East\": 0.0,\n            \"North-South\": 10.2,\n            \"id\": \"f40443\"\n          }, {\n            \"West-East\": 6.47,\n            \"North-South\": 10.2,\n            \"id\": \"f40444\"\n          }])\n        },\n        param: [{\n          \"West-East\": 0.0,\n          \"North-South\": 0.0,\n          \"id\": \"f4041c\"\n        }, {\n          \"West-East\": 0.0,\n          \"North-South\": 10.2,\n          \"id\": \"f40443\"\n        }, {\n          \"West-East\": 6.47,\n          \"North-South\": 10.2,\n          \"id\": \"f40444\"\n        }],\n        selection: {\n          brush: {\n            type: \"interval\"\n          },\n          multi: {\n            type: \"multi\"\n          }\n        },\n        mark: 'point',\n        encoding: {\n          x: {\n            field: this.encoding.x,\n            type: 'quantitative',\n            scale: {\n              domain: [0, 7]\n            }\n          },\n          y: {\n            field: this.encoding.y,\n            type: 'quantitative',\n            scale: {\n              domain: [0, 11]\n            }\n          },\n          color: {\n            condition: {\n              selection: \"brush\",\n              value: \"blue\"\n            },\n            value: \"grey\"\n          },\n          size: {\n            value: 50\n          }\n        },\n        width: 400,\n        height: 400\n      };\n    }\n  },\n  props: ['id', 'data', 'selection', 'encoding'],\n  watch: {\n    vegaSpec: function vegaSpec(value) {\n      return regeneratorRuntime.async(function vegaSpec$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return regeneratorRuntime.awrap(this.embedVegaSpec(this.value));\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, null, this);\n    },\n    selection: function selection(value) {\n      // 计算brush range\n      var range;\n      if (value.length === 0) range = [[0, 0], [0, 0]];else {\n        var xMin = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.minBy(value, this.encoding.x)[this.encoding.x];\n\n        var xMax = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.maxBy(value, this.encoding.x)[this.encoding.x];\n\n        var yMin = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.minBy(value, this.encoding.y)[this.encoding.y];\n\n        var yMax = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.maxBy(value, this.encoding.y)[this.encoding.y]; // 和通常range模型不一样\n\n\n        range = [[xMin, xMax], [yMax, yMin]];\n      } // 不会立即更新\n      // TODO: bug, interval范围可能包含别的点，得用multi处理才行\n\n      this.view.data('brush_store', [{\n        fields: [{\n          channel: 'x',\n          field: this.encoding.x,\n          type: 'R'\n        }, {\n          channel: 'y',\n          field: this.encoding.y,\n          type: 'R'\n        }],\n        unit: '',\n        values: range\n      }]); // 触发更新\n\n      this.view.runAsync();\n    }\n  },\n  // 初始化\n  mounted: function mounted() {\n    return regeneratorRuntime.async(function mounted$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return regeneratorRuntime.awrap(this.embedVegaSpec(this.vegaSpec));\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, null, this);\n  },\n  methods: {\n    embedVegaSpec: function embedVegaSpec(spec) {\n      var _this = this;\n\n      var view;\n      return regeneratorRuntime.async(function embedVegaSpec$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return regeneratorRuntime.awrap(Object(vega_embed__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"#\".concat(this.id), spec, {\n                renderer: 'svg'\n              }));\n\n            case 2:\n              view = _context3.sent.view;\n              // 监听数据变化\n              view.addDataListener('brush_store', function (name, value) {\n                var brushRange = [[value[0].values[0][0], value[0].values[0][1]], [value[0].values[1][1], value[0].values[1][0]]];\n\n                var selectedPts = _this.data.filter(function (v) {\n                  var x = v[_this.encoding.x];\n                  var y = v[_this.encoding.y];\n                  var inRange = x >= brushRange[0][0] && x <= brushRange[0][1] && y >= brushRange[1][0] && y <= brushRange[1][1];\n                  return inRange;\n                });\n\n                _this.$emit('brush', selectedPts);\n              });\n              this.view = view;\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, null, this);\n    }\n  },\n  components: {\n    Base: _BaseComp__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2NhdHRlcnBsb3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TY2F0dGVycGxvdC52dWU/ZDZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPEJhc2U+XHJcbiAgICA8ZGl2IDppZD1cImlkXCI+PC9kaXY+XHJcbiAgPC9CYXNlPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2VDb21wJ1xyXG5pbXBvcnQgZW1iZWQgZnJvbSAndmVnYS1lbWJlZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlldzogbnVsbCxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICB2ZWdhU3BlYygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhOiB7IHZhbHVlczogdGhpcy5kYXRhLmNvbmNhdChbXHJcbiAgICAgICAgICB7XCJXZXN0LUVhc3RcIjogMC4wLCBcIk5vcnRoLVNvdXRoXCI6IDAuMCwgXCJpZFwiOiBcImY0MDQxY1wifSxcclxuICAgICAgICAgIHtcIldlc3QtRWFzdFwiOiAwLjAsIFwiTm9ydGgtU291dGhcIjogMTAuMiwgXCJpZFwiOiBcImY0MDQ0M1wifSxcclxuICAgICAgICAgIHtcIldlc3QtRWFzdFwiOiA2LjQ3LCBcIk5vcnRoLVNvdXRoXCI6IDEwLjIsIFwiaWRcIjogXCJmNDA0NDRcIn1dKSB9LFxyXG4gICAgICAgIHBhcmFtOiBbXHJcbiAgICAgICAgICB7XCJXZXN0LUVhc3RcIjogMC4wLCBcIk5vcnRoLVNvdXRoXCI6IDAuMCwgXCJpZFwiOiBcImY0MDQxY1wifSxcclxuICAgICAgICAgIHtcIldlc3QtRWFzdFwiOiAwLjAsIFwiTm9ydGgtU291dGhcIjogMTAuMiwgXCJpZFwiOiBcImY0MDQ0M1wifSxcclxuICAgICAgICAgIHtcIldlc3QtRWFzdFwiOiA2LjQ3LCBcIk5vcnRoLVNvdXRoXCI6IDEwLjIsIFwiaWRcIjogXCJmNDA0NDRcIn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNlbGVjdGlvbjogeyBcclxuICAgICAgICAgIGJydXNoOiB7IHR5cGU6IFwiaW50ZXJ2YWxcIiB9LFxyXG4gICAgICAgICAgbXVsdGk6IHsgdHlwZTogXCJtdWx0aVwiIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcms6ICdwb2ludCcsXHJcbiAgICAgICAgZW5jb2Rpbmc6IHtcclxuICAgICAgICAgIHg6IHsgZmllbGQ6IHRoaXMuZW5jb2RpbmcueCwgdHlwZTogJ3F1YW50aXRhdGl2ZScsIHNjYWxlOiB7IGRvbWFpbjogWzAsIDddIH0gfSxcclxuICAgICAgICAgIHk6IHsgZmllbGQ6IHRoaXMuZW5jb2RpbmcueSwgdHlwZTogJ3F1YW50aXRhdGl2ZScsIHNjYWxlOiB7IGRvbWFpbjogWzAsIDExXSB9IH0sXHJcbiAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICBjb25kaXRpb246IHtcclxuICAgICAgICAgICAgICBzZWxlY3Rpb246IFwiYnJ1c2hcIixcclxuICAgICAgICAgICAgICB2YWx1ZTogXCJibHVlXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IFwiZ3JleVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICB2YWx1ZTogNTBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgIGhlaWdodDogNDAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBwcm9wczogWydpZCcsICdkYXRhJywgJ3NlbGVjdGlvbicsICdlbmNvZGluZyddLFxyXG4gIHdhdGNoOiB7XHJcbiAgICBhc3luYyB2ZWdhU3BlYyh2YWx1ZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLmVtYmVkVmVnYVNwZWModGhpcy52YWx1ZSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3Rpb24odmFsdWUpIHtcclxuICAgICAgLy8g6K6h566XYnJ1c2ggcmFuZ2VcclxuICAgICAgbGV0IHJhbmdlXHJcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHJhbmdlID0gW1swLCAwXSwgWzAsIDBdXVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCB4TWluID0gXy5taW5CeSh2YWx1ZSwgdGhpcy5lbmNvZGluZy54KVt0aGlzLmVuY29kaW5nLnhdXHJcbiAgICAgICAgY29uc3QgeE1heCA9IF8ubWF4QnkodmFsdWUsIHRoaXMuZW5jb2RpbmcueClbdGhpcy5lbmNvZGluZy54XVxyXG4gICAgICAgIGNvbnN0IHlNaW4gPSBfLm1pbkJ5KHZhbHVlLCB0aGlzLmVuY29kaW5nLnkpW3RoaXMuZW5jb2RpbmcueV1cclxuICAgICAgICBjb25zdCB5TWF4ID0gXy5tYXhCeSh2YWx1ZSwgdGhpcy5lbmNvZGluZy55KVt0aGlzLmVuY29kaW5nLnldXHJcbiAgICAgICAgLy8g5ZKM6YCa5bi4cmFuZ2XmqKHlnovkuI3kuIDmoLdcclxuICAgICAgICByYW5nZSA9IFtbeE1pbiwgeE1heF0sIFt5TWF4LCB5TWluXV1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8g5LiN5Lya56uL5Y2z5pu05pawXHJcbiAgICAgIC8vIFRPRE86IGJ1ZywgaW50ZXJ2YWzojIPlm7Tlj6/og73ljIXlkKvliKvnmoTngrnvvIzlvpfnlKhtdWx0aeWkhOeQhuaJjeihjFxyXG4gICAgICB0aGlzLnZpZXcuZGF0YSgnYnJ1c2hfc3RvcmUnLCBbe1xyXG4gICAgICAgIGZpZWxkczogW1xyXG4gICAgICAgICAgeyBjaGFubmVsOiAneCcsIGZpZWxkOiB0aGlzLmVuY29kaW5nLngsIHR5cGU6ICdSJyB9LFxyXG4gICAgICAgICAgeyBjaGFubmVsOiAneScsIGZpZWxkOiB0aGlzLmVuY29kaW5nLnksIHR5cGU6ICdSJyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1bml0OiAnJyxcclxuICAgICAgICB2YWx1ZXM6IHJhbmdlXHJcbiAgICAgIH1dKVxyXG4gICAgICAvLyDop6blj5Hmm7TmlrBcclxuICAgICAgdGhpcy52aWV3LnJ1bkFzeW5jKClcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIOWIneWni+WMllxyXG4gIGFzeW5jIG1vdW50ZWQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLmVtYmVkVmVnYVNwZWModGhpcy52ZWdhU3BlYylcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGVtYmVkVmVnYVNwZWMoc3BlYykge1xyXG4gICAgICBjb25zdCB2aWV3ID0gKGF3YWl0IGVtYmVkKGAjJHt0aGlzLmlkfWAsIHNwZWMsIHtyZW5kZXJlcjogJ3N2Zyd9KSkudmlld1xyXG4gICAgICAvLyDnm5HlkKzmlbDmja7lj5jljJZcclxuICAgICAgdmlldy5hZGREYXRhTGlzdGVuZXIoJ2JydXNoX3N0b3JlJywgKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnJ1c2hSYW5nZSA9IFtcclxuICAgICAgICAgIFt2YWx1ZVswXS52YWx1ZXNbMF1bMF0sIHZhbHVlWzBdLnZhbHVlc1swXVsxXV0sIFxyXG4gICAgICAgICAgW3ZhbHVlWzBdLnZhbHVlc1sxXVsxXSwgdmFsdWVbMF0udmFsdWVzWzFdWzBdXVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQdHMgPSB0aGlzLmRhdGEuZmlsdGVyKHYgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeCA9IHZbdGhpcy5lbmNvZGluZy54XVxyXG4gICAgICAgICAgY29uc3QgeSA9IHZbdGhpcy5lbmNvZGluZy55XVxyXG4gICAgICAgICAgY29uc3QgaW5SYW5nZSA9IHggPj0gYnJ1c2hSYW5nZVswXVswXSBcclxuICAgICAgICAgICAgJiYgeCA8PSBicnVzaFJhbmdlWzBdWzFdIFxyXG4gICAgICAgICAgICAmJiB5ID49IGJydXNoUmFuZ2VbMV1bMF0gXHJcbiAgICAgICAgICAgICYmIHkgPD0gYnJ1c2hSYW5nZVsxXVsxXVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gaW5SYW5nZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2JydXNoJywgc2VsZWN0ZWRQdHMpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnZpZXcgPSB2aWV3XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBCYXNlXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uYm94IHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBVkE7QUFjQTtBQUNBO0FBOUJBO0FBZ0NBO0FBbENBO0FBb0NBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUE3QkE7QUErQkE7QUFDQTtBQTNFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEVBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQkE7QUFDQTtBQURBO0FBekdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Scatterplot.vue?vue&type=script&lang=js&\n");

/***/ })

})