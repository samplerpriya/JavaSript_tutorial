// Primitive

// Types :
 
// String
// Numnber
//Boolean
// null
// undefined
// Symbol
// Bigint






// const score = 100;
// const scoreValue = 100.3;

// const inLoggesIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId)


// const bigNumber = 2442388274229797297429727n



// Non - primitive (reference)

// Array, Object, Function

//Array
// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {
//     name: "priya",
//     age: 22,
// }

//  const myFunction = function(){
//     console.log("Hello World")
//  }

//  console.log(typeof myFunction)
//  console.log(typeof bigNumber)


 // primitive type me stack memory use hoti h (isme copy milti h)
 // non-primitive me heap memory use hoti h (referance milta h aur change krne pr original value chnage hoti h)


 let myYoutubename = "priyaKushwaha"
let anothername = myYouTubename
anothername = "chaiAurCode"

console.log(myYoutube);
console.log(anothername)

let userOne = {
    email: "priya23@gmail.com",
    upi: "priya23kush"
}

let userTwo = userOne
userTwo.email = "priya21@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
