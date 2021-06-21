<<<<<<< HEAD
import App from './components/App.js';



document.getElementById('buttonPlay').addEventListener("click", ()=>{
    document.getElementById("firstPage").style.display = "none";
    
    document.getElementById("container").appendChild(App());
});
=======
//import emotions from "./components/App.js";

document.getElementById("go").addEventListener("click", go, false);
document.getElementById("go2").addEventListener("click", go, false);

function go() {
 document.getElementById("firstPage").style.display="none";
 document.getElementById("secondPage").style.display="block";
}
>>>>>>> 010febad3ce6f4e3fcce9e9daf09f902eb802949

