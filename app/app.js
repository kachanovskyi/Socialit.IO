'use strict';

var SocialitIO = angular.module('SocialitIO', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

SocialitIO
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: function () {
                    return "/dashboard";
                }
            })

            .when('/', {
                templateUrl: 'pages/welcome.html',
                controller: 'WelcomeCtrl',
                controllerAs: 'welcome'
            })

            // .when('/messages', {
            //     templateUrl: 'pages/messages.html',
            //     controller: 'MessagesCtrl',
            //     controllerAs: 'messages'
            // })

            .otherwise({
                templateUrl: 'pages/404.html'
            });

        $locationProvider.html5Mode(true);
        $locationProvider.hasPrefix = '!';
    }]);