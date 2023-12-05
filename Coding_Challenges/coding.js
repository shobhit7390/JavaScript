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

/*

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

*/

/*
Coding Challenge 3:

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:

§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

*/

// Solution:

/*

const score1_D=96;
const score2_D=108;
const score3_D=89;

const score1_K=88;
const score2_K=91;
const score3_K=110;

const avg_D=(score1_D+score2_D+score3_D)/3;
const avg_K=(score1_K+score2_K+score3_K)/3;


if(avg_D>avg_K && avg_D>=100){
    console.log("Dolphin team is winner with avg score of :", avg_D);
} else if (avg_D<avg_K && avg_K>=100){
    console.log("Koalas team is winner with avg score of :", avg_D);
} else if((avg_D === avg_K) && avg_D>=100 && avg_K>=100){
    console.log("Match is draw");
}else{
    console.log("No result!")
}

*/


// Coding Challenge #4

/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:

Data 1: Test for bill values 275, 40 and 430

Hints:
To calculate 20% of a value, simply multiply it by 20/100 = 0.2
Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

// Solution:

/*

const bill=275;
const tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill+tip}.`);

*/



// Coding Challenge #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time

Test data:

Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

*/

// Solution:

/*

const calcAverage=(a,b,c) => (a+b+c)/3;

let score_D=calcAverage(44,23,71);
let score_K=calcAverage(65,54,49);
console.log(score_D,score_K);

const checkWinner = function(avg_D,avg_K){
    if(avg_D >= 2*avg_K){
        console.log(`Dolphins wins the trophy (${avg_D} vs ${avg_K})`);
    } else if(avg_K >= 2*avg_D) {
        console.log(`Koalas wins the trophy (${avg_K} vs ${avg_D})`);
    } else {
        console.log("No team wins..!");
    }
}

checkWinner(score_D,score_K);
checkWinner(66,488);

*/


// Coding Challenge #6
/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

*/

// Solution:
/*

const calcTip = function (bill){
    if(bill>=50 && bill<=300){
        return bill*0.15;
    } else {
        return bill*0.2;
    }
}

const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);

const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);

*/

// Coding Challenge #7

/*

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

// Solution:

const mark={
    firstName:"Mark Miller",
    mass:78,
    height:1.69,

    calcBMI:function(){
        this.bmi=this.mass/(this.height**2);
        return this.bmi;
    }
};

const john={
    firstName:"John Smith",
    mass:92,
    height:1.95,

    calcBMI:function(){
        this.bmi=this.mass/(this.height**2);
        return this.bmi;
    }
};
 
mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
    console.log(`${mark.firstName}'s BMI(${mark.bmi}) is higher than ${john.firstName}'s BMI(${john.bmi})`);
} else {
    console.log(`${john.firstName}'s BMI(${john.bmi}) is higher than ${mark.firstName}'s BMI(${mark.bmi})`);
}