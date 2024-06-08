//loops



// -------------------------for loops---------------------------

// syntax
/*
         for (initialization; condition; increament/decreament) {
                //        code
         }
 */


//  ex-
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }



//  for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5)
//         {
//             console.log("5 is best number");
//         }
//         console.log(element);
//     }





// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//     console.log(`inner loop value: ${j} and inner loop : ${i}`);
        
//     }
    
// }




// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <=10; j++) {
//     // console.log(`inner loop value: ${j} and inner loop : ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j);
//     }
    
// }



// let myArray = ["flash", "batman", "superman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }



// keyword
// // break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`DETECTED`);
//         break;
//     }
//      console.log(` Value of i is ${i}`);
    
// }



// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`DETECTED`);
//         continue;
//     }
//      console.log(` Value of i is ${i}`);
    
// }





// ------------------------------WHILE LOOP--------------------------------


//syntax

/*
while (condition) {
    //code 
}
*/


// let i = 0
// while (i<=10) {
//     console.log(`value of i is ${i}`);
//     i = i



// let myArray = ['flash', "batman","superman"]
// let arr = 0
// while (arr < myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr + 1
// }




//------------------------------------do-while loop-----------------------------------

// syntax

/*
do {
    //code
} while (condition);

*/


let score = 1
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);