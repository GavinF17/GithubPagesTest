(function () {
    'use strict';

    angular.module('pagestest')
        .config(['$routeProvider', config]);

    function config($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '/views/pages/home.html',
                controller: 'PagesTestController'
            })
            .when('/about', {
                templateUrl: '/views/pages/about.html',
                controller: 'PagesTestController'
            })


            .otherwise('/');
    }
})();
