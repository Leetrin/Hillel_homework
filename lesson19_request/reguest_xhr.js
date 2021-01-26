const baseUrl = "https://async-demo.herokuapp.com";

// 1
async function getObject() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${baseUrl}/unstable?maxRandom=20`);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            throw new Error(xhr.request.statusText);
        } else {
            const numResponse = +xhr.response;
            for (let i = 0; i < numResponse; i++) {
                console.log("Hello world");
            }
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

// 2
async function createObject() {
    const body = {
        firstName: "Vasya",
        secondName: "Ivanov"
    };

    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${baseUrl}/objects?prob=20`);

    xhr.send(body);

    xhr.onload = function () {
        if (xhr.status != 200) {
            throw new Error(xhr.request.statusText);
        } else {
            updateObject(xhr.response.id);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

async function updateObject(id) {
    const body = {
        age: 33
    };

    const xhr = new XMLHttpRequest();

    xhr.open("PATCH", `${baseUrl}/objects/${id}?prob=20`);

    xhr.send(body);

    xhr.onload = function () {
        if (xhr.status != 200) {
            throw new Error(xhr.request.statusText);
        } else {
            removeObject(xhr.response.id);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

async function removeObject(id) {
    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", `${baseUrl}/objects/${id}?prob=20`);

    xhr.send();

    xhr.onload = function () {
        if (xhr.status != 200) {
            throw new Error(xhr.request.statusText);
        } else {
            console.log(xhr.response);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

// 3
async function userAge() {
    const userIds = [];
    const randomNums = [];

    const randomNum = await getRandomNum(3);

    createUser("Anton", "Petrov");
    createUser("Sergey", "Tihonov");
    createUser("Peter", "Beilish");

    randomNums.push(await getRandomNum(100));
    randomNums.push(await getRandomNum(100));
    randomNums.push(await getRandomNum(100));

    randomNums.forEach((num, i) => {
        updateUser(userIds[i], num);
    });

    userIds.forEach((num) => {
        if (num !== randomNum) removeUser(num);
    });

    async function createUser(firstName, lastName) {
        const body = {
            firstName,
            lastName
        };

        const xhr = new XMLHttpRequest();

        xhr.open("POST", `${baseUrl}/objects?prob=5`);

        xhr.send(body);

        xhr.onload = function () {
            if (xhr.status != 200) {
                throw new Error(request.statusText);
            } else {
                userIds.push(xhr.response.id);
            }
        };

        xhr.onerror = function () {
            console.log("Request failed");
        };
    }

    async function getRandomNum(maxNum) {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", `${baseUrl}/unstable?maxRandom=${maxNum}&prob=5`);

        xhr.send();

        xhr.onload = function () {
            if (xhr.status != 200) {
                throw new Error(xhr.request.statusText);
            } else {
                const numResponse = +xhr.response;
                return numResponse;
            }
        };

        xhr.onerror = function () {
            console.log("Request failed");
        };
    }

    async function updateUser(id, age) {
        const body = {
            age
        };

        const xhr = new XMLHttpRequest();

        xhr.open("PATCH", `${baseUrl}/objects/${id}?prob=5`);

        xhr.send(body);

        xhr.onload = function () {
            if (xhr.status != 200) {
                throw new Error(xhr.request.statusText);
            }
        };

        xhr.onerror = function () {
            console.log("Request failed");
        };
    }

    async function removeUser(id) {
        const xhr = new XMLHttpRequest();

        xhr.open("DELETE", `${baseUrl}/objects/${id}?prob=5`);

        xhr.send();

        xhr.onload = function () {
            if (xhr.status != 200) {
                throw new Error(xhr.request.statusText);
            }
        };

        xhr.onerror = function () {
            console.log("Request failed");
        };
    }
}