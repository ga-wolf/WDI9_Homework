// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('atm', ['ionic'])

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: '024a4fb8',
    // The public API key all services will use for this app
    api_key: '07e8c909f12d10142413b0a7f1bf5a1d57dfdeeee881f2cd',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'YOUR_GCM_ID'
  });
}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    atm.main();
  });
})
