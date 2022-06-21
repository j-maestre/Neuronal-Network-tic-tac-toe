 //Red neuronal
 let network = new brain.NeuralNetwork();
 // let net = new brain.LSTMTimeStep();

 //Texto en blanco fondo negro y al reves
 network.train([
     //Fondo negro, salida blanco
     {input: {rojo:0,verde:0,azul:0}, output:{color:1}},
     //Fondo blanco, salida negro
     {input: {rojo:1,verde:1,azul:1}, output:{color:0}},
    
     {input: {rojo:0,verde:1,azul:0}, output:{color:0}}
 ]);

 let entrene = document.getElementById("forecast");
 entrene.onclick = function(){
     let json = network.toJSON(); //Pasar network a json
     // net.fromJSON(json);
     // net.forecast(input, 3);
     console.log(json);
 }