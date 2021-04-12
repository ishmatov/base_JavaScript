'use strict';


const catalog = {
    products: [],
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

const catalogItem = document.querySelector('#catalog');
for(let i = 0; i < catalog.products.length; i++) {
    const prod = document.createElement('p');
    prod.textContent = catalog.products[i].title + " " + catalog.products[i].price;
    catalogItem.appendChild(prod);
}
