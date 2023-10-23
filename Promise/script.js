// // //Promiose is also like an object
// // //we need to give two call back functions as parameters success -resolve , failure-reject
// // const tatkalBook = new Promise((resolve,reject) =>{
// //     let bookingSuccess = true;
// //     if(bookingSuccess)
// //     resolve(850)
// //     else
// //     reject()
// // })

// // tatkalBook.then((amt)=>console.log(`Thanks, i've transferred Rs ${amt}`)) // inside then we give Resolve

// // .catch(()=>console.log("Thanks for trying,i'll try to book bus"))  // inside catch we give Reject


// // //no we write function for botyh suceess and Reject

// // // function success(){
    
// // // }                        //instead of these two we have given as arrow function

// // // function failure(){
    
// // // }

// // // we can give it like another method

// function tatkalBook(){
    
//     return new Promise((resolve,reject) =>{
//         let bookingSuccess = true;
//         if(bookingSuccess)
//         resolve(850)
//         else
//         reject()
//     })
    
// }

// tatkalBook().then((amt)=>console.log(`Thanks, i've transferred Rs ${amt}`)) // inside then we give Resolve

// .catch(()=>console.log("Thanks for trying,i'll try to book bus"))  // inside catch we give Reject

// //Code for success we give inside Then

// // code for failure we give inside catch


//Async and Await function

