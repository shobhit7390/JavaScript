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
