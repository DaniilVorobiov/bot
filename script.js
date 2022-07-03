"use strict"

let number;
let input;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getNumber() {
    do {
        input = prompt("Угадай число от 1 до 100");
        if (input === null) {
            alert("Игра окончена")
            throw '';
        }
        while (!isNumber(input) == true) {
            input = prompt("Введи число");
        }

    } while (!isNumber(input));
}

number = getRandomInt(0, 100);
alert(number);
getNumber();

while (true) {
    if (input > number) {
        alert("Загаданное число меньше");
        input = undefined;
        getNumber();
    } else if (input < number) {
        alert("Загаданное число больше");
        input = undefined;
        getNumber();
    } else if (input == number) {
        alert("Поздравляю, Вы угадали!!!");
        break;
    }
}