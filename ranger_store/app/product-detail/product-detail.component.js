'use strict';

// Register `productDetail` component, along with its associated controller and template
angular.
  module('productDetail').
  component('productDetail', {
    templateUrl: 'product-detail/product-detail.template.html',
    controller: ['$routeParams', 'Product',
      function ProductDetailController($routeParams, Product) {
        var self = this;
        self.product = Product.get({productId: $routeParams.productId}, function(product) {
          self.setImage(product.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });