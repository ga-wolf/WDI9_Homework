$(document).ready(function () {
  var pageNum = 1;
  var pageMax = 1;
  var requestDone = true;

  $(window).on('scroll', function () {

    var downPage = $(window).scrollTop() / $(document).height();
    // console.log(downPage + "-: page number: " + pageNum + " max pages: " + pageMax);

    if( downPage > 0.7 && pageNum < pageMax && requestDone){
      requestDone = false;  //throttles the requests, assigned true in the ajax done callback.
      imagesGo();
    }

  });

  $('#image_search').on('submit', function (e) {
    e.preventDefault();
    $('#manyPhotos').html('');
    imagesGo();
    $('#toTop').show();
    pageNum = 1;

  });

 

  var imagesGo = function() {
      var query = $('#search').val();

      var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

      var generateUrl = function (photo) {
        var url = [
          'http://farm',
          photo.farm,
          '.static.flickr.com/',
          photo.server,
          '/',
          photo.id,
          '_',
          photo.secret,
          '_q.jpg'
        ].join('');

        return url;
      };

      var generateBigUrl = function (photo) {
        var url = [
          'http://farm',
          photo.farm,
          '.static.flickr.com/',
          photo.server,
          '/',
          photo.id,
          '_',
          photo.secret,
          '_b.jpg'
        ].join('');

        return url;
      };

      var generateOwner = function (photo){
        var link = [
          'https://www.flickr.com/photos/',
          photo.owner,
          '/',
          photo.id
        ].join('');

        return link;
      };

      $.getJSON(flickrUrl, {
        method: 'flickr.photos.search',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        text: query,
        format: 'json',
        page: pageNum,
        per_page: 100
      }).done(function (results) {
        pageMax = results.photos.pages;
        console.log(results);

        

        $.each(results.photos.photo, function (i, photo) {
          var url = generateUrl(photo);
          var biggy = generateBigUrl(photo);
          var owner = generateOwner(photo);
          
          
          var $img = $('<img>').addClass('thumbnail').attr('src', url);
          var $ancPic = $('<a class="thumby"/>').attr( { href: biggy, target: "_blank" } ).html($img);
          var $anc = $('<a/>').attr( { href: owner, target: "_blank"} ).html('<span id="flickLink">flickr page</span>');

          var $div = $('<div/>').html($ancPic).append($anc);

          $div.appendTo('#manyPhotos');
        });

        requestDone = true;
        pageNum++;

      });
  };



  var bigImage = function(event){
    event.preventDefault();

    $pic =  $($(this)[0]);

    var picLink = $pic.attr('href');
    var $img = $('<img>').attr('src', picLink);

    $('#bigPic').html($img);
    $('#darken').toggleClass('addDark');

    setTimeout( function() {        //center the picture in middle of screen
      var winHeight = $(window).height();
      var picHeight = $('#bigPic img').height();
      var screenMiddle = (winHeight - picHeight) / 2;

      console.log(screenMiddle, winHeight, picHeight);

      $('#bigPic').css('top', screenMiddle);

    },1000);

  }

    var bigHide = function(){
    $('#bigPic').html('');
    $('#darken').toggleClass('addDark');
  }


    var goToTop = function(){
    $(window).scrollTop(0);
  }


  $('#toTop').on('click', goToTop);
  $('#manyPhotos').on('click', '.thumby', bigImage);
  $('#bigPic').on('click', bigHide);

  
});