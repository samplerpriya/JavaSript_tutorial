// //Dates

// let myDate = new Date()
// // // console.log(myDate);
// // console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0 ,23)
// let myCreatedDate = new Date(2023, 0 ,23,5 ,3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString);
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // milisec
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getMonth() + 1 );
// console.log(newDate.getHours());


// `${newDate.getDay()}` and the time
newDate.toLocaleString('default',{
    weekday: "long",
    
})