/*
let js='amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);


// Values and Variables


console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions


let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// Data Types

let javascriptIsFun= true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year=2001;
console.log(typeof year);

console.log(typeof null);



// let, const, var

let age=23;
age=25;

const birthYear=2001;
// birthYear=1999;

var job='programmer';
job='teacher';

lastName='Yadav';
console.log(lastName);


// Math Operators

const now=2037;

let ageJonas=now-1991;
let ageSarah=now-2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas*2, ageJonas/10, 2**3);


const firstName='Shobhit';
const lastName='Yadav';

console.log(firstName+' '+lastName);


let x=10+5;
x+=10;
x*=4;
x++;
x--;
x--;

console.log(x);

// Comparison Operators : >, <, >=, <=, ==, etc



// Strings and Template Literals

const firstName='Jonas';
const job='teacher';
const birthYear=1991;
const currentYear=2037;

const jonas="I'm "+firstName+', a '+(currentYear-birthYear)+' years old '+job+'!';

console.log(jonas);
const jonasNew=`I'm ${firstName}, a ${currentYear-birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple 
lines`);



// Taking decisions if-else statement

const age=16;

if(age>=18){
    console.log('Sarah can start driving !');
} else {
    const yearsLeft=18-age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear=2015;
let century;

if(birthYear <= 2000){
    century=20;
} else {
    century=21;
}
console.log(century);

*/


/*
// Type Conversion :

const inputYear='1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion :

console.log('I am '+23+' years old');
console.log('23'-'10'-3);
console.log('23' / '2');

let n='1' + 1;
n=n-1;
console.log(n);

*/

// 5 Falsy values: 0, '', undefined, Nan, null

/*

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money=0;

if(money){
    console.log("Don't spend it all ;)")
}else{
    console.log("You should get a job!")
}

let height;
if(height){
    console.log("YAY ! Height is defined !")
} else {
    console.log("Height is undefined !")
}

*/

/*

const age='18';
if(age === 18) console.log("You just became Adult!(strict comaprison)")


if(age == 18){
    console.log("You just became Adult!(loose comparison)")
}

const favourite=prompt("Enter you favourite number:")
console.log(favourite)
console.log(typeof favourite)

if(favourite == 7){   // '12' == 12
    console.log("Cool! 7 is an amazing number")
} else if(favourite === 18){
    console.log("18 is also a cool number")
} else{
    console.log("Number is not 7 or 18")
}

if(favourite !== 46) console.log("Why not 46?")

*/

// Logical operators

/*

const hasDL=true;
const hasGoodVision=true;

console.log(hasDL && hasGoodVision);
console.log(hasDL || hasGoodVision);
console.log(!hasDL);

// const shouldDrive=hasDL && hasGoodVision;
// if(shouldDrive){
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive")
// }

const isTired=false;
console.log(hasDL && hasGoodVision && isTired);

const shouldDrive=hasDL && hasGoodVision && !isTired;
if(shouldDrive){
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive")
}

*/

// Switch case

const day='saturday';

switch(day){
    case 'monday': // day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}