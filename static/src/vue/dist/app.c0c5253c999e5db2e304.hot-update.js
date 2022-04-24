webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Scatterplot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Scatterplot */ \"./src/components/Scatterplot.vue\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    points: {\n      type: Array,\n      required: true\n    }\n  },\n  data: function data() {\n    return {\n      selection: [],\n      configKonva: {\n        width: 500,\n        height: 520,\n        opacity: 0.5\n      },\n      f4041c: {\n        x: 100,\n        y: 100,\n        radius: 70,\n        fill: \"green\",\n        stroke: \"black\",\n        strokeWidth: 2\n      },\n      f40443: {\n        x: 150,\n        y: 150,\n        radius: 70,\n        fill: \"yellow\",\n        stroke: \"black\",\n        strokeWidth: 2\n      },\n      f40444: {\n        x: 200,\n        y: 200,\n        radius: 70,\n        fill: \"orange\",\n        stroke: \"black\",\n        strokeWidth: 2\n      },\n      real_pos: {\n        x: 125,\n        y: 125,\n        numPoints: 6,\n        innerRadius: 3,\n        outerRadius: 5,\n        fill: 'red',\n        stroke: 'black',\n        strokeWidth: 1\n      },\n      pos: {\n        x: 100,\n        y: 150,\n        sides: 6,\n        radius: 5,\n        fill: 'blue',\n        stroke: 'black',\n        strokeWidth: 1\n      }\n    };\n  },\n  methods: {\n    onBrush: function onBrush(selectedPts) {\n      var newPts = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.differenceBy(selectedPts, this.selection, 'id');\n\n      if (newPts.length > 0) {\n        this.selection = selectedPts;\n      }\n    }\n  },\n  components: {\n    Scatterplot: _components_Scatterplot__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0FwcC52dWU/MjM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgc2NvcGVkPlxyXG4gLm5hdmJhci5uYXZiYXItZGFyay5iZy1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBQkI1NSFpbXBvcnRhbnQ7XHJcbiB9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBpZD1cImFwcFwiPlxyXG4gICAgPCEtLSBOYXZCYXIgLS0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Yi1uYXZiYXIgdG9nZ2xlYWJsZT1cImxnXCIgdHlwZT1cImRhcmtcIiB2YXJpYW50PVwiZGFya1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxiLW5hdmJhci1icmFuZCBocmVmPVwiI1wiPkluZG9vciBQb3NpdGlvbmluZzwvYi1uYXZiYXItYnJhbmQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGItbmF2YmFyLXRvZ2dsZSB0YXJnZXQ9XCJuYXYtY29sbGFwc2VcIj48L2ItbmF2YmFyLXRvZ2dsZT5cclxuXHJcbiAgICAgICAgPGItY29sbGFwc2UgaWQ9XCJuYXYtY29sbGFwc2VcIiBpcy1uYXY+XHJcbiAgICAgICAgICA8Yi1uYXZiYXItbmF2PlxyXG4gICAgICAgICAgICA8Yi1uYXYtaXRlbSBocmVmPVwiI1wiPkxpbms8L2ItbmF2LWl0ZW0+XHJcbiAgICAgICAgICAgIDxiLW5hdi1pdGVtIGhyZWY9XCIjXCIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2ItbmF2LWl0ZW0+XHJcbiAgICAgICAgICA8L2ItbmF2YmFyLW5hdj5cclxuXHJcbiAgICAgICAgPC9iLWNvbGxhcHNlPlxyXG4gICAgICA8L2ItbmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGItY29udGFpbmVyIGNsYXNzPVwiYnYtZXhhbXBsZS1yb3dcIj5cclxuICAgICAgPGItcm93PlxyXG4gICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgIDwhLS0gU2NhdHRlciBQbG90IGZvciBUcmFjayBEaXNwbGF5IC0tPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdyBwLTMgbWItNSBiZy13aGl0ZSByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxiLWNhcmRcclxuICAgICAgICAgICAgICB0aXRsZT1cIlRyYWNrIERpc3BsYXlcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA4MHJlbTtcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNjYXR0ZXJwbG90IFxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbXAxXCIgXHJcbiAgICAgICAgICAgICAgICAgIDpkYXRhPSdbXSdcclxuICAgICAgICAgICAgICAgICAgOnNlbGVjdGlvbj1cIltdXCIgXHJcbiAgICAgICAgICAgICAgICAgIDplbmNvZGluZz1cInsgeDogJ1dlc3QtRWFzdCcsIHk6ICdOb3J0aC1Tb3V0aCcgfVwiXHJcbiAgICAgICAgICAgICAgICAgIEBicnVzaD1cIm9uQnJ1c2hcIiBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYi1jYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICA8Yi1jb2w+XHJcbiAgICAgICAgICA8IS0tIERyYXcgQ2lyY2xlIHRvIFNob3cgUG9zaXRpb25pbmcgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZG93IHAtMyBtYi01IGJnLXdoaXRlIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgPGItY2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiUG9zaXRpb25pbmcgRGV0YWlsXCJcclxuICAgICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogODByZW07XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDx2LXN0YWdlIDpjb25maWc9XCJjb25maWdLb252YVwiPlxyXG4gICAgICAgICAgICAgICAgICA8di1sYXllcj5cclxuICAgICAgICAgICAgICAgICAgICA8di1jaXJjbGUgOmNvbmZpZz1cImY0MDQxY1wiPjwvdi1jaXJjbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY2lyY2xlIDpjb25maWc9XCJmNDA0NDNcIj48L3YtY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWNpcmNsZSA6Y29uZmlnPVwiZjQwNDQ0XCI+PC92LWNpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8di1zdGFyIDpjb25maWc9XCJyZWFsX3Bvc1wiPjwvdi1zdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LXJlZ3VsYXItcG9seWdvbiA6Y29uZmlnPVwicG9zXCI+PC92LXJlZ3VsYXItcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgPC92LWxheWVyPlxyXG4gICAgICAgICAgICAgICAgPC92LXN0YWdlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2ItY2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYi1jb2w+XHJcbiAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2ItY29udGFpbmVyPlxyXG4gICAgXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgU2NhdHRlcnBsb3QgZnJvbSAnLi9jb21wb25lbnRzL1NjYXR0ZXJwbG90J1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuXHJcbiAgICBwb2ludHM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGlvbjogW10sXHJcbiAgICAgIGNvbmZpZ0tvbnZhOiB7XHJcbiAgICAgICAgd2lkdGg6IDUwMCxcclxuICAgICAgICBoZWlnaHQ6IDUyMCxcclxuICAgICAgICBvcGFjaXR5OiAwLjVcclxuICAgICAgfSxcclxuICAgICAgZjQwNDFjOiB7XHJcbiAgICAgICAgeDogMTAwLFxyXG4gICAgICAgIHk6IDEwMCxcclxuICAgICAgICByYWRpdXM6IDcwLFxyXG4gICAgICAgIGZpbGw6IFwiZ3JlZW5cIixcclxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcclxuICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICBmNDA0NDM6IHtcclxuICAgICAgICB4OiAxNTAsXHJcbiAgICAgICAgeTogMTUwLFxyXG4gICAgICAgIHJhZGl1czogNzAsXHJcbiAgICAgICAgZmlsbDogXCJ5ZWxsb3dcIixcclxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcclxuICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICBmNDA0NDQ6IHtcclxuICAgICAgICB4OiAyMDAsXHJcbiAgICAgICAgeTogMjAwLFxyXG4gICAgICAgIHJhZGl1czogNzAsXHJcbiAgICAgICAgZmlsbDogXCJvcmFuZ2VcIixcclxuICAgICAgICBzdHJva2U6IFwiYmxhY2tcIixcclxuICAgICAgICBzdHJva2VXaWR0aDogMlxyXG4gICAgICB9LFxyXG4gICAgICByZWFsX3Bvczoge1xyXG4gICAgICAgIHg6IDEyNSxcclxuICAgICAgICB5OiAxMjUsXHJcbiAgICAgICAgbnVtUG9pbnRzOiA2LFxyXG4gICAgICAgIGlubmVyUmFkaXVzOiAzLFxyXG4gICAgICAgIG91dGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGZpbGw6ICdyZWQnLFxyXG4gICAgICAgIHN0cm9rZTogJ2JsYWNrJyxcclxuICAgICAgICBzdHJva2VXaWR0aDogMSxcclxuICAgICAgfSxcclxuICAgICAgcG9zOiB7XHJcbiAgICAgICAgeDogMTAwLFxyXG4gICAgICAgIHk6IDE1MCxcclxuICAgICAgICBzaWRlczogNixcclxuICAgICAgICByYWRpdXM6IDUsXHJcbiAgICAgICAgZmlsbDogJ2JsdWUnLFxyXG4gICAgICAgIHN0cm9rZTogJ2JsYWNrJyxcclxuICAgICAgICBzdHJva2VXaWR0aDogMSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25CcnVzaChzZWxlY3RlZFB0cykge1xyXG4gICAgICBjb25zdCBuZXdQdHMgPSBfLmRpZmZlcmVuY2VCeShzZWxlY3RlZFB0cywgdGhpcy5zZWxlY3Rpb24sICdpZCcpXHJcbiAgICAgIGlmIChuZXdQdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gc2VsZWN0ZWRQdHNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgU2NhdHRlcnBsb3RcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiNhcHAge1xyXG5cclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2RUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBekNBO0FBbURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQURBO0FBdEVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\n");

/***/ })

})