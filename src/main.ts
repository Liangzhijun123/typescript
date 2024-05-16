 
// defind a user name. if we run both files main.ts and main.js we get error.
// if we chane the string to something else it won't work because it needs to recompile in main.js
let username = 'alice';
console.log(username);

// typescript need  ':number/string' to indicate what it is
let a: number = 12;
let b: number =6;
let c: number = 2;

// this is a valid JS code but ts dont like it. can't mulitple string with number
console.log(a / b);

// typescrip doesn't get in JS way
console.log(c * b);
