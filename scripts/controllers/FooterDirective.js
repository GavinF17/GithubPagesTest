(function () {
    'use strict';

    angular.module('pagestest')
        .directive('pageFooter', FooterDirective);

    function FooterDirective() {
        return {
            templateUrl: '/views/common/footer.html',
            restrict: 'E',
            controller: ['$scope', function ($scope) {


            }]
        }
    }
})();