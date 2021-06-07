import { transformFileSync } from '@babel/core';
import App from './components/App.js';

document.getElementById('root').appendChild(App()); //referencia al nodo de html
// El método appendChild() inserta un nuevo nodo dentro de la estructura DOM

