import './style.css';
import Logo from './logo.png';
import loadArtWorks from './modules/displayCards.js';

const myLogo = new Image();
myLogo.src = Logo;
const element = document.querySelector('.logo');

element.appendChild(myLogo);
const imgElement = element.querySelector('img');
imgElement.classList.add('myLogo');

window.addEventListener('DOMContentLoaded', loadArtWorks);
