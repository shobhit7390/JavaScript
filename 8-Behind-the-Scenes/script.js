"use strict";

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
