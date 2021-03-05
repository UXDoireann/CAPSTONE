projectData={};

//Express to run server
const express = require('express');

//Set-up instance of app
const app = express();

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize main project folder
app.use(express.static('dist'));

// Setup Server
const port = 5000;

const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost:${port}`);
};

//Other dependencies
var path = require('path');

//GET request
app.get('/', function (req, res) {
 res.sendFile(path.resolve('src/client/views/index.html'))
 })

 