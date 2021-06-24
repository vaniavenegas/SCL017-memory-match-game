import emotions from '../data/emotions/emotions.js';

//                    IMAGENES NUESTRAS 

  const App = () => {

    let listEmotions = [];
    for(let i=0; i<emotions.items.length; i++){
      listEmotions.push(emotions.items[i], emotions.items[i]);
      
    }
    
    
    //                  BARAJAR CARTAS
    function shuffle(array){
      let lastIndex = array.length-1;
      let value = array.length;
         while(lastIndex > 0){
           let lastValue = array[lastIndex];
           let  randonIndex = Math.floor(Math.random() * 9);
           array[lastIndex] = array[randonIndex];
           array[randonIndex] = lastValue;
           lastIndex = lastIndex-1;
           value = value -1;
         }
           return array;
      }
      
    
     listEmotions = shuffle(listEmotions);
      
     
   
// CREAR LA PÁGINA DEL JUEGO
let secondPage = document.createElement("div");
secondPage.className = "secondPage";

// CREAR INFO
let information = document.createElement("div");
information.className = "information";
//let infTime = document.createElement("div");
//infTime.className = "inf";
//let infoTime = document.createElement("p");
//infoTime.id="infoTime";
//infTime.appendChild(infoTime);
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
//information.appendChild(infTime);

//information.appendChild(infMoving);
secondPage.appendChild(information);


// TABLERO DE JUEGO
    let gameBoard = document.createElement("div");
    gameBoard.className ="game-Board";

    
  
    let cardsFlipped =0;
    let cartaOne ="";
    let cartaTwo ="";
    let cardsFound=0;
    //let tiempo =0;
    let movements=0;
   //let temporizador;
   //let iniciar=0;
  

    let chosenCard =[];
    for (let i=0; i<listEmotions.length; i++){
       let card = document.createElement("div");
       card.id = listEmotions[i].id;
       chosenCard.push(card.id );
       
       card.className ="card";
       let imgFront = document.createElement("img");

       imgFront.id = listEmotions[i].id;
       imgFront.src =  "./images/pregunta.jpg";

       imgFront.className = "img-front";
       //let imgFrontImage = listEmotions[i].image;
       
       card.appendChild(imgFront);
       let chequeo=document.getElementsByClassName("card");
       let imgBack = document.createElement("img");
       card.appendChild(imgBack);

      imgFront.addEventListener("click", (e)=>{
    //     timer();
      card.removeChild(imgBack)
    
        let carN = e.target;
        let imagenId =carN.getAttribute("id");
        let image = listEmotions[i].image;
        
        imgBack.id = imagenId;
         imgBack.setAttribute("class","img-back");
         imgBack.setAttribute("src",image);
        card.appendChild(imgBack);
        
      
     
         if(cardsFlipped<2){
            if(cardsFlipped==0){
              cartaOne = imagenId;
              //IMAGEN.push(imgBack);
             }

           if(cardsFlipped==1){
            cartaTwo = imagenId;
            //IMAGEN.push(imgBack);
           

           } 
         
           card.style.transform="rotateY(180deg)";
           cardsFlipped = cardsFlipped+1;
           if (cardsFlipped==2){

            movements++;
              document.getElementById("infoMoving").innerHTML =movements;
              setTimeout(()=>{
              
                
              
                if(cartaOne==cartaTwo){
                  cardsFound=cardsFound+1;
                  document.getElementById("infoCheck").innerHTML =cardsFound;
                
                 
                   let cardImage =[];
                   let substitutionOne =document.createElement("div");
                   substitutionOne.className ="card-equal";
                    let substitutionTwo =document.createElement("div");
                    substitutionTwo.className ="card-equal";
                    let substitution =[substitutionOne,substitutionTwo];
                    let k=0;

              


                    
                      for (let j = 0; j < chequeo.length; j++){
                        cardImage[j] = chequeo[j].getAttribute("id");
                         if(cardImage[j]==cartaOne){
                            //chequeo[j].setAttribute("style","display:none");
                            gameBoard.replaceChild(substitution[k],chequeo[j]);
                            k=k+1;
                        
                           
                          } 
                      }
                    
                  if(cardsFound==9){
                       // clearInterval(temporizador);
                          alert("Ganaste!!");
                  }
                }
                 for(let cardd of chequeo){
                   cardd.style.transform="";
                   
                   
                   cardsFlipped=0;
                 } 
           },1500); 
        
         }
       

      
       
    }
    
    
//-------------




/*function timer(){
  temporizador = setInterval(() => {
    tiempo++;
    document.getElementById("infoTime").innerHTML = tiempo;
  },1000);
}*/


  
      });
      
      gameBoard.appendChild(card);
     
      
    }
    
    secondPage.appendChild(gameBoard);
    let exitGame = document.createElement("div");
exitGame.className ="information";
let help = document.createElement("div");
help.className="inf";
let home = document.createElement("div");
home.className="inf";
exitGame.appendChild(help);
exitGame.appendChild(home);
secondPage.appendChild(exitGame);



    return secondPage;
    
  }


export default App;
