$(document).ready(function() {
  var $status, $progress, loadedImageCount, search;
  var page_count = 1;
  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';
  var totalImages = 100;

  $('#image_search').on('submit', function(e) {
    page_count = 1;
    $('.container').empty();
    e.preventDefault();

    search = $('#search').val();

    getMoreImages(search);
  });

  var enableScrollLoad = function() {
    setTimeout(function() {
      $(document).scroll(function() {
        if (!search) {
          return;
        };
        if (($(document).scrollTop() + $(window).height()) === ($(document).height())) {
          getMoreImages(search);
        };

      });
    }, 3000);
  };

  var generateUrl = function(photo, size) {
    var url = ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_' + size + '.jpg'].join('');

    return url;
  };

  var getMoreImages = function(query) {
    $(document).unbind('scroll');
    console.log('Loading up page ' + page_count + '!');
    $.getJSON(flickrUrl, {
      method: 'flickr.photos.search',
      api_key: '82aa6af761c48ba0de928039c954ca4f',
      text: query,
      format: 'json',
      per_page: 100,
      page: page_count
    }).done(function(results) {
      $.each(results.photos.photo, function(i, photo) {

        var smallUrl = generateUrl(photo, 'q');
        var $img = $('<img>').addClass('thumbnail').attr('src', smallUrl);

        var largeUrl = generateUrl(photo, 'b');
        var $imgLink = $('<a>').addClass('fancybox').attr('rel', 'group').attr('href', largeUrl);

        $imgLink.appendTo('.container');
        var $newLink = $('.container a:last-child');

        $img.appendTo($newLink);
      })
      loading();
      $(".fancybox").fancybox();
    });

    page_count++;
    enableScrollLoad();
  };

  var loading = function() {
    var $container = $('body').find('.container');
    $.scrollLock(true);

    console.log('time for loading!');
    var over = loadingOverlay();

    $(over).appendTo('body');
    progressBar();
    $container.imagesLoaded()
      .progress( onProgress )
      .always( onAlways );

    var imgLoad = imagesLoaded('.container');
    imgLoad.on('done', function(instance) {
      console.log('DONE  - all images have been successfully loaded');
      $('#overlay').remove();
      $.scrollLock(false);
    });
  };

  var loadingOverlay = function() {
    var overlay = '<div id="overlay">' +
      '<img id="loading" class="is-loading" src="http://bit.ly/pMtW1K">' +
      '<p>Loading Images...</p>' +
      '</div>';

    return overlay;
  };

  var progressBar = function() {
    $status = $('body').find('#status');
    $progress = $('body').find('progress');
    resetProgress();
    updateProgress(0);
  };

  var resetProgress = function() {
    $status.css({
      opacity: 1
    });
    loadedImageCount = 0;
    $progress.attr('max', totalImages);
    totalImages += 100;
  };

  var updateProgress = function(value) {
    $progress.attr('value', value);
  };

  var onProgress = function(imgLoad, image) {
    var $item = $(image.img).parent();
    $item.removeClass('is-loading');
    if (!image.isLoaded) {
      $item.addClass('is-broken');
    }
    loadedImageCount++;
    updateProgress(loadedImageCount);
  };

  var onAlways = function() {
    $status.css({ opacity: 0 });
  };

});
