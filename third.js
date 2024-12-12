//* For Loop
// Example-1

// for(let i=1; i<=5; i++){
//     console.log("Karan Rohilla");
// }
// console.log("loop has ended");

// Example-2 cal sum of 1 to 5
// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("Loop Has Ended");

//* While Loop
// Example-1
// let i = 1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// } 

//* Do-While Loop
// let i = 20;
// do {
//     console.log("x");
//     i++
// } while (i<=10); 

//* For-of loop
// Example-1
// let str = "karan";
// for (let i of str){
//     console.log("i=",i);
// } 

// Example-2
// let str = "karan";
// let size = 0;
// for (let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size =", size);

//* For-in loop
// Example-1
// let student ={
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };
// for (let i in student){
//     console.log(i);
// }

//* Practice Question-1
// print all even numbers from 0 to 100
// for(let number=0; number<=100; number++){
//     if(number%2 ===0){
//         console.log("number=",number);
//     }
// } 

//* Practice Question-2
//create a game where you start with any random game number. ask the user to keep
//guessing the game number until the user enter correct value?
// let gameNumber = 30;
// let userNumber = prompt("Guess The Game Number :");
// while(userNumber != gameNumber){
//     userNumber = prompt("You Entered Wrong Number. Guess Again :");
// }
// console.log("Congratulations, You Entered The Right Number");