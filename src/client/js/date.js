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

 let differenceInTime = travelTime - today;
 let differenceInDays = differenceInTime/ (1000 * 3600 * 24); 
 console.log(differenceInDays);

 let countD = Math.round(differenceInDays);

 if(countD === 0){
     document.getElementById('countdown').innerHTML = "Your trip starts in a few hours!";
 }else if(countD ===1){
         document.getElementById('countdown').innerHTML = "Just one day left!";
 }else if(countD>1){
             document.getElementById('countdown').innerHTML = countD+" days left to departure date."
         }
     
 
 
}

export{dateCount}