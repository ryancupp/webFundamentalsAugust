console.log("page loaded...");

function changeName(elementID){
    let spanElement = document.querySelector("#"+ elementID);

    let newName = spanElement.innerText;

    newName="Britney Lynn"
    spanElement.innerText = newName;

}

function removeDiv(id){
    let elementToRemove = document.querySelector("#"+id);
    elementToRemove.remove();
}

function decreaseReqs(elementID){
    let spanElement = document.querySelector("#"+ elementID);

    let currentCount = spanElement.innerText;

    currentCount--;

    spanElement.innerText = currentCount;

}

function increaseLikes(elementID){
    let spanElement = document.querySelector("#"+ elementID);

    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;

}