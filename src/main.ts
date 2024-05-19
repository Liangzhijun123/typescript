// type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number) [];

type Guitarist = {
    name?: string,

    // property optional when you put '?' before the call
    active: boolean,

    albums: stringOrNumberArray,
}

type UserId = stringOrNumber;

// literaly types
let myName: 'dave';

let userName: 'dave' | 'john' | 'amy';
userName = 'amy';

// functions
const add = (a: number , b: number): number => {
    return a + b;
}

const logMsg = (message: any) =>{
    console.log(message);
}

logMsg ('hello');
logMsg(add(2,3));

let subtract = function (c: number , d: number): number{
    return c - d;
}

// type mathFunction = (a: number , b: number) => number;
interface mathFunction {
    (a: number , b: number) : number;
} 

let multiply: mathFunction = function (c,d){
    return c * d;
}

logMsg(multiply(2,2));

// optional parameters comes at last onlu
const addAll = (a: number, b: number, c?: number) : number => {

    // if type c is not undefine it will add a + b + c
    if (typeof c !== 'undefined'){
        return a + b + c;
    }

    // if type c is undefine it will add a + b
    return a + b;
}

// assign default values
const sumAll = (a: number = 10, b: number, c: number = 2 ) : number => {

    return a + b + c;
}

logMsg(addAll(2,3,2));
logMsg(addAll(2,3));
logMsg(sumAll(2,3));

// to skip value a but it will still have default value
logMsg(sumAll(undefined,3));

// rest parameters. ...nums is for you don't know how many values you put in
const total = (a: number , ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
} 
logMsg(total(10,2,3));

// never type
const createEroor = (errMsg: string) => {
    throw new Error(errMsg);
}

// endless error so you need a if and else otherwise is endless loop
const infinite = () => {
    let i: number = 1;
    while (true){
        i++;
        if( i > 100 ) break;
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' 
    ? true : false;
}

// to use never type
const numberOrString = (value: number | string) : string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return createEroor('this should never happen!');
}