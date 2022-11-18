export function renderCars(cars) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const carsEl = document.createElement('ul');

    div.classList.add('cars-card');
    h1.textContent = cars.name;
    h2.textContent = cars.model;
    p.textContent = cars.year;
    for (let color of cars.colors) {
        const carEl = document.createElement('li');
        carEl.textContent = color;
        carsEl.append(carEl);
    }
    div.append(h1, h2, p, carsEl);
    return div;
}

export function renderPlants(plants) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const plantsEl = document.createElement('ul');
    div.classList.add('plants-card');
    h1.textContent = plants.name;
    h2.textContent = plants.family;
    p.textContent = plants.scientific;
    for (let characteristic of plants.characteristics) {
        const plantEl = document.createElement('li');
        plantEl.textContent = characteristic;
        plantsEl.append(plantEl);
    }
    div.append(h1, h2, p, plantsEl);
    return div;
}

export function renderMovies(movies) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const moviesEl = document.createElement('ul');
    div.classList.add('movies-card');
    h1.textContent = movies.name;
    h2.textContent = movies.year;
    p.textContent = movies.director;
    for (let cast of movies.casts) {
        const movieEl = document.createElement('li');
        movieEl.textContent = cast;
        moviesEl.append(movieEl);
    }
    div.append(h1, h2, p, moviesEl);
    return div;
}
export function renderPets(pets) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const petsEl = document.createElement('ul');
    div.classList.add('pets-card');
    h1.textContent = pets.breed;
    h2.textContent = pets.cuteness;
    p.textContent = pets.size;
    for (let pet of pets.color_type) {
        const petEl = document.createElement('li');
        petEl.textContent = pet;
        petsEl.append(petEl);
    }
    div.append(h1, h2, p, petsEl);
    return div;
}
