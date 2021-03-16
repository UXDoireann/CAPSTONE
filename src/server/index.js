

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

//Variables for Pixabay call
let basePixabayUrl = 'http://pixabay.com/api/?key=';
const pixKey = process.env.PIXABAY_KEY;

console.log(`Your Pixabay API key is ${process.env.PIXABAY_KEY}`);

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

//REST Countries fetch
app.get("/addRest", async(req,res)=>{
    const getRest = await fetch(`https://restcountries.eu/rest/v2/name/${projectData.country}`);
    try{
        const data = await getRest.json();
        console.log(data);
        res.send(data);
    }catch(error){
        console.log("error", error);
    }
});

//Pixabay fetch

app.post("/addPic", async(req,res)=>{
    const getPic = await fetch(`${basePixabayUrl}${pixKey}&q=${req.body.formText}&image_type=photo`,{
        method: 'POST'
    });
    try{
        const data = await getPic.json();
        console.log(data);
        res.send(data);
    
   /* if(data.total == 0){

        const getAltPic = await fetch(`${basePixabayUrl}${pixKey}&q=${projectData.country}&image_type=photo`,{
            method:'POST'
        })}
       
            const altData = await getAltPic.json();
            console.log(altData);
            res.send(altData);  */
        
    }catch(error){
        console.log("error", error)
        res.send(error);
    }
})

//WeatherBit fetch

 app.post("/addDate", async(req, res)=>{
    const getWeather = await fetch(`${baseWeatherUrl}lat=${projectData.lat}&lon=${projectData.long}&days=${req.body.countD+2}&key=${apiKey}`,{
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

