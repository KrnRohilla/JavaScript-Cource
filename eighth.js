//* Events in JavaScript
// Mouse Events
// Example-1
// let btn1 = document.querySelector(".btn1");
// btn1.onclick = ()=>{
//     console.log("Button is Clicked");
// };

// Example-2
// let box = document.querySelector(".box");
// box.onmouseover = ()=>{
//     console.log("Mouse Over");
// };

//* Event Object
// Example
// let box = document.querySelector(".box"); 
// box.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientX);
//     console.log(e.clientY);
// };

//* Event Listener
// Example
// Add Event Listener
// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click",()=>{
//     console.log("Button is Clicked");
// });

// btn1.addEventListener("click",()=>{
//     console.log("Button is Clicked Again");
// });

// Remove Event Listener
// Example
// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click",()=>{
//     console.log("Button is Clicked");
// });

// const handler2 = ()=>{
//     console.log("Button is Clicked Again");
// };
// btn1.addEventListener("click",handler2);

// btn1.addEventListener("click",()=>{
//     console.log("Button is Clicked Again and Again");
// });

// btn1.removeEventListener("click",handler2);

//* Practice-Question
// Question-1
// Create a toggle button that changes the screen to dark-mode when clicked
// And light-mode when clicked again.
// let modeBtn = document.querySelector(".btn");
// let currentMode = "light";
// let body = document.querySelector("body");
// modeBtn.addEventListener("click",()=>{
//     console.log("You Are Trying To Change The Screen Mode");
//     if(currentMode === "light"){
//         currentMode = "dark";
//         body.classList.add("dark");
//     }else{
//         currentMode = "light";
//         body.classList.add("light");
//     }
//     console.log("Screen Mode Changed To "+currentMode);
// });
