"use strict";

const isUserWantsBeer = confirm("Are you wanna beer?");

let message;

if (isUserWantsBeer) {
  message = "message 1";
} else {
  message = "message 2";
}

alert(message);




const isUserWantsBeer = confirm("Are you wanna beer?");

let message;

message = isUserWantsBeer ? "message 1" : "message 2";

alert(message);




const userAge = prompt("How old are you?", "");

let message;

if (userAge > 30) {
  message = "Hello, User!";
} else if (userAge >= 18) {
  message = "Hi, bro!";
} else {
  message = "ban message";
}

alert(message);





const userAge = prompt("How old are you?", "");

let message;

message = userAge >= 18 
  ? userAge > 30 
    ? "Hello, User!" 
    : "Hi, bro!" 
  : "ban message";

alert(message);





const tea = confirm("Tea?");
const sugar = confirm("With sugar?");

let message;

if (tea && sugar) {
  message = "Tea with sugar";
} else if (tea && !sugar) {
  message = "Tea without sugar";
} else if (!tea && sugar) {
  message = "Coffee with sugar";
} else {
  message = "Coffee without sugar";
}

alert(message);








const tea = confirm("Tea?");

let message;

message = tea
  ? confirm("With sugar?") 
    ? "Tea with sugar"
    : "Tea without sugar"
  : confirm("Coffee with sugar?")
    ? "Coffee with sugar"
    : "Coffee without sugar";

alert(message);