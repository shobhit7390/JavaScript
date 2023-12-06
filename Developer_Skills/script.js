// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = '23';

const calcAge = birthYear => 2023 - birthYear;

console.log(calcAge(1999));

*/

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
