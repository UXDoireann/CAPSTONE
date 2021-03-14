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
    if(data == null){
        document.querySelector('#city_pic').src = "https://pixabay.com/get/g7839be5011fa03e0b8bea44c1798eff78018d064ed3b4d07da719cf4ff1f945cad1517113b8461417f9f7478e62d8e81_640.jpg"
    }else{
        document.querySelector('#city_pic').src=data.hits[1].webformatURL;
        console.log(data.hits[1].webformatURL);
        console.log(data);   
    }    
})
}

export {picture}