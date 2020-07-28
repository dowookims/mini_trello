export default class Card {
    constructor(cardData) {
        this.title = cardData.title;
        this.description = cardData.description;
        this.$dom = null;
        this.$title = null;
        this.$description = null;
    }
    render(target) {
        const title = this.title || '기본 칼럼 텍스트입니다';
        const description = this.description || '칼럼  설명 텍스트 입니다.';

        this.$dom = document.createElement('div');
        this.$title = document.createElement('p');
        this.$description = document.createElement('p')

        this.$dom.className = 'column-card';
        this.$title.className = 'column-card-title';
        this.$description.className = 'column-card-description';

        this.$title.textContent = title;
        this.$description.textContent = description;

        this.$dom.appendChild(this.$title);
        this.$dom.appendChild(this.$description);
        target.appendChild(this.$dom);
    }
}