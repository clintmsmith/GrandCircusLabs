//for loop - count from 1 - 10
for (let i = 1; i <= 10; i++) {
    console.log (i);
}

console.log();


//while loop - count from 1 - 10
let a = 0;
while (a < 10){
    a++
    console.log(a);
}

console.log();


//do...while loop - count from 1 - 10
let b = 1;

do {
    console.log(b);
    b++;
}
while (b <= 10);

console.log();


//array with const numbers and use a for...of loop to loop through the array and log all numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x of numbers){
    console.log (x);
}

console.log();


//extended challenge - given any string, use a loop to add padding (extra spaces) to the front of a string to make it ten characters long
//example - given the string "planet" (6 characters), log "    planet"; for the string "headlamp" (8 characters), log "  headlamp"
//this is done with String.prototype.padStart() - found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
function leftPadding(string, targetLength) {
    return string.toString().padStart(targetLength, );
}

const string = ("Cristiana");
console.log(leftPadding(string, 10));


//testing an argument that limits the number of characters in a string
let str = 'Some very long string';
if(str.length > 10) str = str.substring(0,10);
console.log(str);