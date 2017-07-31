'use strict';

angular.
  module('rangerStoreApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/products', {
          template: '<product-list></product-list>'
        }).
        when('/products/:productId', {
          template: '<product-detail></product-detail>'
        }).
        when('/productCart', {
          template: '<product-cart></product-cart>'
        }).
        otherwise('/products');
    }
  ]);