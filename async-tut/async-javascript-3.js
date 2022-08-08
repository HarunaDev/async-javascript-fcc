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

// store for keeping items used in making ice-cream
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"]
}

