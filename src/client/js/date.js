// Create a new date instance dynamically with JS
let d = new Date();
let today = d.getTime();
console.log(today);

//Date Countdown Function

function dateCount(e){
    e.preventDefault()

 let travelDate = document.getElementById("date").value;
 let date2 = new Date(travelDate);
 let travelTime = date2.getTime();
 console.log(travelTime);
 
}

export{dateCount}