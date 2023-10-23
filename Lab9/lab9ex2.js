// Continue in lab9ex2.js
//part 2
let name = parts[0];  // '<name>'
let age = parts[1];   // '<age>'
let major = parts[2]; // '<major>'

console.log('Name:', name);
console.log('Age:', age);
console.log('Major:', major);

//part 3
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";
let pieces = attributes.split(";");

// Using typeof to determine the data type of 'pieces'
let typeOfPieces = typeof pieces;

console.log(typeOfPieces);  // This will output: object


//part 3
let recombinedString = pieces.join(",");
