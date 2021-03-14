//Picture function
function picture(event){
    event.preventDefault()

let formText = document.getElementById('city').value;
console.log("Picture Request")

fetch('http://localhost:5050/addPic', {
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
        document.querySelector('#city_pic').src=data.hits[0].webformatURL;
        console.log(data.hits[0].webformatURL);
        console.log(data);       
})
}

export {picture}