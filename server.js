// http
var http= require("http");
var fs= require('fs');
var config= require("./config/config.js");
var staticServer= require('./Internals/static-server');
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
    // Sirvo la url con mi server statico
    staticServer.server(url, res);
});
// Poner a trabajar al server 
server.listen(PORT,IP,function (){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});