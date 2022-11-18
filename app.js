/* Imports */
import { fetchCars, fetchPlants } from './fetch-utils.js';
import { renderCars, renderPlants } from './render-utils.js';

/* Get DOM Elements */
const carDiv = document.getElementById('cars');
const plantDiv = document.getElementById('plants');

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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
