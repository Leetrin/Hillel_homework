const isUserWantsDog = confirm("Хотите собачку?");
let bigDog;
let veryBigDog;

if (isUserWantsDog) {
  bigDog = confirm("Большую?");
}

if (bigDog) {
  veryBigDog = confirm("Очень большую?");
}

function getMessage() {
  if (!isUserWantsDog) {
    return ":(";
  } else if (!bigDog) {
    return "Держи чихуахуа";
  } else if (veryBigDog) {
    return "Вот ваша овчарка";
  } else {
    return"Спаниель сойдет?";
  }
}
alert(getMessage());






const feelingGood = confirm ("Хорошо себя чувствуете?");
const temperature = +prompt ("Какая температура?");

function getMessage() {
  
  if (isNaN(temperature)) {
    return "Введите число";
  }

  if (temperature < 30) {
    return feelingGood ? "А вы точно живы?" : "Зато вы чувствуете!";
  } else if (temperature > 30 && temperature < 37) {
    return feelingGood ? "Ну масочку все равно наденьте" : "Больничный выдают в другом кабинете";
  } else if (temperature > 37) {
    return feelingGood ? "Вам бы показаться врачу" : "Скорая уже едет!";
  }
}
alert (getMessage());




const petCat = confirm ("Погладишь котика?");
let giveMilk;
let giveSausage;

if (petCat) {
  giveMilk = confirm ("А молока нальешь?");
  giveSausage = confirm ("А сосиску?");
}

function getMessage() {
  
  if (!petCat) {
    return "Ну лан:С";
  }

  if (giveSausage) {
    return giveMilk ? "Лучший человек!" : "Хороший человек";
  } else {
    return "Ну и какой с тебя толк?";
  }
}
alert(getMessage()); 
