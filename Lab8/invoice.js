document.addEventListener("DOMContentLoaded", function() {
    //lab 8 part 2.1
    let product_quantities = [2, 1, 1, 1, 1];

    //lab 8 part 2.3
    product_quantities.push(3);
    //alert("the size of the products array is: "+product_quantities.length);
    product_quantities.pop();


    //lab8 part 2.2
   //alert("the size of the products array is: "+product_quantities.length);
   
    // Product data
    let item1 = 'sunscreen';
    let quantity1 = product_quantities[0];
    let price1 = 6.23;
    let extended_price_sunscreen = quantity1 * price1;  // Calculate the extended price for sunscreen

    let item2 = 'chips';
    let quantity2 = product_quantities[1];
    let price2 = 2.99;
    let extended_price2 = quantity2 * price2;

    let item3 = 'umbrella';
    let quantity3 = product_quantities[2];
    let price3 = 12.99;
    let extended_price3 = quantity3 * price3;

    let item4 = 'napkins';
    let quantity4 = product_quantities[3];
    let price4 = 3.49;
    let extended_price4 = quantity4 * price4;

    let item5 = 'bug spray';
    let quantity5 = product_quantities[4];
    let price5 = 5.99;
    let extended_price5 = quantity5 * price5;

    // lab 8 part 1.1
    let product1 = {
        itemName: 'iPhone12',
        quantity: product_quantities[0],
        price: 247.95,
    };

    //lab8 1.4
    product1["SKU#"] = 1234;
    delete product1["SKU"]

    //lab 8 part 1.3
    //product1.quantity = 0;

    //lab 8 part 1.2
    let extended_price1 = product1.quantity * product1.price1;

    if (isNaN(extended_price1)) {
        extended_price1 = product1.quantity * product1.price;
    }

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

    // Lab 8 part 1.2 changed item1 to product1
    // Item 1 for iPhone12
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${product1.itemName}`;
    row.insertCell(1).innerHTML = `${product1.quantity}`;
    row.insertCell(2).innerHTML = '$' + `${product1.price.toFixed(2)}`;
    row.insertCell(3).innerHTML = ('$' + `${extended_price1.toFixed(2)}`);

    // Item 1 
    row = table.insertRow();
    row.insertCell(0).innerHTML = `${item1}`;
    row.insertCell(1).innerHTML = `${quantity1}`;
    row.insertCell(2).innerHTML = '$' + `${price1.toFixed(2)}`;
    row.insertCell(3).innerHTML = '$' + `${extended_price_sunscreen.toFixed(2)}`;  // Use the correct extended price

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
