function ejecutar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}



function ocultar(div, video_id) {
    var video = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}

function ejecutar(div, video_id) {
    var video_2 = document.getElementById(video_id).src;
    //adicionar el autoplay URL
    document.getElementById(video_id).src = video_2 + '&autoplay=1';
    document.getElementById(div).style.display = 'block';
}



function ocultar(div, video_id) {
    var video_2 = document.getElementById(video_id).src;
    //remover el autoplay URL
    var cleaned = video_2.replace('&autoplay=1', '');
    document.getElementById(video_id).src = cleaned;
    document.getElementById(div).style.display = 'none';
}