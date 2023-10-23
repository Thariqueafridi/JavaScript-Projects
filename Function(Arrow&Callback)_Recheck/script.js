// //functions performs specific tasks...

// //write a function to find the number is positive or not

// function isPositive(num){ //Parameter inside bracket
//     return num>0
// }
// console.log(isPositive(-4))// we gave input here is argument

// //another function example

// function sayHello(){
//     console.log("Hello")
// }

// sayHello()

// //more argument

// function findProduct(a,b){
//     return(a*b)
// }

// console.log(findProduct(8,6)) // we can give this line top of the function declaration still works is called Hoisting...
// console.log(typeof(findProduct))

// //Dafault Parameters

// function greet(name){
//     console.log("hi",name)
// }
// greet("Tharique")

// function greet2(name='there'){ //default parameters(there-using method)
//     console.log("hi",name)
// }

// greet2()

// //Recursion -Calling a function itself

// //finding factorial method

// function factorial(n){
//     if (n==1)
//      return 1
//     return n*factorial(n-1)
// }

// console.log(factorial(5))

// //function expression

// let a = 100

// let isEven = function(num){
//     return num%2==0
// }

// console.log(isEven(2))

// //another example usinhg array method

// let arr = [2,3,5,6,10]

// let findSum = function(arr){
//     let sum = 0
//     for(let val of arr){
//      sum += val
//     }
//     return sum
// }

// console.log(findSum(arr))

// //write function to find volume

// let volume1 = function(l,b,h){
//     return l*b*h
// }

// //write the above function expression as arrow function

// let volume = (l,b,h)=>{ // Three parameters here so we gave paranthesis.
//     return l*b*h
// }

// console.log(volume(1,5,6))

// //Arrow function - let (function name) = (parameters directly in paranthesis) => arrow and inside braces giving retur statment.

// //Arrow function for findSum in up

// let sumofArr = arr=>{ // only one parameter(arr) so no need paranthesis.......
//     let sum = 0
//     for(let val of arr){
//      sum += val
//     }
//     return sum
// }

// console.log(findSum(arr))

// //Find area of circle using arrow function

// let area = r => Math.PI *r*r

// console.log(area(5))

// //Variable argument(using Multiple arguments for operation)

// let prod = function (...args) {
//   let result = 1;
//   for (let val of args) {
//     result *= val;
//   }
//   return result;
// };

// console.log(prod(7, 6, 5, 4));

// //prod2 using method

// let prod2 = function () {
//     let result = 1;
//     for(i=0;i<arguments.length;i++)
//      result *= arguments[i]
//     return result;
//   };
  
//   console.log(prod2(7, 6, 5, 4));


  //Call Back function(calling a function by passing a function as an argument)

console.log("Call Back function")

function greetConsole(name){
    console.log("hi",name)
}

function greetHeading(name){
    const heading = document.querySelector('h1')
    heading.innerHTML = 'hello' + name
}

function greet(callback){
    callback('Thariq')
}

greet(greetConsole) // calling a function using a function
greet(greetHeading) // calling a function using a function

//Call Back is defined as -- for a function we give a function's name as input--....

//For understanding callback we have For Each method

//For Each

arr = ['deepa','thariq','afridi']

arr.forEach(print)

function print(val){
    console.log(val)
}

//by using arrow function

arr.forEach(val=>console.log(val))

//for each we will find val,index and arr also...

arr.forEach((val,index,arr)=>{
    arr[index] = val.toUpperCase()
})

console.log(arr)

//Dropdown project using array method

arr = ['ECE','CSE','IT','EEE']

arr.forEach(val =>{
    const opt = document.createElement('option')
    opt.textContent = val
    opt.value = val
    document.getElementById('branch').appendChild(opt)
});