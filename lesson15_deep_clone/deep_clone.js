const a = {
    b: 111,
    c: 222,
    d: {
        a: 1,
        b: 2,
        c: {
            a: 3,
            b: 4,
            c: 5
        }
    }
}



function deepClone(obj) {
    const clonnedObj = {};

    for (const key in obj) {
        if (obj[key] instanceof Object) {
        clonnedObj[key] = deepClone(obj[key]);

        continue;
        }

        clonnedObj[key] = obj[key];
    }

    return clonnedObj;
}