'use strict';

/**
 * @ngdoc function
 * @name angularAnimationsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the angularAnimationsApp
 */
angular.module('angularAnimationsApp')
  .controller('ContactCtrl', function ($scope) {
  	$scope.isActive = true;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
