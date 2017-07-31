'use strict';

// Register `productList` component, along with its associated controller and template
angular.
  module('productCart').
  component('productCart', {
    templateUrl: 'product-cart/product-cart.template.html',
    controller: [ 'Product',
    
     function ProductListController(Product) {
        this.products = Product.query();
    }
    ]
  });

