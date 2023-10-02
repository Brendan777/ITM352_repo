document.addEventListener("DOMContentLoaded", function() {
    // Product data
    let item1 = 'sunscreen';
    let quantity1 = 2;
    let price1 = 6.23;
    let extended_price1 = quantity1 * price1;

    let item2 = 'chips';
    let quantity2 = 1;
    let price2 = 2.99;
    let extended_price2 = quantity2 * price2;

    let item3 = 'umbrella';
    let quantity3 = 2;
    let price3 = 12.99;
    let extended_price3 = quantity3 * price3;

    let item4 = 'napkins';
    let quantity4 = 1;
    let price4 = 3.49;
    let extended_price4 = quantity4 * price4;

    let item5 = 'bug spray';
    let quantity5 = 2;
    let price5 = 5.99;
    let extended_price5 = quantity5 * price5;

    // Calculate subtotal
    let subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

    // Calculate tax (5.75% tax rate)
    let taxRate = 0.0575;
    let tax = subtotal * taxRate;

    // Calculate total
    let total = subtotal + tax;

    // Populate the table rows using DOM
    let table = document.getElementById('invoiceTable');
    let row;

    // Item 1
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item1}`;
    row.insertCell(1).innerHTML = `${quantity1}`;
    row.insertCell(2).innerHTML = '$' + `${price1.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price1.toFixed(2)}`;

    // Item 2
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item2}`;
    row.insertCell(1).innerHTML = `${quantity2}`;
    row.insertCell(2).innerHTML = '$' + `${price2.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price2.toFixed(2)}`;

    // Item 3
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item3}`;
    row.insertCell(1).innerHTML = `${quantity3}`;
    row.insertCell(2).innerHTML = '$' + `${price3.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price3.toFixed(2)}`;

    // Item 4
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item4}`;
    row.insertCell(1).innerHTML = `${quantity4}`;
    row.insertCell(2).innerHTML = '$' + `${price4.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price4.toFixed(2)}`;

    // Item 5
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item5}`;
    row.insertCell(1).innerHTML = `${quantity5}`;
    row.insertCell(2).innerHTML = '$' + `${price5.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price5.toFixed(2)}`;

    //set the subtotal tax and total 
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);
});
