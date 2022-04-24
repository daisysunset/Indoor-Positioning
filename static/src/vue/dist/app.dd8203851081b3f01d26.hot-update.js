webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Scatterplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Scatterplot */ \"./src/components/Scatterplot.vue\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    points: {\n      type: Array,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      selection: [],\n      configKonva: {\n        width: 500,\n        height: 500\n      },\n      configCircle: {\n        x: 100,\n        y: 100,\n        radius: 70,\n        fill: \"red\",\n        stroke: \"black\",\n        strokeWidth: 4\n      },\n      configCircle2: {\n        x: 150,\n        y: 150,\n        radius: 70,\n        fill: \"red\",\n        stroke: \"black\",\n        strokeWidth: 4\n      }\n    };\n  },\n  methods: {\n    onBrush: function onBrush(selectedPts) {\n      // 有新数据时，更新另一张图\n      var newPts = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.differenceBy(selectedPts, this.selection, 'id');\n\n      if (newPts.length > 0) {\n        this.selection = selectedPts;\n      }\n    }\n  },\n  components: {\n    Scatterplot: _components_Scatterplot__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgc2NvcGVkPlxyXG4gLm5hdmJhci5uYXZiYXItZGFyay5iZy1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQkI1NSFpbXBvcnRhbnQ7XHJcbiB9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGItbmF2YmFyIHRvZ2dsZWFibGU9XCJsZ1wiIHR5cGU9XCJkYXJrXCIgdmFyaWFudD1cImRhcmtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8Yi1uYXZiYXItYnJhbmQgaHJlZj1cIiNcIj5JbmRvb3IgUG9zaXRpb25pbmc8L2ItbmF2YmFyLWJyYW5kPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Yi1uYXZiYXItdG9nZ2xlIHRhcmdldD1cIm5hdi1jb2xsYXBzZVwiPjwvYi1uYXZiYXItdG9nZ2xlPlxyXG5cclxuICAgICAgICA8Yi1jb2xsYXBzZSBpZD1cIm5hdi1jb2xsYXBzZVwiIGlzLW5hdj5cclxuICAgICAgICAgIDxiLW5hdmJhci1uYXY+XHJcbiAgICAgICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XCIjXCI+TGluazwvYi1uYXYtaXRlbT5cclxuICAgICAgICAgICAgPGItbmF2LWl0ZW0gaHJlZj1cIiNcIiBkaXNhYmxlZD5EaXNhYmxlZDwvYi1uYXYtaXRlbT5cclxuICAgICAgICAgIDwvYi1uYXZiYXItbmF2PlxyXG5cclxuICAgICAgICA8L2ItY29sbGFwc2U+XHJcbiAgICAgIDwvYi1uYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8Yi1jb250YWluZXIgY2xhc3M9XCJidi1leGFtcGxlLXJvd1wiPlxyXG4gICAgICA8Yi1yb3c+XHJcbiAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNjYXR0ZXJwbG90IFxyXG4gICAgICAgICAgICAgIGlkPVwiY29tcDFcIiBcclxuICAgICAgICAgICAgICA6ZGF0YT1cInBvaW50c1wiXHJcbiAgICAgICAgICAgICAgOnNlbGVjdGlvbj1cIltdXCIgXHJcbiAgICAgICAgICAgICAgOmVuY29kaW5nPVwieyB4OiAnV2VzdC1FYXN0JywgeTogJ05vcnRoLVNvdXRoJyB9XCJcclxuICAgICAgICAgICAgICBAYnJ1c2g9XCJvbkJydXNoXCIgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx2LXN0YWdlIDpjb25maWc9XCJjb25maWdLb252YVwiPlxyXG4gICAgICAgICAgICAgIDx2LWxheWVyPlxyXG4gICAgICAgICAgICAgICAgPHYtY2lyY2xlIDpjb25maWc9XCJjb25maWdDaXJjbGVcIj48L3YtY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgPHYtY2lyY2xlIDpjb25maWc9XCJjb25maWdDaXJjbGUyXCI+PC92LWNpcmNsZT5cclxuICAgICAgICAgICAgICA8L3YtbGF5ZXI+XHJcbiAgICAgICAgICAgIDwvdi1zdGFnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYi1jb2w+XHJcbiAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2ItY29udGFpbmVyPlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgU2NhdHRlcnBsb3QgZnJvbSAnLi9jb21wb25lbnRzL1NjYXR0ZXJwbG90J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuXHJcbiAgICBwb2ludHM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGlvbjogW10sXHJcbiAgICAgIGNvbmZpZ0tvbnZhOiB7XHJcbiAgICAgICAgd2lkdGg6IDUwMCxcclxuICAgICAgICBoZWlnaHQ6IDUwMFxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWdDaXJjbGU6IHtcclxuICAgICAgICB4OiAxMDAsXHJcbiAgICAgICAgeTogMTAwLFxyXG4gICAgICAgIHJhZGl1czogNzAsXHJcbiAgICAgICAgZmlsbDogXCJyZWRcIixcclxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcclxuICAgICAgICBzdHJva2VXaWR0aDogNFxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWdDaXJjbGUyOiB7XHJcbiAgICAgICAgeDogMTUwLFxyXG4gICAgICAgIHk6IDE1MCxcclxuICAgICAgICByYWRpdXM6IDcwLFxyXG4gICAgICAgIGZpbGw6IFwicmVkXCIsXHJcbiAgICAgICAgc3Ryb2tlOiBcImJsYWNrXCIsXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25CcnVzaChzZWxlY3RlZFB0cykge1xyXG4gICAgICAvLyDmnInmlrDmlbDmja7ml7bvvIzmm7TmlrDlj6bkuIDlvKDlm75cclxuICAgICAgY29uc3QgbmV3UHRzID0gXy5kaWZmZXJlbmNlQnkoc2VsZWN0ZWRQdHMsIHRoaXMuc2VsZWN0aW9uLCAnaWQnKVxyXG4gICAgICBpZiAobmV3UHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IHNlbGVjdGVkUHRzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFNjYXR0ZXJwbG90XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4jYXBwIHtcclxuXHJcbn1cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFkQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQURBO0FBM0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})