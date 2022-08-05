// --What is Asynchronous JavaScript?
// It allows you to form a connection between small tasks in order to achieve a final result using Callbacks, Async / Await and Promises 

// --Synchronous Vs Asynchronous  

// --Synchronous 
// Synchronous simply means having blocks of code or functions that run after the previous block of code is executed.


console.log(" I ")

console.log(" eat ")

console.log(" ice cream ")

console.log(" with ")

console.log(" a spoon ")


// in the result you can see that the phrases are printed out serially on the console, from top to bottom, and that is how synchronous javascript works.
// feel free to change the order and see how it'll come out 


// --Asynchronous
// Asynchronous is having separate functions that run individually.

console.log(" I ")

console.log(" eat ")

setTimeout(() => {
  console.log(" ice cream ")
}, 3000)

console.log(" with ")

console.log(" a spoon ")

// in the result you can see that the code runs synchronously, but on line 32 is an asynchronous code and so it waits 3 seconds before executing, it run separately from the other lines of code.

