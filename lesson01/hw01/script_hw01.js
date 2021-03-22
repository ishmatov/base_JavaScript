'use strict'
/*1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32,
где Tf – температура по Фаренгейту, Tc – температура по Цельсию*/
{
    //Условные операторы для проверки правильности ввода не спользую, потому что мы их не проходили )))
    alert('-----Task 1-----');
    /**
    * @param degrees {number}
    * @returns {number}
    */
    function CelsiusToFahrenheit(degrees) {
        return Math.round((9 / 5) * degrees + 32);
    }
    let tempCelsius = prompt('Enter the temperature in degrees Celsius:');
    tempCelsius = parseInt(tempCelsius);
    alert(`${tempCelsius}°C = ${CelsiusToFahrenheit(tempCelsius)}°F`);
}

/*2. Объявить две переменные: admin и name. Записать в name строку "Василий";
Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/
{
    alert('-----Task 2-----');
    let name = 'Василий';
    let admin = '';
    admin = name;
    alert(`name = "${name}"\nadmin = "${admin}"`);
}

/*3. *Чему будет равно JS-выражение 1000 + "108"*/
{
    alert('-----Task 3-----');
    alert(`${1000} + '108' = ${1000 + '108'}`);
    alert('Получилось "1000108", потому-что один из операндов ("108") имеет тип String \n' +
        'И операция "+" сработала как конкатенация строк');
}

/*4. *Самостоятельно разобраться с атрибутами тега script (async и defer)*/
{
    alert('-----Task 4-----');
    alert('async - DOM не ждёт загрузки скрипта, а async-скрипт выполнится сразу после своей загрузки.\n\n' +
        'defer - DOM не ждёт загрузки defer-скрипта, но скрипт выполнится только после полной загрузки документа.');
}