export function renderCookieSelection(selection) {
    const pTag = document.createElement('p');
    pTag.textContent = selection;
    pTag.classList.add('cookie-type');
    return pTag;
}