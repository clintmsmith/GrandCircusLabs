let name1 = "Ada Lovelace";
let name2 = "Charles Johnson";
let name3 = "Brendan Pewds";

console.log (name1);
console.log (name1.length);
console.log (name2);
console.log (name2.length);
console.log (name3);
console.log (name3.length);


if (name1.length > name2.length) {
    console.log (`${name1} has the longest name.`);
} else if (name1.length < name2.length) {
    console.log (`${name2} has the longest name.`);
} else if (name1.length === name2.length) {
    console.log (`${name1} and ${name2} tie for the longest name.`);
} else {
    console.log (`None of these apply.`);
}

if        (name1.length > name2.length && name1.length > name3.length) {
    console.log (`${name1} has the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log (`${name2} has the longest name.`);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log (`${name3} has the longest name.`);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log (`${name1} and ${name2} tie for the longest name.`);
} else if (name1.length === name3.length && name1.length > name2.length) {
    console.log (`${name1} and ${name3} tie for the longest name.`);
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log (`${name2} and ${name3} tie for the longest name.`);
} else if (name1.length === name2.length && name1.length === name3.length) {
    console.log (`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
}