let express = require('express');
let app = express();

app.get('/test', function (req, res) {
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
});


app.all('*', function (req, res) {
    res.send(req.method + ' to path ' + req.path);
    console.log(request.method +' to path '+ request.path);
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an arrow function here for the callback
