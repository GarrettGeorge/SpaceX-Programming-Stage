import '../../assets/css/TableCell.scss';

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

export default TableCell;