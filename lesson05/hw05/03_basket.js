'use strict';

const basketObj = {
    items: [],

    countBasketPrice() {
        return this.items.reduce((totalPrice, item) => totalPrice + item.price * item.count, 0);
    },
};

let good1 = {
    title: 'Яблоки',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10),
};

let good2 = {
    title: 'Груши',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10),
};

let good3 = {
    title: 'Финики',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10),
};

basketObj.items.push(good1);
basketObj.items.push(good2);
basketObj.items.push(good3);

const basket = document.querySelector('#basket');
if (basketObj.items.length === 0) {
    basket.textContent = "Корзина пуста";
} else {
    for (let i = 0; i < basketObj.items.length; i++) {
        const good = document.createElement('div');
        const title = document.createElement('span');
        const price = document.createElement('span');
        const count = document.createElement('span');

        title.textContent = "Название: " + basketObj.items[i].title;
        price.textContent = "Цена: " + basketObj.items[i].price;
        count.textContent = "Кол-во: " + basketObj.items[i].count;

        good.appendChild(title).appendChild(price).appendChild(count)
        basket.appendChild(good);
    }
    const total = document.createElement('div');
    total.textContent = `В корзине: ${basketObj.items.length} товара(ов) на сумму ${basketObj.countBasketPrice()} рубля(ей)`;
    basket.appendChild(total);
}

