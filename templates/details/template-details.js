angular.module('templates').controller('TemplateDetailsCtrl', function ($scope, $http, $stateParams, $filter) {

  var templateId = $stateParams.templateId;
  
  //
  $http.get('json/templates.json').success(function (data) {
    $scope.template = $filter('filter')(data, function (d) {
      return parseInt(d.id) === parseInt(templateId);
    })[0];
    $scope.mainImage = $scope.template.images[0].name;
  });
  $scope.setImage = function (image) {
    $scope.mainImage = image.name;
  };
});