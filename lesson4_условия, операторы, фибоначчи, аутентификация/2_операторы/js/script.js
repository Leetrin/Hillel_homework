"use strict";

const name = "Vasya";
const age = 19;
const role = "Admin";
const occupation = "CEO";

alert(name !== undefined && age > 18);
alert(role === "Admin" || occupation === "CEO");
alert(occupation || role);
alert(name && age > 18 || role === "Admin");
alert(role !== "Admin" && name !== undefined && age)