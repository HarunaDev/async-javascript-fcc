// --What is a Callback? 
// A Callback is a function that is nested within another function as an argument

// to understand this practically we can create separate functions and link a connection between each function with an argument *Callback 

// we will build an ice-cream shop app & create a connection between the functions (ice-cream production process) below using Callback.

// -1. Place order, 2000  
// -2. Cut the fruit, 2000 
// -3. Add water and ice, 1000
// -4. Start the machine, 1000
// -5. Select the container, 2000
// -6. Select the topping, 3000
// -7. Serve Ice cream, 2000

// store for keeping items used in making ice-cream
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"]
}

// 1. Place order function
// i- we declare a function that takes two parameters, the name of the fruit and the production function that should run after we get the order
// ii- then within the function block we call the setTimeout function that takes an arrow function as it's first argument and the time set to execute the setTimeout function as the second argument.
let order = (fruit_name, call_production) => {
  setTimeout(() => {
    // we log a message and call the production function 
    console.log(`${stocks.fruits[fruit_name]} Ice cream, was selected`)
    call_production(fruit_name)
  }, 2000)
}

// production function
//i- we declare a function that takes a parameter 
// ii- within that function we call the setTimeout function with another setTimeout function nested within it. 
let production = (fruit_name) => {
  setTimeout(() => {
    console.log(`production has started`)

    setTimeout(() => {
      console.log(`${stocks.fruits[fruit_name]} has been chopped`)
    }, 2000)
  }, 500)
}

// we call the order function and pass in data as it's argument
order(0,production)