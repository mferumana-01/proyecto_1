var foto = 0;
var micarrusel = {};
var total = 0;
//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "img/1.jpg", titulo: "Foto #1" }, { imageurl: "img/2.jpg", titulo: "Foto #2" }, { imageurl: "img/3.jpg", titulo: "Foto #3" }];


//funcion que permite cambiar las imagenes (anterior y siguiente)
var cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }
    //instrucciones que apuntan a cada imagen y titulo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}