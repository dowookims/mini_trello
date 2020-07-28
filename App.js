import Header from '/Header.js';
import Main from '/Main.js';

export default class App {
    constructor(dom) {
        this.$dom = dom;
        this.data = {};
        const data = localStorage.getItem('data');
        if (data) {
            this.data = JSON.parse(data);
        } else {
            this.data = {title: '', columns: [{title: '', cards: []}]};
        }
        this.render();
        this.changeData();
    }
    render() {
        new Header(this.data.title).render(this.$dom);
        new Main(this.data.columns).render(this.$dom);
    }

    changeData() {
        this.$dom.addEventListener('changeData', () => {
            localStorage.setItem('data', JSON.stringify(this.data));
        })
    }
}