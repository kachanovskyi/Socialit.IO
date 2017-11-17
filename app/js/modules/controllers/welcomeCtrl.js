SocialitIO.controller('WelcomeCtrl', ['$scope', '$uibModal', '$location', function ($scope, $uibModal, $location) {
    const vm = this;

    angular.element(document).ready(function () {
        document.getElementsByClassName('welcome-page')[0].classList.add('show');
    });

    vm.login = function () {

        const modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'partials/loginModal.html',
            controller: 'LoginCtrl',
            controllerAs: '$ctrl'
        });
    };

    vm.signup = function () {

        const modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'partials/signupModal.html',
            controller: 'SignupCtrl',
            controllerAs: '$ctrl'
        });
    };

    //
    // vm.firstLogin = loginFactory.firstLogin;
    //
    // $('.view-div').addClass('center-no-float');
    //
    // vm.closeSlider = function () {
    //     loginFactory.firstLogin = false;
    //     // $http.get('https://0e9990ad.ngrok.io/shop?shop=' + $('#shopId').val()).then(function (res) {
    //     $http.get('data/shop.json').then(function (res) {
    //         var shop = res.data;
    //         var data = {
    //             name: $('#shopId').val(),
    //             isBotActive: shop.isBotActive,
    //             problemSpottedNotification: shop.problemSpottedNotification,
    //             creditsCount: shop.creditsCount,
    //             firstVisit: false,
    //             rechargeReminder: shop.rechargeReminder
    //         }
    //         // $http.put('https://0e9990ad.ngrok.io/shop', data).then(function (res) {
    //         //     console.log(res.data);
    //         //     $location.path('/dashboard');
    //         // });
    //         $location.path('/dashboard');
    //     });
    // };
}]);
