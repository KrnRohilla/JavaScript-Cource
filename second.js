//* Conditional Statements
//* If Statement
// Example-1
// let age = 26;
// if(age >=18){
//     console.log("You are an adult");
// } 
// if(age < 18 ){
//     console.log("You are a minor");
// }

// Example-2
// let mode = "dark";
// let color;
// if(mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white"
// }
// console.log(color);

//* if-else Statement
// Example-1
// let mode = "blue";
// let color;
// if(mode === "dark-mode"){
//     color = "black";
// } else{
//     color = "white";
// }
// console.log(color);

// Example-2
// let age = 25;
// if(age >= 18){
//     console.log("You are an adult");
//     } else {
//         console.log("You are a minor");
// }

// Example-3
// let number = 2;
// if (number % 2 ===0) {
//     console.log(number, "is even");
// }else{
//     console.log(number, "is odd");
// }

//* Else-if Statement
// Example-1
// let age = 70;
// if(age < 18){
//     console.log(age,"You Are Junior");
// } else if (age > 60){
//     console.log(age,"You Are Senior");
// } else{
//     console.log(age,"You Are Middle");
// }

//* Ternary Operators
//Example-1
// let age = 16;
// let result = age > 18 ? "Adult " : "Not Adult";
// console.log(result); 

//* Switch Statements
// Example-1
// const expression = "papayas";
// switch (expression) {
//     case "oranges":
//         console.log("You have oranges");
//         break;
//         case "mangoes":
//         case "papayas":
//             console.log("You have mangoes and papayas");
//             break;
//             default:
//                 console.log("sorry, we are out of {expression}.");
// }

//P-Question-1
// Get user to input a number using prompt("enter a number:"). check if the number is a multiple of 5 or not.

// let number = prompt("Enter a number:");
// if(number % 5 === 0){
//     console.log(number, "is a multiple of 5");
// }else{
//     console.log(number, "is not a multiple of 5");
// }

// P-Question-2 
// write a code which can give grades to students according to their scores:
// 80-100,A
// 70-79,B
// 60-69,C
// 50-59,D
// 0-49,F

// let score = 83;
// let grade;
// if (score >= 80 && score <= 100) {
//     grade = "A";
// } else if(score >= 70 && score <= 79){
//     grade = "B";
// } else if(score >= 60 && score <= 69){
//     grade ="C";
// }else if(score >= 50 && score <= 59){
//     grade = "D";
// }else if(score >= 0 && score <= 49){
//     grade = "F";
// }
// console.log("According to your scores, your grade was:" , grade);
