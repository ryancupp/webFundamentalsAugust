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
    console.log(imgElement.src)
    if(imgElement.src === "http://127.0.0.1:5500/03-week3/puppyGram/resources/beagle.jpeg"){
        imgElement.src = "./resources/anothaPuppy.jpeg";
    }else{
        imgElement.src = "./resources/beagle.jpeg"
    }
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

function searchPuppy(){
    let element = document.querySelector("#name-search");
    alert("you searched for "+ element.value);
}

function chzLocation(element){
    // alert("you are searching for a pet in: " + element.value)

    alert(`You are searching for a dog in ${element.value}.`)
}