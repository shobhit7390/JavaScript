"use strict";

/*
//////////////////////////
// Default parameters:

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("IND77", 2, 1000);
createBooking("LH123", 2);
createBooking("LH123", 5);
createBooking("LH123", undefined, 990);

*/

/*
//////////////////////////////////////////
// Passing arguments Value vs Reference

const flight = "IND773";
const shobhit = {
  name: "Shobhit Yadav",
  passport: 81670204597,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "IND934";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 81670204597) {
    alert("Checked In");
  } else {
    alert("Wrong Passport!");
  }
};

// checkIn(flight, shobhit);
// console.log(flight);
// console.log(shobhit);

// Is the same doing....
// const flightNum = flight;
// const passenger = shobhit;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() + 10000000000);
};

newPassport(shobhit);
checkIn(flight, shobhit);

*/

/*
///////////////////////////////////////////////
// Functions accepting Callback functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// Js uses callbacks all the time
const high5 = function () {
  console.log("Hi");
};

document.body.addEventListener("click", high5);
["Jonas", "Adam", "Steve"].forEach(high5);
*/

/*
///////////////////////////////////////////////
// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Shobhit");

greet("Hello")("Shobhit");

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Welcome")("Shobhit");

*/

/*
///////////////////////////////////
// The call and apply methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Shobhit Yadav");
lufthansa.book(183, "Pat Smith");
// console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

// Does not work
// book(23, "Sarah");

// The call method :
book.call(eurowings, 23, "Sarah");
console.log(eurowings);

book.call(lufthansa, 111, "Charlie Dean");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "SAL",
  booking: [],
};

book.call(swiss, 98, "John Smith");
console.log(swiss);

// The apply method :
const flightData = [264, "Rohit Sharma"];
book.apply(swiss, flightData);

console.log(swiss);
book.call(swiss, ...flightData);

///////////////////////////
// The bind method :

// book.call(eurowings, 23, "Sarah");
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSAL = book.bind(swiss);

bookEW(18, "Virat Kohli");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Mack");
bookEW23("Marco");

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(5500));

// Challenge: Implementing addVAT using fn returning fn.

const addTaxRate = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

const addVAT2 = addTaxRate(0.23);
addVAT2(5500);
addVAT2(100);

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
/////////////////////////
// Solution :

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    if (typeof answer === "number" && answer < this.answers.length)
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document.querySelector(".poll"),
  addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

*/

/*
/////////////////////////////////////////////////
// Immediately Invoked Function Expressions

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

*/

/*
///////////////////////////////
// Closures :

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

*/

//////////////////////////////
// More Closure Examples

// Example 1 :
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2 :
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
