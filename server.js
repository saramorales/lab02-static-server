// http
var http= require("http");
var fs= require('fs');
//obteniendo informacion del entorno
// De ejecucion con respecto al IP
// y al puertoque debemos usar en 
// nuestro server.
var PORT= process.env.PORT || 3000;
var IP= process.env.IP || '192.168.1.41';
if (IP=='192.168.1.41'){
    console.log(">------EJECUTANDO EN MODO LOCAL------");
}
// Crear un servidor basico
var server= http.createServer(function(req, res){
    // Armar la respuesta en http
    // Armar un encabezado http
    res.writeHead(200, {
        "Content-Type": "text/html", 
        "Server": "ITGAM@4.2.4"
    });
    // Lectura del archivo a servir
    fs.readFile('./static./index.html',
    'utf8',function(err, content){
        if(err){
            res.write("<h1>ERROR DE LECTURA</H1>");
        }else{
            res.end(content);
        }
    });
});
// Poner a trabajar al server 
server.listen(PORT,IP,function (){
    console.log(`> Server listening @http://${IP}:${PORT} ...`);
});