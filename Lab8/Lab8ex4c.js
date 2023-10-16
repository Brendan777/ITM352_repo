// Define the product quantities array 
const product_quantities = [2, 1, 1, 1, 1];

// Array of all products, corresponds to product_quantities array
const products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
];

// Create table and header
let table = document.createElement('table');
table.innerHTML = "<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>";
document.body.appendChild(table); // Append table to the body first

// Iterate through product_quantities and add each element to the table 
for (let i=0; i < product_quantities.length; i++) {
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    // Create a new row for each product 
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${i + 1}</td>
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${quantity}</td>
        <td>${extended_cost.toFixed(2)}</td>
    `;

    // Append rows to the table
    table.appendChild(newRow); 

    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });
    
    newRow.addEventListener('mouseout', function() {
        newRow.style.backgroundColor = '';
    });

    newRow.addEventListener('click', function() {
        document.querySelector('table').deleteRow(newRow.rowIndex);
    });

}

// Create a button to add the last row
let addButton = document.createElement('button');
addButton.textContent = 'Add New Row';
addButton.addEventListener('click', addNewRow); // 
document.body.appendChild(addButton); 

// Function to handle adding a new row
function addNewRow() {
    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
        <td>Blank</td>
    `;

    newRow.addEventListener('mouseover', function () {
        newRow.style.backgroundColor = 'yellow';
    });
    
    newRow.addEventListener('mouseout', function() {
        newRow.style.backgroundColor = '';
    });
    
    newRow.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex);
    });
};

/*
// Function to delete the last row of the table
function deleteClickedRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length; // Get row count for the table

    if (rowCount > 1) {
        table.deleteRow(rowCount-1); // Delete the last row
    }
}
*/