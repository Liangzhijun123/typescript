"use strict";
// inside of the class Coder, the properties and methods are called members
class Coder {
    // constructor
    constructor(name, music, age, lang) {
        // protected -> can be access inside of class but it could also be access inside of derived class if we are to extend class
        // optional lang. the default is 'typescript
        this.lang = 'typescript';
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    // method so outside of class can access it
    getAge() {
        return `hello, I am ${this.age}`;
    }
}
// instantiate 
const Dave = new Coder('Dave', 'Rock', 42, 'Typescript');
console.log(Dave.getAge());
// extending the class
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        // super need to come before trying to call it
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang}`;
    }
}
const Sara = new WebDev('mac', 'sara', 'lofi', 25);
// this getLang can be access because when we extend class it is there in the sub class
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
// instantiation Guitarist
const Page = new Guitarist('jimmy', 'guitar');
console.log(Page.play('strums'));
// new class
class Peeps {
    // getCount method can be directly call on the class too
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        // ++ on the left make sure count increments first so the first adding is '1'. if is right side then you start from 0
        this.id = ++Peeps.count;
    }
}
// static -> count does not apply to any instantiation of the class. it applies to the class directly to itself
Peeps.count = 0;
// instantiate Peep class
const John = new Peeps('john');
const Steve = new Peeps('steve');
const Amy = new Peeps('amy');
// this tell us how many of the Peeps class has been instantiated to create objects
console.log(Peeps.count);
// steve is 2nd because he is created in 2nd place
console.log(Steve.id);
// amy is 3rd because he is created in 3rd place
console.log(Amy.id);
console.log(John.id);
// getter or setters
class Bands {
    constructor() {
        // initialize an empty array
        this.dataState = [];
    }
    // the get data() will return array of string. 'get' keyword is to get data inside of state that is private define
    get data() {
        return this.dataState;
    }
    // set can not return a value. empty return is ok
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('param is not array of strings');
    }
}
// instantiate Bands class
const myBands = new Bands();
// this uses the setters 
myBands.data = ['neil', 'led'];
// getter to get the data
console.log(myBands.data);
// setter console
myBands.data = [...myBands.data, 'zz top'];
// getter to get data
console.log(myBands.data);
