// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

// method

    // encryptPassword(){
    //     return `${this.password}abc`
    // }


// changeUsername(){
//     return `${this.username.toUpperCase()}`
// }

// }
// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// BEHIND THE SCENE

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// User.prototype.encryptPassword = Function(){
//     return `${this.password}abc`
// }

// User.prototype.encryptPassword = function(){
//     return `${this.username.toUpperCase()}``
// }
// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());