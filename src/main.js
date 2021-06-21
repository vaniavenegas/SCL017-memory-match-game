import App from './components/App.js';

document.getElementById('root').appendChild(App()); //referencia al nodo de html
// El método appendChild() inserta un nuevo nodo dentro de la estructura DOM

window.addEventListener("load", inicio);

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;