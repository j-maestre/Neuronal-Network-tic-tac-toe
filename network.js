 //Red neuronal
 let network = new brain.NeuralNetwork();
 // let net = new brain.LSTMTimeStep();

 //TODO Estoy interpretandolo mal, tengo que devolver un output para cada posible posicion de cada casilla,
 //TODO primero compruebo cual debo eliminar, y luego cual debo añadir
 // tengo que devolver un mapa completo sobre cual quiero eliminar y cual quiero añadir


 //? ACTUALIZACION-> 2 modelos correctos completados
 //TODO ver que coño hacer para elegir cual tengo que borrar
 //TODO quizas tener una segunda red neuronal que se encargue de decidir cual borrar

 network.train([
     //Primera jugada
     {input: {
        casilla0:0,casilla1:0,casilla2:0,
        casilla3:0,casilla4:0,casilla5:0,
        casilla6:0,casilla7:0,casilla8:0},
        
        output:[0,0,0,
                0,0,0,
                1,0,0]
    }, 

        //Delete elimina una casilla previamente seleccionada en el caso de que tengamos 3 seleccionadas
    {input: {
        casilla0:0,casilla1:0,casilla2:0,
        casilla3:0,casilla4:0,casilla5:1,
        casilla6:2,casilla7:0,casilla8:0},
        
        output:[1,0,0,
                0,0,0,
                0,0,0]
        },

    // {input: {
    //     casilla0:2,casilla1:0,casilla2:0,
    //     casilla3:1,casilla4:0,casilla5:1,
    //     casilla6:2,casilla7:0,casilla8:0},
        
    //     output:{delete:0,add:0.2}},

    
    // {input: {
    //     casilla0:2,casilla1:1,casilla2:2,
    //     casilla3:1,casilla4:0,casilla5:1,
    //     casilla6:2,casilla7:0,casilla8:0},
        
    //     output:{delete:0,add:0.4}},
    
    // //Inputs que implican borrar una casilla
    // {input: {
    //     casilla0:2,casilla1:0,casilla2:1,
    //     casilla3:1,casilla4:2,casilla5:1,
    //     casilla6:2,casilla7:0,casilla8:0},
        
    //     output:{delete:0.6,add:0.8}},
    // {input: {
    //     casilla0:2,casilla1:0,casilla2:1,
    //     casilla3:1,casilla4:0,casilla5:2,
    //     casilla6:2,casilla7:0,casilla8:1},
        
    //     output:{delete:0.6,add:0.4}},
    // {input: {
    //     casilla0:1,casilla1:0,casilla2:2,
    //     casilla3:0,casilla4:0,casilla5:1,
    //     casilla6:2,casilla7:1,casilla8:2},
        
    //     output:{delete:0.8,add:0.4}},
    // {input: {
    //     casilla0:2,casilla1:1,casilla2:0,
    //     casilla3:0,casilla4:2,casilla5:0,
    //     casilla6:1,casilla7:2,casilla8:1},
        
    //     output:{delete:0.0,add:0.3}},
    // {input: {
    //     casilla0:1,casilla1:0,casilla2:2,
    //     casilla3:0,casilla4:1,casilla5:1,
    //     casilla6:2,casilla7:0,casilla8:2},
        
    //     output:{delete:0.2,add:0.7}},


 ]);

//  network.train(trainingData,{
//     log: (error) => console.log("NEURAL ERROR ",error),
//     logPeriod: 100
//  });

//  let entrene = document.getElementById("forecast");
//  entrene.onclick = function(){
//      let json = network.toJSON(); //Pasar network a json
//      // net.fromJSON(json);
//      // net.forecast(input, 3);
//      console.log(json);
//  }