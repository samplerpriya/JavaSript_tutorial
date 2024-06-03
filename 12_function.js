// function sayMyName(){
//     console.log("P");
//     console.log("R");
//     console.log("I");
//     console.log("Y");
//     console.log("A");
// }

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2)
// }

// This all are the result that how we can display the answer
// addTwoNumber(3, 4)
// addTwoNumber(3, "4")
// addTwoNumber(3, "a")
// addTwoNumber(3, null)

// const result = addTwoNumber(3,5)
// console.log("Result :", result);





// function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     return result
    // return number1 + number2  // we can easly write the output here 

// }

// const result = addTwoNumber(3,5)
// console.log("Result: ", result);




// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("priya"))
// console.log(loginUserMessage()) // when we dont pass any argument it will show undefined





// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("priya"))
// console.log(loginUserMessage()) // when we dont pass any argument it will show undefined




// hum by default value pass kr skte h agr console me nhi lkhi to by default run ho jayegi
// function loginUserMessage(username = "sam") {
    // return `${username} just logged in`
// }
// console.log(loginUserMessage("priya"))
// console.log(loginUserMessage()) // when we dont pass any argument it will show undefined
// console.log(loginUserMessage("prince")) // if we write price here it will override the value sam




// function calculateCartPrice(num1) {
//     return num1
// }
//  console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 400, 500))



// rest operator
//  function calculateCartPrice(...num1) {
//     return num1
//  }
//  console.log(calculateCartPrice(200, 400, 500))




// function calculateCartPrice(val1, val2,...num1) {
//     return num1
//  }
//  console.log(calculateCartPrice(200, 400, 500,2000))




 const user = {
    sername : "Priya",
    price: 199   // prices : 199 --> it show undefined
 }
 function handleObject(anyObject) {
    console.log(`Username is ${anyObject.user} and price is ${anyObject.price}`);
 }

// handleObject(user)

handleObject({
    Username : "sam",
    price : 399
})



const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[0]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400,500,2000]));