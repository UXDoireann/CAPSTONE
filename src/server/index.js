

//Express to run server
const express = require('express');

//Set-up instance of app
const app = express();

//Middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Initialize main project folder
app.use(express.static('dist'));

// Setup Server
const port = 5050;

const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost:${port}`);
};

//Other dependencies
var path = require('path');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();


//GET request
app.get('/', function (req, res) {
 res.sendFile('dist/index.html')
 })

 //Variables for GEONAMES call
let baseGeoUrl = 'http://api.geonames.org/searchJSON?q=';
const userName = process.env.GEO_KEY;

console.log(`Your GEONAMES username is ${process.env.GEO_KEY}`);

//Variables for WeatherBit call
let baseWeatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const apiKey = process.env.WEATHER_BIT_API;

console.log(`Your WeatherBit API key is ${process.env.WEATHER_BIT_API}`);

//Object to hold GEONAMES data in
projectData={};

//GEONAMES fetch request
app.post("/addData", async(req, res)=>{
    const getCity = await fetch(`${baseGeoUrl}${req.body.formText}&maxRows=1&username=${userName}`,{
        method: 'POST'
    });
    try{
        const data = await getCity.json();
        projectData['country'] = data.geonames[0].countryName;
        projectData['code'] = data.geonames[0].countryCode;
        projectData['lat'] = data.geonames[0].lat;
        projectData['long'] = data.geonames[0].lng;
       console.log(projectData);
        res.send(projectData);
    }catch(error){
        console.log("error", error);
}

});

//Post Request for date
app.post('/addDate', addDate);

function addDate(req, res){
   let data = req.body;
   newEntry ={
       date: data.travelDate,
       days: data.countD
       }
   Object.assign(projectData, newEntry);
   res.send(projectData);
   console.log(projectData);
    };

 //WeatherBit Fetch 
 app.post("/addWeather", async(req, res)=>{
    const getWeather = await fetch(`${baseWeatherUrl}lat=${projectData.lat}&lon=${projectData.long}&days=${projectData.newEntry.days}&key=${apiKey}`,{
        method: 'POST'
    });
    try{
        const data = await getWeather.json();
        console.log(data);
        res.send(data);
    }catch(error){
        console.log("error", error);
}

});