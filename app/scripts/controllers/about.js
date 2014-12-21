'use strict';

/**
 * @ngdoc function
 * @name angularAnimationsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAnimationsApp
 */
angular.module('angularAnimationsApp')
  .controller('AboutCtrl', function ($scope) {
  	$scope.isActive = true;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
