const getCountryByName = (countryName) => {

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)

    .then(response => response.json())

    .then(data => {
    
    // let countryName = data[0].name.common
    // let capital = data[0].capital[0]
    // let continent = data[0].continents[0]

    // console.log(countryName);
    // console.log(capital);
    // console.log(continent);
    

    // const newCountryData = document.createElement("div")
    // const currentDiv = document.getElementById("countryName");
    


    // document.body.insertBefore(newCountryData, currentDiv)
    // const newCountryName = document.createTextNode(countryName)
    // const newCapitalName = document.createTextNode(capital)
    // const newContinentName = document.createTextNode(continent)

    // newCountryData.appendChild(newCountryName)
    // newCountryData.appendChild(newCapitalName)
    // newCountryData.appendChild(newContinentName)

    // // const currentDiv = document.getElementById("country1");
    // // document.body.insertBefore(newCountryData, currentDiv)

    // console.log(newCountryData)

    })
}


subButton = document.getElementById("subButton");
subButton.addEventListener("click", printInput());

function printInput() {
    const input = document.getElementById("userInput");
    const value = input.value;
    console.log(value)
  }


