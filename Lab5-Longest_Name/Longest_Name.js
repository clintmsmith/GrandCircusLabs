let name1 = "Ada Lovelace";
let name2 = "Charles Johnson";
let name3 = "Brendan Pewds";

let name1Length = name1.length;
let name2Length = name2.length;
let name3Length = name3.length;

console.log (name1);
console.log (name1Length);
console.log (name2);
console.log (name2Length);
console.log (name3);
console.log (name3Length);


if (name1Length > name2Length) {
    console.log (`${name1} has the longest name.`);
} else if (name1Length < name2Length) {
    console.log (`${name2} has the longest name.`);
} else if (name1Length === name2Length) {
    console.log (`${name1} and ${name2} tie for the longest name.`);
} else {
    console.log (`None of these apply.`);
}

if        (name1Length > name2Length && name1Length > name3Length) {
    console.log (`${name1} has the longest name.`);
} else if (name2Length > name1Length && name2Length > name3Length) {
    console.log (`${name2} has the longest name.`);
} else if (name3Length > name1Length && name3Length > name2Length) {
    console.log (`${name3} has the longest name.`);
} else if (name1Length === name2Length && name1Length > name3Length) {
    console.log (`${name1} and ${name2} tie for the longest name.`);
} else if (name1Length === name3Length && name1Length > name2Length) {
    console.log (`${name1} and ${name3} tie for the longest name.`);
} else if (name2Length === name3Length && name2Length > name1Length) {
    console.log (`${name2} and ${name3} tie for the longest name.`);
} else if (name1Length === name2Length && name1Length === name3Length) {
    console.log (`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
}