//* prototype-This
// Example
// const student = {
//     fullName: "x",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks =", this.marks);
//     },
// };

// Example2
// const employee ={
//     calcTax(){
//         console.log("Tax Rate Is 10%");
//     },
// };

// const randomX ={
//     salary: 60000,
// };

// randomX.__proto__ = employee;

//* Classes in javaScript
// Example
// class BMWcar{
//     start(){
//         console.log("BMW Car Started");
//     }
//     stop(){
//         console.log("BMW Car Stopped");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let xDrive320d = new BMWcar();
// xDrive320d.setBrand("xDrive320d");
// let xDrive320i = new BMWcar();
// xDrive320i.setBrand("xDrive3201");

//* Using Constructor in classes
// Example
// class BMWcar{
//     constructor(brand){
//         console.log("Creating New Object")
//         this.brand = brand;
//     }
//     start(){
//         console.log("BMW Car Started");
//     }
//     stop(){
//         console.log("BMW Car Stopped");
//     }
// }

// let xDrive320d = new BMWcar("2Series");
// let xDrive320i = new BMWcar("7Series");

//* Inheritance In javaScript 
// Example
// class Parent{
//     hello(){
//         console.log("Hello Developers!");
//     }
// }
// class Child extends Parent{}
// let obj = new Child();

//* Method OverRiding
// Example
// class person{
//     work(){
//         console.log("Do Nothing");
//     }
// }
// class developer extends person{
//     work(){
//         console.log("Coding");
//     }
// }
// let obj = new developer();

//* Practice-Question
// Question-1
// You are creating a website for your college. create a class user with 2 properties, name & email
// it also has a method  called viewData() that allows user to view website data.
// class User{
//     constructor(name, email){
//         this.name = "John";
//         this.email = "john@gmail.com";
//     }
//     viewData(){
//         console.log("Name: " + this.name + " Email: " + this.email);
//     }
// } 

// let student = new User();