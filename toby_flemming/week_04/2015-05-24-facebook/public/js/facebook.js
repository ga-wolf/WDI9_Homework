// Ensures FB object has been created before using it.  fbAsyncInit will be 
// called by the above code.
window.fbAsyncInit = function() {
  
  FB.init({
    appId      : '885063518206716',
    status     : true,  //authResponseChange on load
    version    : 'v2.3'
  });

  getAccessToken = function() {
    var token = FB.getAccessToken();
    app.token = token;
  };

  FB.Event.subscribe('auth.authResponseChange', getAccessToken);

  // Initialise Our App
  app.init();
};

// FB Creation
$(document).ready(function() {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});