function createGrid(){var e=prompt("select a grid between 2 - 128?","0"),o=parseInt(e);for(o>128&&alert("must be between 1-128"),elementCount=0;elementCount<o;elementCount++)$("#container").append('<div class="col"></div>');for(columnCount=0;columnCount<o;columnCount++)$(".col").append('<div class="cell"></div>'),$(".cell").width(572/o),$(".cell").height(572/o);draw()}function draw(){$(".cell").mouseenter(function(){"0"===$("#color :selected").val()?$(this).css("background","black"):"1"===$("#color :selected").val()?$(this).css("background",randomColor()):"2"===$("#color :selected").val()&&$(this).css("background","#e9e7e8")})}function randomColor(){for(var e="#",o=0;o<3;o++)e+=("0"+(256*Math.random()|0).toString(16)).substr(-2);return e}function clearButton(){$(".cell").css("background-color","#e9e7e8"),$(this).css("background-color","opacity",1)}function removeCell(){$("#container").empty()}function resetButton(){removeCell(),createGrid()}$(document).ready(function(){createGrid()});