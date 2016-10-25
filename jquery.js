$(document).ready(function() {

  var elementCount = "";

  var columnCount = "";

//   function tableBuilder() {
//
//   if('.column').length < 16 {
//
//
//
//
// }


    for(elementCount = 1; elementCount < 17; elementCount++) {

      $('#container').append('<div class="col"></div>');

    }

    for(columnCount = 1; columnCount < 17; columnCount++) {

      $('.col').append('<div class="cell"></div>');

    }


    $('.cell').mouseenter(function () {
       $(this).addClass('highlight');

   });






});
