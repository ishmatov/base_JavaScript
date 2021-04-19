'use strict';

const good = {
    render(good) {
        return `<div class="good">
                    <div>Название: ${good.title}</div>
                    <div>Цена: ${good.price}</div>
                </div>`;
    },
}

const catalog = {
    products: [],
    catalogListBlock: null,
    good,

    init(idElement) {
        if (!idElement)
            idElement = 'catalog';
        this.catalogListBlock = document.getElementById(idElement);
        this.render();
    },

    render() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.good.render(good));
            })
        } else {
            this.catalogListBlock.textContent = 'Каталог пустой';
        };
    },
};

const product_1 = {
    title: 'Монитор',
    price: 15000,
};

const product_2 = {
    title: 'Клавиатура',
    price: 1500,
};

const product_3 = {
    title: 'Мышь',
    price: 150,
};

const product_4 = {
    title: 'Процессор',
    price: 13000,
};

const product_5 = {
    title: 'HDD',
    price: 9000,
};

catalog.products.push(product_1);
catalog.products.push(product_2);
catalog.products.push(product_3);
catalog.products.push(product_4);
catalog.products.push(product_5);

catalog.init();
