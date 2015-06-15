$(document).ready(function(){


var endOfResults = false
var page = 0 
  // $(window).on('scroll', function (){
  //   console.log($(window).scrollTop(), $(document).height());
  // });

/////////////////
//Begin Function to run on scroll
/////////////////
  var turnOnScroll = function(){
    $(window).on('scroll', function (){
      var windowScroll = $(window).scrollTop();
      var docHeight = $(document).height();

      if(windowScroll > docHeight * 0.5){
        console.log('soup')
        //Turns the scrolling pagination update off so it doesn't fire 20'000 times
        $(window).off('scroll');
        generatePage()
        page += 1
        console.log('The current page is' + page)
      };
    });
  };
/////////////////
//End of function to run on scroll
/////////////////

/////////////////
//Begin function to generate a page
/////////////////
  var generatePage = function(){

    var query = $('#search').val();
    console.log(query);

    var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';
    console.log(flickrUrl);

    var generateUrl = function (photo, size) {
      var url = ['http://farm',
       photo.farm,
       '.static.flickr.com/',
       photo.server,
       '/',
       photo.id,
       '_',
       photo.secret,
       '_'+ size + '.jpg'
       ].join('');
       return url;
    };

    $.getJSON(flickrUrl, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084',
      text: query,
      format: 'json',
      per_page: 50,
      page: page
    }).done(function(results){
      console.log('loop working')
      $.each(results.photos.photo, function(i, photo){
        var url = generateUrl(photo, 'q');
        var $img = $('<img>').addClass('thumbnail').attr('src', url);
        $img.appendTo('.imgContainer');
        var largeUrl = generateUrl(photo, 'b')
        $('.thumbnail').last().wrap("<a class='fancyBox' href='" + largeUrl + "'/>");
      });
        $('.fancyBox').fancybox();
      }).done(function (results) {
      //Turns the pagination scrolling update back on so it will fire again.
      if()
      turnOnScroll();

    });
  };
/////////////////
//End of function to create a page
/////////////////

/////////////////
//Begin function to get this shit rolling
/////////////////
    $('#image_search').on('submit', function(e){
      $('.imgContainer').empty();
      page = 1
      $(window).scrollTop(0);
      e.preventDefault();
      console.log('starting page gen');
      generatePage()
    });
/////////////////
//End of function that gets all this shit rolling
/////////////////


});