// we hav two ways to declare object
// 1) literals
// 2) constructor

// Singleton - one object only, literals me singleton nhi bnta
// Object.create


//object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Priya",
//     "full name": "Priya Kushwaha", 
//     [mySym]: "mykey1",
//     age: 19,
//     location: "Indore",
//     email: "priya12@gmail.com",
//     isLoggedinDays: false,
//     lastLogininDays : ["Monday", "Tuesday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);// we can only access it in big bracket with double quotes
// // console.log(JsUser.mySym);
// console.log(JsUser[mySym]);

// JsUser.email = "pya1223@gmail.com" // it can change the value

// // // we can freeze the value so that no can change the value
// Object.freeze(JsUser)
// // JsUser.email = "eot etetee"

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// console.log(JsUser.greeting());




// const tinderUser = new Object() // it is same as bellow one   , it is singletone object
// const tinderUser = {} // it is not a singletone object


// tinderUser.id = "123abc"
// tinderUser.name = "Priya"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser);
// const regularUser = {
//      email: "priya21@gmail.com",
//      fullname :{
//           userfullname:{
//                firstname: "Priya",
//                lastname: "Kushwaha"
//           }
//      }
// }
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname)

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {7: "a", 6: "b"}

// const obj3 = { obj1, obj2}  // it will print aaray inside array

// const obj3 = Object.assign(obj1,obj2)  // it will add all array in a single array
// const obj3 = Object.assign({}, obj1,obj2,obj4)


// const obj3 = {...obj1, ...obj2}
// console.log(obj3);







// const users= [
//      {
//      id: 1,
//      email: "priya21@gmail.com"
// },
// {
//      id: 1,
//      email: "priya21@gmail.com"
// },

// ]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));




// const course  = {
//      coursename: "js in hindi",
//      price : "999",
//      courseInstructor: "priya"
// }
// // console.log(course.courseInstructor)

// const {courseInstructor: instructor} = course
// console.log(instructor);



// const navbar =  (company) => {

// }

// navbar(company = "priya")


// {
//     "name ": "priya",
//     "courseName": "js in hindi",
//     "price" : "free"
// }