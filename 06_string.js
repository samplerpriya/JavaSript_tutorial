// const name = "Priya"
// const repoCount = 50

// console.log(name + repoCount +"Value"); 
// This Method of adding string is so outdated like it is not used in modern js

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
// This is used in modern javascript



// How to declare the string
// const gameName = new String ("priya")
// console.log(gameName);


// how to access the key
// console.log(gameName[0]);
// console.log(gameName.__proto__);


//methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
  
// console.log(gameName.charAt(0))
// console.log(gameName.indexOf('a'));



const gameName = new String ("priya-pp-aa")
// console.log(gameName.substring(0,2));
// we can write it in diffent manner
// const newString = gameName.substring(0,2)
// console.log(newString);


// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);


// const newStringOne = "    priya    "
// console.log(newStringOne);
// console.log(newStringOne.trim());  // it ignore the spaces



const url = "https://priya.com/priya%20kushwaha"
// console.log(url.replace('%20','-')) // it replace the %20 inot '-'

console.log(url.includes('priya')) // it search whether the string is presnt or not

console.log(gameName.split('-'))

