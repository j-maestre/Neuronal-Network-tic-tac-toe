const MAX_TRYES = 100;

let turno = 1; //0-> j1, 1-> maquina
let playerCount = 0; //Total de casillas marcadas 0-3
let IACount = 0;
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

function IATime(input){
    console.log("-----------Calculando-----------");
    // let remove = Math.ceil((Math.round(resultado.delete*100)/10));
    // let newAdd = Math.ceil((Math.round(resultado.add*100)/10));

    let error = false;
    let totalTryes = 0;


        totalTryes++;
        // console.log("Intentos-> "+totalTryes);
        let resultado = network.run(input);
        console.log(resultado)
        let arr = [];
        arr = resultado;
        //TODO ver que resultado tiene el valor mas alto, ese será el proximo movimiento
        // let remove = Math.round(((resultado.delete + Number.EPSILON) * 100)/10);
        // let newAdd = Math.round(((resultado.add + Number.EPSILON) * 100)/10);
        let remove = 0;
        let newAdd = -1;
        let max = -1;
        for(let i = 0; i < 8; i++){
            if(resultado[i]>max){
                newAdd=i;
                max = resultado[i];
            }
        }
        // console.log("Remove-> "+remove+" NewAdd-> "+newAdd);
        // newAdd = Math.round(((newAdd + Number.EPSILON) * 100)/10);
        console.log("Remove-> "+remove+" NewAdd-> "+newAdd);

        
        if(IACount<3){
            
            //Comprobamos que la casilla que ha marcado la IA no está marcada
            switch(newAdd){
                case(0):
                    if(casillaMarcada0 == 0){
                        console.log("se puede 0");
                        casillaMarcada0=2;
                        casilla0.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(1):
                    if(casillaMarcada1 == 0){
                        console.log("se puede 1");
                        casillaMarcada1=2;
                        casilla1.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(2):
                    if(casillaMarcada2 == 0){
                        console.log("se puede 2");
                        casillaMarcada2=2;
                        casilla2.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(3):
                    if(casillaMarcada3 == 0){
                        console.log("se puede 3");
                        casillaMarcada3=2;
                        casilla3.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(4):
                    if(casillaMarcada4 == 0){
                        console.log("se puede 4");
                        casillaMarcada4=2;
                        casilla4.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(5):
                    if(casillaMarcada5 == 0){
                        console.log("se puede 5");
                        casillaMarcada5=2;
                        casilla5.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(6):
                    if(casillaMarcada6 == 0){
                        console.log("se puede 6");
                        casillaMarcada6=2;
                        casilla6.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(7):
                    if(casillaMarcada7 == 0){
                        console.log("se puede 7");
                        casillaMarcada7=2;
                        casilla7.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    case(8):
                    if(casillaMarcada8 == 0){
                        console.log("se puede 8");
                        casillaMarcada8=2;
                        casilla8.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                break;
                    default:error=true;

            }
            if(error){
            console.log("----------Error----------");
            }else{
                IACount++;
            }
            console.log("Marcando casilla "+newAdd+" total fichas IA-> "+IACount);
            console.log("casilla2-> "+casillaMarcada2);
            CheckWin(2);
        }else{
            //Comprobar la añadida y la eliminada
            
            switch(remove){
                case(0):
                    if(casillaMarcada0 == 2){
                        casillaMarcada0=0;casilla0.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(1):
                    if(casillaMarcada1 == 2){
                        casillaMarcada1=0;casilla1.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(2):
                    if(casillaMarcada2 == 2){
                        casillaMarcada2=0;casilla2.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(3):
                    if(casillaMarcada3 == 2){
                        casillaMarcada3=0;casilla3.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(4):
                    if(casillaMarcada4 == 2){
                        casillaMarcada4=0;casilla4.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(5):
                    if(casillaMarcada5 == 2){
                        casillaMarcada5=0;casilla5.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(6):
                    if(casillaMarcada6 == 2){
                        casillaMarcada6=0;casilla6.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(7):
                    if(casillaMarcada7 == 2){
                        casillaMarcada7=0;casilla7.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                case(8):
                    if(casillaMarcada8 == 2){
                        casillaMarcada8=0;casilla8.classList.remove("IAMark");
                    }else{
                        console.log("No se puede eliminar");
                        error = true;
                    }
                break;
                default:error=true;
                
            }
            //Comprobamos que la casilla que ha marcado la IA no está marcada en caso de que se haya eliminado correctamente
            if(!error){

            
                switch(newAdd){
                    case(0):
                    if(casillaMarcada0 == 0){
                        console.log("se puede 0");
                        casillaMarcada0=2;
                        casilla0.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(1):
                    if(casillaMarcada1 == 0){
                        console.log("se puede 1");
                        casillaMarcada1=2;
                        casilla1.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(2):
                    if(casillaMarcada2 == 0){
                        console.log("se puede 2");
                        casillaMarcada2=2;
                        casilla2.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(3):
                    if(casillaMarcada3 == 0){
                        console.log("se puede 3");
                        casillaMarcada3=2;
                        casilla3.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(4):
                    if(casillaMarcada4 == 0){
                        console.log("se puede 4");
                        casillaMarcada4=2;
                        casilla4.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(5):
                    if(casillaMarcada5 == 0){
                        console.log("se puede 5");
                        casillaMarcada5=2;
                        casilla5.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(6):
                    if(casillaMarcada6 == 0){
                        console.log("se puede 6");
                        casillaMarcada6=2;
                        casilla6.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(7):
                    if(casillaMarcada7 == 0){
                        console.log("se puede 7");
                        casillaMarcada7=2;
                        casilla7.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    case(8):
                    if(casillaMarcada8 == 0){
                        console.log("se puede 8");
                        casillaMarcada8=2;
                        casilla8.classList.add("IAMark");
                    }else{
                        console.log("No se puede");
                        error = true;
                    }
                    default:error=true;

                }
            }
            if(error){
            console.log("----------Error----------");
            }
            CheckWin(2);


        }
    
    turno = 0;
}


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
        IATime(input);
        console.log(input)
        
        // let resultado = network.run(input);
        //Resultado será un array con todas las casillas y sus posiciones
        //?Es asi para que desmarque y marque en la misma jugada
        
        }
    
    }
    // return output;

}


    console.log("Game Over-> ",gameOver);
    casilla0.onclick = function(){
        CheckInput(casillaMarcada0,casilla0,0);
        CheckWin(1);
    }
    casilla1.onclick = function(){
        CheckInput(casillaMarcada1,casilla1,1);
        CheckWin(1);
    }
    casilla2.onclick = function(){
        CheckInput(casillaMarcada2,casilla2,2);
        CheckWin(1);
    }
    casilla3.onclick = function(){
        CheckInput(casillaMarcada3,casilla3,3);
        CheckWin(1);
    }
    casilla4.onclick = function(){
        CheckInput(casillaMarcada4,casilla4,4);
        CheckWin(1);
    }
    casilla5.onclick = function(){
        CheckInput(casillaMarcada5,casilla5,5);
        CheckWin(1);
    }
    casilla6.onclick = function(){
        CheckInput(casillaMarcada6,casilla6,6);
        CheckWin(1);
    }
    casilla7.onclick = function(){
        CheckInput(casillaMarcada7,casilla7,7);
        CheckWin(1);
    }
    casilla8.onclick = function(){
        CheckInput(casillaMarcada8,casilla8,8);
        CheckWin(1);
    }

    
if(turno == 1){
    //! Aqui solo entrará 1 vez
    console.log("TURNO DE LA IA if general");
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
    IATime(input);
}



function CheckWin(player){
    if(!gameOver){

        //*Horizontal
        
        //Horizontal1
        if(casillaMarcada0 == player && casillaMarcada1 == player && casillaMarcada2 == player){
            gameOver = true;
            // player==1?alert("Victoria!"):console.log("Derrota");
        }
        //Horizontal2
        if(casillaMarcada3 == player && casillaMarcada4 == player && casillaMarcada5 == player){
            
            gameOver = true;
        }
        //Horizontal1
        if(casillaMarcada6 == player && casillaMarcada7 == player && casillaMarcada8 == player){
          
            gameOver = true;
        }
        
        
        //*Vertical
        
        //Vertical1
        if(casillaMarcada0 == player && casillaMarcada3 == player && casillaMarcada6 == player){
          
            gameOver = true;
        }
        //Vertical2
        if(casillaMarcada1 == player && casillaMarcada4 == player && casillaMarcada7 == player){
          
            gameOver = true;
        }
        //Vertical1
        if(casillaMarcada2 == player && casillaMarcada5 == player && casillaMarcada8 == player){
            
            gameOver = true;
        }
        
        //*Diagonal
        
        //Diagonal iz to der
        if(casillaMarcada0 == player && casillaMarcada4 == player && casillaMarcada8 == player){
      
            gameOver = true;
        }
        //Diagonal der to iz
        if(casillaMarcada2 == player && casillaMarcada4 == player && casillaMarcada6 == player){

            gameOver = true;
        }
        if(gameOver){
            if(player==1){
                alert("Victoria!");
            }else{
                //Victoria IA
                alert("Derrota");
                
                //Guardar
                const json = network.toJSON();
                console.log("Network entrenada:");
                console.log(json);
                //net.fromJSON(json);
            }
        }
    }

    
}