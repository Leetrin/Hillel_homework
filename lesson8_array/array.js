const arr = ['Apple', 'Banana', 'Pineapple'];
arr.push('Orange');
arr.push('Grapes');
arr.splice(1, 1, "Peer");
const deletedElement = arr.pop();
console.log(deletedElement);
arr.unshift("Watermelon");

console.log(arr);
