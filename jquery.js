$(document).ready(function() {


    createGrid();

});


function createGrid() {


    // if('.cell'.length > 0) {
    //
    //   $(.cell).remove()
    //
    // }

    var boxes = prompt("select a grid between 2 - 128?", "0");


    var x = parseInt(boxes);

    if (x > 128) {

        alert("must be between 1-128");
    } else {


    }

    for (elementCount = 0; elementCount < x; elementCount++) {

        $('#container').append('<div class="col"></div>');



    }

    for (columnCount = 0; columnCount < x; columnCount++) {

        $('.col').append('<div class="cell"></div>');

        $(".cell").width(572 / x);
        $(".cell").height(572 / x);
    }







    draw();

}



function draw() {


        $('.cell').mouseenter(function() {
            $(this).addClass('highlight');

        });


}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

    $('.cell').mouseenter(function() {
        $(this).css('background-color', 'color');

    });

}




function clearButton() {
    $(".cell").removeClass('highlight');

}

function removeCell() {
   $('#container').empty()
}


function resetButton() {
    removeCell();
    createGrid();
}
