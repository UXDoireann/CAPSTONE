import fetch from "node-fetch";
import { dateCount } from "./date";


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
})
}

export {handleSubmit}