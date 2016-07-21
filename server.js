//http
var http = require("http"),
fs = require('fs'),
config = require("./config/config.js"),
staticServer = require ('./internals/static-server'),
colors = require ('colors'),
handlers = require ('./internals/handlers.js');
//obteniendo las configuraciones
// del modulo de configuraciones
var PORT = config.PORT;
var IP = config.IP;
if(IP=='127.0.0.1');{
    console.log("-------ejecutando en modo local-----");
}

var server = http.createServer(function (req,res){
//obtener la url del archivo 
var url = req.url;
if (url =="/"){
    //sirve el index
    url = "/index.html";
}
if (typeof(handlers[url])===' function'){
    //si entro aqui significa que 
    //que ay un manejador para la url 
    // que se esta solicitando por lo tanto 
    //la ejecuto 
    handlers[url](req, res)

}else{
console.log(` > URL SOLICITADA: ${url}...........`.yellow);

//sirvo la url con i server estatico 
staticServer.server(url, res);
}
});
//poner a trabajar al a servidor 
server.listen(PORT,IP,function () {
    console.log(`> Server listening http://${IP}:${PORT}...`);
});