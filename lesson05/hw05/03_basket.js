'use strict';

const product = {
    render(item) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${item.title}</div>
                    <div><b>Цена за шт.</b>: ${item.price}</div>
                    <div><b>Количество</b>: ${item.count}</div>
                    <div><b>Стоимость</b>: ${item.count * item.price}</div>
                </div>`;
    }
}

const basketObj = {
    items: [],
    basketListBlock: null,
    product,
    countBasketPrice() {
        return this.items.reduce((totalPrice, item) => totalPrice + item.price * item.count, 0);
    },

    init(idElement) {
        if (!idElement)
            idElement = 'basket';
        this.basketListBlock = document.getElementById(idElement);
        this.render();
    },

    render() {
        if (this.items.length === 0) {
            this.basketListBlock.textContent = 'Корзина пуста';
        } else {
            for (let i = 0; i < this.items.length; i++) {
                this.basketListBlock.insertAdjacentHTML('beforeend', this.product.render(this.items[i]));
            };
            this.basketListBlock.insertAdjacentHTML('beforeend',`В корзине: ${basketObj.items.length} товара(ов) на сумму ${basketObj.countBasketPrice()} рубля(ей)`);
        }
    }
};

let good1 = {
    title: 'Яблоки',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10+1),
};

let good2 = {
    title: 'Груши',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10+1),
};

let good3 = {
    title: 'Финики',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10+1),
};

basketObj.items.push(good1);
basketObj.items.push(good2);
basketObj.items.push(good3);

basketObj.init();