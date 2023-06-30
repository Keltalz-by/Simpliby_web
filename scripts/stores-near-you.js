
const countrySelect = document.querySelector('#country-list');
const citySelect = document.querySelector('#city-list');
const searchButton = document.querySelector('#search-btn');


async function getCountryData(){
    let simplibyCountryData = window.localStorage.getItem('simplibyCountryData');
    if (simplibyCountryData){
        return JSON.parse(simplibyCountryData);
    };

    let response = await fetch('/files/countries.min.json');
    let data = await response.text();
    window.localStorage.setItem('simplibyCountryData', data);
    return JSON.parse(data);
};

function getCountries(countryData){
    // Returns a list of containing the names of countries in the world.
    let countryNames = Object.keys(countryData);
    return countryNames.sort();
};

function getCitiesInCountry(countryData, countryName){
    // Returns a list containing the names of all the cities in the given countryName.
    return countryData[countryName].sort();
};

function updateCountrySelectOptions(countryNames){
    // Updates the selection options for countries
    countryNames.forEach(country => {
        var option = document.createElement('option');
        option.setAttribute('value', country);
        option.innerText = country;
        countrySelect.appendChild(option);
    });
};

function updateCitySelectOptions(cityNames){
    // Updates the select options for cities.;
    citySelect.replaceChildren(null);
    cityNames.forEach(country => {
        var option = document.createElement('option');
        option.setAttribute('value', country);
        option.innerText = country;
        citySelect.appendChild(option);
    });
};

window.addEventListener('load', () => {
    getCountryData().then((data) => {
        let countries = getCountries(data);
        updateCountrySelectOptions(countries);

        let cities = getCitiesInCountry(data, countrySelect.value);
        updateCitySelectOptions(cities);
    });

    countrySelect.addEventListener('change', () => {
        getCountryData().then((data) => {
            let cities = getCitiesInCountry(data, countrySelect.value);
            updateCitySelectOptions(cities);
        });
    });

    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        showInfoPopup();
    });
});

