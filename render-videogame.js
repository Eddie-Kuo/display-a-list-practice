export function renderVideoGame(videoGameInput) {
    const titleDiv = document.createElement('div');
    const systemTag = document.createElement('p');
    const genreUl = document.createElement('ul');
    const genreOneLi = document.createElement('li');
    const genreTwoLi = document.createElement('li');
    const genreThreeLi = document.createElement('li');
    const multiplayerTag = document.createElement('p');

    titleDiv.textContent = `Game Title: ${videoGameInput.title}`;
    systemTag.textContent = `System: ${videoGameInput.system}`;
    genreUl.textContent = 'Genre:';
    genreOneLi.textContent = videoGameInput.genre[0];
    genreTwoLi.textContent = videoGameInput.genre[1];
    genreThreeLi.textContent = videoGameInput.genre[2];
    multiplayerTag.textContent = `Multiplayer: ${videoGameInput.multiplayer}`;

    titleDiv.classList.add('video-game');

    genreUl.append(genreOneLi, genreTwoLi, genreThreeLi);
    titleDiv.append(systemTag, genreUl, multiplayerTag);
    return titleDiv;
}