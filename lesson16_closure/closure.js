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
    return arr.filter(obj => obj[propName]);
  }
}

const arr = [
  {
    a: 1,
    b: 2,
    c: 3
  },
  {
    b: 2,
    c: 3
  },
  {
    a: 1,
    b: 2,
  },
];

createKeyBy('a')(arr);

const createKeyBy = propName => arr => arr.filter(obj => obj[propName]);









function createCalcPercent(percent) {
  return function calcPercent(value) {
    return value / 100 * percent;
  }
}
createCalcPercent(30)(100);


const createCalcPercent = percent => value => value / 100 * percent;

