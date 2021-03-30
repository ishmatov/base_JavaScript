'use strict';

// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 1;
while (i <= 100) {
    if (simpleNumber(i)) console.log(i);
    i++;
}

function simpleNumber(number) {
    if (number === 1) return false;
    let i = number - 1;
    while (i > 1) {
        if (number % i === 0) return false;
        i--;
    }
    return true;
}


// 2. С этого урока начинаем работать с функционалом интернет-магазина.
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины
// в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [];
//            title                 price                           count
basket.push(['Яблоки', Math.floor(Math.random()*100), Math.floor(Math.random()*10)]);
basket.push(['Груши', Math.floor(Math.random()*100), Math.floor(Math.random()*10)]);
basket.push(['Финики', Math.floor(Math.random()*100), Math.floor(Math.random()*10)]);

console.log(basket);

function countBasketPrice(arr) {
    return arr.reduce(function (sum, current) {
                return sum + current[1]*current[2];
            }, 0);
}

console.log(countBasketPrice(basket));


// 3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
for(let i = 0; i < 10; console.log(i++)) {}


// 4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
// ver 1
for(let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}
// ver 2
let resultStr = '';
for(let i = 0; i < 20; i++) {
    console.log(resultStr += 'x');
}