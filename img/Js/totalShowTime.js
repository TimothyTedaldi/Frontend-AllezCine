import { numberOfSeasons, numberOfEpisodes } from './variables.js';
// Calculate totalShowTime here
// =======================================
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime = (episodeTime + commercialTime)*(numberOfSeasons * numberOfEpisodes);
alert (totalShowTime);
// =======================================
export { totalShowTime };
