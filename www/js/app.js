// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('converter', ['ionic']);

app.controller('converterCtrl', ['$scope','$http', function(scope,http){
  scope.curs = {};
  scope.result = 0;
  http({
    method: "GET",
    url: "https://www.cbr-xml-daily.ru/daily_json.js"
  }).then(function(result){
    scope.curs = result.data;
  })
  scope.convert = function(amount,baseSelect,convertSelect){
    if(baseSelect&&convertSelect&&amount){
      var result = (scope.curs.Valute[baseSelect].Value/scope.curs.Valute[convertSelect].Value)*amount;
      scope.result = result.toFixed(2);
    }else{
      scope.result = 0;
    }
  }
}])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
