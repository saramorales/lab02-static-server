// http
var http= require("http"),
    fs= require('fs'),
    config= require("./config/config.js"),
    colors= require('colors')
    staticServer= require('./Internals/static-server'),
    handlers= require('./internals/handlers');
//Obteniendo las configuraciones
// del modulo de configuracion
// y al puerto que debemos usar en 
// nuestro server.
var PORT= config.PORT;
var IP= config.IP;
if (IP=='127.0.0.1'){
    console.log(">------EJECUTANDO EN MODO LOCAL------");
}
// Crear un servidor basico
var server= http.createServer(function(req, res){
    // Obtener la url
    var url= req.url;
    if(url == "/"){
    //sirve el index
    url = "/index.html";
    }
    // Verificando que la peticion 
    // del cliente se una ruta
    // virtual
    if(typeof(handlers[url]) === 'function'){
        // Si entro aqui, significa que 
        // existe un manejador para la url
        // que se esta solicitando por lo tanto
        // la ejecuto
        handlers[url](req, res)
    }else{
        console.log(`> URL Solicitada: ${url}...`.yellow);
        //sirvo la url con i server estatico 
        staticServer.server(url, res);
    }
});
// Poner a trabajar al server 
server.listen(PORT,IP,function (){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});