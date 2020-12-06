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

getFibonacciNumber();





function fibonacci(n) {
    let num;
  
    if (n >= 2) {
      num = fibonacci(n - 1) + fibonacci(n - 2);
    } else {
      num = n
    }
    return num;
  }
  
fibonacci(6);






function factorial(n) {
    if (!n) {
        return 1;
    } else {
        let num = 1;

        for (let i = 1; i <= n; i++) {
            num = num * i;
        }

        return num; 
    }
}






function factorial2(n) {
    return n ? n * factorial2(n - 1) : 1;
}
  
factorial2(5); 



