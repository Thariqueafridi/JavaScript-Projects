import Car,{fillGas,repair} from './car.js'

let car1 = new Car()

car1.drive()

fillGas()
repair()
















// // let user1 ={
// //     name:'Thariq',
// //     age: 29,
// //     login(){
// //         console.log('hi', this.name)
// //         console.log("You are logged in")
// //     },
// //     logout(){
// //         console.log("You are logged out")
// //     }
// // }

// // let user2 ={
// //     name:'Afridi',
// //     age: 28,
// //     login(){
// //         console.log('hi', this.name)
// //         console.log("You are logged in")
// //     },
// //     logout(){
// //         console.log("You are logged out")
// //     }
// // }

// // let user3 ={
// //     name:'Mohamed',
// //     age: 30,
// //     login(){
// //         console.log('hi', this.name)  // here this.name defines the name of the current object.
// //         console.log("You are logged in")
// //     },
// //     logout(){
// //         console.log("You are logged out")
// //     }
// // }

// // user3.login()
// // user2.login()
// // user1.login()

// // //for 3 users we can create one by one , if suppose
// // // we have 1000 above users we cant create objects one by one
// // // so we create "class" for all
// // // class is a template.


// // //class creation

// // // base class, parent class, superclass in java also
// // class User{ // class nme should be in Capital letters-------Create class as a template using constructor
    
// //     // static variables writing

// //     static numberOfUsers = 0; // defines number of users

// //     constructor(name,age){  // same like method but its name is constructor
// //         //instance variable - created for each and every single object
// //         this.name = name;
// //         this.age = age;
// //         User.numberOfUsers++; // Static variable can be accessed by using class name so we use User.static variabnle name.
// //          // track the users numbers here, bcoz constructor wil run first once the object is called.
// //     }
    
    
// //     login(){
// //         console.log('hi', this.name)  // here this.name defines the name of the current object.
// //         console.log("You are logged in")// methods can be given inside class without comma
// //     }
// //     logout(){
// //         console.log('hi', this.name)
// //         console.log("You are logged out")
// //     }

// //     //static method writing

// //     static displayTotalUsers(){
// //         console.log("Total users are:",User.numberOfUsers)
// //     }
// // }

// // // we are creating objects for Class 'User' ,if we create the same , constructor will give the given data
// // let userOne = new User('tharique',29)  //creates objects , immedately calls constructors
// // let userTwo = new User('Afridi' ,30)
// // let userThree = new User('Mohamed',48)

// // console.log('NumberOfUsers',User.numberOfUsers)
 
// // //calling static method using class

// // User.displayTotalUsers()

// // //class is a template of properties and methods.

// // userOne.logout()
// // userTwo.logout()
// // userThree.logout()


// // let movie = 'PS1' // String creation

// // let music = new String('ARR') // created String as an object


// // //exmaple for static methou accessing using class

// // //Math.sqrt() -  Math is a class name and Sqrt is a static method

// // //inheritance/ derived or child or subclass

// // class Paiduser extends User{ // we are using User classes's things for Paid user class by using word extends is called inheritance
    
// //     constructor(name,age){
// //        super(name,age);
// //         this.storage =100;
// //     }
    
// //     // we have a method in base class which we redefine in derived class is called " OverRiding "
    
// //     login(){
// //         console.log("Thanks for logging in")
// //         return this
// //     }
    
// //     message(){
// //         console.log("You have 100 gb free space")
// //     }
// // }

// // let paidUser1 = new Paiduser('ismail',57)
// // paidUser1.login()
// // paidUser1.message()

// // //Method chaining

// // paidUser1.login().message()

// // let arrNew = [1,2,3,4,5]
// // console.log(arrNew)

// //example for prototype 

// function User(name,age){
//     this.name = name;
//     this.age = age;
    
// }

// User.prototype.login = function(){ // this code is for making this login fn get in to the prototype.
//     console.log("hi",this.name)
//     console.log("You are logged in")
// }

// let user1 = new User('Mohamed',57)

// user1.login()

// //Get and Set function in class

// //Get for Tell what the value is...

// // Set for Set , this is the value is...

// class Temperature{
//     constructor(temp){
//         this._temp = temp; //Using Underscore _ for denoting this as private variable
//     }

//     get temp(){
//         return `${this._temp}.deg celsius`
//     }
//     set temp(temp){
//         if(temp>100)
//         temp = 100
//         this._temp = temp
//     }
// }

// let temp1 = new Temperature(25)

// temp1.temp = 150

// console.log(temp1.temp)