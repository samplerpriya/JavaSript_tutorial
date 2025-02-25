// class User{
//     constructor (email, password){
//         this.email = email;
//         this.password = password;
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value.toUpperCase()
//     }
// }

// const priya = new User("priya123@gmail.com", "abc")
// console.log(priya.password);

// getter and setter use hota h jb hume password ka access kisi ko nhi dena ho





// class User{
//     constructor (email, password){
//         this.email = email;
//         this.password = password;
//     }

    // get email(){
    //     return this._email.toUpperCase()
    // }

    // set email(value){
    //     this._email.toUpperCase()
    // }

//     get password(){
//         return `${this._password}priya`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const priya = new User("priya123@gmail.com", "abc")
// console.log(priya.password);



// function User (email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this.email = value
//         }
//     })
// }

// const chai = new User("chai@chai.com","chai");
// console.log(chai.email);

// -----------------------------------------------------



const User = {
    _email: 'priya@gmail.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._password = value
    }
}


const tea = Object.create(User)
console.log(tea._email);