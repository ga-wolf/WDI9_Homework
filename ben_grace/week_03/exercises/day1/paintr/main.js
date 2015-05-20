$(document).ready(function(){

  //Palette building
  var addColor = function(){
    var color = $('#color').val();
    console.log(color)
    var $box = $('<div></div>').addClass('box');
    $box.css('background-color', color);


    $('#palette').prepend($box);
  };


  $('#addColor').on('click', addColor);


  // set current paint color
  var selectColor = function(){
    var color = $(this).css('background-color');
    $('#selectedColor').css('background-color', color);
  };

  //delegate the parent
  $('#palette').on('click', '.box', selectColor);

  // Setup the canvas
  var createCanvas = function(pixelCount){

    for (var i = 0; i < pixelCount; i++) {
      $('<div></div>').addClass('pixel').appendTo('#canvas');
    };
  };

  createCanvas(10000);


  var paint = function(event){
    if(event.ctrlKey){
    var color = $('#selectedColor').css('background-color');
    $(this).css('background-color', color);
    };
  };

  $('#canvas').on('mouseover', '.pixel', paint);


});