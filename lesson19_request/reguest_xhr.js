const url = "https://async-demo.herokuapp.com";

// 1
function getObject() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${url}/unstable?maxRandom=20`);

    xhr.send();

    xhr.onload = function () {
        if (xhr.statusText !== "OK") {
            throw new Error(xhr.response);
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
const prob = 20;

function createObject() {
    const body = {
        firstName: "Vasya",
        secondName: "Ivanov",
    };

    const xhr = new XMLHttpRequest();

    xhr.open("POST", `${url}/objects?prob=${prob}`);

    xhr.send(body);

    xhr.onload = function () {
        if (xhr.statusText !== "Created") {
            throw new Error(xhr.response);
        } else {
            const result = JSON.parse(xhr.response);
            updateObject(JSON.parse(result.id));
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

function updateObject(id) {
    const body = {
        age: 33,
    };

    const xhr = new XMLHttpRequest();

    xhr.open("PATCH", `${url}/objects/${id}?prob=${prob}`);

    xhr.send(body);

    xhr.onload = function () {
        if (xhr.statusText !== "OK") {
            throw new Error(xhr.response);
        } else {
            const result = JSON.parse(xhr.response);
            removeObject(JSON.parse(result.id));
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}

function removeObject(id) {
    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", `${url}/objects/${id}?prob=${prob}`);

    xhr.send();

    xhr.onload = function () {
        if (xhr.statusText !== "No Content") {
            throw new Error(xhr.response);
        } else {
            console.log(xhr.response);
        }
    };

    xhr.onerror = function () {
        console.log("Request failed");
    };
}