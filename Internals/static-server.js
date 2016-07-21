// Cargar los modulos necesarios
// para crear mi sercidor estatico
var fs= require ('fs'),
    config= require('../config/config.js');
    mime= require('mime');
//Exportar la funcion de Srervidor Estatico
exports.server= function(url, res){
    // Acompletar el static-path
    var filePath= config.STATIC_PATH + url;
    // Verificando si existe o no 
    console.log(">url;"+ url);
    // archivo dentro del servidor 
    fs.exists(filePath, function(exists){
        if(exists){
            // Sirvo el archivo
            fs.readFile(filePath, function(err, content){
                if(err){
                   console.log(`-----Hubo un error  en la lectura del equipo: ${filePath}`);
                    //enviar erros 500
                    res.writeHead(500, {
                        'Content-Type': 'text/html',
                        'server': 'pilgrimsHawks@2.1.2'
                    });
                    res.end("<h1>Error 500: Recuersos Dañado </h1>");
                } else {
                    // configuramos la respuesta 
                    var contentType = mime.lookup(filePath);
                    //armamos respuesta 
                    res.writeHead(200, {
                        'Content-Type': contentType,
                        'Server': 'pilgrimsHawks@2.1.2'
                    });
                    // enviar el archivo 
                    res.end(content);
                }
            });
        } else {
            //mando un codigo 404
            res.writeHead(404, {
                'Content-Type':'text/html',
                'server': 'pilgrimsHawks@2.1.2'
            });
            res.end("<h1>Error 404: Recuersos Dañado </h1>");
        }
    });
  };  
