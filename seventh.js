//* DOM (Document Object Model)
// DOM is a tree-like data structure that represents the structure of an HTML document.
// It is used to interact with the HTML document and its elements.
// Selecting With ID
// Example

// let heading = document.getElementById("heading");
// console.dir(heading);

// Selecting With CLASS
// Example
// let headings = document.getElementsByClassName("heading2");
// console.dir(headings);

// Selecting With TAG
// Example
// let paragraphs = document.getElementsByTagName("p");
// console.dir(paragraphs);

// Query Selector
// Example
// let firstElements = document.querySelector("p");
// console.dir(firstElements);

// Example
// let allElements = document.querySelectorAll("p");
// console.dir(allElements);

//* Practice-Question
// Question-1
// create a H2 heading element with text- "Hello javaScript". append "from apna college students"
// to this text using js.
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from Apna college students";

// Question-2
// Create 3 divs with common class name -"box". access them & add some unique text to each of 
// them.
// let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "Unique Value X";
// divs[1].innerText = "Unique value Y";
// divs[2].innerText = "Unique value Z";

