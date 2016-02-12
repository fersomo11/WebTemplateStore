angular.module('templates').controller('TemplatesCtrl', function ($scope, $http) {
  
  //
  $http.get('json/templates.json').success(function (data) {
    console.log(data);
    $scope.templates = data;
  });

});