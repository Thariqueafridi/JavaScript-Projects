//Loops

//for,while,do-while kin Javascript

//for Loop:

for(let i = 1;i<=5;i++){ // let = variable, i=1 is counter, i<=5 is condition, i++ increment)
    console.log('Hello')
}

let i
for(i = 1;i<=5;i++){ // let = variable, i=1 is counter, i<=5 is condition, i++ increment)
    console.log(i)
}

console.log('outside loop' , i)

for(i=10;i>=1;i--)
    console.log(i)

//while Loop - Syntax

i = 10//initialization comes first
while(i>=1){//condition comes along with while
    console.log(i)
    i--;//decrement comes here

}

console.log("outside loop ", i)//checking i after all the Process.

console.log('do while loop')

i = 10//initialization
do{
console.log(i)
i-- //decrement
}while(i>=1)//condition


//break - helps us to stop the loop
//console.log("break demo")
// while (true){ // which means , we will tell the loop to do it again and again
//     let num = Number(prompt("Enter a Number"))
//     if(!isNaN(num)) // tell here where we are going to stop the loop
//     break;
// }

//continue - skips the current iteration
console.log("continue demo")
for (i=1;i<=10;i++){
    if(i%3==0)
    continue
    console.log(i)
}

//for...of demo
console.log("for...of demo")
let arr = ['apples','mangoes','grapes','oranges']
for(i=0;i<arr.length;i++){ //usinh here i as index / Used this Loop variable to change the Index
    console.log(arr[i]) //accessing arr of i
    // console.log(arr[i].toUpperCase())
    // console.log(arr[i].toLowerCase())

// so we can use another method called for ...of method

for(let fruit of arr)
console.log(fruit)
}

console.log("for...in demo")


///for...of for accessing array elements , for...in for accessing objects elements
//for ...in

item = {
    name : 'phone',
    price : 25000,
    quantity : 1
}

for (let key in item)

console.log(item[key])






