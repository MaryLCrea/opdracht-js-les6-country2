import axios from "axios";
const infoBox = document.getElementById('country-result');
const searchForm = document.getElementById('search-form')
searchForm.addEventListener('submit', searchCountry);

function searchCountry(e) {
    e.preventDefault();
    const queryfield = document.getElementById('query-field');

    fetchCountryDetails(queryfield.value);
    queryfield.value = '';
}
async function fetchCountryDetails(name) {

    infoBox.innerHTML = '';
    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        const country = result.data[0];
        console.log(result.data[0]);

        infoBox.innerHTML = `
        <span>
        <img src="${country.flag}" alt="flag"/>
        <h2>${country.name}</h2>
        </span>
        <p>${country.name} is situated in ${country.subregion}.</p>
        <p>It has a population of ${country.population} people.</p>
         <p>The capital is ${country.capital} ${currencyDescription(country.currencies)}</p>
        `
    } catch (e) {
        console.error(e)
    }
}
    fetchCountryDetails();

    function currencyDescription(currencies) {
        let output = 'and you can pay with ';

        if (currencies.length === 2) {
            return output + `${currencies[0].name}'s. and ${currencies[1].name}'s.`
        }
        return output + `${currencies[0].name}'s.`
    }











