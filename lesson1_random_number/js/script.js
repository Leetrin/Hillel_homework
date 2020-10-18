"use strict";

const userFirstName = prompt("What is you first name?", "");
const userLastName = prompt("What is you last name?", "");
const userAge = prompt("How old are you?", "");

const greetingsMessageFirst = `Hello, ${userFirstName.toUpperCase()} ${userLastName[0].toUpperCase()}. Your age is ${userAge}.`;

const greetingsMessageSecond = `Hi, ${userFirstName.toUpperCase()} ${userLastName[0].toUpperCase()}. Your age is ${userAge}.`;

const greetingsMessageThird = `Ola, ${userFirstName.toUpperCase()} ${userLastName[0].toUpperCase()}. Your age is ${userAge}.`;

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const randomNumber = random(1, 3);

if (randomNumber == 1) {
  alert(greetingsMessageFirst);
} else if (randomNumber == 2) {
  alert(greetingsMessageSecond);
} else {
  alert(greetingsMessageThird);
}
