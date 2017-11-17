SocialitIO.controller('LoginCtrl', ['$scope', '$uibModalInstance', '$location', function ($scope, $uibModalInstance, $location) {
    const vm = this;
    
    vm.submit = function () {

        if( (localStorage.getItem('emailSocialitIO') === $scope.email) && (localStorage.getItem('passwordSocialitIO') === $scope.password) ) {

            sessionStorage.setItem('ifLoggedSocialitIO', 1);

            $location.path('/');
            $uibModalInstance.close();

        } else {

            alert('Wrong email or password!');

        }

    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
