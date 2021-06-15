//import emotions from "./components/App.js";

document.getElementById("go").addEventListener("click", go, false);
document.getElementById("go2").addEventListener("click", go, false);

function go() {
 document.getElementById("firstPage").style.display="none";
 document.getElementById("secondPage").style.display="block";
}

