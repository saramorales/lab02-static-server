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
    // archivo dentro del servidor 
    fs.exists(filePath, function(exists){
        if(exists){
            // Sirvo el archivo
            fs.readFile(filePath, function(err, content){
                if(err){
                    console.log(`>Hubo error en la lectura del archivo: ${filePath}`);
                    // Enviar error 500
                    res.writeHead(500,{
                        'Content-Type': 'text/html',
                        'Server':'PilgrimHawks-Server@2.1.2'
                    });
                    res.end("<h1>Error 500: Recurso dañado</h1>");
                }else{
                    // Configuramos la respuesta
                    var contentType= mime.lookup(filePath);
                    // Armamos Respuesta
                    res.writeHead(200, {
                        'Content-Type': 'contentType',
                        'Server':'PilgrimHawks-Server@2.1.2',
                    });
                    // Enviar el archivo
                    res.end(content);
                }
            });
        }else{
            // Mando un codigo 404
            res.writeHead(404, {
                'Content-Type': 'text/html',
                'Server': 'PilgrimHawks-Server@2.1.2',
             });
             res.end("<h1>404: Recurso no encontrado</h1>");
        }
    });

};