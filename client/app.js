import './assets/css/App.scss';

import Table from './src/components/Table';

let App = {
  template: `
    <div id="app-root"></div>
  `,
  init() {
    document.body.innerHTML = this.template;
    
    let table = new Table();
    table.renderTable();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
