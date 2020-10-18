"use strict";

const rightLogin = "admin";
const rightPassword = "1111";

const requestedLogin = prompt("Введите логин", "");
let requestedPassword;

let isUserWantsTryAgain = true;

function getAuthMessage() {
  if (requestedLogin !== rightLogin) {
    alert("Неверный логин");
    return;
  }

  while (requestedPassword !== rightPassword && isUserWantsTryAgain) {
    requestedPassword = prompt("Введите пароль", "");

    if (requestedPassword === rightPassword) {
      alert("Добро пожаловать!");
      return;
    } else {
      alert("Неверный пароль");
    }

    isUserWantsTryAgain = confirm("Желаете угадать пароль еще раз?");
  }

  alert("Ну ладно");
}

getAuthMessage();