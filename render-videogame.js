export function renderVideoGame(videoGameInput) {
    const titleDiv = document.createElement('div');
    const systemTag = document.createElement('p');
    const multiplayerTag = document.createElement('p');

    const genreEl = renderGenre(videoGameInput);

    titleDiv.textContent = `Game Title: ${videoGameInput.title}`;
    systemTag.textContent = `System: ${videoGameInput.system}`;
    multiplayerTag.textContent = `Multiplayer: ${videoGameInput.multiplayer}`;

    titleDiv.classList.add('video-game');

    titleDiv.append(systemTag, genreEl, multiplayerTag);
    return titleDiv;
}

export function renderGenre(genreList) {
    const genreUl = document.createElement('ul');
    const genreOneLi = document.createElement('li');
    const genreTwoLi = document.createElement('li');
    const genreThreeLi = document.createElement('li');

    genreUl.textContent = 'Genre:';
    genreOneLi.textContent = genreList.genre[0];
    genreTwoLi.textContent = genreList.genre[1];
    genreThreeLi.textContent = genreList.genre[2];

    genreUl.append(genreOneLi, genreTwoLi, genreThreeLi);
    return genreUl;
}
