'use strict';
/*

let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log("I can drive :D");

// const interface='Audio';
// const private=534;
// const if=23; 

*/

// Functions

/*
function logger(){
    console.log('My name is Shobhit Yadav');
}

logger(11);
logger();
logger();

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice=fruitProcessor(4,0);
console.log(appleJuice);

console.log(fruitProcessor(4,0));

const appleOrangeJuice=fruitProcessor(2,5);
console.log(appleOrangeJuice);

*/

/*

// Function Declaration
function calcAge1(birthYear){
    return 2023-birthYear;
}

const age1=calcAge1(1999);

// Function Expression
const calcAge2=function (birthYear){
    return 2023-birthYear;
}

const age2=calcAge2(1999);
console.log(age1,age2);

*/

// Arrow Functions

/*

const calcAge3=birthYear => 2023-birthYear;
const age3=calcAge3(2001);
console.log(age3);

const yearsUntilRetirement=(birthYear, firstName) => {
    const age=2023-birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(2001, 'Shobhit'));
console.log(yearsUntilRetirement(1999, 'Mack'));

*/

// Function calling function

/*

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const applePieces=cutFruitPieces(apples);
    const orangePieces=cutFruitPieces(oranges);

    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/

// Reviewing Functions

/*
const calcAge = function (birthYear){
    return 2023-birthYear;
}

const yearsUntilRetirement=function (birthYear, firstName) {
    const age=calcAge(birthYear);
    const retirement=65-age;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2001, 'Shobhit'));
console.log(yearsUntilRetirement(1944, 'Mack'));

*/

// Arrays :

/*

const friend1='Kush';
const friend2='Ashish';
const friend3='Harshad';
const friend4='Bihari';

const friends=['Kush','Ashish','Harshad','Bihari'];
console.log(friends);

const y=new Array(1991,1999,2001,2004);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[0]='Ankit';
console.log(friends);

const firstName='Shobhit';
const shobhit=[firstName, 'Yadav', 2023-2001,'SWE',friends];
console.log(shobhit);
console.log(shobhit.length);

// Exercise:

const calcAge=function (birthYear){
    return 2023-birthYear;
}

const years=[1992,1999,2001,2004,2011];

const age1=calcAge(years[1]);
const age2=calcAge(years[2]);
const age3=calcAge(years[3]);

console.log(age1,age2,age3);
const ages=[calcAge(years[1]),calcAge(years[2]),calcAge(years[3]),calcAge(years[years.length-1])];

console.log(ages);

*/

// Array Operation methods:

/*

const friends=['Kush','Ashish','Harshad'];

// Add Elements
const newLength=friends.push('Aman');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop();
const popped=friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  // First remove
console.log(friends);

console.log(friends.indexOf('Ashish'));
console.log(friends.indexOf('Bob'));    // -1

friends.push(22);
console.log(friends.includes('Ashish'));
console.log(friends.includes('Bob'));
console.log(friends.includes('22'));

if(friends.includes('Ashish')){
    console.log("You have a friend named Ashish..!");
}

*/

// Introduction to objects:
/*

const shobhitArray=[
    'Shobhit',
    'Yadav',
    2023-2001,
    'SWE',
    ['Tejesh','Himanshu','Akhand']
];

const shobhit={
    firstName:'Shobhit',
    lastName:'Yadav',
    age:2023-2001,
    job:'SWE',
    friends:['Tejesh','Himanshu','Akhand']
};

console.log(shobhitArray);
console.log(shobhit);

*/


// Dot vs Bracket Notation
/* 

const shobhit={
    firstName:'Shobhit',
    lastName:'Yadav',
    age:2023-2001,
    job:'SWE',
    friends:['Tejesh','Himanshu','Akhand']
};

console.log(shobhit);

console.log(shobhit.firstName);
console.log(shobhit['firstName']);

const nameKey='Name';
console.log(shobhit['first'+nameKey]);
console.log(shobhit['last'+nameKey]);

const interestedIn=prompt("What di you want to know about Shobhit? Choose b/w firstName,lastName,age,job and friends");

if(shobhit[interestedIn]){
    console.log(shobhit[interestedIn]);
} else {
    console.log("Wrong request ! Choose b/w firstName,lastName,age,job and friends");
}

shobhit.location='Delhi,India';
shobhit['email']='shobhit@email.com';
console.log(shobhit);

// Exercise: Do it dynamically
// Shobhit has 3 friends, and his best friend is called Tejesh.

console.log(`${shobhit.firstName} has ${shobhit.friends.length} friends, and his best friend is called ${shobhit.friends[0]}.`);

*/


// Object Methods :
/*

const shobhit={
    firstName:'Shobhit',
    lastName:'Yadav',
    birthYear:2001,
    job:'SWE',
    friends:['Tejesh','Himanshu','Akhand'],
    hasDL:true,

    // calcAge: function (birthYear){
    //     return 2023-birthYear;
    // }

    // calcAge: function (){
    //     // console.log(this);
    //     return 2023 - this.birthYear;
    // }

    calcAge: function (){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDL ? 'a' : 'no'} drivers's license.`; 
    }
};

console.log(shobhit.calcAge());

console.log(shobhit.age);
console.log(shobhit.age);
console.log(shobhit.age);

// Exercise:
// "Shobhit is a 22-year old SWE, and he has a Driver's license"

console.log(shobhit.getSummary());

*/

// For loop


console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");

for(let rep=1;rep<=5;rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
