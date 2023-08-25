/*
Coding Challenge 1 :


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.



// Solution : 

// const massMark=78;
// const heightMark=1.69;
// const massJohn=92;
// const heightJohn=1.95;

const massMark=95;
const heightMark=1.88;
const massJohn=85;
const heightJohn=1.76;

let bmiMark=(massMark/heightMark**2);
let bmiJohn=(massJohn/heightJohn**2);

let markHigherBMI=bmiMark > bmiJohn;

console.log(bmiMark , bmiJohn);
console.log(markHigherBMI);

*/


/*
Coding Challenge 2 :

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*/

// Solution :

const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;

// const massMark=95;
// const heightMark=1.88;
// const massJohn=85;
// const heightJohn=1.76;

const bmiMark=(massMark/heightMark**2);
const bmiJohn=(massJohn/heightJohn**2);

console.log(bmiMark , bmiJohn);

if(bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}

