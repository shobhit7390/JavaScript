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
