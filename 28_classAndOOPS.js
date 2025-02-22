// javascript and classes 

//  OOPS
//  OBJECT
// -- collection of properties and methods
// -- toLowerCase

//  WHY USE OOPS

// PARTS OF OOP

//  OBJECT LITERAL

// -- constructor function
// -- Prototype
// -- Classes 
// -- Instances

//  4 PILLERS
// abstraction
// encapsulation
// Inheritance
// Polymorphism




//  OBJECT LITERALS

// const user = {
//     username: "Priya",
//     loginCount:  8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from database");
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails);



// const user = {
//     username: "Priya",
//     loginCount:  8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("Got user details from database");
//         console.log(`username: ${this.username}`);
//         console.log(this);
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails);



// const promiseOne = new Promise()
// const date  = new Date()



function User(usename, login , isLoggedIn ){
    this.UserName = Username;
    this.loginCount = this.loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Priya ", 21, true)
const userTwo = new User("Aashish", 13, false)
console.log(userOne);