export function renderStates(stateInput) {
    const statesEl = document.createElement('div');
    const nameEl = document.createElement('div');
    const detailsEl = document.createElement('div');
    const sizeEl = document.createElement('p');
    const populationEl = document.createElement('p');
    const capitalEl = document.createElement('p');
    const weatherEl = document.createElement('div');

    nameEl.textContent = `STATE: ${stateInput.name}`;
    detailsEl.textContent = 'DETAILS:';
    sizeEl.textContent = `Size: ${stateInput.details.size}`;
    populationEl.textContent = `Population: ${stateInput.details.population}`;
    capitalEl.textContent = `Capital: ${stateInput.details.capital}`;
    weatherEl.textContent = `WEATHER: ${stateInput.weather}`;

    statesEl.classList.add('states');

    
    detailsEl.append(sizeEl, populationEl, capitalEl);
    statesEl.append(nameEl, detailsEl, weatherEl); 
    return statesEl;
}