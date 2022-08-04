// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

// 1. create an array - export
// 2. import array into app.js
// 3. make dom for section 
// 4. make for of loop
// 5. render and append
// 6. add in text content and classlist
// 7. create separate render function 
// 8. update the parameters
// 8. plug function back into the loop 


// List 1

import { cookies } from './cookies-data.js';
import { renderCookieSelection } from './render-cookie.js';

const cookieListEl = document.getElementById('array-one');

for (let cookie of cookies) {
    const cookieSelection = renderCookieSelection(cookie);

    cookieListEl.append(cookieSelection);
}

// List 2

import { lifterProfiles } from './lifterProfiles-data.js';
import { renderLifterProfiles } from './render-lifterProfiles.js';

const lifterProfilesEl = document.getElementById('array-two');

for (let lifterProfile of lifterProfiles) {

    const lifterPro = renderLifterProfiles(lifterProfile);

    lifterProfilesEl.append(lifterPro);
}

// List 3

import { states } from './states-data.js';
import { renderStates } from './render-states.js';

const stateProfilesEl = document.getElementById('array-three');

for (let state of states) {

    const statePro = renderStates(state);

    stateProfilesEl.append(statePro);
    
}

// List 4

import { videoGames } from './videogames-data.js';
import { renderVideoGame } from './render-videogame.js'; 

const videoGamesEl = document.getElementById('array-four');

for (let videoGame of videoGames) {

    const videoGameList = renderVideoGame(videoGame);

    videoGamesEl.append(videoGameList);

    
}
