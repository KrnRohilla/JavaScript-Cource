//*Array
// how to create an array
// Example-1
// let heroes = ["ironman","hulk","thor","batman"];
// console.log(heroes);

// let marks = [50,62,74,86,98,100,];
// console.log(marks);

// let info = ["rahul",8,"delhi"];
// console.log(info);
// console.log(info.length);

// array indices
// Example
// let marks = [44,55,66,77,88,99];
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[2]);
// console.log(marks[4]);
// console.log(marks[5]);

// for change any value in array 
// marks[0]=22;

//*Looping over an array
// Example:- print all elements of an array
// Using for loop 
// let marks = [20,33,42,57,78,102];
// for(let idx=0; idx<marks.length; idx++){
//     console.log(marks[idx]);
// }

// Using for of loop
// let marks = [20,33,42,57,78,102];
// for(let mark of marks){
//     console.log(mark);
// }

//*Practice-Question
// Q-1 
// for a given array with marks of students ->[85,97,44,37,76,60]
// find the average marks of the entire class.
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let mark of marks){
//     sum += mark;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// Q-2
// for a given array with prices of 5 items ->[250,645,300,900,50]
// all items have an offer of 10% off on them. change the array to store final price after applying offer.
// let price = [250,645,300,900,50];
// for(let p=0; p<price.length; p++){
//     let offer = price[p] /10;
//     price[p] -=offer;
// }
// console.log(price);

//*Array methods
// push in array
// Example-1 
// let foodItems = ["apple","potato","litchi","tomato"];
// console.log(foodItems);
// foodItems.push("banana","paneer");
// console.log(foodItems);

// pop in array
// Example
// let foodItems = ["apple","potato","litchi","tomato"];
// console.log(foodItems);
// foodItems.pop("");
// console.log(foodItems);

// toString in array
// Example
// let foodItems = ["apple","potato","litchi","tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());

// concat in array
// Example
// let foodItems = ["apple","potato","litchi","tomato"];
// console.log(foodItems);
// let marks = [33,88,44,56];
// console.log(marks);
// console.log(foodItems.concat(marks));

// unShift in array
// Example
// let marks = [20,34,56,79,87];
// console.log(marks);
// let newValue = marks.unshift(12);
// console.log(newValue);

// shift in array
// Example
// let marks = [20,34,56,65,79,87];
// console.log(marks);
// console.log(marks.shift(20));

// slice in array
// Example
// let marvelHeroes  = ["thor","spiderman","ironman","hulk","antman"];
// console.log(marvelHeroes);
// let newValue = marvelHeroes.slice(1,3);
// console.log(newValue);

// splice in array
// Example
//  let marks  = [2,4,6,8,10,12,14];
//  console.log(marks);
//  let newValue = marks.splice(1,2,22,44);
//  console.log(newValue);

//* Practice-Question
// Question-1
// create an array to store companies-> "Bloomberg","microsoft","Uber","Google","Ibm","Netflix"
// (A) Remove the first company from the array
// (B) Remove Uber & Add Ola in its place
// (C) Add Amazon at the end
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// (A) Remove the first company from the array
// companies.shift();
// console.log(companies);
// (B) Remove Uber & Add Ola in its place
// companies.splice(1,1,"Ola");
// console.log(companies);
// (C) Add Amazon at the end
// companies.push("Amazon");
// console.log(companies);