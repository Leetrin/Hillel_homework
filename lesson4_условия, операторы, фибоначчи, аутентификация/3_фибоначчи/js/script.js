"use strict";

const requestedOrdinal = +prompt("Введите порядковое число из последовательности Фибоначчи", "");

function getFibonacciNumber() {
    if (isNaN(requestedOrdinal) || requestedOrdinal < 1) {
        return "Вы должны ввести число больше 0";
    }

    let prePreviousNumber = 1;
    let previousNumber = 1;

    for (let i = 3; i <= requestedOrdinal; i++) {
        let currentNumber = prePreviousNumber + previousNumber;
        prePreviousNumber = previousNumber;
        previousNumber = currentNumber;
    }

    return `${requestedOrdinal} число в порядке Фибоначчи - это ${previousNumber}`;
}

alert(getFibonacciNumber());
