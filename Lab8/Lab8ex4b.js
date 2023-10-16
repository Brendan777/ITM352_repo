// Define the product quantities array 
let product_quantities = [2, 1, 1, 1, 1];

// array of all products
// corresponds to product_quantities array
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
];

// Iterate through product_quantities and print each element in the table 
document.write("<table>");
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");
for (let i=0; i < product_quantities.length; i++) {

    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>"); //product # 
    document.write("<td>" + product.name + "</td>"); //name
    document.write("<td>" + product.price.toFixed(2) + "</td>")// price
    document.write("<td>" + quantity + "</td>")// quantity
    document.write("<td>" + extended_cost.toFixed(2) + "</td>")// extended cost
    document.write("</tr>");
}

document.write("</table>");

// Create a button to delete the last row for lab 8 task 4.2
// This line creates a new HTML button element and assigns it to the deleteButton variable.
let deleteButton = document.createElement('button');

// Let the text content of the button to "Delete Last Row." This text will be displayed on the button.
deleteButton.textContent = 'Delete Last Row';

// Add a click event listener to the button. When the button is clicked, the deleteLastRow function will be executed.
deleteButton.addEventListener('click', deleteLastRow);

// Append (add) the button to the document's body.
document.body.appendChild(deleteButton);

// Function to handle adding a new row
function addNewRow() {
    let table = document.querySelector('table');
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
    `;
}
// Add a click event listener to the table to trigger the addNewRow function
document.addEventListener('DOMContentLoaded', function() {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});

// Function to delete the last row of the table
function deleteLastRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length; // gives row count for table

    if (rowCount > 1) {
        table.deleteRow(rowCount-1); // deletes the last row
    }
}

