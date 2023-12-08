// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2023 - birthYear;

console.log(calcAge(1999));

*/

/*

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let maxi = temps[0];
  let mini = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > maxi) maxi = curTemp;
    if (curTemp < mini) mini = curTemp;
  }
  console.log(maxi, mini);
  return maxi - mini;
};

// calcTempAmplitude([3, 4, 7, 1, 23]);

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now recieve 2 arrays of temps

// Merge 2 arrays then find amplitude

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let maxi = temps[0];
  let mini = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > maxi) maxi = curTemp;
    if (curTemp < mini) mini = curTemp;
  }
  console.log(maxi, mini);
  return maxi - mini;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 7, 1]);
console.log(amplitudeNew);


*/

// Debugging erros

/*

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // FIX
    value: Number(prompt('Degree Celsius:')),
  };

  // FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  //   console.log(temps);

  let maxi = 0;
  let mini = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > maxi) maxi = curTemp;
    if (curTemp < mini) mini = curTemp;
  }
  console.log(maxi, mini);
  return maxi - mini;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 7, 1]);
console.log(amplitudeBug);


*/

// Challenge:
/*

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]

*/

/*

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
}

printForecast([12, 5, -5, 0, 4]);

*/
