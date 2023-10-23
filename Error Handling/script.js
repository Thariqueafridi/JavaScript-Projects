 try{
    num = prompt("Enter a Number")
    if(num ==='')
     throw "Cannot be empty"
    if(isNaN(num))
     throw "Enter a Valid Number"   // including error will coming code in try block....(Exception Handling)
    console.log(num**2)
 }

 catch(error){
    console.log(error)
 }

 finally{  // it should be compulsory if it has error or not error..
    console.log("Bye")
 }
 