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



function draw()

{
    $('.cell').mouseenter(function ()
    {
        if ($('#color :selected').val() === '0')
        {
            $(this).css('opacity', $(this).css('opacity')+1);
            $(this).css('background', 'black');
        }
        else if ($('#color :selected') .val() === '1')
        {
            $(this).css('opacity', $(this).css('opacity')+1);
            $(this).css('background', randomColor());
        }

        else if ($('#color :selected') .val() === '2')
        {
            $(this).css('opacity', $(this).css('opacity')-0.2);
        }

        else if ($('#color :selected') .val() === '3')
        {

           $(this).addClass('highlight');

        }

    });
}




function randomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++)
    {
        color += ('0' + (Math.random() * 256 | 0) .toString(16)) .substr( - 2);
    }
    return color;
}





function clearButton() {
    $(".cell").css('background', '#e9e7e8');

}

function removeCell() {
   $('#container').empty();
}


function resetButton() {
    removeCell();
    createGrid();
}
