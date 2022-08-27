async function getMoney(){
    console.log("get monay");
    var responseRaw = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    var jsonCoinData = await responseRaw.json();

    let div= document.querySelector("#coin-list");
    div.replaceChildren();

    // console.log(jsonCoinData);

    for( let i=0; i < jsonCoinData.length; i++){

        let currentCoin= jsonCoinData[i];

        let pTag= document.createElement("p");
        pTag.innerText = currentCoin.name + "- $" + currentCoin.current_price;



        div.appendChild(pTag);
    }


}