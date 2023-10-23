/**
 * Validates if the input is a non-negative integer.
 
  @param {string} inputString - The string to validate.
  @returns {boolean} - True if the input is a non-negative integer, false otherwise.
 */
function isNonNegativeInteger(inputString) {
    let errors = []; // Initialize as an empty array to store error messages.

    // Check if input is a valid number. If not, add an error message.
    if (Number(inputString) != inputString) errors.push('Not a number!');

    // Check if the number is non-negative. If not, add an error message.
    if (inputString < 0) errors.push('Negative value!');

    // Check if the number is an integer. If not, add an error message.
    if (parseInt(inputString) != inputString) errors.push('Not an integer!');

    // If there are no error messages, the input is a non-negative integer.
    return (errors.length == 0);
}

// Original string with different attributes
let attributes = "<name>;<age>;<age + 0.5>;<0.5 - age>";

// Split the string into individual pieces
let pieces = attributes.split(";");

// Test each piece with the isNonNegativeInteger function
pieces.forEach(function(item, index) {
    // Output the test result for each piece.
    console.log(`Part ${index}: ${item}, Valid Non-Negative Integer: ${isNonNegativeInteger(item)}`);
});
