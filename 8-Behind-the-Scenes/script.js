"use strict";

/*

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear < 1981 || birthYear > 1996) {
      const firstName = "Mack!";
      var millenial = false;

      // Reassigning
      output = "New Output";

      const str = `Oh, you are not a millenial,  ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(4, 7));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Shobhit";
calcAge(2001);

// console.log(age);

*/

// Hoisting and TDZ

/*

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Shobhit";
let job = "SWE";
const year = 2001;

// Functions
console.log(addDecl(4, 5));
// console.log(addExpr(4, 5));
console.log(addArrow);
// console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example:
// console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

// 'this' keyword :

/*

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge(2001);

//
const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1999);

//
const shobhit = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

shobhit.calcAge();

//
const matilda = {
  year: 2011,
};

matilda.calcAge = shobhit.calcAge;
matilda.calcAge();

//
const f = shobhit.calcAge;
// f();

*/

// Regular function vs Arrow functions

const shobhit = {
  firstName: "Shobhit",
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1:

    // const self = this;           // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2:

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

shobhit.greet();
shobhit.calcAge();

// Arguments keyword:

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(4, 8);
addExpr(4, 8, 3, 9);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(6, 8, 3);
