//import e from "express";
//import e from "express";
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
        results.innerHTML=data.country;   
        console.log(data);       
}).then (function() {restApi()
}).then(function(){dateCount()})

}


function restApi(){
console.log("Info Request")
fetch('http://localhost:5050/addRest')
.then(res => res.json())
.then(function(data) {
    
        
        console.log(data);   
       
})
}

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
     document.getElementById('countdown').innerHTML = "Your trip starts in a few hours!";
 }else if(countD ===1){
         document.getElementById('countdown').innerHTML = "Just one day left!";
 }else if(countD>1){
             document.getElementById('countdown').innerHTML = countD+" days left to departure date."
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

   
       


export {handleSubmit}
export {restApi}
export {dateCount}