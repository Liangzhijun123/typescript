"use strict";
// convert to type assertions
let a = 'hello';
// less specific type because Two is String or Number
let b = a;
// more specific because those two are the same string
let c = a;
let d = 'word';
let e = 'word';
// function
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// assertion. this will tell TS that it will return a string 'as string'. ignore warning
let myVale = addOrConcat(2, 2, 'concat');
// careful here bc TS see no issue but string is returned
let nextVale = addOrConcat(2, 2, 'concat');
// two assertions or double force casting to a string (avoid this)
10;
// assertion is useful when doing HTML. the DOM
const img = document.querySelector('img');
// '!' none null assertion
const myimg = document.getElementById('#img');
img.src;
myimg.src;
