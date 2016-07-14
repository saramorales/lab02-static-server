// Manejadores de rutas virtuales 
var fechadeNacimento = new Date(1987,06,12,30);
module. exports = {
    "/edad/sarai-morales":function(req,res){
        res.writaHead(200,{
            "content-Type":"appcation/json"
        });
        //calculo la edad
        var hoy = new Data();
        var age =
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        //Armando el json
        var objetoResouesta ={
            "edad": 29
        };
        var jsonResponse = 
        JSON.stringify(objetoRespuesta);
        //Envie la respuesta al cliente
        res.end(jsonResponse);

    }
};