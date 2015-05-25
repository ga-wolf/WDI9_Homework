$(document).ready( function (){

  function eightBall(){
    $("#fortuneInfo").text("Ask a yes/no question out loud, then click the magic 8ball").toggleClass("fortuneShow");
  };

    function cookie(){
    $("#fortuneInfo").text("What fortunes await you!?").toggleClass("fortuneShow");
  };



      $('.tlt').textillate({ 
      in: { effect: 'rotateInUpRight', shuffle: true },
      out: { effect: 'rollOut', shuffle: true },
      loop: false
      });



      function texilateEnd() {

        setTimeout( function() { $('.tlt').textillate('out');}, 5000);
      };

    
  $('.tlt').on('inAnimationEnd.tlt', texilateEnd);
  $('#eightBall').hover(eightBall);
  $('#cookie').hover(cookie);
});