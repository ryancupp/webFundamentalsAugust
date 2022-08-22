console.log("wattup");

function petDog(){
    alert("You pet this puppy")
}

function toggleLogin(loginBtn){
    if(loginBtn.innerText === "Login"){
        loginBtn.innerText = "Logout"
    }
    else{
        loginBtn.innerText = "Login"
    }
}

function removeBtn(upload){
    upload.remove();
}

function playVideo(vid){
    vid.play();
}

function pauseVideo(vid){
    vid.pause();
}

function switchImage(imgElement){
    imgElement.src= "./resources/anothaPuppy.jpeg"
}

function removeCookieBox(id){
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}

function increaseLikes(elementID){
    let spanElement = document.querySelector("#"+ elementID);

    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;

}