// var a = 0;
// a = 1;
// console.log(a);

// {
//     var a = 0;
//     a = 1;
//     console.log(a);
// }
// console.log(a);

// function foo() {
//     var a = 1;
//     console.log(a);
// }
// foo();
// console.log(a);

// const a = 1;
// let b = 2;

const a = 10;
{
    const a = 4;
    console.log(a);

}
console.log(a);

/** Function sum .....
 * @param a {number}
 * @param b {number}
 * @returns {number}
*/
function sum(a,b) {
    return a + b;
}

// String
let str = '';
console.log(str);
let userName = 'Vasya';
let hello = `Hello ${userName} ${1 + 1}`; //Обратные кавычки. Форматированная строка
console.log(hello);


console.log('первая строк\nвторая строка');
console.log(`первая строка 
            вторая строка`);//Лучше не использовать

console.log('строка кода \
продолжение кода'); // Если длинная строка кода

console.log('Строка c "кавычками" вер.1');
console.log('Строка c \'кавычками\' вер.2');
console.log(`'Строка c \`кавычками\` вер.3"`);

//Number
const num = 1;
console.log(typeof num);

const num2 = 1.45;
console.log(typeof num2);

const inf = 10 / 0;
console.log(inf);
console.log(typeof inf);

console.log(10 * 'Hi'); //NaN


let PI = '3.14';
console.log(`${PI} - ${typeof PI}`); //3.14 - string
PI = +PI;
console.log(`${PI} - ${typeof PI}`); //3.14 - number
PI = -PI;
console.log(`${PI} - ${typeof PI}`); //-3.14 - number
PI = Number(PI);

let rub = '100рублей';
console.log(parseInt(rub)); //100
let rubKop = '100.45 руб.';
console.log(parseFloat(rubKop)); //100.45

console.log(0xf); //Шестнадцетеричное число
console.log(2e3); //2000
console.log(2e-3); //0.002

// Ограничение по int: 2 ** 53 - 1 (9 007 199 254 740 991). После этого точность вычисления падает
// Нужно использовать BigInt: 9007199254740992n
let bi = BigInt(90071992547403456991);
console.log(bi); //90071992547403464704n


//boolean (true/false)
//null
//undefined
//symbol

//object

'use strict'
var y = 0;
{
    y = 4;
}
console.log(y);

//Арифмитические операции
console.log(6 + 4);
console.log(6 - 4);
console.log(6 * 4);
console.log(6 / 4);
console.log(6 ** 4);
console.log(6 % 4);

let x = 1;
// x = x + 2;
x += 2;
console.log(x);

console.log('первая строка' + 'вторая строка');
console.log('1' + '1'); //11
console.log('1' + 1); //11
console.log(1 + '1'); //11
console.log(1 + +'1'); //2 //Так писать не надо, но будет работать (+'1' - будет преобразовано в число)

console.log(5 == '5'); //true
console.log(5 === '5'); //false

console.log(5 != '5'); //false
console.log(5 !== '5'); //true