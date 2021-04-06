'use strict'

let obj = {};
console.log(obj);

let obj1 = new Object();
console.log(obj1);

function getPropertyName(someData) {
    return 'testing custom prop with some data ' + someData;
}

let myCar = {
    manufacture: 'Toyota',
    color: 'black',
    power: 300,
    'prop with space': 123,
    [getPropertyName('testing')]: 'test',

};

myCar.prop = 'prop';

console.log(myCar);
console.log(myCar.power);
console.log(myCar['prop with space']);

let userSelection = 'color';
console.log(myCar[userSelection]);

console.log(myCar.someProp); //undefined
//console.log(myCar.someProp.prop); //error
console.log(myCar?.someProp?.prop); //undefined


let myCap2 = {
    manufacture: 'Toyota',
    color: 'black',
    possibleColors: ['white', 'black', 'blue', 'red'],
    engine: {
        power: 300,
        code: 'xxxxx',
    },
    // beep: function () {
    //     console.log('Beep!');
    // },
    beep() {
        console.log('Beep!');
    },
    //Объекты не итерируемые и их свойства нельза перебрать через "for of", но можно написать свой перебор
    [Symbol.iterator]: function* () {
        yield 'hi';
        yield 'bye';
    },
}

console.log(myCap2.possibleColors);
console.log(myCap2.engine);
console.log(myCap2.engine.power);
myCap2.beep();

console.log(Object.keys(myCap2)); //Пробежаться по всем свойствам объекта

const keys = Object.keys(myCap2);

for (let i = 0; i < keys.length; i++) {
    console.log(myCap2[keys[i]]);
}

for (const key in myCap2) {
    console.log(myCap2[key]);
}
//Объекты не итерируемые и их свойства нельза перебрать через "for of", но можно написать свой перебор,
// через [Symbol.iterator]: function*
for (const val of myCap2) {
    console.log(val);
}


//-------------------------------------------------------------------
function inc(a) {
    a++;
}

let a = 1;
inc(a);
console.log(a); // 1

const obj2 = {
    num: 5,
}

function incObj(obj) {
    obj.num++;
}

incObj(obj2);
console.log(obj2.num);


function getObject(number) {
    return {
        // number: number, Можно запсиать короче
        number,
        sayNumber() {
            console.log(`current number is ${this.number}`)
        },
        // sayNumber: () => {                 // В стрелочной функции нельзя использовать контекст
        //     console.log(`current number is ${this.number}`);
        // }
    }
}

const myObj = getObject(100);
const myObj1 = getObject(34);
const myObj2 = getObject(8);
console.log(myObj);
myObj.sayNumber();
console.log(myObj1);
myObj1.sayNumber();
console.log(myObj2);
myObj2.sayNumber();


// const mySayNumber = myObj.sayNumber;    // error
// mySayNumber();

