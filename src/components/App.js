import emotions from '../data/emotions/emotions.js';

//------------------Creando data de imágenes----------------------

  const App = () => {

    let listEmotions = [];
    for(let i=0; i<emotions.items.length; i++){
      listEmotions.push(emotions.items[i], emotions.items[i]);
      
    }
    
    
    //--------------------------------Función para barajear arreglos-----------------------
    function shuffle(array){
      let lastIndex = array.length-1;
      let value = array.length;
         while(lastIndex > 0){
           let lastValue = array[lastIndex];
           let  randonIndex = Math.floor(Math.random() * value);
           array[lastIndex] = array[randonIndex];
           array[randonIndex] = lastValue;
           lastIndex = lastIndex-1;
           value = value -1;
         }
           return array;
      }
      //-----------------------------------------------------------------------------------------
    
      listEmotions = shuffle(listEmotions);
      console.log(listEmotions);
     
     
//------Información de la jugada-----//
let blockTwo = document.createElement("div");
blockTwo.className = "blockTwo";
let information = document.createElement("div");
information.className = "information";
let infTime = document.createElement("div");
infTime.className = "inf";
let infoTime = document.createElement("p");
infoTime.id="infoTime";
infTime.appendChild(infoTime);
//___________________________________
let dadinfCheck = document.createElement("div");
dadinfCheck.className="dadinfCheck";

let iconCheck = document.createElement("span");
iconCheck.className="fas fa-check";
let infCheck = document.createElement("span");
infCheck.className = "infCheck";
infCheck.id = "infoCheck";
let textCheck =document.createTextNode("Cartas encontradas:0");
infCheck.appendChild(textCheck);

dadinfCheck.appendChild(iconCheck);
dadinfCheck.appendChild(infCheck);
information.appendChild(dadinfCheck);

//______________________________
//_______________________________
let dadinfMoving = document.createElement("div");
dadinfMoving.className="dad";

let  iconMoving =document.createElement("i");
iconMoving.className = "fas fa-magic";

let infMoving = document.createElement("div");
infMoving.className = "infoMoving";
let infoMoving = document.createElement("p");
infoMoving.id="infoMoving";
infMoving.appendChild(infoMoving);

dadinfMoving.appendChild(iconMoving);
dadinfMoving.appendChild(infMoving);
information.appendChild(dadinfMoving);
//____________________________
information.appendChild(infTime);

//information.appendChild(infMoving);
blockTwo.appendChild(information);


//------tablero de juego------//
    let gameBoard = document.createElement("div");
    gameBoard.className ="game-Board";
    //-------------------Función temporizador----------------------
    
   

    //---------------Nuevas variables------------------
    let cartasVoltedas =0;
    let cartaOne ="";
    let cartaTwo ="";
    let cartasEncontradas=0;
    let tiempo =0;
    let intentos=0;
   let temporizador;
   //let iniciar=0;
    //-----------------------------------------------
    let cartaElegida =[];
    for (let i=0; i<listEmotions.length; i++){
       let card = document.createElement("div");
       card.id = listEmotions[i].id;
       cartaElegida.push(card.id );
       
       card.className ="card";
       let imgFront = document.createElement("img");

       imgFront.id = listEmotions[i].id;
       imgFront.src =  "./assets/images/card.jpg";

       imgFront.className = "img-front";
       //let imgFrontImage = listEmotions[i].image;
       
       card.appendChild(imgFront);
       let chequeo=document.getElementsByClassName("card");
      imgFront.addEventListener("click", (e)=>{
         timer();
        // let IMAGEN =[];
        let carN = e.target;
        let imagenId =carN.getAttribute("id");
        let image = listEmotions[i].image;
        let imgBack = document.createElement("img");
        imgBack.id = imagenId;
         imgBack.setAttribute("class","img-back");
         imgBack.setAttribute("src",image);
         card.appendChild(imgBack)
         if(cartasVoltedas<2){
            if(cartasVoltedas==0){
              cartaOne = imagenId;
              //IMAGEN.push(imgBack);
             }
           if(cartasVoltedas==1){
            cartaTwo = imagenId;
            //IMAGEN.push(imgBack);
           }
           card.style.transform="rotateY(180deg)";
           cartasVoltedas = cartasVoltedas+1;
           if (cartasVoltedas==2){

              intentos++;
              document.getElementById("infoMoving").innerHTML =intentos;
              setTimeout(()=>{
              
                
              
                if(cartaOne==cartaTwo){
                  cartasEncontradas=cartasEncontradas+1;
                  document.getElementById("infoCheck").innerHTML =cartasEncontradas;
                 
                   let imagencarta =[];
                   let reemplazoOne =document.createElement("div");
                    reemplazoOne.className ="card-equal";
                    let reemplazoTwo =document.createElement("div");
                    reemplazoTwo.className ="card-equal";
                    let reemplazo =[reemplazoOne,reemplazoTwo];
                    let k=0;
                      for (let j = 0; j < chequeo.length; j++){
                         imagencarta[j] = chequeo[j].getAttribute("id");
                         if(imagencarta[j]==cartaOne){
                            //chequeo[j].setAttribute("style","display:none");
                            gameBoard.replaceChild(reemplazo[k],chequeo[j]);
                            k=k+1;
                          
                            
                          }
                      }
                      
                  if(cartasEncontradas==9){
                        clearInterval(temporizador);
                          alert("Ganaste!!");
                  }
                }
                 for(let cardd of chequeo){
                   cardd.style.transform="";
                   
                  
                   
                 cartasVoltedas=0;
                 }
           },1500);
          
         }
       
         
     

     
      
       
        // card.removeChild(imgBack); 

    }
    
    
//-------------------Salida de juego----------------------------//




function timer(){
  temporizador = setInterval(() => {
    tiempo++;
    document.getElementById("infoTime").innerHTML = tiempo;
  },1000);
}


  
      });
      gameBoard.appendChild(card);
    }
    blockTwo.appendChild(gameBoard);
    let exitGame = document.createElement("div");
exitGame.className ="information";
let help = document.createElement("div");
help.className="inf";
let home = document.createElement("div");
home.className="inf";
exitGame.appendChild(help);
exitGame.appendChild(home);
blockTwo.appendChild(exitGame);
    return blockTwo;
  }


export default App;
