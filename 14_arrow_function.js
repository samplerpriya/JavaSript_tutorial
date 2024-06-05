const user = {
    username : "priya ",
    price : 566,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);  
    }
// this means current context ki baat ho rhi h
      
}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);


// function chai() {
//     console.log(this);
// }
// chai()



// function chai() {
//     let user = "priya"
//     console.log(this.username);
// }
// chai()



// const chai = function () {
//     let username = "priya"
//     console.log(this.username);
// }
// chai()




// this is the arrow function
const chai =  () => {
    let username = "priya"
    console.log(this);
}
// chai()


// Syntax

//curly braces use kiya to return likhna pdega
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));



// curly bracket nhi lga mtlb return nhi likhna pdega
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
// console.log(addTwo(3,4));



// return object
const addTwo = (num1, num2) => ({username: "priya"})



// In array
const myArray = [2,4,5,6,4]
myArray.forEach()