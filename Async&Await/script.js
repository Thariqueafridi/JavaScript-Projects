//async & await..

//alternative method for Promise(.then and catch method)

async function fn(){ //async function returns a promise , result in promise gives the output
    return 'hello'
}

console.log(fn())

fn().then((msg)=>console.log(msg))

//promise usig async and await

let reachA = new Promise((resolve,reject)=>{
const reached = false
if(reached)
setTimeout(resolve,3000,"Tharique Reached")//resolve
else
reject("Tharique not reached")
})

async function asyncstatus(){
    try{
    console.log('Hi...')
    res = await reachA //await keyword used here for tell , wait until promise reached.
    console.log(res) // resolve message
    console.log('bye')
    }
    catch(err){
        console.log(err) //try,catch method we are using in async , for catching error...otherwise it shows error with output.
    }
}

//await is used only in async function....

asyncstatus()

//if promise fulfilled it will results good..

// if promiose not fulfilled it rejects the scenario... put it in Try catch Method.

