// let item = {
//     name:'phone',
//     price:25000,
//     quantity:1,
//     categories:['electronics','phones'],
//     dimensions:{
//         length:7,
//         breadth:3.5,
//         height:.5
//     }
// }
// // 
// console.log(item)

// //another way of object creation

// let item2 = new Object();

// item2.name = 'charger',
// item2.price = 250,
// item2.quantity = 1

// console.log(item2)

// //accessing object using dot notation.
//  console.log(item.price)
// item.price = 26000

// console.log(item.price)

// //adding a property

// item.returnable = true

// console.log(item)

// //square notation 

// console.log(item['price'])

// item['returnable'] = false

// console.log(item)

// //another method of giving input

// let key = 'price'

// item[key] = 27500

// console.log(item)

// adding methods in objects

let item = {
    name:'phone',
    price:25000,
    quantity:1,
    buy:function(){
        console.log("items added to cart")
    },
    addtoList(){
        console.log("items added to list")
    }
}

item.buy()
item.addtoList()