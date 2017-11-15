SocialitIO.controller('SignupCtrl', ['$scope', '$uibModalInstance', '$uibModal', function ($scope, $uibModalInstance, $uibModal) {
    const vm = this;

    vm.submit = function () {

        if( localStorage.getItem('emailSocialitIO') === $scope.email) {

            alert('This email is already in use! Try again, please.');
            $scope.email = "";

        } else if($scope.password !== $scope.passwordRepeat) {

            alert('Passwords don\'t match!');

            $scope.password = "";
            $scope.passwordRepeat = "";

        } else {

            localStorage.setItem('emailSocialitIO', $scope.email);
            localStorage.setItem('firstNameSocialitIO', $scope.firstName);
            localStorage.setItem('lastNameSocialitIO', $scope.lastName);
            localStorage.setItem('passwordSocialitIO', $scope.password);

            $uibModalInstance.close();

            const modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'partials/loginModal.html',
                controller: 'LoginCtrl',
                controllerAs: '$ctrl'
            });
        }

    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
