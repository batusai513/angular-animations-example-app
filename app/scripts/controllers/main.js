'use strict';

/**
 * @ngdoc function
 * @name angularAnimationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAnimationsApp
 */
angular.module('angularAnimationsApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.isActive = true;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
