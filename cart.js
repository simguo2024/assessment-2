///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const cartTotal = 230;
const couponValue = 10;
const tax = 0.05;
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let res = cartTotal * (1 + tax) - couponValue;
    return `${(res).toFixed(2)}`; 
}

console.log(calcFinalPrice(cartTotal, couponValue, tax));

//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    TEXT ANSWER HERE

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

// Here's a concise description of the properties for a Customer object:
// name: Customer's name and the type would be string.
// address: Customer's delivery address and the type would be string.
// zipcode: Customer's zip code and the type would be string or number, depends.
// state: Customer's state and the type would be string.
// phone: Customer's phone number and the type would be string or number.
// orders: Customer's orders, it might be multiple orders so this could be array. In addition, each order can be an object containing details like items, quantities, and prices

class Customer {
    constructor(name, address, zipcode, state, phone) {
        this.name = name;
        this.address = address;
        this.zipcode = zipcode;
        this.state = state;
        this.phone = phone;
        this.orders = [];
    }
    getOrders() {
        return this.orders;
    }
    setOrder(newOrder) {
        this.orders.push(newOrder);
    }
}

// Create a customer object
const customer = new Customer("John Doe", "123 Main St", "12345", "CA", "555-123-4567");
console.log(customer)

customer.setOrder("Order 1");
customer.setOrder("Order 2");
customer.setOrder("Order 3");

// Get the list of orders
console.log(customer.getOrders());
console.log(customer)
