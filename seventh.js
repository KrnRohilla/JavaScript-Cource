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

//* Attributes
// Get
// Example
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// Set
// Example
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// Style
// Example
// let div = document.querySelector("div");
// div.style.backgroundColor ="blue";

//* Insert Elements
// Append-Example
// let newBtn = document.querySelector("button");
// console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);

// prepend-Example
// let newBtn = document.querySelector("button");
// console.log(newBtn);
// let div = document.querySelector("div");
// div.prepend(newBtn);

// Before-Example
// let newBtn = document.querySelector("button");
// console.log(newBtn);
// let div = document.querySelector("div");
// div.before(newBtn);

// After-Example
// let newBtn = document.querySelector("button");
// console.log(newBtn);
// let div = document.querySelector("div");
// div.after(newBtn);

//* Delete Elements
// Example
// let para = document.querySelector("p");
// para.remove();

//* Practice-Question
// Question-1
// create a new button element. give it a text "Click me" , background color of red & text color of white
// insert the button as the first element inside the body tag
// let newBtn = document.createElement("button");
// console.log(newBtn);
// newBtn.textContent = "Click me";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color ="white";
// let body = document.querySelector("body");
// body.prepend(newBtn);

// Question-2
// create a <p> tag in html, give it a class & some styling.
// now create a new class in css and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one?
// solve this problem using classList.
// let para = document.querySelector("p");
// para.classList.add("newClass");