//import App from './components/App.js';

//document.getElementById('root').appendChild(App()); //referencia al nodo de html
// El método appendChild() inserta un nuevo nodo dentro de la estructura DOM

document.getElementById("firstPage").addEventListener("click", firstPage, false);

function firstPage() {
 document.getElementById("firstPage").style.display="none";
 document.getElementById("secondPage").style.display="block";
}
