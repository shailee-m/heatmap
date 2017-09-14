var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/d.tsv', function(req, res) {
    res.sendFile(__dirname + '/d.tsv');
});

app.listen(3000)