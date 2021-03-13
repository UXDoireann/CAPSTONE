import fetch from "node-fetch";

// Create a new date instance dynamically with JS
let d = new Date();
let today = d.getTime();
console.log(today);

//POST request 
/*const postDate = async(url = '', data = {}) =>{
    console.log(data);
     const response = await fetch(url, {
         method: 'POST',
         credentials: 'same-origin',
         headers:{
             'Content-Type':'application/json',
         },
         body:JSON.stringify(data),
     });
      
           try{
               const newData = await response.json();
               console.log(newData);
               return newData;
           }catch(error){
               console.log("error", error);
           }
}*/


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
    
    fetch('http://localhost:5050/addDate',{
        method:'POST',
        credentials:'same-origin',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
        },body:JSON.stringify({travelDate:travelDate, countD:countD})
    })
     .then(res=>res.json())
     .then(function(data){
    

     if(countD === 0){
     document.getElementById('countdown').innerHTML = "Your trip starts in a few hours!";
 }else if(countD ===1){
         document.getElementById('countdown').innerHTML = "Just one day left!";
 }else if(countD>1){
             document.getElementById('countdown').innerHTML = countD+" days left to departure date."
         
     
}
     })


}


/*function postDate(){
let travelDate = document.getElementById("date").value; 
let theDate = new Date(travelDate);
console.log(theDate);
postDate('http://localhost:5050/addDate',{travelD: theDate})
}*/

//Export functions
export{dateCount}
//export{postDate}
