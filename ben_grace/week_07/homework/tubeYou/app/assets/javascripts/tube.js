$(document).ready(function(){

  var page = 0

  $('form').on('submit', function(e){
    e.preventDefault();

    var youtubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBpjGbRqw_jC_2TrRcwQIJ4_Etd-SMCe4w&q="

    var query = $('#search').val();

    var fullUrl = youtubeUrl + query

    $.ajax({
      url: fullUrl
    }).done(function (data){
      console.log(data)
      $.each(data.items, function(i, items){
        console.log(data.items)
        console.log(items.id)
        var vidID = (items.id.videoId)
        var $video = $('<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+ vidID + '"frameborder="0" allowfullscreen></iframe>');
        $video.appendTo('.videoContainer');
      });
    });

  });

});