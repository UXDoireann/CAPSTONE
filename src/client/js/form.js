import fetch from "node-fetch"

// Create a new date instance dynamically with JS
let d = new Date();
let today = d.getTime();
console.log(today);


//HandleSubmit Function
function handleSubmit(event){
    event.preventDefault()

let formText = document.getElementById('city').value;
console.log("Form Submitted")

fetch('http://localhost:5050/addData', {
    method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText})
})
.then(res => res.json())
.then(function(data) {
        const results = document.getElementById('results');
        const country = data.country;
        results.innerHTML=data.country;   
        console.log(data);       
}).then (function() {restApi()
}).then(function(){dateCount()})

}

//Rest Countries API
function restApi(){
console.log("Info Request")
fetch('http://localhost:5050/addRest')
.then(res => res.json())
.then(function(data) {
    document.getElementById('useful').innerHTML="Some useful information for your trip:";
    document.getElementById('country').innerHTML=data[0].name +" ("+data[0].nativeName+")";
    document.getElementById('capital').innerHTML = "Capital: "+data[0].capital;
    document.getElementById('currency').innerHTML ="Currency: "+data[0].currencies[0].symbol+" ("+data[0].currencies[0].name+")";
    document.getElementById('language').innerHTML="Language(s): "+data[0].languages[0].name;
    document.getElementById('callC').innerHTML="International Calling Code: +"+data[0].callingCodes;
    document.getElementById('timeZ').innerHTML="Timezone: "+data[0].timezones;   
        console.log(data);   
       
})
}

//Countdown & WeatherBit API
function dateCount(){
  
    let travelDate = document.getElementById("date").value;
    let date2 = new Date(travelDate);
     let travelTime = date2.getTime();
    console.log(travelTime);

     let differenceInTime = travelTime - today;
     let differenceInDays = differenceInTime/ (1000 * 3600 * 24); 
     console.log(differenceInDays);
     let countD = Math.round(differenceInDays);
    
    fetch('http://localhost:5050/addDate',{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },body:JSON.stringify({countD:countD})
    })
     .then(res=>res.json())
     .then(function(data){
    console.log(data.data);

     if(countD === 0){
     document.getElementById('countdown').innerHTML = "In less than a day, you're on your way!";
 }else if(countD ===1){
         document.getElementById('countdown').innerHTML = "Just one day left to your trip! ";
 }else if(countD>1){
             document.getElementById('countdown').innerHTML = countD+" days left to your departure date! "
}

let days = countD+1;

document.getElementById('weather').innerHTML = data.data[days].weather.description;
console.log(data.data[days].weather.description)
document.getElementById('temp').innerHTML = data.data[days].max_temp + "°C";
console.log(data.data[days].temp);
document.getElementById('icon').innerHTML = `<img src="../media/icons/${data.data[days].weather.icon}.png" alt= "${data.data[days].weather.description}"></img>`
console.log(data.data[days].weather.icon)
     })
     


}

   
       

//Export functions
export {handleSubmit}
export {restApi}
export {dateCount}