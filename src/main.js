import App from './components/App.js';

document.getElementById('root').appendChild(App()); //referencia al nodo de html
// El método appendChild() inserta un nuevo nodo dentro de la estructura DOM

window.addEventListener("load", inicio);

function go(){
    document.getElementById("first-page").style.visibility="visible";
    document.getElementById("first-page").style.display="block";
    document.getElementById("second-page").style.visibility="hidden";
    document.getElementById("second-page").style.display="none";
};
function go(){
    document.getElementById("second-page").style.visibility="visible";
    document.getElementById("second-page").style.display="block";
    document.getElementById("first-page").style.visibility="hidden";
    document.getElementById("second-page").style.display="none";
}
