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
