export default class Header {
    constructor(title) {
        this.title = title;
        this.$dom = null;
        this.$input = null;
    }
    render(target) {
        this.$dom = document.createElement('header');
        this.$input = document.createElement('input');

        this.$dom.className = 'header';
        this.$input.className = 'header-title-input';

        this.$input.setAttribute('type', 'text');
        this.$input.setAttribute('placeholder', '제목을 입력 해 주세요')
        this.$input.addEventListener('keypress', () => this.setTitle());

        if (this.title) {
            this.$input.setAttribute('value', this.title);
        }

        this.$dom.appendChild(this.$input);
        target.appendChild(this.$dom);
    }

    setTitle(e) {
        this.title = e.target.value;
        this.changeData()
    }

    changeData() {
        const event = new Event('changeData', {
            bubbles: true,
            cancelable: true
        });
        
        this.$dom.dispatchEvent(event);
    }
}