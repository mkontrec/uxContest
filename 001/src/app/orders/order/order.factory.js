angular.module('app').factory('orderFactory', function () {

    var data = {
        quantity: 100
    };

    var cups = [
        {
            name: 'Cup 1000ml',
            price: 0.40,
            volume: 1000,
            img: 'http://papperskopp.com/wp-content/uploads/2015/03/12oz_cof.jpg'
        },
        {
            name: 'Cup 500ml',
            price: 0.30,
            volume: 500,
            img: 'http://papperskopp.com/wp-content/uploads/2015/03/8oz_cof.jpg'
        },
        {
            name: 'Cup 250ml',
            price: 0.15,
            volume: 250,
            img: 'http://papperskopp.com/wp-content/uploads/2015/11/4oz_cof.jpg'
        }
    ];

    return {
        data: data,
        cups: cups
    };

});