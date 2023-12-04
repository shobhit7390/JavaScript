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