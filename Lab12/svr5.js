let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
});

let products = require(__dirname + '/products.json');
products.forEach((prod, i) => { prod.total_sold = 0 });

app.get("/products.js", function (request, response, next) {
    response.type('.js');
    let products_str = `let products = ${JSON.stringify(products)};`;
    response.send(products_str);
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    let brand = products[0]['brand'];
    let brand_price = products[0]['price'];
    //response.send(request.body);
    let q = parseInt(request.body['qty_textbox']);
    console.log("the input value is..." + q);
    // increments the number of items sold for the first item in products
    products[0].total_sold += q;

    let validationMessage = validateQuantity(q);

    if (validationMessage === "") {
        response.redirect(`receipt.html?quantity=${q}`);
    } else {
        response.redirect(`order.html?error=${validationMessage}&qtytextbox=${q}`);
    }
});

app.all('*', function (req, res) {
    res.send(req.method + ' to path ' + req.path);
    console.log(req.method + ' to path ' + req.path); // Corrected 'request' to 'req'
});

app.listen(8080, () => console.log(`listening on port 8080`));

function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0 && !Number.isInteger(quantity):
            errorMessage = "Negative inventory and not an Integer. Please enter a non-negative quantity to order.";
            break;
        case quantity < 0:
            errorMessage = "Negative inventory. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Not an Integer. Please enter a non-negative quantity to order.";
            break;
        default:
            errorMessage = ""; // No errors
            break;
    }

    return errorMessage;
}
