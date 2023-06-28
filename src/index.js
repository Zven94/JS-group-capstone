import './style.css';
import loadArtWorks from './modules/displayCards.js';
import { loadLikes, sendLike } from './modules/involvement-api';

window.addEventListener('DOMContentLoaded', loadArtWorks);
window.addEventListener('DOMContentLoaded', loadLikes);
// window.addEventListener('DOMContentLoaded', sendLike(1));
