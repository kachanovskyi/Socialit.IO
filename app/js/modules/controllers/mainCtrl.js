SocialitIO.controller('MainCtrl', ['$scope', '$uibModal', '$location', function ($scope, $uibModal, $location) {
    const vm = this;

    if( !+sessionStorage.getItem('ifLoggedSocialitIO') ) {
        $location.path('welcome');
    }

    vm.logOut = function () {
        sessionStorage.setItem('ifLoggedSocialitIO', 0);

        $location.path('/welcome');
    };

}]);
