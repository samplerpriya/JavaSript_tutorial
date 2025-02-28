// let jsonRes = 
// '{"fact":"A cat\u2019s hearing is better than a dog\u2019s. And a cat can hear high-frequency sounds up to two octaves higher than a human.","length":119}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);

// let student = {
//     name: "priya",
//     marke: 95,
// }




// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((Res) => {
//     console.log(Res);
//     // console.log(Response.json())

//     Res.json().then((data) => {
//         console.log(data);
//     })
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// })


// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((Res) => {
//     console.log(Res);
//     // console.log(Response.json())
//     return Res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// })



// fetch(url)
// .then((Res) => {
//     return Res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url)
// })
// .then((Res) => {
//     return Res.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// })



// USING FETCH WITH ASYNC AWAIT 
// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     let res = await fetch(url)
//     let data = await res.json();
//     console.log(res);
//     console.log(data);
// }
// getFacts()

// AGAR ISME KOI ERROR AAYA TO TRY AND CATCH SE RESOLVE HOGA

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try
//     {
//         let res = await fetch(url)
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res.json();
//         console.log(data.fact);
//     }
//     catch(e)
//     {
//         console.log("error - ", e);
//     }
// }

// getFacts()




// CAT API ACCESS PROJECT
// let btn= document.querySelector("button")
// btn.addEventListener("click", async () =>{
//     // console.log("button was clicked ");
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";


// async function getFacts(){
//     try
//     {
//         let res = await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e)
//     {
//         console.log("error - ",e);
//         return "No fact found"
//     }

// }




// DOG API ACCESS
let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async () =>{
    let link = await getImage();
   
    let img = document.querySelector("#result")
    img.setAttribute("src", link)
    console.log(link);
});

async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("error -",e);
        return "NO Image found "
    }
}
