import Card from '/Card.js';

export default class Column {
    constructor(column) {
        this.column = column;
        this.$dom = null;
        this.$inputTitle = null;
        this.$addCardDom = null;
        this.$addCardInput = null;
    }
    render(target) {
        this.$dom = document.createElement('div');
        this.$inputTitle = document.createElement('input');
        this.$cardDom = document.createElement('div');
        this.$addCardDom = document.createElement('div');
        this.$addCardInput = document.createElement('input');
                
        this.$dom.className = 'main-column';
        this.$inputTitle.className = 'main-column-title';
        this.$cardDom.className = 'column-card-dom';
        this.$addCardDom.className = 'column-card-add';
        this.$addCardInput.className = 'main-column-title';

        this.$inputTitle.setAttribute('type', 'text');
        this.$inputTitle.setAttribute('placeholder', '칼럼 이름을 설정 해 주세요');
        this.$inputTitle.addEventListener('keypress', () => this.changeData());

        this.$addCardInput.setAttribute('type', 'text');
        this.$addCardInput.setAttribute('placeholder', '+ 새로운 카드를 추가합니다');
        this.$addCardInput.addEventListener('keypress', (e) => this.addCard(e));

        if (this.column && this.column.title) {
            this.$inputTitle.setAttribute('value', this.column.title)
        }
        

        this.$dom.appendChild(this.$inputTitle);
        this.$dom.appendChild(this.$cardDom);
        this.column.cards && this.column.cards.forEach(cardData => {
            this.renderCard(cardData);
        });

        this.$addCardDom.appendChild(this.$addCardInput);
        this.$dom.appendChild(this.$addCardDom);

        target.appendChild(this.$dom);
    }

    addCard(e) {
        if (e.key === "Enter" && this.$addCardInput.value.length > 0) {
            const cardData = {title: this.$addCardInput.value, description: ''};
            this.column.cards.push(cardData);
            this.renderCard(cardData);
            this.$addCardInput.value = '';
            this.changeData();
        }
    }

    renderCard(cardData) {
        const card = new Card(cardData);
        card.render(this.$cardDom);
    }

    changeData() {
        const event = new Event('changeData', {
            bubbles: true,
            cancelable: true
        });;
        
        this.$dom.dispatchEvent(event);
    }
}