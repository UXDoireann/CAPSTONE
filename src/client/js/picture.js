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
        document.querySelector('#city_pic').style.borderRadius = "15px";
        document.querySelector('#city_pic').style.boxShadow= "10px 20px 30px lightblue";
        document.querySelector('#city_pic').src = "https://pixabay.com/get/g6453f22984f68e30c20149faf738d8252904018c04cf620263cb206076c77a3bd91f4d362e0ec5edd0403ab87ba9a349_640.jpg";
        
        
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