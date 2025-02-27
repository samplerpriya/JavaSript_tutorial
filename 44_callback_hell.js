// h1 =document.querySelector("h1")
//  function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     } , delay)
//  }
//  changeColor("red", 1000) 
//  changeColor("orange", 2000)
//  changeColor("green", 3000)



//  changeColor("red", 1000) // ye tino ek sath ho rha uss wajah se sirf green hi dikhrha h
//  changeColor("orange", 1000)
//  changeColor("green", 1000)




// ye method me bahut time lg jata h aur ye always ek ke baad ek excute hota h

    // setTimeout(() => {
    //     h1.style.color="red";
    // },1000)

    // setTimeout(() => {
    //     h1.style.color="orange";
    // },2000)

    // setTimeout(() => {
    //     h1.style.color="green";
    // },3000)

    
    // h1.style.color = "red"
    
    
    
    // ------------------------callback hell------------------
//     h1 =document.querySelector("h1")
//     function changeColor(color, delay, nextColorchange){
//     setTimeout ( () => {
//         h1.style.color = color;
//         if(nextColorchange) nextColorchange();
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("orange",1000,() => {
//         changeColor("green",1000,() => {
//             changeColor("purple",1000)
//         });
//     });
// });
//callback nesting  --->   callback hell
// callback hell se bachne ke liye promises , async,await jaise chizo ka use krte h






// function savetoDb (data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         console.log("your data was saved", data);
//     }
//     else
//     {
//         console.log("weak connection, data not saved");
//     }
// }
// hum isme callbacks use kr skte h
// savetoDb(5)
// savetoDb(2)




// callback hell 
// function savetoDb (data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     }
//     else
//     {
//         failure();
//     }
// }

// savetoDb("apna college", () => {
//     console.log("your data was saved");
//     savetoDb("hello world", () => {
//         console.log("data2 saved ");
//     }, () => {
//         console.log("weak saved");
//     })

// }, () => {
//     console.log("weak connection , data not saved");
//          }
// );




// --------------------------------------PROMISES-------------------

// function savetoDb (data){   
//     return new Promise( (resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     })
// }

// let request = savetoDb("apna college");
// request
// .then( () => {
//     console.log("promise was resolved");
// })
// .catch( () => {
//     console.log("promise was rejected");
// })


// ---------AISE BHI KR SKTE H
// savetoDb("apna college").then( () => {
//     console.log("promise was resolved");
// })
// .catch( () => {
//     console.log("promise was rejected");
// })



// ---------------------------------PROMISE CHAINING
// IMPROVED VERSION

// savetoDb("apna college")
// .then( () => {
//         console.log("data1 was saved");
//         return savetoDb("hello world")
//     })
//     .then(() => {
//         console.log("data2 resolved");
//     })
//     .catch( () => {
//         console.log("promise was rejected");
// })



// ------------------RESULT AND ERROR IN PROMISES

// savetoDb("apna college")
// .then( (result) => {
//         console.log("data1 was saved");
//         console.log(result);
//         return savetoDb("hello world")
//     })
//     .then((result) => {
//         console.log("data2 resolved");
//         console.log(result);
//         return savetoDb("priya")
//     })
//     .catch( (error) => {
//         console.log("promise was rejected");
//         console.log(error);
// })




// --------------UPAR COLOR WALA QUESTION KO PROMISES KI HELP SE KRTE H

// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             resolve("color change")
//         }, delay )
//     })
// }
// changeColor("red", 1000)
// .then(()=>{
//     console.log("red olor was completed");
//     return changeColor("orange", 1000)
// })
// .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green",1000)
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue",1000)
// })
// .then(() => {
//     console.log("blue color was completed");
   
// })





// ---------------------------------ASYNC FUNCTION-------------------

// async function greet(){
//     return "hello!"
// }
// greet()
// .then((result) => {
//     // throw "weak connection"
//     console.log("promise was resolved");
//     console.log("result was:", result);
// })

// .catch((err) => {
//     console.log("promise was rejected with err",err);
// })


// let demo = async (() => {
//     return 5;
// })
// demo()




// function getNum(){
//     // console.log(5);
//     return new Promise ((resolve, reject) => {
//         setTimeout (() =>{
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve()
//         }, 1000);
//     });
// }
// async function demo(){
//     // ye tino ek sath hi execute ho rhe h isliye await keyword use hua 1s baad 

//     await getNum ();
//     await getNum ();
//     getNum ();
// }
// demo()


// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             resolve("color change")
//         }, delay )
//     })
// }
// async function demo(){
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
// }
// demo()





// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let num = Math.floor(Math.random()*5) +1
//             if(num > 3){
//                 reject("promise rejected")
//             }
//             h1.style.color = color;
//             resolve("color change")
//         }, delay )
//     })
// }
// async function demo(){
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);

//     let a = 5;
//     console.log(a);
//     console.log("new number= ", a + 3);
// }
// demo()



// promise reject ko handle bi kr skte history
// HANDLING REJECTIONS WITH AWAIT


h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let num = Math.floor(Math.random()*5) +1
            if(num > 3){
                reject("promise rejected")
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color change")
        }, delay )
    })
}
async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);

    } 
    catch (err){
        console.log("error caught")
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number= ", a + 3);
}
demo()