

$(document).ready(function(){
  //Parallax build
  var moveBill = function(){
    //Move bill at half the rate of the window scrolling
    $('.parallax').css('background-position-y', $(window).scrollTop() * -0.1)
  }

  $(window).on('scroll', moveBill)

console.log( $('.parallax').length);


  var addBubble = function(event){

    var $bubble = $('<div class="bubble"></div>');

    var size = Math.random() * 50;

    $bubble.css({
      width: size,
      height: size,
      top: event.pageY,
      left: event.pageX
      }),
    // $bubble.css('left', event.pageX);

    $('body').append($bubble)

    // $bubble.delay(1000).fadeOut(function(){
    //   $(this).remove();
    // })

    setTimeout(function(){
      $bubble.animate({top: '-1000px'}, 2000, function(){
        $(this).remove();
      })
    }, 1000);


  };

  $(window).on('mousemove', addBubble);

})