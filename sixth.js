//* Functions
// Who to Define a function in js
// Example 
// function myFunction(){
//     console.log("Hello Developers");
//     console.log("Today we are learning functions in javaScript");
// }
// myFunction();

// when we pass some parameter in between () this
// Example-1
// function myFunction(name,age){
//     console.log(name,age);
// }
// myFunction("karan",24);

// Example-2
// function sum(a,b){
//     console.log(a + b);
// }
// sum(5,44);

// Example-3
// function sum(x,y){
//     s = x + y;
//     return s;
// }
// let value = sum(44,9);
// console.log(value);

//* Arrow Functions
// Example-1
// const sum = (a, b)=>{
//     console.log(a+b);
// };

// Example-2
// const multi = (x, y)=>{
//     console.log(x* y);
// };

//* practice-Question
// 1. create a function using the "function" keyword that take a string as an argument & 
// returns the number of vowels in the string.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// Same Question with Arrow Function
// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

//* forEach Loop in Array in js 
// Example
// let arr = [1,2,3,4,5,6];
// arr.forEach(value => {
//   console.log(value);
// });

//* Practice-Question 
// Q-1: for a given array of numbers,print the square of each value using the forEach loop.
// let num = [2, 4, 6, 8, 10];
// num.forEach((number) => {
//   console.log(number * number);
// });