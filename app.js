/* Imports */
import { fetchCars } from './fetch-utils.js';
import { renderCars } from './render-utils.js';

/* Get DOM Elements */
const carDiv = document.getElementById('cars');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const cars = await fetchCars();
    for (let car of cars) {
        const carsEl = renderCars(car);
        carDiv.append(carsEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
