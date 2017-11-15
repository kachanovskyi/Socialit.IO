'use strict';

var SocialitIO = angular.module('SocialitIO', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

SocialitIO
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })

            .when('/welcome', {
                templateUrl: 'pages/welcome.html',
                controller: 'WelcomeCtrl',
                controllerAs: 'welcome'
            })

            .otherwise({
                redirectTo: function () {
                    return "/";
                }
            });
    }]);