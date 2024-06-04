// let a = 10
// const b = 20
// var c = 30


// var c = 300  // it will not run because var is already declared inside the if condition
// if (true) {
    // let a = 10
    // const b = 20
    // var c = 30
    
// }
// console.log(a); // it will not run because it is inside the if
//  console.log(b);  //it will not run because it is inside the if
// console.log(c);  // it will easily run 



// function one() {
//     const username = "priya"

// function two() {
//     const website = "youtube"
//     console.log(username);
// }

// // console.log(website);

// two()
// }
  
// one()



// if(true){
//     const username = "priya"
//     if(username === "priya"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     //    console.log(website);
// } 

// console.log(username);



// ------------------------------INTERESTING---------------------



console.log(addone(5))

function addone(num) {
    return num + 1
}


// in different way

 addTwo(5) // it will not run 
const addTwo = function(num) {
    return num + 2
}

