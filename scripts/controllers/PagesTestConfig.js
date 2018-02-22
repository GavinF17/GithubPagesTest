(function () {
    'use strict';

    angular.module('pagestest')
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        var urladd = '';
        if (window.location.href.indexOf('github.io') !== -1)
            urladd = '/pagestest'

        $routeProvider
            .when('/', {
                templateUrl: urladd+'/views/pages/home.html',
                controller: 'PagesTestController'
            })
            .when('/about', {
                templateUrl: urladd+'/views/pages/about.html',
                controller: 'PagesTestController'
            })


            .otherwise('/');
    }
})();
