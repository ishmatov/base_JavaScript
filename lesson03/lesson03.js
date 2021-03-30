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

//Перебор массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(const index in arr) {
    console.log(arr[index]);
}

for (const value of arr) {
    console.log(value);
}

arr.forEach(function (currentItem,index,sourceArr) {
    console.log(currentItem, index, sourceArr);
});


// Изменение массива
// Добавление
console.log(arr.push('end'), arr); //Добавить в конец массива
console.log(arr.unshift('begin'), arr); //Добавление в начало массива
// Удаление
console.log(arr.pop(), arr); //Удалить элемент с конца и вернёт его в качестве результата
console.log(arr.shift(), arr); //Удалить элемент с начала массива и возвращает его в качестве результата


console.log(arr.splice(1,1)); //Удаляет несколько элементов с определённой позиции
                                             //и возвращает массив удалённых элементов
console.log(arr.splice(1,1, 'qwerty'), arr); //Удаляет элемент и вместо него вставляет другой
console.log(arr.splice(1,0, 'qwerty'), arr); //Ничего удалено не будет,
                                                                  // но на позицию 1 будет вставлен элемент

// Заполняем массив с возможными вариантами
let sourceArr = [];
const countItems = 10;
for (let i = 0; i < countItems; i++) {
    sourceArr.push(i);
}

let generatedNumber = [];
let part;
let puzzleCount = 4;
// Выдёргиваем из массива с возможными вариантами нужное кол-во элементов
for (i = 0; i < puzzleCount; i++) {
    part = sourceArr.splice(Math.floor(Math.random()*sourceArr.length),1)[0];
    generatedNumber.push(part);
}
console.log(generatedNumber);


// .map() // Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
// .reduce() // Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо),
             // возвращая одно результирующее значение
// .find() // Метод find() возвращает значение первого найденного в массиве элемента,
           // которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.


// Копирование массива
let arrCopy = arr; // Копируется ссылка на массив, по факту это один и тот же массив
console.log(arr, arrCopy);

arr.splice(0,1);
console.log(arr, arrCopy);
console.log(arr === arrCopy); //true Сравниваются не массивы, а ссылка на массив

let arrCopy2 = [...arr]; //Возьми все элементы массива arr и сложи их в массив arrCopy2
console.log(arr === arrCopy2); //false Это уже разные массивы

let arrCopy3 = Array.from(arr);
console.log(arr === arrCopy3); //false Это уже разные массивы

