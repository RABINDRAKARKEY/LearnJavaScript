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

// const arr = [4,5,6,7,8,9];
// console.log(arr);
// console.log(arr[2]);

// console.log(typeof arr);

// console.log(typeof arr[2]);

// single array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(typeof arr);
// console.log(arr.map((item) => item * 2));

// Array
// let ans = [1, 2, 3, "apple", "banana", ""]; //data structure
// console.log(ans[4]);
// console.log(typeof ans);

// console.log(ans.length);

//push
// console.log(ans.push(12));

// let result = ans.push(12);
// console.log(result);

// console.log(ans);
// let result = ans.pop(12);
// console.log(result);

// // unshift
// ans.unshift(14);
// console.log(ans);

// includes
// let result = arr.includes
// ans.includes(4);
// console.log(ans);

// const output = ["Hello", "Worls", "Welcome", ""];
// console.log(output.join(""));

// slice & spice

// // slice:
// let arr = [1,2,3,4,5,6,3,7,8,9,10]
// let result = arr.slice(1,4)
// result.slice(1,3)
// console.log(result);
// console.log(arr.indexOf(3))
// console.log(arr.lastIndexOf(3))

// console.log(arr);

// push and sum

// let num = [];
// let sum = 0;
// for (let i = 0; i < 3; i++) {
//   let k = prompt("Enter a number");
//   // num = Number(num);
//   num.push(k);
// }

// console.log(num);

// for(let i=0; i<num.length; i++){
//     sum += num[i];
// }
// console.log(sum)

// const person = {
//   name: "Rahul",
//   age: 21,
//   gender: "Prefer not to say!",
//   address: {
//     street: "Fasku",
//     city: "Kathmandu",
//     country: "Nepal",
//   },

//   //   province{

//   //   },
//   isMarried: false,

//   greet: function () {
//     console.log("Hello");
//   },
// };
// console.log(person,address,country);
// person.greet();
// person.greet() + (`${name}`);

// const { name, age, gender, address } = person;
// console.log(name, age);

// function in javascript
// function myFunc(){
//     console.log("Hey there!!!");
// }
// myFunc();

// function with parameters
// function myFunc2(name, age){
//     console.log(`My name is ${name} and I am ${age} years old`);
//     }
//     myFunc2("Bipin Karki", 20);

// function myFunc2(num1, num2){
//     console.log(`The sum of ${num1} and  ${num2} is ${num1+num2}`);
//     }

//     myFunc2(10, 20);
//     // console.log(num1 + num2);

//     function myFunc3(radius){
//         return Math.PI * radius * radius;
//     }
//     let h = myFunc3(5);
//     console.log(h);

// function calculator(cartItems, taxRate){
//     let total = 0;
//     for(let i = 0; i < cartItems.length; i++){
//         total += cartItems[i].price * cartItems[i].quantity;
//         }
// return total * (1 + taxRate);
// }
// calculator(100,25)

// function myFunc(){
//     let a = promt("Enter first number?");
//     let b = promt("Enter second number?");

//     let result = Number(a) + Number(b);
//     if
// }

// var x = 90;
// let y = 70;
// const z = 80;

// function myFunc(){
//     console.log(x,y,z);
// }
// myFunc();

// function myFunc() {
// console.log(x,y,z);
//   if (true) {
//         // var x = 90;
//         let y = 70;
//         console.log(x);
//     const z = 80;
// console.log(y);
// console.log(z);
// }
// console.log(x);
// console.log(y);
// console.log(z);
// }
// myFunc();

// <![CDATA[  <-- For SVG support
// if ('WebSocket' in window) {
//     (function () {
//         function refreshCSS() {
//             var sheets = [].slice.call(document.getElementsByTagName("link"));
//             var head = document.getElementsByTagName("head")[0];
//             for (var i = 0; i < sheets.length; ++i) {
//                 var elem = sheets[i];
//                 var parent = elem.parentElement || head;
//                 parent.removeChild(elem);
//                 var rel = elem.rel;
//                 if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
//                     var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
//                     elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
//                 }
//                 parent.appendChild(elem);
//             }
//         }
//         var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
//         var address = protocol + window.location.host + window.location.pathname + '/ws';
//         var socket = new WebSocket(address);
//         socket.onmessage = function (msg) {
//             if (msg.data == 'reload') window.location.reload();
//             else if (msg.data == 'refreshcss') refreshCSS();
//         };
//         if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//             console.log('Live reload enabled.');
//             sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
//         }
//     })();
// }
// else {
//     console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// }
// ]]>

// Document object model
// console.log(document.body);
// console.log(document.head);
// document.getElementById("hello");
// let result = document.getElementById("hello");
// console.log(result);
// console.log(document.getElementById("hello").innerHTML);

// let output = document.getElementsByClassName("hello");
// output.innerHTML = "I have many proof";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.fontSize = "30px";
// result.style.padding = "10px";
// result.style.margin = "10px";
// result.style.border = "2px solid black";
// result.style.borderRadius = "10px";
// result.style.boxShadow = "0 0 10px black";
// result.style.textAlign = "center";

// document.getElementById("Heading2");
// let name = document.getElementById()

// let results = document.getElementsByClassName("hello");
// results.innerHTML = "I have many proof";
// results.style.backgroundColor = 'red';
// results.style.color = 'white';
// results.style.fontSize = '30px';
// results.style.padding = '10px';
// results.style.margin = '10px';
// results.style.border = '2px solid black';
// results.style.borderRadius = '10px';
// results.style.boxShadow = '0 0 10px black';
// results.style.textAlign = 'center';
// let ans = document.getElementsByTagName("span");
// console.log(show);

// show[0].innerText = "Haina k ho yesto!";
// show[1].innerText = "hey!";
// show[2].innerText = "Oi!";
// show[3].innerText = "Sir ji!";
// show[4].innerText = "Ki Maam ho?!";

// document.getElementsByTagName("span");
// let x= document.getElementsByTagName("span");

// x[1].innerText = "opportunities nai xaina basera ni k garnu ra?";
// x[1].style.backgroundColor = "pink";
// x[1].style.color = "black";
// x[1].style.fontSize = "20px";
// console.log(x);

// let x = document.getElementsByTagName("span");
// x[1].innerText = "opportunities nai xaina basera ni k garnu ra?";
// x[1].style.backgroundColor = "pink";
// x[1].style.color = "black";
// x[1].style.fontSize = "20px";
// let x = document.getElementsByTagName("span");

// x[1].innerText = "opportunities nai xaina basera ni k garnu ra?";
// x[1].style.backgroundColor = "pink";
// x[1].style.color = "black";
// x[1].style.fontSize = "20px";

// console.log(x);

// button
// let buttonOne = document.querySelector("#btnAdd");
// buttonOne.style.backgroundColor = "blue";
// buttonOne.style.color = "white";
// buttonOne.style.fontSize = "20px";
// buttonOne.style.padding = "10px";
// buttonOne.style.margin = "10px";
// buttonOne.style.border = "2px solid black";
// buttonOne.style.borderRadius = "10px";
// buttonOne.style.boxShadow = "0 0 10px black";
// buttonOne.style.textAlign = "center";
// buttonOne.style.cursor = "pointer";
// buttonOne.setAttribute("class", "Timro");

// console.log(buttonOne);
// let buttonTwo = document.querySelector(".btnDelete");
// buttonTwo.style.backgroundColor = "blue";
// buttonTwo.style.color = "white";
// buttonTwo.style.fontSize = "20px";
// buttonTwo.style.padding = "10px";
// buttonTwo.style.margin = "10px";
// buttonTwo.style.border = "2px solid black";
// buttonTwo.style.borderRadius = "10px";
// buttonTwo.style.boxShadow = "0 0 10px black";
// buttonTwo.style.textAlign = "center";
// buttonTwo.style.cursor = "pointer";
// console.log(buttonTwo);
// buttonTwo.setAttribute("class", "mero");

// console.log(buttonTwo.getAttribute("class"));
// console.log(buttonOne.getAttribute("class"));

// create elements;
// var task = "What's your name?"

// document.body.prepend(display)

// function addTask() {
//   let display = document.createElement("h1");
//   display.innerText = "Hi there!";
//   document.body.append(display);

// }
// function deleteTask() {
//   let h1 = document.querySelector("h1");

//   h1.remove();
// }

// buttonOne.onclick = addTask;
// buttonTwo.onclick = deleteTask;

// let btn = document.querySelectorAll("button");
// btn[0].innerText = "HeyBtn";

// function myFunc(name, age){
//   console.log(`Hey!  My name is: ${name}. And i am ${age} years old.`);
// }
// myFunc("Bipin", 20);

// const meroFunc = (name, age) =>{
//   console.log(`Hey!  My name is: ${name}. And i am ${age} years old.`);

// }
// meroFunc("Bipin", 20);

// Advance array method:

// 1. forEach         done
// 2. map             done
// 3. filter          done
// 4. find            done
// 5. findIndex       done
// 6. some            done
// 7. every           done
// 8. reduce
// 9. sort
// 10. splice
// 11. slice
// 12. concat
// 13. join
// 14. pop
// 15. push
// 16. shift
// 17. unshift

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // find:
// const myFunc = (value, index) => {
//   return value > 6;
// };
// let output = newArr.find(myFunc);
// // newArr.find();
// console.log(output);

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // find:
// const myFunc = (value, index) => {
//   return value > 6;
// };
// let output = newArr.find(myFunc);
// console.log(output);

// let output = newArr.find((value, index) => value > 6);
// console.log(output);

// // Filter
// let output = newArr.filter((value,index)=>value >6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.filter((value, index)=value.instock);
// console.log(ans);

// // some
// let output = newArr.some((value,index)=>value >6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.some((value, index)=value.instock);
// console.log(ans);

// // Filter
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.filter((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.find((value, index) => value.instock);
// console.log(ans);

// some
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.some((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.some((value, index) => value.instock);
// console.log(ans);

// ___________________________________________________________________________
// foreach
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.for((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.forEach((value, index) => value.instock);
// console.log(ans);

// ___________________________________________________________________________

// map
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.map((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.map((value, index) => value.instock);
// console.log(ans);
// ___________________________________________________________________________
// map
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.findIndex((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.findIndex((value, index) => value.instock);
// console.log(ans);

// ___________________________________________________________________________

// map
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.map((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.map((value, index) => value.instock);
// console.log(ans);
// ___________________________________________________________________________
// map
// let newArr = [1, 7, 3, 8, 5, 10];
// let output = newArr.every((value, index) => value > 6);
// console.log(output);

// const products = [
//   { id: 1, name: "Bipin", price: 8000, instock: true },
//   { id: 2, name: "Horlicks", price: 9000, instock: false },
//   { id: 3, name: "Bournbita", price: 12000, instock: true },
//   { id: 4, name: "cauli", price: 1230, instock: true },
//   { id: 5, name: "Banana", price: 1256, instock: true }
// ];

// let ans = products.every((value, index) => value.instock);
// // console.log(ans);
// let display = document.createElement("h2");
// display.innerText = ans;
// // document.body.prepend(display);
// document.body.append(display);

// ------------8-11-19-24-34-------------------------------------------------------
// reduce
let newArr = [1, 7, 3, 8, 5, 10];
let output = newArr.reduce((accum, curvalue) => accum+curvalue);
console.log(output);
// console.log(typeof output);

const products = [
  { id: 1, name: "Bipin", price: 8000, instock: true },
  { id: 2, name: "Horlicks", price: 9000, instock: false },
  { id: 3, name: "Bournbita", price: 12000, instock: true },
  { id: 4, name: "cauli", price: 1230, instock: true },
  { id: 5, name: "Banana", price: 1256, instock: true },
];

let ans = products.reduce((total, curvalue) => total + curvalue.price, 0);
console.log(ans);
// console.log(typeof ans);
// console.log(products);
// console.log(typeof products);