type One = string;
type Two = string | number;
type Three = 'hello';

// convert to type assertions
let a: One = 'hello';

// less specific type because Two is String or Number
let b = a as Two;

// more specific because those two are the same string
let c = a as Three;

let d = <One> 'word';
let e = <string | number> 'word';

// function
const addOrConcat = (a: number , b: number , c: 'add' | 'concat'): number | string => {
    if ( c === 'add') return a + b;
    return '' + a + b;
}

// assertion. this will tell TS that it will return a string 'as string'. ignore warning
let myVale: string = addOrConcat(2,2,'concat') as string;

// careful here bc TS see no issue but string is returned
let nextVale: number = addOrConcat(2,2,'concat') as number;

// two assertions or double force casting to a string (avoid this)
(10 as unknown) as string;

// assertion is useful when doing HTML. the DOM
const img = document.querySelector('img') as HTMLImageElement;

// '!' none null assertion
const myimg = document.getElementById('#img') as HTMLImageElement;

img.src
myimg.src 