const baseUrl = 'https://async-demo.herokuapp.com';

// 1
async function getObject() {
    try {
        const request = await fetch(`${baseUrl}/unstable?maxRandom=20`);

        if (!request.ok) {
            throw new Error(request.statusText);
        }

        const response = await request.text();
        const numResponse = +response;

        for (let i = 0; i < numResponse; i++) {
            console.log('Hello world');
        }
    } catch (e) {
        console.log(e);
    }
}

// 2
async function createObject() {
    try {
        const request = await fetch(`${baseUrl}/objects?prob=20`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: 'Vasya',
                secondName: 'Ivanov'
            }),
        });

        if (!request.ok) {
            throw new Error(request.statusText);
        }

        const response = await request.json();
        updateObject(response.id)
    } catch (e) {
        console.log(e);
    }
}

async function updateObject(id) {
    try {
        const request = await fetch(`${baseUrl}/objects/${id}?prob=20`, {
            method: 'PATCH',
            body: JSON.stringify({
                age: 33
            }),
        });

        if (!request.ok) {
            throw new Error(request.statusText);
        }

        const response = await request.json();
        removeObject(response.id)
    } catch (e) {
        console.log(e);
    }
}

async function removeObject(id) {
    try {
        const request = await fetch(`${baseUrl}/objects/${id}?prob=20`, {
            method: 'DELETE',
        });

        if (!request.ok) {
            throw new Error(request.statusText);
        }

        const response = await request.json();
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

// 3
async function userAge() {
    const userIds = [];
    const randomNums = [];

    const randomNum = await getRandomNum(3);

    createUser('Anton', 'Petrov');
    createUser('Sergey', 'Tihonov');
    createUser('Peter', 'Beilish');

    randomNums.push(await getRandomNum(100));
    randomNums.push(await getRandomNum(100));
    randomNums.push(await getRandomNum(100));

    randomNums.forEach((num, i) => {
        updateUser(userIds[i], num);
    });

    userIds.forEach(num => {
        if (num !== randomNum) removeUser(num);
    });

    async function createUser(firstName, lastName) {
        try {
            const request = await fetch(`${baseUrl}/objects?prob=5`, {
                method: 'POST',
                body: JSON.stringify({
                    firstName,
                    lastName
                }),
            });

            if (!request.ok) {
                throw new Error(request.statusText);
            }

            const response = await request.json();
            userIds.push(response.id);
        } catch (e) {
            console.log(e);
        }
    }

    async function getRandomNum(maxNum) {
        try {
            const request = await fetch(`${baseUrl}/unstable?maxRandom=${maxNum}&prob=5`);

            if (!request.ok) {
                throw new Error(request.statusText);
            }

            const response = await request.text();
            const numResponse = +response;

            return numResponse;
        } catch (e) {
            console.log(e);
        }
    }

    async function updateUser(id, age) {
        try {
            const request = await fetch(`${baseUrl}/objects/${id}?prob=5`, {
                method: 'PATCH',
                body: JSON.stringify({
                    age
                }),
            });

            if (!request.ok) {
                throw new Error(request.statusText);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async function removeUser(id) {
        try {
            const request = await fetch(`${baseUrl}/objects/${id}?prob=5`, {
                method: 'DELETE',
            });

            if (!request.ok) {
                throw new Error(request.statusText);
            }

            const response = await request.json();
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
}