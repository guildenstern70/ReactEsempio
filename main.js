const express = require('express');
const app = express();

app.set('port', 8080);

console.log("Running Node.js App Server [Express.js]");
console.log("Open ");

app.get('/', function(req, res) {
    console.log('Getting page /');
    res.send('<html><body><h2>Hello World</h2></body></html>');
});

const logServerStstus = () => {
    console.log('Running on http://localhost:' + app.get('port'));
}

app.listen(
    app.get('port'), 
    logServerStstus
    );

