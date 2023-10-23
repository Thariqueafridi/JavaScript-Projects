//  //     //this line menntions comments
//     //     let score = 0 //initialixation
//     //     //assignment
//     //     score = 10
//     //  //  alert(score)
//     //  console.log("score is " + score)
//     let amount = 0;
//     amount = 1000;
//     console.log("Amount is " + 1000)
//     const pi = 3.14
//     // pi = 3.15/ cant change const values
//     console.log(pi)

//     // let name  = prompt("What is your name?")
//     // console.log("hi" , name)

//     // let tickets =  prompt("How many tickets do you want?")
//     // console.log("You should pay " , Number(tickets)*20)

//      let a = prompt("enter a number")
//      console.log(Number(a) +10)

let str1 = "  Strive not to be a success  "
let str2 = "but rather to be a value"

let firstName = "Tharique"

let lastName = "Afridi"

let city = "Saudi Arabia"

console.log(firstName + " " + lastName + " lives in " + city)

//to avoid space problems we gonna use Template Literals...

// `` back tick is goingt to be used

//let msg = `${firstName} ${lastName} lives in ${city}`

//string interpolation
console.log(`${firstName} ${lastName} lives in ${city}`)

//multiline string

let msg = `happy
birthday
baby`
console.log(msg)

msg = `cat's name is "toto"`
console.log(msg)
//we can use backtick in all scenearios


//Arrays

let num = 10;

let name  =  "Tharique";

let cities = ["Chennai", "Madurai", "Trichy"];

let  marks = [75,65,88,91,58];

console.log(cities.length)

console.log(cities[3]);

console.log(marks[marks.length-1])//finding last element of array so wqe can use length -1;

//mix of int and array on arrays
let arr = [5,8,3,'Tharique',"Afridi",[3,4]] 
console.log(arr)
console.log(arr[3],arr[4])

//matrix
// 2d array
let matrix = [[3,4,5],[4,5,7],[6,7,8]]
console.log(matrix)

//array methods

let array = ['a','b','c','d','e']

//push method

array.push('f')//push new element in last

console.log(array)

console.log(array.pop())//removes last element

console.log(array.shift())//removes first element
console.log(array)

console.log(array.unshift('a'))//adding first element

console.log(array)

//deleting random element

// delete array[2]

// console.log(array)

console.log(array)

//SPlice method

array.splice(2,2)//delete starts from 2nd position , del 1 element

console.log(array)

//replace using splice, delete and replace

array.splice(1,1, 'm')

console.log(array)

array.splice(1,2,'x','y')//replace two alphabets

console.log(array)

array.splice(1,0,'b')//adding without delete

console.log(array)

//slice(Starting index, ending index)
//ending index not included
console.log(array.slice(1))

//reverse

array.reverse()

console.log(array)

//join arrays - converts array to string
let str = array.join()
console.log(str)

//split - converts string to array

let str3 = "g,t,r,e"
let arr3 = str3.split(',')
console.log(arr3)

//concat operator

let firstArr = [1,2,3]
let secondArr = [4,5,6]

let joinedArr= [firstArr,secondArr]

console.log(joinedArr)

joinedArr = firstArr.concat(secondArr)

console.log(joinedArr)

//spread operator

let joined = [...firstArr,...secondArr]

console.log(joined)



