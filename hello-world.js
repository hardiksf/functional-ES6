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

const DEVELOPMENT = true;

const fetchDataReal = () => ({
    // Function body
});

const fetchDataFake = () => ({
    name: 'Hardik'
});

const fetchData = DEVELOPMENT
    ? fetchDataReal
    : fetchDataFake;

const double = number => number * 2;
const subtractFive = number => number - 5;
const functionArray = [double, subtractFive, Math.sqrt];
let myNumber = 100;
functionArray.forEach(myFunction => myNumber = myFunction(myNumber));
console.log(myNumber);

const subtract = (x, y) => x - y;

// Passing functions as arguments
const operateOn2And3 = myFunction => myFunction(5, 10);
console.log(operateOn2And3(add));
console.log(operateOn2And3((x, y) => x + y));
console.log(operateOn2And3(subtract));
console.log(operateOn2And3(Math.min));

// Returning function
const createPrint = () => () => console.log(`this function returns function`);
createPrint()();

const createMultiplier = x => y => x * y;
const double2 = createMultiplier(2);
console.log(double2(3));

const createPrint2 = () => () => {
    const FAVORITE_NUMBER = 23;
    return console.log(`Returns my favorite number: ${FAVORITE_NUMBER}`);
};
createPrint2()();

// Implementing private variables
const Person = ({ name, age, job }) => {
    let _name = name;
    let _job = job;
    return {
        getName: () => _name,
        getJob: () => _job,
        setJob: newJob => _job = newJob

    };
};

const me = Person({ name: 'Hardik', age: 99, job: 'current job' });
console.log(me.getJob());
me.setJob('new job');
console.log(me.getJob());

// Higher order functions
const divide = (x, y) => x / y;

const secondArgumentIsNotZero = func =>
    (...args) => {
        if (args[1] === 0) {
            console.log(`second argument can not be zero`);
            return null;
        }
        return func(...args);
    };

const divideSafe = secondArgumentIsNotZero(divide);
console.log(divideSafe(4, 0));
console.log(divideSafe(4, 3));

// currying
const myAddFunction = (x, y, z) => x + y + z;
console.log(myAddFunction(5, 6, 7));

const addPartial = x =>
    (y, z) =>
        myAddFunction(x, y, z);

const add5 = addPartial(5);
console.log(add5(6, 7));

const addPartial2 = x =>
    y =>
        z => myAddFunction(x, y, z);

console.log(addPartial2(5)(6)(7));

// recursion
const countDown = x => {
    if (x < 0) return;
    console.log(x);
    countDown(x - 1);
};
countDown(5);

// bind
const add1 = myAddFunction.bind(null, 1);
console.log(add1(2, 3));