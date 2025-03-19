// Qs1. Write a JavaScript function that returns array elements larger than a number


let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
//elements larger than a number num

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
           if (arr[i] > num) {
           console.log(arr[i]);
           }
    }
}
getElements(arr, num);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let str;
// for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//     //if current character is not added, then add it in
//     ans.
//     //Otherwise it is a duplicate.
//     ans += currChar;
//     }
//     }
//     return ans;