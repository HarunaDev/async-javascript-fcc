// In order to understand A Promise, we must first understand the promise cycle

// first, a 'Promise' is made and in the context of this lesson we 'Promise' our customers ice-cream, because that's the main point of our ice-cream shop. 

// then, 'Pending' this is when the customer walks into our store and goes through our menu but has'nt placed an order yet.

// after the 'Pending' stage we have two stages;
// 'Resolve' & 'Reject'

// let's use this instance to better understand the two stages, when the customer finally place an order of let's say Mango flavour ice-cream, if we have it in store, we make and serve him the ice-cream, which means the order has been 'resolved', if we are out of mangoes we 'reject' the order because mangoes isn't in store. note that both are responses.

// so let's say we have mangoes, we follow the steps we did in the previous lessons but with a '.then' handler for each step instead of using a callBack. but if we don't have mangoes in store we 'reject' the order and the customer gets the message with '.catch' handler 

// after all sales has been done or stocks are finished, we end it with a '.finally' handler because we need to close the shop for customers and employees to leave.

// Breaking the explanation in simple terms, we need to understand 4 things;

// * Relationship between time and work
// * Promise chaining
// * Error Handling
// * The .finally handler

// to better understand this lesson we will use the same ice-cream production process to understand Promise

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
};

// this expression shows that our shop is open
let is_shop_open = false;

// we create an order function that takes 'work' & 'time' as parameters and returns a new promise
let order = (work, time) => {
  // the promise takes in the two stages as an argument 
  return new Promise( (resolve, reject) => {
    
    // check if store is open 
    is_shop_open ? 
    /*if store is open we use a callBack to form relationship between time and work in order to resolve the promise*/ 
    setTimeout( () => resolve( work() ), time) :
    /*if store is closed we call the reject handler*/ 
    reject( console.log(`sorry we are closed`) )
  });
};

// we call the order function and pass in an arrow function & a time as it's arguments
order( () => console.log(`${stocks.fruits[0]} ice-cream was selected`), 2000)

// we chain the promise with '.then()' handler and it takes an arrow function that returns a callBack function

.then( () => {
  // it should always return something, otherwise your code won't work
  return order(() => console.log(`production has started`), 500)
} )

// we can chain as many .then handler as long as there is no character separating them
.then( () => {
  return order( () => console.log(`${stocks.fruits[0]} was chopped`), 2000)
})

.then( () => {
  return order( () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`), 1000)
})

.then( () => {
  return order( () => console.log(`start the machine`), 1000)
} )

.then( () => {
  return order( () => console.log(`${stocks.fruits[0]} ice-cream was poured into a ${stocks.holder[1]}`), 2000)
})

.then( () => {
  return order( () => console.log(`${stocks.toppings[0]} toppings were sprinkled on ${stocks.fruits[0]} ice-cream`), 3000)
})

.then( () => {
  return order( () => console.log(`${stocks.fruits[0]} ice-cream was served to customer`), 2000)
})

// error handling. we call the catch method at the end of our promise chaining to catch en error, for instance if our chop is closed the block of code below will run
// we need to change the is_shop_open variable that we initialized earlier to false

.catch( () => {
  console.log(`customer left`)
})