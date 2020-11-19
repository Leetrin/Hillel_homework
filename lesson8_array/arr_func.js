const numArr1 = [1, 3, 5, 7, 9, 11];
function sumArr(arr) {
    let numArr1Sum = 0;
    for (let i = 0; i < arr.length; i++) {
      numArr1Sum = numArr1Sum + arr[i];
    }
  return numArr1Sum;
}
sumArr(numArr1);





const numArr2 = [1, 3, 5, 7, 9, 11];

function numArr2Sum(arr) {
  return arr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
}
numArr2Sum(numArr2);






const stringArr1 = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

function mapToUpperCase1(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }

  return newArr;
}




const stringArr2 = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

function mapToUpperCase2(arr) {
  const newArr = [];

  arr.map(element => newArr.push(element.toUpperCase()));

  return newArr;
}
