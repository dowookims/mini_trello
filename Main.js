import Column from '/Column.js';

export default class Main {
    constructor(columns) {
        this.columns = columns;
        this.$dom = null;
    }

    render(target) {
        this.$dom = document.createElement('main');
        this.$columnDom = document.createElement('div');
        this.$addColumnDom = document.createElement('div');
        this.$addColumnInput = document.createElement('input');

        this.$dom.className = 'main';
        this.$columnDom.className = 'main-column-dom';
        this.$addColumnDom.className = 'main-column-add';
        this.$addColumnInput.className = 'column-add-input';

        this.$addColumnInput.setAttribute('type', 'text');
        this.$addColumnInput.setAttribute('placeholder', '+ 새로운 칼럼을 추가합니다');
        this.$addColumnInput.addEventListener('keypress', e => this.addColumn(e));

        this.columns.forEach(columnData => {
            this.renderColumn(columnData);
        })

        this.$addColumnDom.appendChild(this.$addColumnInput);
        this.$dom.appendChild(this.$columnDom);
        this.$dom.appendChild(this.$addColumnDom);

        target.appendChild(this.$dom);
    }

    addColumn(e) {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            const columnData = {title: this.$addColumnInput.value, cards: [] };
            this.renderColumn(columnData);
            this.columns.push(columnData);
            this.$addColumnInput.value ='';
            this.changeData();
        }
    }

    renderColumn(columnData) {
        const column = new Column(columnData);
        column.render(this.$columnDom);
    }

    changeData() {
        const event = new Event('changeData', {
            bubbles: true,
            cancelable: true
        });
        
        this.$dom.dispatchEvent(event);
    }
}