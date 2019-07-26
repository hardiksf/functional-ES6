/* eslint-disable no-console */
const greet = (name) => { console.log(`Hello ${name}`); };
greet('Hardik');

// Ways to write functions before ES6
function myFunction(args) {
    // Function body
};

const mySecondFunction = function (args) {
    // Function body
};

// Arrow function
const add = (x, y) => {
    return x + y;
};
console.log(add(3, 5));

const addFunction = (x, y) => x + y;
console.log(addFunction(3, 5));
