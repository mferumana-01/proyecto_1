$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //efecto equilibrado desplazamiento
        //desactivar el selector a.nav-link ya que el menu NO tiene clase Bootstrap...
        //selector: 'a.nav-link',

        //velocidad de la elasticidad 
        // 2 seg equivale a 2000)  
        speed: 1000,
        //tipos de aceleracion https://easings.net
        easing: 'easeInQuint',
        //easing: ' easyInCubic',
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic', 
    });
});


window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {

    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {

        document.getElementById("flechabtn").style.display = "block";
    } else {

        document.getElementById("flechabtn").style.display = "none";
    }
}