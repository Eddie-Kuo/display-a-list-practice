export function renderLifterProfiles(input) {
    const hTag = document.createElement('h1');
    const pTag = document.createElement('p');
    const divTag = document.createElement('div');

    hTag.textContent = input.style;
    pTag.textContent = input.age;
    divTag.classList.add ('lifter-profile');
    divTag.style.backgroundColor = input.color;

    divTag.append(hTag, pTag);
    return divTag;
}
