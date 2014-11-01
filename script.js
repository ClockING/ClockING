// Hay que recordar la importancia de comenzar
// a ejecutar javascript cuando termine de cargar
// la página para evitar inconscistencias.
$(document).ready(function() {
  var menu = $('#menu');
  var contenedor = $('#menu-contenedor');
  var menu_offset = menu.offset();
  // Cada vez que se haga scroll en la página
  // haremos un chequeo del estado del menú
  // y lo vamos a alternar entre 'fixed' y 'static'.
  $(window).on('scroll', function() {
    if($(window).scrollTop() > menu_offset.top) {
      menu.addClass('fixed', {duration:500});
    } else {
      menu.removeClass('fixed', {duration:500});
    }
  });
});