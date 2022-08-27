function removeCookieBox(id){
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}

function emptyCart(){
    alert("Your Cart is Empty")
}

function switchImage(imgElement){
    console.log(imgElement.src)
    if(imgElement.src === "http://127.0.0.1:5500/exam/images-3/assets/succulents-1.jpg"){
        imgElement.src = "./images-3/assets/succulents-2.jpg";
    }else{
        imgElement.src = "./images-3/assets/succulents-1.jpg"
    }
}