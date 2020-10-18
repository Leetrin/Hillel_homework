"use strict";

function nearestMultiple() {

  const firstAnswer = prompt("What is a first number?", "");
  const secondAnswer = prompt("What is a second number?", "");
  
  const firstNumber = Number(firstAnswer);
  const secondNumber = Number(secondAnswer);
  
  if(isNaN(firstNumber)) {
    return "Not a number!";
  }
  
  if(isNaN(secondNumber)) {
    return "Not a number!";
  }
  
  if(secondNumber < 1) {
    return "Second number must be equal or more than 1";
  }
  
  const firstNumberFloored = Math.floor(firstNumber);
  const secondNumberFloored = Math.floor(secondNumber);
  
  if(firstNumberFloored <= 0) {
    return secondNumberFloored;
  }
  
  if(firstNumberFloored < secondNumberFloored) {
    return secondNumberFloored;
  }
  
  return Math.round(firstNumberFloored/secondNumberFloored)*secondNumberFloored;
}

alert(nearestMultiple());

