import fetch from "node-fetch";

//Rest Countries function
function restApi(event){
    event.preventDefault()

let formText = document.getElementById('city').value;
console.log("Info Request")

fetch('http://localhost:5050/addRest', {
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
    
        
        console.log(data);   
       
})
}

export {restApi}