
//Event Listener for Form Submission
document.getElementById('submit').addEventListener('click', Client.handleSubmit);

//HandleSubmit Function
function handleSubmit(event){
    event.preventDefault()

let formText = document.getElementById('city').nodeValue;
Client.checkForCity(formText)
console.log("Form Submitted")

fetch('http://localhost:5051/test')
.then(res =>{
    return res.json()
})
.then(function(data){
    document.getElementById('results').innerHTML = res.body;
})
}

export {handleSubmit}