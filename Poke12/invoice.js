function updateInvoice() {
    // Obtain the parameters from the current URL's query string
    const params = new URLSearchParams(window.location.search);

    // Parse the quantities for each product from the URL, defaulting to 0 if not present
    let htcQty = parseInt(params.get('htcQty')) || 0;
    let appleQty = parseInt(params.get('appleQty')) || 0;
    let samsungQty = parseInt(params.get('samsungQty')) || 0;
    let blackberryQty = parseInt(params.get('blackberryQty')) || 0;

    // Create an array of product information based on the parsed quantities
    let products = [
        { itemName: 'HTC', quantity: htcQty, price: 40 },
        { itemName: 'Apple', quantity: appleQty, price: 75 },
        { itemName: 'Samsung', quantity: samsungQty, price: 45 },
        { itemName: 'Blackberry', quantity: blackberryQty, price: 10 }
    ];
    
    // Initialize subtotal variable for calculating the total cost of ordered products
    let subtotal = 0;

    // Obtain the tbody of the invoice table to insert product rows
    let invoiceTableBody = document.getElementById("invoiceTable");
    
    // Clear any existing rows in the table body
    invoiceTableBody.innerHTML = "";

    // Iterate over each product and add a row to the table if its quantity is greater than 0
    for (let product of products) {
        if (product.quantity > 0) {
            let extendedPrice = product.price * product.quantity;
            subtotal += extendedPrice;

            // Create a new table row with product information
            let row = `
                <tr>
                    <td>${product.itemName}</td>
                    <td>${product.quantity}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>$${extendedPrice.toFixed(2)}</td>
                </tr>
            `;

            // Add the row to the invoice table
            invoiceTableBody.innerHTML += row;
        }
    }

    // Calculate tax and total based on the subtotal
    let taxRate = 0.0575; // 5.75% tax rate represented as a decimal
    let tax = subtotal * taxRate;
    let total = subtotal + tax;

    // Update the corresponding cells in the table footer with calculated values
    document.getElementById("subtotal_cell").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("tax_cell").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("total_cell").innerText = `$${total.toFixed(2)}`;
}

// Populate the invoice table with product information immediately upon loading the invoice page
updateInvoice();
