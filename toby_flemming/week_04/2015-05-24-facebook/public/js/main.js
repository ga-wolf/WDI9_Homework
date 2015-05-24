var app = app || {};

app.btnClick = function() {
  var status = app.checkStatus();

  if (status !== 'connected') {
    FB.login();
  }

  var qs = '?token=' + app.token;
  window.location.href = '/friends' + qs;
};

app.checkStatus = function() {
  var result;

  FB.getLoginStatus(function(response) { result = response.status; });
  return result;
};

app.registerEvents = function() {
  $('#fbBtn').on('click', this.btnClick);
};

app.init = function() {
  this.registerEvents();
};