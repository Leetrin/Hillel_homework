String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

'hello'.reverse();









Array.prototype.oldSort = Array.prototype.sort;

Array.prototype.sort = function () {
  const newArr = [...this];

  return newArr.oldSort();
};

const a = [4, 3, 2, 1];
const b = a.sort((a, b) => a - b);

console.log(a);
console.log(b);





NodeList.prototype.map = Array.prototype.map
NodeList.prototype.reduce = Array.prototype.reduce
NodeList.prototype.find = Array.prototype.find

