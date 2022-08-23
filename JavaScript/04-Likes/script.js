function increaseLikes(elementID){
    let spanElement = document.querySelector("#"+ elementID);

    let currentCount = spanElement.innerText;

    currentCount++;

    spanElement.innerText = currentCount;

}