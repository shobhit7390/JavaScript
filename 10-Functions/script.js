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
