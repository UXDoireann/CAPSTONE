

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
.then(function(res){
    const country = res.geonames[0].countryName;
    const countryCode = res.geonames[0].countryCode;
    const lat = res.geonames[0].lat;
    const long = res.geonmames[0].lng;
    document.getElementById('results').innerHTML = country;
    console.log(countryName, countryCode, lat, long);
})
}

export {handleSubmit}