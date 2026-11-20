function compareObjects(a, b) {

    if (a === b) {
        return true;
    }

    if (a === null || b === null ||
        typeof a !== "object" || typeof b !== "object") {
        return false;
    }

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {

        if (!(key in b)) {
            return false;
        }

        if (!compareObjects(a[key], b[key])) {
            return false;
        }
    }

    return true;
}
let obj1 = {
    name: "Aman",
    age: 20,
    marks: {
        maths: 85,
        science: 90
    }
};

let obj2 = {
    name: "Aman",
    age: 20,
    marks: {
        maths: 85,
        science: 90
    }
};

let obj3 = {
    name: "Aman",
    age: 21,
    marks: {
        maths: 85,
        science: 90
    }
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));