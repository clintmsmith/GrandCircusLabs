// Get Area of Circle
function getAreaOfCircle (radius1) {
    return ((radius1 * Math.PI)**2);
}

let areaCircle = getAreaOfCircle(5);
console.log (areaCircle);

console.log();

// Get Circumference of Circle
function getCircumferenceOfCircle (radius2) {
    return (2 * Math.PI * radius2);
}

let circumference = getCircumferenceOfCircle (5);
console.log (circumference);

console.log();

// Get Area of Square
function getAreaOfSquare (side) {
    return (side * 4);
}

let areaSquare = getAreaOfSquare (5);
console.log (areaSquare);

console.log()

// Get Area of Triangle
function getAreaOfTriangle (base, height) {
    return (0.5 * base * height);
}

let areaTriangle = getAreaOfTriangle (5, 5);
console.log (areaTriangle);