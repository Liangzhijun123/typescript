"use strict";
let stringArr = ['one', 'hey', 'dave'];
let guitars = ['strat', 'les paul', 5150];
let mixedDate = ['evh', 1984, true];
stringArr[0] = 'hey';
stringArr.push('jasmine');
guitars[0] = 1984;
// unshift -> add to beginning of array
guitars.unshift('jim');
guitars = stringArr;
mixedDate = guitars;
let bands = [];
bands.push('van halen');
// Tuple 
// this is strict because it limits how much to be put here
let myTuple = ['dave', 42, true];
// union type with string, number, boolean
let mixed = ['john', 1, false];
// mixed is a type of array with union array that accepts string number and boolean
// can't do mytuple = mixed because the target requires 3 elements.cant assign tuples that requires 3 elements 
mixed = myTuple;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
const exampleObj = {
    prop1: 'dave',
    prop2: true,
};
exampleObj.prop1 = 'john';
// evh is Guitarist type. cannot omit because it gives error
let evh = {
    name: 'eddie',
    active: false,
    albums: [1984, 5150, 'OU812'],
};
let jp = {
    name: 'jimmy',
    active: true,
    albums: ['I', 'II', 'IV'],
};
// evh and jp are same annotate type
evh = jp;
// how to make property optional
let vh = {
    // now when i delete a property in here with Guitarist it no have error because 'active' is optional property type
    name: 'jimmy',
    albums: ['I', 'II', 'IV'],
};
// both are Guitarist
evh = jp;
// make a funation to test out. 
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        // if the Guitarist have a name it will return
        return `hello  ${guitarist.name}!`;
    }
    // if the GUitarist doesn't have a name it will return
    return 'hello! Missing name';
};
console.log(greetGuitarist(jp));
// Enums
/*
Enums are not a type level addition to JS but something added to the language and runtime
*/
// enums start a position 0. if change values, TS will keep in order
var Grade;
(function (Grade) {
    // change values
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
