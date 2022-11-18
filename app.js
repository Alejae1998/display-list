/* Imports */
import { fetchCars, fetchCountry, fetchMovies, fetchPets, fetchPlants } from './fetch-utils.js';
import {
    renderCars,
    renderCountries,
    renderMovies,
    renderPets,
    renderPlants,
} from './render-utils.js';

/* Get DOM Elements */
const carDiv = document.getElementById('cars');
const plantDiv = document.getElementById('plants');
const movieDiv = document.getElementById('movies');
const petsDiv = document.getElementById('pets');
const countryDiv = document.getElementById('countries');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carsEl = renderCars(car);
        carDiv.append(carsEl);
    }
});

window.addEventListener('load', async () => {
    const plants = await fetchPlants();
    for (let plant of plants) {
        const plantsEl = renderPlants(plant);
        plantDiv.append(plantsEl);
    }
});

window.addEventListener('load', async () => {
    const movies = await fetchMovies();
    for (let movie of movies) {
        const movieEl = renderMovies(movie);
        movieDiv.append(movieEl);
    }
});
window.addEventListener('load', async () => {
    const pets = await fetchPets();
    for (let pet of pets) {
        const petsEl = renderPets(pet);
        petsDiv.append(petsEl);
    }
});

window.addEventListener('load', async () => {
    const countries = await fetchCountry();
    for (let country of countries) {
        const countryEl = renderCountries(country);
        countryDiv.append(countryEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
