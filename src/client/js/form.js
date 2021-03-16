import fetch from "node-fetch";


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
})

}


function restApi(){
console.log("Info Request")
fetch('http://localhost:5050/addRest')
.then(res => res.json())
.then(function(data) {
    
        
        console.log(data);   
       
})
}
   
       


export {handleSubmit}
export {restApi}