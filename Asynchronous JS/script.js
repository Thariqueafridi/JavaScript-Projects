//SetTimeout Example

console.log("hello...")
function sync(){
    console.log('step1')
    console.log('step2')
    console.log('step3')
}

sync()

let a = 100
let b = 200
let c = a + b
console.log(c)

setTimeout(()=> console.log('step1'),4000)
setTimeout(()=> console.log('step2'),2000)
setTimeout(()=> console.log('step3'),1000)

console.log('bye')

//SetInterval example

//setInterval(()=>console.log('Hi'),2000)


