// Javascript ek object h aur ismee present har chiz ek object hi hota h
// like string, and array bhi ek object hi hota h 
// object ka reference humesha null
// function ek function bhi h aur object bhi h

// const newHello = ["hulk", "spiderman"]


// function multiplyBy5(num) {
//     return num * 5
// }

// multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);


// function createUser(username,  score) {
//     username = username
//     // we can add a this keyword to recorgnise the particular thing
//     this.username = username


// }

// createUser.prototype.increment = function () {
//     this.score++
// }

// createUser.prototype.printMe = function(){
//     console.log(`score is ${this.score}`);
// }
// const chai = new createUser("chai", 25)
// const tea = createUser("tea",250)

// chai.printMe()

/* 

here's what happens behind the scenes when the new keyword is used:

A new object is created : The new keyword initiates the creation 
of a new javascript object.

A prototype is linked: The newly created object gets 
linked to the prototypes property of the constructor 
function. This means that it has access to properties 
and methods defined on the constuctor's prototype.

The constructor is called : The constructor function is called 
with the specified arguments and this is bound to the newly
object. If no explicit return value is specified from the construtor.
javacript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the construtor function 
has been called, if it does'nt return a non-primitive value 
(object, array, function, etc), the newly created object 
is retured. 
*/


// PROTOTYPE

// let myName = "Priya     "

// space add krne se 10 length ho gayi
// console.log(myName.length);

// it is not a best idea so dont use it

// console.log(myName.trim().length);



// let myHero = ["thor", "spiderman"]
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.priya = function () {
//     console.log(`priya is present in all objects`);
// }

// Array.prototype.heypriya = function () {
//     console.log(`priya says hello`);
// }

// heroPower.priya()
// myHero.priya()
// myHero.heypriya()
// heroPower.heypriya()


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true

}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

//modern
Object.setPrototypeOf(TeachingSupport, Teacher)
let anotherUsername = "chaiAurCode"
String.prototype.trueLength= function () {
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"priya".trueLength()
"icetea".trueLength()