// Manejadores de rutas virtuales 
var fortune = require("./fortune");
var fechaDeNacimiento = new Date ();
module.exports = {
    "/edad/Sarai":function (req, res){ 
        res.writeHead(200,{
            "Content-Type":"aplication/json"
        });
        //armando el json
        var hoy = new Date ();
        var age= 
        Math.ceil((hoy - fechaDeNacimiento)(1000*3600*24*65))
        var objetoRespuesta ={
            "edad":age
        };
     var jsonResponce = JSON.stringify(ObjetoRespuesta) ;  
     //envio la respouesta aplication
     res.end(jsonResponse);
    },
   "/getfortune":function(req, res){
       console.log(">Se solicita Fortuna...");
        // var fortunePaper = {
           // "mensaje" :
            //"La honestidad es un regalo caro, no lo esperes de gente barata"
        //};
        // Parseando a string el objetoRespuesta
        // de respuesta        
       // var jsonResponse = JSON.stringify(fortunePaper);
       fortune.getFortune(function(fortunePaper){
           // Se configura el encabezado de respuesta
        // HTTP
        res.writeHead(200,{
            "Content-Type" : "application/json" 
       });
        // Respondemos el Objeto
        res.end(jsonResponse);
       });
    }
};