'use strict';

//Цикл с предусловием
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

//Цикл с постусловием
i = 10;
do {
    console.log(i);
    i++;
} while (i < 3);

//Цикл for
for (let i = 0; i < 3; i++) {
    console.log(i)
}

//Цикл for с двумя условиями
for (let i = 0, b = 6; i < 3 && b < 10; i++, b += 2) {
    console.log(i, b)
}


//Бесконечные циклы
// while (true) {
//     code;
// }
//
// do {
//     code;
// } while (true);
//
// for (;;) {
//     code;
// }

//Прерывание цикла
for (let i = 0;; i++) {
    if (i > 10) break; //Выход из цикла //return тоже прерывает цикл и возвращает значение в рамках функции
    if (i % 2 === 1) continue; // завершение текущей итерации и начинает новую
    console.log(i);
}

//Прерывание цикла через метку
outerLoop: for (let a = 0; a < 3; a++) {
       console.log('Upper cycle is running');
        for (let b = 0; b < 3; b++) {
            console.log('Inner cycle is running');
            if (b >= 1) {
                console.log('Breaking inner cycle');
                break outerLoop; //Произойдет прерывание цикла верхнего уровня
            }
        }
    }

//Массивы
//Конструкторы

let arrOld = new Array(10); //Устаревший подход //Создали массив с 10-ю пустыми элементами
let arrItems = new Array(10, 20, 30, 40) //Создали массив с элементами
console.log(arrOld)

let arr = [1, 5, 7];
console.log(arr);
console.log(arr.length);

let arr1 = [];
arr1.length = 10; //Чаще используется arr1.length = 0 для обнуления массива
console.log(arr1.length, arr1);

arr[100] = true;
console.log(arr);
arr[50] = 50;
console.log(arr);

delete arr[1]; //Значение под индексом один станет empty сам элемент останется
console.log(arr);

//При обращении к элементу empty мы получаем undefined
console.log(arr[10]);


let arrArr = [
    [1, 5, 'hi', false],
    [55, true, 1, 100],
    [true, 'string', NaN, 32]
];

console.log(arrArr);

console.log(typeof arrArr[0]);
console.log(typeof arrArr[0][1]);

arr = [true, 'string', NaN, 32];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(const index in arr) {
    console.log(arr[index]);
}

