'use strict';

const basket = {
    settings: {
        basketSelector: 'shop',
    },

    items: [],
    basketListBlock: null,

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);
        this.render();
    },

    render() {

        this.basketListBlock = this.getBasketContainer();
        this.basketListBlock.textContent = '';

        if (this.items.length) {
            for (let i = 0; i < this.items.length; i++) {
                this.basketListBlock.insertAdjacentHTML('beforeend', this.renderBasketItems(this.items[i]));
            }
            this.basketListBlock.insertAdjacentHTML('beforeend',`В корзине: ${basket.items.length} товара(ов) на сумму ${basket.countBasketPrice()} рубля(ей)`);
        } else {
            this.basketListBlock.textContent = 'Корзина пустая';
        }

        this.basketListBlock.appendChild(this.createClearButton());
    },

    getBasketContainer() {
        const basketElement = document
            .querySelector(`.${this.settings.basketSelector}`);

        if (basketElement) return basketElement;

        return this.createBasketElement();
    },

    createBasketElement() {
        const basketElement = document.createElement('div');
        basketElement.classList.add(this.settings.basketSelector);

        document.body.appendChild(basketElement);
        return basketElement;
    },

    renderBasketItems(item) {
        return `<div class="good">
            <div><b>Наименование</b>: ${item.title}</div>
            <div><b>Цена за шт.</b>: ${item.price}</div>
            <div><b>Количество</b>: ${item.count}</div>
            <div><b>Стоимость</b>: ${item.count * item.price}</div>
        </div>`;
    },

    createClearButton() {
        const clearButtonWrapper = document.createElement('div');

        const clearButton = document.createElement('button');
        clearButton.textContent = "Очистить корзину";

        clearButton.addEventListener('click', event => {
            this.clearBasket(event);
        });

        clearButtonWrapper.appendChild(clearButton);
        return clearButtonWrapper;
    },

    clearBasket() {
        this.items.length = 0;
        this.render();
    },

    countBasketPrice() {
        return this.items.reduce((totalPrice, item) => totalPrice + item.price * item.count, 0);
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.items.find(({id}) => product.id === id);
            if (findInBasket) {
                findInBasket.count++;
            } else {
                this.items.push({...product, count: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },
};

let good1 = {
    id: 1,
    title: 'Яблоки',
    price: 80,
    count: Math.floor(Math.random()*10+1),
};

let good2 = {
    id: 2,
    title: 'Груши',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10+1),
};

let good3 = {
    id: 3,
    title: 'Финики',
    price: Math.floor(Math.random()*100),
    count: Math.floor(Math.random()*10+1),
};

basket.items.push(good1);
basket.items.push(good2);
basket.items.push(good3);



const catalog = {
    products: [],
    catalogListBlock: null,
    basket: null,

    init(basket) {
        this.catalogListBlock = document.querySelector('.catalog');
        this.basket = basket;
        this.catalogListBlock.addEventListener('click', event => {
            this.addGoodInBasket(event);
        });

        this.render();
    },

    addGoodInBasket(event) {
        if (event.target.tagName !== 'BUTTON') return;

        const idProduct = +event.target.dataset.idproduct;
        const productToAdd = this.products.find((product) => product.id === idProduct);
        this.basket.addToBasket(productToAdd);
    },

    render() {
        if (this.products.length) {
            this.products.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.renderCatalogItems(good));
            })
        } else {
            this.catalogListBlock.textContent = 'Каталог пустой';
        }
    },

    renderCatalogItems(item) {
        return `<div class="good">
            <div>Название: ${item.title}</div>
            <div>Цена: ${item.price}</div>
            <button value="Купить" data-idProduct="${item.id}">Купить</button>
        </div>`;
    },
};

const product_1 = {
    id: 1,
    title: 'Яблоки',
    price: 80,
};

const product_2 = {
    id: 2,
    title: 'Груши',
    price: 120,
};

const product_3 = {
    id: 3,
    title: 'Финики',
    price: 250,
};

catalog.products.push(product_1);
catalog.products.push(product_2);
catalog.products.push(product_3);

catalog.init(basket);
basket.init();