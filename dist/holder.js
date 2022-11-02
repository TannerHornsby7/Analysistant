/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/holder.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Information holding object
var todo = function todo(arg) {
  var proto = {
    type: "Todo",
    t: arg[0],
    d: arg[1],
    dd: arg[2],
    p: arg[3],
    getVal: function getVal(key) {
      return this[key];
    },
    setVal: function setVal(key, value) {
      this[key] = value;
    }
  };
  return Object.assign(Object.create(proto), {
    arg: arg
  });
}; // const project = ()=>{
//     const proto = {
//         type: 'Project',,
//         todo: [],
//         done: [],
//         getVal(key) {
//             return this.key;
//         },
//         setVal(key, value) {
//             this[key] = value;
//         }
//         createJSON(){
//         }
//     }
//     return Object.assign(Object.create(proto), {arg})
// }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9sZGVyLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxHQUFELEVBQVM7RUFDcEIsSUFBTUMsS0FBSyxHQUFHO0lBQ1pDLElBQUksRUFBRSxNQURNO0lBRVpDLENBQUMsRUFBRUgsR0FBRyxDQUFDLENBQUQsQ0FGTTtJQUdaSSxDQUFDLEVBQUVKLEdBQUcsQ0FBQyxDQUFELENBSE07SUFJWkssRUFBRSxFQUFFTCxHQUFHLENBQUMsQ0FBRCxDQUpLO0lBS1pNLENBQUMsRUFBRU4sR0FBRyxDQUFDLENBQUQsQ0FMTTtJQU1aTyxNQU5ZLGtCQU1MQyxHQU5LLEVBTUE7TUFDVixPQUFPLEtBQUtBLEdBQUwsQ0FBUDtJQUNELENBUlc7SUFTWkMsTUFUWSxrQkFTTEQsR0FUSyxFQVNBRSxLQVRBLEVBU087TUFDakIsS0FBS0YsR0FBTCxJQUFZRSxLQUFaO0lBQ0Q7RUFYVyxDQUFkO0VBY0EsT0FBT0MsTUFBTSxDQUFDQyxNQUFQLENBQWNELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjWixLQUFkLENBQWQsRUFBb0M7SUFBRUQsR0FBRyxFQUFIQTtFQUFGLENBQXBDLENBQVA7QUFDRCxDQWhCRCxFQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0EsaUVBQWVELElBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9ob2xkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBJbmZvcm1hdGlvbiBob2xkaW5nIG9iamVjdFxuXG5jb25zdCB0b2RvID0gKGFyZykgPT4ge1xuICBjb25zdCBwcm90byA9IHtcbiAgICB0eXBlOiBcIlRvZG9cIixcbiAgICB0OiBhcmdbMF0sXG4gICAgZDogYXJnWzFdLFxuICAgIGRkOiBhcmdbMl0sXG4gICAgcDogYXJnWzNdLFxuICAgIGdldFZhbChrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgfSxcbiAgICBzZXRWYWwoa2V5LCB2YWx1ZSkge1xuICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwgeyBhcmcgfSk7XG59O1xuXG4vLyBjb25zdCBwcm9qZWN0ID0gKCk9Pntcbi8vICAgICBjb25zdCBwcm90byA9IHtcbi8vICAgICAgICAgdHlwZTogJ1Byb2plY3QnLCxcbi8vICAgICAgICAgdG9kbzogW10sXG4vLyAgICAgICAgIGRvbmU6IFtdLFxuLy8gICAgICAgICBnZXRWYWwoa2V5KSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gdGhpcy5rZXk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIHNldFZhbChrZXksIHZhbHVlKSB7XG4vLyAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjcmVhdGVKU09OKCl7XG5cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7YXJnfSlcbi8vIH1cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iXSwibmFtZXMiOlsidG9kbyIsImFyZyIsInByb3RvIiwidHlwZSIsInQiLCJkIiwiZGQiLCJwIiwiZ2V0VmFsIiwia2V5Iiwic2V0VmFsIiwidmFsdWUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9