// console.log("HEllo World please!!!")

// variables
// var x = 30;
// console.log(x);
// var x = 100;
// console.log(x);
// ______________________________________________________________________________________________________________________
// const
// var x = "const";
// console.log(text)
// const result = 90;
// console.log(result)
// ______________________________________________________________________________________________________________________
// String
// result = 100; // error
// console.log(result);

// datatypes in javascript:
// const output = "Bipin Karki"
// console.log(output)

// Number
// const result = 90;
// console.log(result);
// console.log(typeof result);

// float
// const x = 3.56;
// console.log(x);

// undefined:
// let y;
// console.log(y);
// console.log(typeof y);

// Null
// let y = null;
// console.log(y);
// console.log(typeof y);

// boolean:
// const isTrue = true;
// console.log(isTrue);
// console.log(typeof isTrue);

// bigint
// const result = 46546465541n;
// console.log(typeof result);
// console.log(result);

// symbol
// const output =  Symbol("Hello world!!!");
// console.log(output);
// console.log(typeof output);

// let x = 8.86;
// console.log(x);
// console.log(typeof x);

// Type conversion
// const result = "123";
// const output = number(result);
// console.log(output);
// console.log(typeof output);

// Type conversion
// const result = "6.56";
// const output = parseFloat(result);
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = String(result);
// console.log(output);
// console.log(typeof output);

// const result = 678;
// const output = String(result);
// console.log(output);
// console.log(typeof output);

// const isMarried = false;
// const ans = String(isMarried)
// console.log(ans);
// console.log(typeof ans);

// Object types

// const obj = {
//   name: "Rahul",
//   age: 25,
//   isMarried: false,
//   occupation: "Agriculture",
// };

// console.log(obj);
// console.log(typeof obj);

// const arr = [3,4,5,6,7];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);


// string method
// const str = "Hello World";
// // length
// console.log(str.length);

// console.log(str.charAt(2));

// console.log(str.indexOf("o"));

// console.log(str.lastIndexOf("o"));

// console.log(str.toLowercase());

// replace
// console.log(result.replace("Hello", "Hi"));

// includes
// console.log(str.includes("World"));

// slice
// console.log(str.slice(5,8));

// concat
// console.log(str.concat(" I love Js"))

// how community make it easier
// Let output = "                 Hello Teachers"
// let output = "                         Hello teachers";
// console.log(output);
// console.log(output.trim());
// console.log(output.trimStart());

// Split
// console.log(str.split())

// // concatination
// let x = "hello world";
// let y = "how are you";
// // const z = x + y;
// console.log(x + y);
// console.log(x.concat(y));


// const x = 90;
// const y = 10;
// // console.log
// const result = x + y;
// console.log(`The sum of two number is: ${result}`);

// `https://localhost:5000/api/user${id}`;


// operators in JS

// let x = 10;
// x += 10;
// x -= 10;
// console.log(x);
// console.log(x);

// let a = 10;
// let b = 20;
// let c = 30;

// console.log( a === c);
// console.log( b === c);
// console.log( c === c);
// console.log(c != c);
// console.log(a>b);
// console.log(a<c);


// let x = true;
// let y = true;

// console.log(x && y);
// console.log(x || y);
// console.log(!x);

// string operator:
// let str1

// ternary operators,
// let ageGroup = 7;
// console.log(ageGroup>=18 ? "You can vote" : `You can vote ${18-ageGroup} years later`);

let x = "123";
let y = +x //positive
console.log(y);
console.log(typeof y);

let a = +b;
console.log(a);
console.log(typeof a);

const obj = {
    name: "John",
    age:56,
};
delete obj.age;
console.log(obj);