
$(document).ready(function() {

createGrid();

  });

function createGrid() {

  do{$('.cell').remove;
}

while(true == false);

var boxes = prompt("select a grid between 2 - 128?","0");


var x = parseInt(boxes);

  if(x > 128) {

    alert("must be between 1-128");
  }

    else {


    };

    for(elementCount = 0; elementCount < x; elementCount++) {

      $('#container').append('<div class="col"></div>');



    }

    for(columnCount = 0; columnCount < x; columnCount++) {

      $('.col').append('<div class="cell"></div>');

      $(".cell").width(572/x);
      $(".cell").height(572/x);
    }






    $('.cell').mouseenter(function () {
       $(this).addClass('highlight');

   });


};





function doClearButton() {
  $(".cell").removeClass('highlight');

};



function reset() {
  createGrid();

};
