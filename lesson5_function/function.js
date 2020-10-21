function pow(a, b) {
    let result = 1;

    for (let i = 1; i <= b; i++) {
        result = result * a;
    }

    return result;
}

pow(4, 3);







function createUser(firstName, lastName, age) {
    const user = {
        userFirstName: firstName || null,
        lastName: lastName || null,
        age: age || null
    }

    return user;
}


createUser("John", "Doe", "18");

// function createUser1(firstName = null, secondName = null, age = null) {
//     return { firstName, secondName, age };
// }

// const createUser2 = (firstName = null, secondName = null, age = null) => { firstName, secondName, age };



//   const vasya = 'vasya'

//   const obj = {
//     dima: 'dima',
//     // vasya: vasya,
//     vasya,

//   }





function firstFunction() {
    alert('I am firstFunction');
}

function secondFunction() {
    alert('I am secondFunction');
}

function compare(number, firstFunction, secondFunction) {
    if (number < 100) {
        firstFunction();
    } else {
        secondFunction();
    }
}

compare(10, firstFunction, secondFunction);

compare(
    100,
    function () {
        alert('1')
    },
    function () {
        alert('2')
    }
)