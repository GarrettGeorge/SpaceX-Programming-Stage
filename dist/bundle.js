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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_App_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/App.scss */ "./client/assets/css/App.scss");
/* harmony import */ var _assets_css_App_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_App_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Table */ "./client/src/components/Table.js");




let App = {
  template: `
    <div id="app-root"></div>
  `,
  init() {
    document.body.innerHTML = this.template;
    
    let table = new _src_components_Table__WEBPACK_IMPORTED_MODULE_1__["default"]();
    table.renderTable();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});


/***/ }),

/***/ "./client/assets/css/App.scss":
/*!************************************!*\
  !*** ./client/assets/css/App.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/assets/css/Table.scss":
/*!**************************************!*\
  !*** ./client/assets/css/Table.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/assets/css/TableCell.scss":
/*!******************************************!*\
  !*** ./client/assets/css/TableCell.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./client/src/components/Table.js":
/*!****************************************!*\
  !*** ./client/src/components/Table.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_Table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/css/Table.scss */ "./client/assets/css/Table.scss");
/* harmony import */ var _assets_css_Table_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_Table_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCell */ "./client/src/components/TableCell.js");




class Table {
  constructor(rows = 8, cols = 8, data = {}, parentDOMId) {
    this.rows = rows;
    this.cols = cols;

    this.data = data;
    this.tableCells = [];

    this.makeTable(parentDOMId);
  }

  makeTable() {
    let template = `
      <div id="table"></div>
      <div id="save-button">Save Table</div>
      <div id="load-table">
        Load table: <input placeholder="Enter key"></input>
      </div>
    `;

    document.querySelector('#app-root').innerHTML = template;

    document.querySelector('#save-button')
      .addEventListener('click', this.saveTable.bind(this));
    
    document.querySelector('#load-table > input').addEventListener('keyup', (event => {
      if (event.keyCode === 13)
        this.loadTable(event.target.value);
    }).bind(this));
  }

  renderTable() {
    let frag = new DocumentFragment();

    for (let i = 0; i < this.rows; i++) {
      this.tableCells.push([]);
      let row = document.createElement('div');
      row.classList.add('table-row');
      
      for (let j = 0; j < this.cols; j++) {
        let tCell = new _TableCell__WEBPACK_IMPORTED_MODULE_1__["default"](i, j, this.move);
        let cellDOM = tCell.makeDOM();
        row.appendChild(cellDOM);
        this.tableCells[i][j] = cellDOM;
      }

      frag.appendChild(row);
    }
    
    console.log(this.tableCells);

    document.querySelector('#table').appendChild(frag);
  }

  loadTable(forKey) {
    if (!localStorage.hasOwnProperty(forKey))
      alert('That is an invalid key please try another.');
    else {
      try {
        let data = JSON.parse(localStorage.getItem(forKey));
        console.log(data);
        this.tableCells.forEach((row, rowIndex) => {
          row.forEach((cell, cellIndex) => {
            cell.querySelector('input').value = data[rowIndex][cellIndex] || '';
          });
        });
      } catch (error) {
        alert(error.toString());
      }
    }
  }

  getTableData() {
    return this.tableCells.reduce((acc, row) => {
      let rowReduce = row.reduce((rowAcc, cell) => {
        let cellValue = cell.querySelector('input').value;

        // Only push if has value
        if (cellValue !== '')
          rowAcc.push(parseFloat(cellValue));
        else
          rowAcc.push(null);
        return rowAcc;
      }, [])

      let lastNumIndex = 0;
      for (let i = 1; i <= rowReduce.length; i++) {
        if (!isNaN(parseFloat(rowReduce[rowReduce.length - i]))) {
          lastNumIndex = rowReduce.length - i;
          break;
        }
      }

      acc.push(rowReduce.slice(0, lastNumIndex + 1));

      return acc;
    }, []);
  }

  saveTable() {
    let key = window.prompt('Enter a key to save the table under!');
    window.localStorage.setItem(key, JSON.stringify(this.getTableData()));
  }

  move(direction, target) {
    let row = Array.prototype.slice.call(target.parentElement.children);
    let table = Array.prototype.slice.
      call(target.parentElement.parentElement.children)

    let rowIndex = table.indexOf(target.parentElement)
    let cellIndex = row.indexOf(target);

    cellIndex -= (direction === 'left' && cellIndex === 0) ? 0 : 1
    rowIndex -= (direction === 'up' && rowIndex === 0) ? 0 : 1;
    cellIndex -= (direction === 'right' && cellIndex === this.cols - 1) ? 0 : -1;
    rowIndex -= (direction === 'down' && rowIndex === this.rows - 1) ? 0 : -1;

    document.querySelector(
      `#table > .table-row:nth-child(${rowIndex+1}) > .table-cell:nth-child(${cellIndex+1}) > input`
    ).focus();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./client/src/components/TableCell.js":
/*!********************************************!*\
  !*** ./client/src/components/TableCell.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_TableCell_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/css/TableCell.scss */ "./client/assets/css/TableCell.scss");
/* harmony import */ var _assets_css_TableCell_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_TableCell_scss__WEBPACK_IMPORTED_MODULE_0__);


class TableCell {
  constructor(x, y, move) {
    this.x = x;
    this.y = y;
    this.value = '';
    
    this.move = move;
  }

  setEventListeners() {
    this.cell.querySelector('input')
      .addEventListener('blur', event => {
        let val = parseFloat(event.target.value);
        if (!isNaN(val))
          this.value = val;
        this.render();
      });

    this.cell.addEventListener('keyup', event => {
      // Return parent element to pass the cell not the target
      if (event.keyCode === 37)
        this.moveLeft(event.target.parentElement);
      if (event.keyCode === 38)
        this.moveUp(event.target.parentElement);
      if (event.keyCode === 39)
        this.moveRight(event.target.parentElement);
      if (event.keyCode === 40)
        this.moveDown(event.target.parentElement)
    });
  }

  moveLeft(target) {
    this.move('left', target);
  }

  moveUp(target) {
    this.move('up', target);
  }

  moveDown(target) {
    this.move('down', target);
  }

  moveRight(target) {
    this.move('right', target);
  }

  render() {
    this.cell.querySelector('input').value = this.value;
  }

  template() {
    return `
        <input></input>
    `;
  }

  makeDOM() {
    this.cell = document.createElement('div');
    this.cell.classList.add('table-cell');

    this.cell.innerHTML = this.template();

    this.setEventListeners();
    this.render();

    return this.cell;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TableCell);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL2Nzcy9BcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXNzZXRzL2Nzcy9UYWJsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9hc3NldHMvY3NzL1RhYmxlQ2VsbC5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVGFibGVDZWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbEJELHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBRUE7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxXQUFXLDRCQUE0QixZQUFZO0FBQzFGO0FBQ0E7QUFDQTs7QUFFQSxzRTs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2NsaWVudC9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9BcHAuc2Nzcyc7XG5cbmltcG9ydCBUYWJsZSBmcm9tICcuL3NyYy9jb21wb25lbnRzL1RhYmxlJztcblxubGV0IEFwcCA9IHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwiYXBwLXJvb3RcIj48L2Rpdj5cbiAgYCxcbiAgaW5pdCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGU7XG4gICAgXG4gICAgbGV0IHRhYmxlID0gbmV3IFRhYmxlKCk7XG4gICAgdGFibGUucmVuZGVyVGFibGUoKTtcbiAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgQXBwLmluaXQoKTtcbn0pO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL1RhYmxlLnNjc3MnO1xuXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJztcblxuY2xhc3MgVGFibGUge1xuICBjb25zdHJ1Y3Rvcihyb3dzID0gOCwgY29scyA9IDgsIGRhdGEgPSB7fSwgcGFyZW50RE9NSWQpIHtcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY29scyA9IGNvbHM7XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMudGFibGVDZWxscyA9IFtdO1xuXG4gICAgdGhpcy5tYWtlVGFibGUocGFyZW50RE9NSWQpO1xuICB9XG5cbiAgbWFrZVRhYmxlKCkge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGBcbiAgICAgIDxkaXYgaWQ9XCJ0YWJsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cInNhdmUtYnV0dG9uXCI+U2F2ZSBUYWJsZTwvZGl2PlxuICAgICAgPGRpdiBpZD1cImxvYWQtdGFibGVcIj5cbiAgICAgICAgTG9hZCB0YWJsZTogPGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIga2V5XCI+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLXJvb3QnKS5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzYXZlLWJ1dHRvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNhdmVUYWJsZS5iaW5kKHRoaXMpKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9hZC10YWJsZSA+IGlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKVxuICAgICAgICB0aGlzLmxvYWRUYWJsZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH0pLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVuZGVyVGFibGUoKSB7XG4gICAgbGV0IGZyYWcgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJvd3M7IGkrKykge1xuICAgICAgdGhpcy50YWJsZUNlbGxzLnB1c2goW10pO1xuICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlLXJvdycpO1xuICAgICAgXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY29sczsgaisrKSB7XG4gICAgICAgIGxldCB0Q2VsbCA9IG5ldyBUYWJsZUNlbGwoaSwgaiwgdGhpcy5tb3ZlKTtcbiAgICAgICAgbGV0IGNlbGxET00gPSB0Q2VsbC5tYWtlRE9NKCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsRE9NKTtcbiAgICAgICAgdGhpcy50YWJsZUNlbGxzW2ldW2pdID0gY2VsbERPTTtcbiAgICAgIH1cblxuICAgICAgZnJhZy5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlQ2VsbHMpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJykuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gIH1cblxuICBsb2FkVGFibGUoZm9yS2V5KSB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoZm9yS2V5KSlcbiAgICAgIGFsZXJ0KCdUaGF0IGlzIGFuIGludmFsaWQga2V5IHBsZWFzZSB0cnkgYW5vdGhlci4nKTtcbiAgICBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShmb3JLZXkpKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMudGFibGVDZWxscy5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XG4gICAgICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID0gZGF0YVtyb3dJbmRleF1bY2VsbEluZGV4XSB8fCAnJztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBhbGVydChlcnJvci50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRUYWJsZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFibGVDZWxscy5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XG4gICAgICBsZXQgcm93UmVkdWNlID0gcm93LnJlZHVjZSgocm93QWNjLCBjZWxsKSA9PiB7XG4gICAgICAgIGxldCBjZWxsVmFsdWUgPSBjZWxsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5cbiAgICAgICAgLy8gT25seSBwdXNoIGlmIGhhcyB2YWx1ZVxuICAgICAgICBpZiAoY2VsbFZhbHVlICE9PSAnJylcbiAgICAgICAgICByb3dBY2MucHVzaChwYXJzZUZsb2F0KGNlbGxWYWx1ZSkpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcm93QWNjLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiByb3dBY2M7XG4gICAgICB9LCBbXSlcblxuICAgICAgbGV0IGxhc3ROdW1JbmRleCA9IDA7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSByb3dSZWR1Y2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHJvd1JlZHVjZVtyb3dSZWR1Y2UubGVuZ3RoIC0gaV0pKSkge1xuICAgICAgICAgIGxhc3ROdW1JbmRleCA9IHJvd1JlZHVjZS5sZW5ndGggLSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFjYy5wdXNoKHJvd1JlZHVjZS5zbGljZSgwLCBsYXN0TnVtSW5kZXggKyAxKSk7XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgc2F2ZVRhYmxlKCkge1xuICAgIGxldCBrZXkgPSB3aW5kb3cucHJvbXB0KCdFbnRlciBhIGtleSB0byBzYXZlIHRoZSB0YWJsZSB1bmRlciEnKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldFRhYmxlRGF0YSgpKSk7XG4gIH1cblxuICBtb3ZlKGRpcmVjdGlvbiwgdGFyZ2V0KSB7XG4gICAgbGV0IHJvdyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcbiAgICBsZXQgdGFibGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuXG4gICAgICBjYWxsKHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pXG5cbiAgICBsZXQgcm93SW5kZXggPSB0YWJsZS5pbmRleE9mKHRhcmdldC5wYXJlbnRFbGVtZW50KVxuICAgIGxldCBjZWxsSW5kZXggPSByb3cuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgY2VsbEluZGV4IC09IChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjZWxsSW5kZXggPT09IDApID8gMCA6IDFcbiAgICByb3dJbmRleCAtPSAoZGlyZWN0aW9uID09PSAndXAnICYmIHJvd0luZGV4ID09PSAwKSA/IDAgOiAxO1xuICAgIGNlbGxJbmRleCAtPSAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIGNlbGxJbmRleCA9PT0gdGhpcy5jb2xzIC0gMSkgPyAwIDogLTE7XG4gICAgcm93SW5kZXggLT0gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHJvd0luZGV4ID09PSB0aGlzLnJvd3MgLSAxKSA/IDAgOiAtMTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgI3RhYmxlID4gLnRhYmxlLXJvdzpudGgtY2hpbGQoJHtyb3dJbmRleCsxfSkgPiAudGFibGUtY2VsbDpudGgtY2hpbGQoJHtjZWxsSW5kZXgrMX0pID4gaW5wdXRgXG4gICAgKS5mb2N1cygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyIsImltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9UYWJsZUNlbGwuc2Nzcyc7XG5cbmNsYXNzIFRhYmxlQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIG1vdmUpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgIFxuICAgIHRoaXMubW92ZSA9IG1vdmU7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmNlbGwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudCA9PiB7XG4gICAgICAgIGxldCB2YWwgPSBwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4odmFsKSlcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmNlbGwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAvLyBSZXR1cm4gcGFyZW50IGVsZW1lbnQgdG8gcGFzcyB0aGUgY2VsbCBub3QgdGhlIHRhcmdldFxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KVxuICAgICAgICB0aGlzLm1vdmVMZWZ0KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOClcbiAgICAgICAgdGhpcy5tb3ZlVXAoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KVxuICAgICAgICB0aGlzLm1vdmVSaWdodChldmVudC50YXJnZXQucGFyZW50RWxlbWVudCk7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDApXG4gICAgICAgIHRoaXMubW92ZURvd24oZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpXG4gICAgfSk7XG4gIH1cblxuICBtb3ZlTGVmdCh0YXJnZXQpIHtcbiAgICB0aGlzLm1vdmUoJ2xlZnQnLCB0YXJnZXQpO1xuICB9XG5cbiAgbW92ZVVwKHRhcmdldCkge1xuICAgIHRoaXMubW92ZSgndXAnLCB0YXJnZXQpO1xuICB9XG5cbiAgbW92ZURvd24odGFyZ2V0KSB7XG4gICAgdGhpcy5tb3ZlKCdkb3duJywgdGFyZ2V0KTtcbiAgfVxuXG4gIG1vdmVSaWdodCh0YXJnZXQpIHtcbiAgICB0aGlzLm1vdmUoJ3JpZ2h0JywgdGFyZ2V0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmNlbGwucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9IHRoaXMudmFsdWU7XG4gIH1cblxuICB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cbiAgICBgO1xuICB9XG5cbiAgbWFrZURPTSgpIHtcbiAgICB0aGlzLmNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNlbGwuY2xhc3NMaXN0LmFkZCgndGFibGUtY2VsbCcpO1xuXG4gICAgdGhpcy5jZWxsLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcblxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2VsbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNlbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==