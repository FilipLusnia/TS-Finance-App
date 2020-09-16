/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ \"./src/classes/ListTemplate.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nconst form = document.querySelector('.new-item-form');\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\nconst ul = document.querySelector('ul');\r\nconst list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__[\"ListTemplate\"](ul);\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let values;\r\n    values = [tofrom.value, details.value, amount.valueAsNumber];\r\n    let doc;\r\n    type.value === 'invoice'\r\n        ?\r\n            doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__[\"Invoice\"](...values)\r\n        :\r\n            doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__[\"Payment\"](...values);\r\n    list.render(doc, type.value, 'end');\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzPzA2NmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDVTtBQUNWO0FBRzFDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW9CLENBQUM7QUFFekUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQXNCLENBQUM7QUFDbEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFDdkUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7QUFFckUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUUsQ0FBQztBQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLGtFQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQVEsRUFBRSxFQUFFO0lBQ3pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQixJQUFJLE1BQWdDLENBQUM7SUFDckMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU3RCxJQUFJLEdBQWlCLENBQUM7SUFFdEIsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO1FBQ3hCLENBQUM7WUFDRyxHQUFHLEdBQUcsSUFBSSx3REFBTyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLENBQUM7WUFDRyxHQUFHLEdBQUcsSUFBSSx3REFBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQy9CO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnZvaWNlfSBmcm9tICcuL2NsYXNzZXMvSW52b2ljZSc7XHJcbmltcG9ydCB7TGlzdFRlbXBsYXRlfSBmcm9tICcuL2NsYXNzZXMvTGlzdFRlbXBsYXRlJztcclxuaW1wb3J0IHtQYXltZW50fSBmcm9tICcuL2NsYXNzZXMvUGF5bWVudCc7XHJcbmltcG9ydCB7SGFzRm9ybWF0dGVyfSBmcm9tICcuL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyJztcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWl0ZW0tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuXHJcbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5jb25zdCB0b2Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9mcm9tJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ftb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xyXG5jb25zdCBsaXN0ID0gbmV3IExpc3RUZW1wbGF0ZSh1bCk7IFxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZTogRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcblxyXG4gICAgbGV0IHZhbHVlczogW3N0cmluZywgc3RyaW5nLCBudW1iZXJdO1xyXG4gICAgdmFsdWVzID0gW3RvZnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXJdO1xyXG5cclxuICAgIGxldCBkb2M6IEhhc0Zvcm1hdHRlcjtcclxuXHJcbiAgICB0eXBlLnZhbHVlID09PSAnaW52b2ljZScgXHJcbiAgICA/IFxyXG4gICAgICAgIGRvYyA9IG5ldyBJbnZvaWNlKC4uLnZhbHVlcylcclxuICAgIDpcclxuICAgICAgICBkb2MgPSBuZXcgUGF5bWVudCguLi52YWx1ZXMpIFxyXG4gICAgO1xyXG5cclxuICAgIGxpc3QucmVuZGVyKGRvYywgdHlwZS52YWx1ZSwgJ2VuZCcpO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Invoice\", function() { return Invoice; });\nclass Invoice {\r\n    constructor(client, details, amount) {\r\n        this.client = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.client} owes ${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzPzdhNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFPLE1BQU0sT0FBTztJQUtoQixZQUFZLE1BQWMsRUFBRSxPQUFlLEVBQUUsTUFBYztRQUN2RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxTQUFTLElBQUksQ0FBQyxNQUFNLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BFLENBQUM7Q0FDSjtBQUFBLENBQUMiLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNGb3JtYXR0ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZvaWNlIGltcGxlbWVudHMgSGFzRm9ybWF0dGVye1xyXG4gICAgY2xpZW50OiBzdHJpbmc7XHJcbiAgICBkZXRhaWxzOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IHN0cmluZywgZGV0YWlsczogc3RyaW5nLCBhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXQoKXtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5jbGllbnR9IG93ZXMgJHt0aGlzLmFtb3VudH0gZm9yICR7dGhpcy5kZXRhaWxzfWA7XHJcbiAgICB9XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Invoice.ts\n");

/***/ }),

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/*! exports provided: ListTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListTemplate\", function() { return ListTemplate; });\nclass ListTemplate {\r\n    constructor(container) {\r\n        this.container = container;\r\n    }\r\n    render(item, heading, pos) {\r\n        const li = document.createElement('li');\r\n        const h4 = document.createElement('h4');\r\n        h4.innerText = heading;\r\n        li.append(h4);\r\n        const p = document.createElement('p');\r\n        p.innerText = item.format();\r\n        li.append(p);\r\n        pos === 'start'\r\n            ?\r\n                this.container.prepend(li)\r\n            :\r\n                this.container.append(li);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGUudHM/MTExNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQU8sTUFBTSxZQUFZO0lBQ3JCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUUsQ0FBQztJQUU5QyxNQUFNLENBQUMsSUFBa0IsRUFBRSxPQUFlLEVBQUUsR0FBb0I7UUFDNUQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4QyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFZCxNQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFYixHQUFHLEtBQUssT0FBTztZQUNmLENBQUM7Z0JBQ0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzlCLENBQUM7Z0JBQ0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQzVCO0lBQ0wsQ0FBQztDQUNSIiwiZmlsZSI6Ii4vc3JjL2NsYXNzZXMvTGlzdFRlbXBsYXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzRm9ybWF0dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdFRlbXBsYXRle1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxVTGlzdEVsZW1lbnQpe31cclxuXHJcbiAgICAgICAgcmVuZGVyKGl0ZW06IEhhc0Zvcm1hdHRlciwgaGVhZGluZzogc3RyaW5nLCBwb3M6ICdzdGFydCcgfCAnZW5kJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICAgICAgaDQuaW5uZXJUZXh0ID0gaGVhZGluZztcclxuICAgICAgICAgICAgbGkuYXBwZW5kKGg0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHAuaW5uZXJUZXh0ID0gaXRlbS5mb3JtYXQoKTtcclxuICAgICAgICAgICAgbGkuYXBwZW5kKHApO1xyXG5cclxuICAgICAgICAgICAgcG9zID09PSAnc3RhcnQnXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQobGkpXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChsaSlcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/ListTemplate.ts\n");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Payment\", function() { return Payment; });\nclass Payment {\r\n    constructor(client, details, amount) {\r\n        this.recipient = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.recipient} is owed ${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzP2ZjMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFPLE1BQU0sT0FBTztJQUtoQixZQUFZLE1BQWMsRUFBRSxPQUFlLEVBQUUsTUFBYztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxZQUFZLElBQUksQ0FBQyxNQUFNLFFBQVEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFFLENBQUM7Q0FDSjtBQUFBLENBQUMiLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNGb3JtYXR0ZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50IGltcGxlbWVudHMgSGFzRm9ybWF0dGVye1xyXG4gICAgcmVjaXBpZW50OiBzdHJpbmc7XHJcbiAgICBkZXRhaWxzOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQ6IHN0cmluZywgZGV0YWlsczogc3RyaW5nLCBhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yZWNpcGllbnQgPSBjbGllbnQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXQoKXtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5yZWNpcGllbnR9IGlzIG93ZWQgJHt0aGlzLmFtb3VudH0gZm9yICR7dGhpcy5kZXRhaWxzfWA7XHJcbiAgICB9XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Payment.ts\n");

/***/ })

/******/ });