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
  !*** ./src/layout.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "Layout": () => (/* binding */ Layout)
/* harmony export */ });
// make dom element
class Element {
  constructor(type, c = 0, child = null, id = 0) {
    this.type = type;
    this.c = c;
    this.child = child;
    this.id = id;
  }
  getDOM() {
    const e = document.createElement(this.type);
    e.classList.add(this.c);
    e.id = this.id;
    this.child != null ? e.appendChild(this.child) : "";
    return e;
  }
}
class Layout {
  constructor(content) {
    this.content = content;
  }
  setDOM() {
    // setting body
    const body = document.body;

    // setting header and footer children
    const title = document.createElement('h2');
    title.textContent = 'Analysistant';
    const bottag = document.createElement('h6');
    bottag.textContent = 'Tanner Hornsby';

    // creating header and footer objs
    const header = new Element('div', 'header', title);
    const footer = new Element('div', 'footer', bottag);

    // setting DOM
    body.appendChild(header.getDOM());
    this.content == null ? "" : body.appendChild(this.content);
    body.appendChild(footer.getDOM());
  }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ08sTUFBTUEsT0FBTyxDQUFDO0VBQ2pCQyxXQUFXLENBQUNDLElBQUksRUFBRUMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsS0FBSyxHQUFHLElBQUksRUFBRUMsRUFBRSxHQUFHLENBQUMsRUFBRTtJQUMzQyxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0VBRWhCO0VBQ0FDLE1BQU0sR0FBRztJQUNMLE1BQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDUCxJQUFJLENBQUM7SUFDM0NLLENBQUMsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDUixDQUFDLENBQUM7SUFDdkJJLENBQUMsQ0FBQ0YsRUFBRSxHQUFHLElBQUksQ0FBQ0EsRUFBRTtJQUNiLElBQUksQ0FBQ0QsS0FBSyxJQUFJLElBQUksR0FBSUcsQ0FBQyxDQUFDSyxXQUFXLENBQUMsSUFBSSxDQUFDUixLQUFLLENBQUMsR0FBRyxFQUFFO0lBQ3JELE9BQU9HLENBQUM7RUFDWjtBQUNKO0FBRU8sTUFBTU0sTUFBTSxDQUFDO0VBQ2hCWixXQUFXLENBQUNhLE9BQU8sRUFBRTtJQUNqQixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztFQUMxQjtFQUVBQyxNQUFNLEdBQUc7SUFDTDtJQUNBLE1BQU1DLElBQUksR0FBR1IsUUFBUSxDQUFDUSxJQUFJOztJQUUxQjtJQUNBLE1BQU1DLEtBQUssR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDUSxLQUFLLENBQUNDLFdBQVcsR0FBRyxjQUFjO0lBQ2xDLE1BQU1DLE1BQU0sR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzNDVSxNQUFNLENBQUNELFdBQVcsR0FBRyxnQkFBZ0I7O0lBRXJDO0lBQ0EsTUFBTUUsTUFBTSxHQUFHLElBQUlwQixPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRWlCLEtBQUssQ0FBQztJQUNsRCxNQUFNSSxNQUFNLEdBQUcsSUFBSXJCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFbUIsTUFBTSxDQUFDOztJQUVuRDtJQUNBSCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1EsTUFBTSxDQUFDZCxNQUFNLEVBQUUsQ0FBQztJQUNoQyxJQUFJLENBQUNRLE9BQU8sSUFBSSxJQUFJLEdBQUksRUFBRSxHQUFHRSxJQUFJLENBQUNKLFdBQVcsQ0FBQyxJQUFJLENBQUNFLE9BQU8sQ0FBQztJQUM1REUsSUFBSSxDQUFDSixXQUFXLENBQUNTLE1BQU0sQ0FBQ2YsTUFBTSxFQUFFLENBQUM7RUFDckM7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2xheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1ha2UgZG9tIGVsZW1lbnRcbmV4cG9ydCBjbGFzcyBFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBjID0gMCwgY2hpbGQgPSBudWxsLCBpZCA9IDApIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jID0gYztcbiAgICAgICAgdGhpcy5jaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB9XG4gICAgZ2V0RE9NKCkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnR5cGUpO1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQodGhpcy5jKTtcbiAgICAgICAgZS5pZCA9IHRoaXMuaWQ7XG4gICAgICAgICh0aGlzLmNoaWxkICE9IG51bGwpID8gZS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExheW91dCB7XG4gICAgY29uc3RydWN0b3IoY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIH1cblxuICAgIHNldERPTSgpIHtcbiAgICAgICAgLy8gc2V0dGluZyBib2R5XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0dGluZyBoZWFkZXIgYW5kIGZvb3RlciBjaGlsZHJlblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0FuYWx5c2lzdGFudCc7XG4gICAgICAgIGNvbnN0IGJvdHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2Jyk7XG4gICAgICAgIGJvdHRhZy50ZXh0Q29udGVudCA9ICdUYW5uZXIgSG9ybnNieSc7XG5cbiAgICAgICAgLy8gY3JlYXRpbmcgaGVhZGVyIGFuZCBmb290ZXIgb2Jqc1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2hlYWRlcicsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdmb290ZXInLCBib3R0YWcpO1xuXG4gICAgICAgIC8vIHNldHRpbmcgRE9NXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyLmdldERPTSgpKTtcbiAgICAgICAgKHRoaXMuY29udGVudCA9PSBudWxsKSA/IFwiXCIgOiBib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyLmdldERPTSgpKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkVsZW1lbnQiLCJjb25zdHJ1Y3RvciIsInR5cGUiLCJjIiwiY2hpbGQiLCJpZCIsImdldERPTSIsImUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsIkxheW91dCIsImNvbnRlbnQiLCJzZXRET00iLCJib2R5IiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImJvdHRhZyIsImhlYWRlciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=