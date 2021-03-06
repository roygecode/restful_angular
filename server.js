const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/AngularApp/dist/AngularApp'));
app.use(bodyParser.json());

require('./server/config/mongoose'); //DATABASE
require('./server/config/routes')(app); //ROUTES

server.listen(8000, ()=>{console.log("Server running succesfully on port 8000.")})