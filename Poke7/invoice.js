// Wait for the DOM to be completely loaded before executing the function
document.addEventListener("DOMContentLoaded", function() {

    // Array containing product data with name, quantity, and price properties
    let items = [
        {name: 'sunscreen', quantity: 2, price: 6.23},
        {name: 'chips', quantity: 1, price: 2.99},
        {name: 'umbrella', quantity: 2, price: 12.99},
        {name: 'napkins', quantity: 1, price: 3.49},
        {name: 'bug spray', quantity: 2, price: 5.99}
    ];

    // Initialize the subtotal to 0
    let subtotal = 0;

    // Get the table by its ID
    let table = document.getElementById('invoiceTable');
    
    // Loop through each item to populate the table and calculate the subtotal
    items.forEach(item => {
        // Calculate the extended price for each item
        let extended_price = item.quantity * item.price;

        // Add the extended price of the current item to the subtotal
        subtotal += extended_price;

        // Insert a new row in the table for the current item
        let row = table.insertRow();
        
        // Populate the cells of the row with item details
        row.insertCell(0).innerHTML = item.name;
        row.insertCell(1).innerHTML = item.quantity;
        row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
        row.insertCell(3).innerHTML = '$' + extended_price.toFixed(2);
    });

    // Define the tax rate
    let taxRate = 0.0575;
    // Calculate the tax based on the subtotal and tax rate
    let tax = subtotal * taxRate;

    // Initialize shipping to 0
    let shipping = 0;

    // Determine the shipping cost based on the subtotal
    if (subtotal <= 49.99) {
        shipping = 2;
    } else if (subtotal <= 99.99) {
        shipping = 5;
    } else {
        shipping = 0.05 * subtotal;  // 5% of subtotal for orders above $100
    }

    // Calculate the total cost including subtotal, tax, and shipping
    let total = subtotal + tax + shipping;

    // Update the DOM to display the calculated values
    document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
    document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
    document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
    document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
});
