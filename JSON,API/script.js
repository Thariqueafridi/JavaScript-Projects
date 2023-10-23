let json1 = 'Tharique' //string
let json2 = 25 //numbers
let json3 = true //boolean
let json4 = [1,2,3,4,5,6,7,8,9] //array


//Object creation in Json...
let json5 = {
    "Stock":"Tharique",
    "Price": 3500
}


//Creating array of objects in Json

//it will return an array(3)(arrat of 3 object)

//when we give backtick we can make it as String

let json6 = `[
    {
        "Stock":"Tharique",
        "Price": 3500
    },
    {
        "Stock":"Afridi",
        "Price": 4500
    },
    {
        "Stock":"Mohamed",
        "Price": 7500
    } 
]`

// we can use JSON.parse() - Method

let parsed = JSON.parse(json6) // JSON .parse converts String in to array(Array of Objects)

console.log(parsed)

console.log(JSON.stringify(parsed)) // converting JSON object in to a String..


//API Calling..

//console.log(fetch ('https://official-joke-api.appspot.com/jokes/programming/random'))

//fetch always returns a promise....

fetch('https://official-joke-api.appspot.com/jokes/programming/random') // fetching API

// we have to process the abouve API Link, so we use

.then((res)=>res.json()) // changed the object in to 

.then((msg)=>console.log(msg[0].setup,msg[0].punchline)) // results from res will store in msg variable..

.catch((err) => console.log(err)) // error will be catched here , so we give .catch method

//Example for Thirukkural- ANother method of getting API results

// fetch('API')
// .then(res=>{
// if(res.ok)
// console.log("Success")
// else
// console.log('Failed')
// return res.json()
// })


//JSON Placeholder -Testing Fake API

//get API using method

// fetch('https://jsonplaceholder.typicode.com/todos/1') , get Request
//       .then(response => response.json())
//       .then(json => console.log(json))

// We can post some data also by using , and braces inside braces we give the data to POST.

// example for POST a record

fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    headers:{'content-type': 'application/json'},
    body:JSON.stringify({
        userID:22,
        id:456,
        title:'test',
        completed:false
    })

})
      .then(response => response.json())
      .then(json => console.log(json))




