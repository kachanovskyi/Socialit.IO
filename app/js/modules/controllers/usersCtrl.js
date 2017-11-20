SocialitIO.controller('UsersCtrl', ['$scope', '$location', '$http', 'usersFctr', function ($scope, $location, $http, usersFctr) {
    const vm = this;

    vm.onlineOnly = false;
    vm.users = [];

    $http.get('data/users.json').then(function (response) {

        for (let x in response.data) {
            vm.users.push(response.data[x]);
        }

        usersFctr.users = [...vm.users];

    }, function (error) {
        console.log(error);
    });

    vm.toggleFollow = function (id) {
        const ifFollowing = vm.users.find(x => x.id === id).following;

        vm.users.find(x => x.id === id).following = ifFollowing ? false : true;
    };

}]);
