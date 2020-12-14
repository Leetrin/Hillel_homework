function createRangeFilter(min, max) {
  return function filter(num) {
    return num >= min && num <= max;
  }
}
createRangeFilter(1, 5)(5);

[1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4));

const createRangeFilter = (min, max) => num => num >= min && num <= max;







function createKeyBy(propName) {
  return function keyBy(arr) {
    return arr.reduce((result, elem) => {
      if (!result[elem[propName]]) {
        result[elem[propName]] = [];
      }

      result[elem[propName]].push(elem);

      return result;
    }, {});
  }
}

const arr = [
  {name: 'Vasya', surname: 'Ivanov'},
  {name: 'Vanya', surname: 'Ivanov'},
  {name: 'Albert', surname: 'Vasyliev'},
]

createKeyBy('surname')(arr);










function createCalcPercent(percent) {
  return function calcPercent(value) {
    return value / 100 * percent;
  }
}
createCalcPercent(30)(100);


const createCalcPercent = percent => value => value / 100 * percent;