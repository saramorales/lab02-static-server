function hola (){
    sweetAlert("World lace",
   "--Bienvenidos a esta pagina--" );
    document.body.style.backgroundColor = "lightseagreen";

}
function changeBkgColor(){
    var color = document.body.styte.backgroundcolor;
    Console.log(">color original" + color)
    if(color == "lightseagreen"){
        color = "honeydew";
    }else{
        color = "lightseagreen";
    }
    console .log(">Cambiando color="+ color);
    ducument.body.style.backgroundcolor = color;
    
}