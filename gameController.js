let turno = 0; //0-> j1, 1-> maquina
let playerCount = 0; //Total de casillas marcadas 0-3
let gameOver = false;


//CasillaMarcada: 0-> sin marcar, 1-> marcada por player, 2-> marcada por IA
let casillaMarcada0 = 0;
let casillaMarcada1 = 0;
let casillaMarcada2 = 0;
let casillaMarcada3 = 0;
let casillaMarcada4 = 0;
let casillaMarcada5 = 0;
let casillaMarcada6 = 0;
let casillaMarcada7 = 0;
let casillaMarcada8 = 0;

let casilla0 = document.getElementById("casilla0");
let casilla1 = document.getElementById("casilla1");
let casilla2 = document.getElementById("casilla2");
let casilla3 = document.getElementById("casilla3");
let casilla4 = document.getElementById("casilla4");
let casilla5= document.getElementById("casilla5");
let casilla6 = document.getElementById("casilla6");
let casilla7 = document.getElementById("casilla7");
let casilla8 = document.getElementById("casilla8");


function CheckInput(casillaMarcada, casilla, selected){
    // let output = casillaMarcada;
    if(!gameOver && turno== 0){
        let accepted = false;

        if(casillaMarcada == 0 && playerCount<3){
            output = 1;
            casilla.classList.add("playerMark");
            playerCount++;
            turno = 1;
            accepted = true;
            console.log(casillaMarcada)
            switch(selected){
                case(0):casillaMarcada0=1;break;
                case(1):casillaMarcada1=1;break;
                case(2):casillaMarcada2=1;break;
                case(3):casillaMarcada3=1;break;
                case(4):casillaMarcada4=1;break;
                case(5):casillaMarcada5=1;break;
                case(6):casillaMarcada6=1;break;
                case(7):casillaMarcada7=1;break;
                case(8):casillaMarcada8=1;break;
            }
        }else{
            //Primero se desmarca y luego ya que marque
            if(casillaMarcada == 1){
                //Ha pulsado una casilla con una ficha propia
                casilla.classList.remove("playerMark");
                switch(casillaMarcada){
                    case(0):casillaMarcada0=0;break;
                    case(1):casillaMarcada1=0;break;
                    case(2):casillaMarcada2=0;break;
                    case(3):casillaMarcada3=0;break;
                    case(4):casillaMarcada4=0;break;
                    case(5):casillaMarcada5=0;break;
                    case(6):casillaMarcada6=0;break;
                    case(7):casillaMarcada7=0;break;
                    case(8):casillaMarcada8=0;break;
                }
                playerCount--;
                turno = 1;
                // accepted = true;
            }
        }
        
        if(accepted){
        //Recopilar informacion de las casillas para la network
        let input = {
            casilla0: casillaMarcada0,
            casilla1: casillaMarcada1,
            casilla2: casillaMarcada2,
            casilla3: casillaMarcada3,
            casilla4: casillaMarcada4,
            casilla5: casillaMarcada5,
            casilla6: casillaMarcada6,
            casilla7: casillaMarcada7,
            casilla8: casillaMarcada8,
        }
        console.log(input)
        
        // let resultado = network.run(input);
        //Resultado será un array con todas las casillas y sus posiciones
        //?Es asi para que desmarque y marque en la misma jugada
        
        }
    
    }
    // return output;

}

if(turno == 0){
    console.log("Game Over-> ",gameOver);
    casilla0.onclick = function(){
        CheckInput(casillaMarcada0,casilla0,0);
        CheckWin();
    }
    casilla1.onclick = function(){
        CheckInput(casillaMarcada1,casilla1,1);
        CheckWin();
    }
    casilla2.onclick = function(){
        CheckInput(casillaMarcada2,casilla2,2);
        CheckWin();
    }
    casilla3.onclick = function(){
        CheckInput(casillaMarcada3,casilla3,3);
        CheckWin();
    }
    casilla4.onclick = function(){
        CheckInput(casillaMarcada4,casilla4,4);
        CheckWin();
    }
    casilla5.onclick = function(){
        CheckInput(casillaMarcada5,casilla5,5);
        CheckWin();
    }
    casilla6.onclick = function(){
        CheckInput(casillaMarcada6,casilla6,6);
        CheckWin();
    }
    casilla7.onclick = function(){
        CheckInput(casillaMarcada7,casilla7,7);
        CheckWin();
    }
    casilla8.onclick = function(){
        CheckInput(casillaMarcada8,casilla8,8);
        CheckWin();
    }

    
}

function CheckWin(){
    if(!gameOver){

        //*Horizontal
        
        //Horizontal1
        if(casillaMarcada0 == 1 && casillaMarcada1 == 1 && casillaMarcada2 == 1){
            gameOver = true;
            alert("Player1 win");
        }
        //Horizontal2
        if(casillaMarcada3 == 1 && casillaMarcada4 == 1 && casillaMarcada5 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        //Horizontal1
        if(casillaMarcada6 == 1 && casillaMarcada7 == 1 && casillaMarcada8 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        
        
        //*Vertical
        
        //Vertical1
        if(casillaMarcada0 == 1 && casillaMarcada3 == 1 && casillaMarcada6 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        //Vertical2
        if(casillaMarcada1 == 1 && casillaMarcada4 == 1 && casillaMarcada7 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        //Vertical1
        if(casillaMarcada2 == 1 && casillaMarcada5 == 1 && casillaMarcada8 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        
        //*Diagonal
        
        //Diagonal iz to der
        if(casillaMarcada0 == 1 && casillaMarcada4 == 1 && casillaMarcada8 == 1){
            alert("Player1 win");
            gameOver = true;
        }
        //Diagonal der to iz
        if(casillaMarcada2 == 1 && casillaMarcada4 == 1 && casillaMarcada6 == 1){
            alert("Player1 win");
            gameOver = true;
        }
    }
    
}