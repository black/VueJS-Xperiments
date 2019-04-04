const express = require('express'),
    bodyParser = require('body-parser'),
    opn = require('opn'),
    app = express();

app.use(express.static('public'));

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//render view
app.get('/', function(req, res) {
    res.render('index');
});

// start listening the port
app.listen(2222, () => {
    console.log("VueJS Singlefile 2222...");
});
 
opn('http://localhost:2222', {app: ['chrome', '--incognito', '--kiosk']});
 