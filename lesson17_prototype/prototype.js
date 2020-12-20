String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

'hello'.reverse();







Array.prototype.sort = function () {
    const arrCopy = [...this]
    const newArr = [];
    for (; arrCopy.length;) {
        newArr.push(arrCopy.splice(arrCopy.indexOf(Math.min(...arrCopy)), 1)[0])
    }
    return newArr;
}

const a = [4, 3, 2, 1];
const b = a.sort();

console.log(b);
console.log(a);






NodeList.prototype.map = Array.prototype.map
NodeList.prototype.reduce = Array.prototype.reduce
NodeList.prototype.find = Array.prototype.find

