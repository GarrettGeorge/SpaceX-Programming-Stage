import '../../assets/css/Table.scss';

import TableCell from './TableCell';

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
        let tCell = new TableCell(i, j, this.move);
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

export default Table;