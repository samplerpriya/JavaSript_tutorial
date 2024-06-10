// const coding = ["js","ruby","java","python","cpp"]
// const values = coding.forEach( item => {
//     console.log(item);
//     return item
// })
//  console.log(values);  // it will return undefined so we will rreturn the item let see....we see that when we add the return item it will not return any values it means for each is not returning any values

// //we can write like this also without declaring it
// coding.forEach( item => {
//     console.log(item);
// }) 




// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num>4
// })


// we can write it in for each method as well
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4){
//         newNums.push(num)
//     }
// })


// console.log(newNums);

// ( (..) => ()) ---> we dont have to return an values here 
// ( (...)) => { ..}---> we have to return 


// const books = [
//     { title: ' Book One', genre: 'Fiction', public: 1981,
//         edition: 2004 },
//     { title: ' Book Two', genre: 'Non-Fiction', public: 1992,
//         edition: 2008 },
//     { title: ' Book Three', genre: 'History', public: 1999,
//         edition: 2007 },
//     { title: ' Book Four', genre: 'Non-Fiction', public: 1989,
//         edition: 2010 },
//     { title: ' Book Five', genre: 'Science', public: 2009,
//         edition: 2014 },
//     { title: ' Book Six', genre: 'Fiction', public: 1987,
//         edition: 2010 },
//     { title: ' Book Seven', genre: 'History', public: 1986,
//         edition: 1996 },
//     { title: ' Book Eight', genre: 'Science', public: 2011,
//         edition: 1989 },
                  
// ];

// let userBooks = books.filter( (bk )=> bk.genre === 'History')
//  userBooks = books.filter( (bk) => {
//     return bk.publish >= 2000 && bk.genre === "History"
// } )
// console.log(userBooks);



// Add 10 in each number
// const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNumers = myNumers.map( (num) => num + 10 )
// console.log(newNumers);



//chaining
// const myNumers = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNumers.map( (num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
// console.log(newNums);
 


// reduce keyword
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => item.price, 0)
console.log(priceTopay);