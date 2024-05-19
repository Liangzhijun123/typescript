"use strict";
// literaly types
let myName;
let userName;
userName = 'amy';
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters comes at last onlu
const addAll = (a, b, c) => {
    // if type c is not undefine it will add a + b + c
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    // if type c is undefine it will add a + b
    return a + b;
};
// assign default values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// to skip value a but it will still have default value
logMsg(sumAll(undefined, 3));
// rest parameters. ...nums is for you don't know how many values you put in
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// never type
const createEroor = (errMsg) => {
    throw new Error(errMsg);
};
// endless error so you need a if and else otherwise is endless loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
// to use never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createEroor('this should never happen!');
};
