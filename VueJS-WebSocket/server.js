const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.use(express.static('public'));

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//render view
app.get('/', function(req, res) {
    res.render('index');
});

// emit socket data
io.on('connection', function(socket) {
    let sendRandomData1 = () => {
        let random = Math.random();
        socket.emit('randomdata_1', random);
    };

    let sendRandomData2 = () => {
        let random = Math.random();
        socket.emit('randomdata_2', random);
    };

    let sendRandomData3 = () => {
        let random = Math.random();
        socket.emit('randomdata_3', random);
    };

    let sendRandomData4 = () => {
        let random = Math.random();
        socket.emit('randomdata_4', random);
    };

    sendRandomData1();
    sendRandomData2();
    sendRandomData3();
    sendRandomData4();
    setInterval(sendRandomData1, 1);
    setInterval(sendRandomData2, 10);
    setInterval(sendRandomData3, 100);
    setInterval(sendRandomData4, 1000);
});

// start listening the port
http.listen(2020, () => {
    console.log("VueJS+WebSocket 2020...");
});