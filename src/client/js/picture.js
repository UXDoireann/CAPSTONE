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
   

    if(data.totalHits == 0){
        console.log("default pic");
        document.querySelector('#city_pic').src = "https://pixabay.com/get/gbfdc0e29c4348801cf0dab0ae71484bdcc6fff35750c9551307a971b80cc0d66002ae840dc025cfce063cb8b63b648ac614d784f0c78827505e881388b6d2ae5_640.jpg";
        document.querySelector('#city_pic').style.borderRadius = "15px";
        document.querySelector('#city_pic').style.boxShadow= "10px 20px 30px lightblue";
       
        
    }else{
        document.querySelector('#city_pic').style.borderRadius = "15px";
       document.querySelector('#city_pic').style.boxShadow= "10px 20px 30px lightblue";
        document.querySelector('#city_pic').src=data.hits[0].webformatURL;
        
        console.log(data.hits[0].webformatURL);
        console.log(data);   
    }    
})

}
export {picture}