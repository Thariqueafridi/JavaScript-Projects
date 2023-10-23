// //functions - performs specific tasks , can be called multiple times , optionally takes inputs as parameters and optionally returns values.

// // function declaration

// function isPositive(num){ //gives function and a name / inside brackets is parameters
//     return num>0 // definition of a function
// }

// //function without Arguments and Returns

// function sayHello(){
//     console.log("Hello")
// }

// sayHello()

// //function with one or more parameters and arguments

// // Calling function first and Giving definition is called Hoisting...

// console.log(findProduct(4,9))

// function findProduct(a,b){
//     return a*b
// }

// //Default Parameters

// function greet(name = 'there'){
//     console.log("hi",name)
// }

// //greet("Tharique")

// //no arguments passing - it will results as Hi, There....

// greet()

// //recursion - Calling a function inside a function is called recursion
// //simple example of recursion is finding factorial method

// function factorial(n){
//     if(n==1)
//     return 1
//     return(n*factorial(n-1))
// }

// console.log(factorial(5))

// //function expression

// let a = 100

// let isEven = function(num){
//     return(num%2==0)
// }
// console.log(isEven(5))
// console.log(isEven)

// //another example

// let arr = [1,2,3,4,5,6,7]

// let findSum = function (arr){
//     let sum = 0 //initialize sum as 0
//     for(let val of arr){
//         sum = sum + val
//     }
//     return sum
// }

// console.log(findSum(arr))

// //write a function for finding volume

// // let volume = function(l,b,h){ // normal function
// //     return l*b*h
// // }

// //using Arrow function

// let volume = (l,b,h) => {return l*b*h}
// console.log(volume(6,7,8))

// //convert findSum function as arriw function

// let sumofArr = (arr) =>{
//     let sum = 0 //initialize sum as 0
//     for(let val of arr){
//         sum = sum + val
//     }
//     return sum
// }

// console.log(sumofArr(arr))

// // area of circle  finding using arrow function

// let area = r => Math.PI*r*r
// console.log(area(5))

// console.clear()

// //variable arguments (for many numbers to be multiplied)

// let prod = function(...args){ //rest parameters
//     let result = 1
//     for(let val of args)
//     result *= val
//     return result
// }

// console.log(prod(7,9,5,8))

// //another example

// let prod2 = function(){
//     let result = 1
//     for(i=0;i<arguments.length;i++)
//     result *= arguments[i]
//     return result
// }

// console.log(prod2(7,9,5,8))

// //generators - generates value one by one

// function* indexGenerator(){
//     let index = 1
//     while(true){
//         yield index ++
//     }

// }

// const gen = indexGenerator();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

// console.clear()

//Call Back function - function passed a argument

// function greetConsole(name) {
//   console.log("hello", name);
// }

// function greetHeading(name) {
//   const heading = document.querySelector("h1");
//   heading.innerHTML = "hello" + name;
// }

// function greet(callback) {
//   callback("Thariq");
// }

// //greet(greetConsole)
// greet((name) => {
//   const heading = document.querySelector("h1");
//   heading.innerHTML = "hello" + name;
// });

// //for each function

// arr = ["thariq", "afridi", "good"];

// arr.forEach(print); // this foreach takes each and every value of array and tell to execute function.

// function print(val) {
//   console.log(val.toUpperCase());
// }

// //using arrow function

// arr.forEach((val) => console.log(val)); // for each is function we are calling , inside a function is called call back function is print function.

// //example another

// arr = ["ECE", "CSE", "EEE", "MECH"];

// arr.forEach((val) => {
//   const opt = document.createElement("option");
//   opt.textContent = val;
//   opt.value = val;
//   document.getElementById("branch").appendChild(opt);
// });

//Map , Reduce , Filter Functions

//Map function

let priceUSD = [20, 30, 50];

let priceINR = priceUSD.map((x) => x * 83);

console.log(priceINR);

//without arrow function

priceINR = priceUSD.map(convert); //convert is a call back function here

function convert(val) {
  return val * 83;
}

console.log(priceINR);

//array of Objects using Map function

const input = [
  { name: "tharique", age: 29 },
  { name: "afridi", age: 28 },
  { name: "John", age: 24 },
  { name: "Ajith", age: 47 },
];
console.log(input);

const ages = input.map((x) => x.age);

console.log(ages);

// map- takes each and every array element and do the call back function process and gives the result in a new array.

//filter - returns new array by checking each value

let cost = [35, 1324, 12, 34, 125, 54];

let lessthan100 = cost.filter((x) => x < 100);

console.log(lessthan100);

//reduce

cost = [35, 1324, 12, 34, 125, 54];

let cartTotal = cost.reduce((total, el) => total + el); // two parameters given are total defines all element , el defines each and every elements

console.log(cartTotal);

//using 2d array for reduce... first make it one dimensional by using flat and after reduce.

// arr2d =[
//     ["a","b","c"],
//     ["c","d","e"],
//     ["e","f","g"]
// ]

// console.log(arr2d)

// let count = arr2d.flat().reduce(
//     (accumulator,currVal) =>{

// //     }

//     {},)

//Returning functions and closures

// let a = 100; //variable decalaration

// let b, c; // local variables declared inside the function
// function func1() {
//   //function declaration
//   console.log("a is " + a);
// }

// func1();
// a = 200;
// func1();

// // Js can access values outer the function

// function outer() {
//   outerVariable = "bread";
//   function inner() {
//     let innerVariable = "butter";
//     console.log("inner Variable is ", innerVariable);
//     console.log("Outer Variable is ", outerVariable);
//   }
//   return inner(); // inner scope can function can accessing outer function is called as lexical scoping....
// }

// let call1 = outer();

//Memory management

let a = 100

a = 200


let b = a

b = 300
console.log('b is',b)
console.log('a is',a)

let obj1 = {name:'thariq',age:29}

let obj2 = obj1

obj1.age = 30
obj2.name = 'afridi'

console.log('obj1',obj1)
console.log('obj2',obj2)


//set and Map functions

//Set - is an object( we cant store repeated values , unique values can be stored)

let arr = [1,1,2,3,4,5,5,5,5,10,8] //declaring an array

let myset1 = new Set(arr)

console.log(arr)

console.log(myset1)

let myset2 = new Set()

myset2.add(4)
myset2.add(5)
myset2.add(6)
myset2.add('abc')
myset2.add({'a':1,'b':2})

console.log(myset2)

let obj = {'a':1,'b':2} //both objects are same , anyway it will be added , because both are in different address.reference datatypes are not strictly unique.

myset2.add(obj)

console.log(myset2)

console.log(myset2.has(5)) // has using myset2 method.

console.log(myset2.size)

//converting myset2 in to array

let arr2 = Array.from(myset2)

console.log(arr2)

//Map - function

//Map- collection of key value pairs

// key should be unique

//values repeated is not a problem

let map1 = new Map()

//in set we use .add method, in Map we use .set method

map1.set('a',1)
map1.set('b',2)
map1.set('a',3)//change value of a and replace in the old one not added mewly

console.log(map1)
console.log(map1.size)
console.log(map1.has('a'))

map1.delete('a')

map1.set('d',6)
map1.set('e',9)
console.log(map1)

for(let i of map1){ //using for each method
  console.log(i)
}

for(let [k,v] of map1){ // gives us the value
  console.log(k,v)
}

//for each using example

map1.forEach((v,k) =>{
  console.log('key',k ,'value',v)
})



