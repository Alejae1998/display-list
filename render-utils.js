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
