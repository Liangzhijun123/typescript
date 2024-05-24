"use strict";
// generic function -> it works with any type that pass in now
const echo = (arg) => arg;
// it return boolean true or false
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([1, 2, 3]));
// object print
console.log(isObj({ name: 'john' }));
console.log(isObj(null));
const isTrue = (arg) => {
    // check for array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // check for object
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    // check for array
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    // check for object
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// narrowing the HasID. extending to the type T and has to have the type ID
const processUser = (user) => {
    // process the user with logic here
    return user;
};
console.log(processUser({ id: 1, name: 'dave' }));
// another example. building K as a keyof first type T 
const getUsersProperty = (users, key) => {
    // identify user of keys
    return users.map(user => user[key]);
};
// generic with a class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    // getter
    get state() {
        return this.data;
    }
    // setter
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("john");
console.log(store.state);
store.state = 'dave';
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['dave', 42, true]);
console.log(myState.state);
