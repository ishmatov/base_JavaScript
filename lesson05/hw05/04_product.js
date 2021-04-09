'use strict';

const product = [];

product.push('Монитор');
product.push('Клавиатура');
product.push('Мышь');
product.push('Процессор');
product.push('HDD');

const catalog = document.querySelector('#catalog');
for(let i = 0; i < product.length; i++) {
    const prod = document.createElement('p');
    prod.textContent = product[i];
    catalog.appendChild(prod);
}