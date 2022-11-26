const resultContain = document.getElementById(`results`);

function getBrews(){
    axios.request({
        url: "https://api.openbrewerydb.org/breweries/random",
        method: "GET"
    }).then(brewSuccess).catch(brewFail);
}

function brewFail(error){
    resultContain.insertAdjacentHTML(`beforeend`, `<h1>There was an error!</h1>`)
    console.log(error);
}

function brewSuccess(response){
    let brewLocate = response.data[0];
    resultContain.innerHTML = `<h1>${brewLocate.name}</h1>`; // Can use innerHTML to remove previous result.
    resultContain.innerHTML += `<h4>${brewLocate.street}</h4>`;
    console.log(response);
}






function getCrypto(){
    axios.request({
        url: "https://api2.binance.com/api/v3/ticker/24hr"
    }).then(cryptoSuccess).catch(cryptoFail);
}

function cryptoFail(error){
    resultContain.insertAdjacentHTML(`beforeend`, `<h1>Crypto had an error!</h1>`)
    console.log(error);
}

function cryptoSuccess(response){
    let rates = response.data;
    for (let crypto of rates){
        resultContain.insertAdjacentHTML(`beforeend`, `<p>${crypto.symbol}: $${crypto.lastPrice}</p>`)
    }
    console.log(response);
}


function clearResults(){
    resultContain.innerHTML = "";
}


document.getElementById(`brewButton`).addEventListener(`click`, getBrews);
document.getElementById(`getCrypto`).addEventListener(`click`, getCrypto);
document.getElementById(`clearResults`).addEventListener(`click`, clearResults);
