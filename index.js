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

// let x = "123";
// let y = +x //positive
// console.log(y);
// console.log(typeof y);

// let a = +b;
// console.log(a);
// console.log(typeof a);

// const obj = {
//     name: "John",
//     age:56,
// };
// delete obj.age;
// console.log(obj);

// let email = "bhimshenthapa@gmail.com";
// let password = "123456";
// if (email === "bhimshenthapa@gmail.com" && password === "123456")
//     {
//         console.log("Login Successfull");
//     }
//     else{
//         console.log("Login Failed");
//         }

// let grade = 85;
// if (grade >= 90){
//     console.log("A+");
// }else if(grade>=80){
//     console.log("A");
// }else if(grade>=70){
//     console.log("A");
// }else if(grade>=60){
//     console.log("A");
// }else if(grade>=50){
//     console.log("A");
// }else if(grade>=40){
//     console.log("A");
// }


// weather
// let weather = "sunny";

// let weather = "rainy";
// if( weather === "rainy"){
//     console.log("Take an umbrella");
// }else if(weather === "sunny"){
//     console.log("Wear a hat");
// }else{
//     console.log("Invalid weather");
// }


// ecommerce
// let item = "shoes";
// let quantity = 2;

// switch
// if()

// let role = "super admin";
// switch (role) {
//     case "buyer":
//         console.log("YOur can only buy products");
//         break;
//     case "seller":
//         console.log("YOur can only sell products");
//         break;
//     case "viewer":
//         console.log("YOur can only view products");
//         break;
//     case "admin":
//         console.log("You can view almost everything but less than super admin");
//         break;
//     case "super admin":
//         console.log("You can access everything");
//         break;
//     default:
//         console.log("Invalid role");
// }

// let date = new Date().getDay();
// console.log(date)
// switch (date) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// status
// let status = 500;
// switch (status) {
//     case 200:
//         console.log("OK");
//         break;
//     case 201:
//         console.log("Created");
//         break;
//     case 400:
//         console.log("rejected");
//         break;
//     case 403:
//         console.log("Forbidden");
//         break;
//     case 401:
//         console.log("UnAuthorized");
//         break;
//     case 500:
//         console.log("Internal server ERROR");
//         break;
//     default:
//         console.log("Invalid status");
// }

// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");
// console.log("I love JavaScript");

// let name = "I love JavaScript";
// for(let i=0; i<5; i++){
//     console.log({name} + i);
// }
// let name = "I love JavaScript";
// for(let i=0; i<5; i++){
//     console.log("I love javascript" +i);
// }

// for(let i=1;i<=10;i++){
//     console.log(`2 * ${i} = ${2*i}`)
// }

// console.log("Even numbers");
// for(let i=1;i<10;i++){
//     if(i%2 ===0)
//         console.log(`The even number: ${i}`);
// }

// console.log("Odd numbers");
// for(let i=1;i<10;i++){
//     if(i%2 !== 0)
//         console.log(`odd number: ${i}`);
// }

// const arr = [3,4,5,6];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }
// console.log(arr.length)
// console.log(`the sum of array is: ${sum}`);


// while loop
// let i = 0;
// while(i<=5){
//     console.log(`the value of i is: ${i}`);
//     i++;
// }

// do while
// let i= 3;
// do{
//     console.log(`the value of i is: ${i}`);
//     i++;
//     }while(i<=5);

const arr = [4,5,6,7,8,9];
console.log(arr);
console.log(arr[2]);

console.log(typeof arr);