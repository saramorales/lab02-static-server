// http
var http= require("http");
//obteniendo informacion del entorno
// De ejecucion con respecto al IP
// y al puertoque debemos usar en 
// nuestro server.
var PORT= process.env.PORT || 3000;
var IP= process.env.IP || '127.0.0.1';
if (IP=='127.0.0.1'){
    console.log(">------EJECUTANDO EN MODO LOCAL------");
}
// Crear un servidor basico
var server= http.createServer(function(req, res){
    // Armar la respuesta en http
    // Armar un encabezado http
    res.writeHead(200, {
        "Content-Type": "text/plain", 
        "Server": "ITGAM@4.2.4"
    });
    // Enviamos la respuesta 
    res.write("Hola Sara");
    // Cerrar la conexion 
    res.end();
});
// Poner a trabajar al server 
server.listen(PORT,IP,function (){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
} );