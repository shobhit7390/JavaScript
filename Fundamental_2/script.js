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