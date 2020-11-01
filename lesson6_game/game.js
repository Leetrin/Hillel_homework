function playGame() {
    let randomNum = Math.floor(Math.random() * 100) + 1;

    let userNumber;
    let isUserWantsPlay = true;

    while (isUserWantsPlay) {
        userNumber = +prompt("Введите число от 1 до 100");

        if (userNumber === 0 || isNaN(userNumber)) {
            return alert("Пока! Не выполнены условия игры");
        } else if (randomNum > userNumber) {
            alert("Мало")
        } else if (randomNum < userNumber) {
            alert("Много")
        } else {
            isUserWantsPlay = confirm("Поздравляем, вы угадали! Хотите сыграть еще?")
            randomNum = Math.floor(Math.random() * 100) + 1;
        }
    }
}

playGame();