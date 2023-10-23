// Function definition with an added parameter for returning the list of errors
function isNonNegInt(q, returnErrors = false) {
    let errors = []; // assume no errors at first
    if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    // Modified to return either the array of errors or the boolean result based on 'returnErrors'
    return returnErrors ? errors : (errors.length == 0);
}

// The original string
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Splitting the string into parts (pieces)
let pieces = attributes.split(";");

/*
// Commenting out the checkIt function
function checkIt(item, index) {
    console.log(`Part ${index} is ${(isNonNegInt(item) ? 'a' : 'not a')} quantity`);
}
*/

// Use an anonymous function as a callback in the forEach method
pieces.forEach((item, index) => {
    // Paste the code block for checkIt directly inside the {}
    console.log(`Part ${index} is ${(isNonNegInt(item) ? 'a' : 'not a')} quantity`);
});
