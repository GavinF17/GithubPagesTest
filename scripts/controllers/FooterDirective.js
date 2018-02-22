(function () {
    'use strict';

    angular.module('pagestest')
        .directive('pageFooter', FooterDirective);

    function FooterDirective() {
        var urladd = '';
        if (window.location.href.indexOf('github.io') !== -1)
            urladd = '/pagestest';

        return {
            templateUrl: urladd+'/views/common/footer.html',
            restrict: 'E',
            controller: ['$scope', function ($scope) {


            }]
        }
    }
})();