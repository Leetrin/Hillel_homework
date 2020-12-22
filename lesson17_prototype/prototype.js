String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

'hello'.reverse();









Array.prototype.oldSort = Array.prototype.sort;

Array.prototype.sort = function (callback) {
  const newArr = [...this];
  return newArr.oldSort(callback);
};

const a = [4, 3, 2, 1];
const b = a.sort((a, b) => a - b);






NodeList.prototype.map = Array.prototype.map
NodeList.prototype.reduce = Array.prototype.reduce
NodeList.prototype.find = Array.prototype.find

