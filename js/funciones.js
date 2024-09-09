const toggle = document.getElementById('toggle');
const expandirMas = document.querySelector('.expandir_mas');

toggle.addEventListener('change', function () {
    if (toggle.checked) {
        expandirMas.style.height = expandirMas.scrollHeight + 'px'; // Establece la altura al tamaño total del contenido
    } else {
        expandirMas.style.height = '0'; // Cierra el contenido ocultando su altura
    }
});

$(document).ready(function () {
    $(".video").colorbox({
        iframe: true,
        width: "80%",
        height: "80%",
        opacity: "1"
    });
    $(".gallery").colorbox({
        iframe: true,
        width: "800px",
        scroll: false,
        height: "90%"
    });
    $(".imagenlg").colorbox({
        //        rel: 'group1',
        maxWidth: "80%"
    });
    $(".otros").colorbox({
        iframe: true,
        width: "90%",
        height: "50%"
    });
});

$('.carousel').carousel({
    interval: 2000
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


$('#').tooltip(show)
