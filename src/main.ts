// generic function -> it works with any type that pass in now
const echo = <T> (arg: T): T => arg;

// it return boolean true or false
const isObj = <T> (arg: T) : boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
}

console.log(isObj(true));
console.log(isObj('john'));
console.log(isObj([1,2,3]));

// object print
console.log(isObj({name: 'john'}));
console.log(isObj(null));

const isTrue = <T> (arg: T): {arg: T , is: boolean} => {
    // check for array
    if(Array.isArray(arg) && !arg.length){
        return {arg , is: false};
    }

    // check for object
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg , is: false};
    }
    return {arg , is: !!arg};
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({name: 'dave'}));
console.log(isTrue([]));
console.log(isTrue([1,2,3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// interface. type place holder generic T
interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue = <T> (arg: T): BoolCheck<T> => {
    // check for array
    if(Array.isArray(arg) && !arg.length){
        return {value: arg , is: false};
    }

    // check for object
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg , is: false};
    }
    return {value: arg , is: !!arg};
}

// interface
interface HasID {
    id: number,
}

// narrowing the HasID. extending to the type T and has to have the type ID
const processUser = <T extends HasID> (user: T): T =>{
    // process the user with logic here
    return user;
}

console.log(processUser({id: 1, name: 'dave'}));


// another example. building K as a keyof first type T 
const getUsersProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] =>{

    // identify user of keys
    return users.map(user => user[key]);
}


// generic with a class
class StateObject<T> {
    private data: T

    constructor (value: T){
        this.data = value;
    }

    // getter
    get state(): T {
        return this.data;
    }

    // setter
    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject<string>("john");
console.log(store.state);
store.state = 'dave';
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]> ([15]);
myState.state = (['dave',42, true]);
console.log(myState.state);

