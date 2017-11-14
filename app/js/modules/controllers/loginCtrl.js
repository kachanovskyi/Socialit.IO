SocialitIO.controller('LoginCtrl', ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {
    const vm = this;
    
    vm.submit = function () {

        if( (localStorage.getItem('emailSocialitIO') === $scope.email) && (localStorage.getItem('passwordSocialitIO') === $scope.password) ) {

            alert('You\'re logged in!');
            $uibModalInstance.close();

        } else {

            alert('Wrong email or password!');

        }

    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
