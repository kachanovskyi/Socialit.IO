SocialitIO.controller('PostsCtrl', ['$scope', '$location', '$http', '$uibModal', function ($scope, $location, $http, $uibModal) {
    const vm = this;

    vm.posts = [];

    const userId = 0;

    $http.get('data/posts.json').then(function (response) {

        for (let x in response.data) {
            vm.posts.push(response.data[x]);
        }

    }, function (error) {
        console.log(error);
    });

    vm.toggleLike = function (id) {
        const post = vm.posts.find(el => el.id === id);
        post.liked = !post.liked;
        
        post.liked ? ++post.likes : --post.likes;
    };

    vm.openComments = function (postId) {

        const modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'partials/commentsModal.html',
            controller: 'CommentsCtrl',
            controllerAs: '$ctrl',
            resolve: {
                comments: function () {
                    return vm.posts.find(el => el.id === postId).comments;
                }
            }
        });

    };

    vm.addPost = function () {

        const content = document.getElementById('newPost').value;

        if( content.length !== 0 && content.trim() ) {
            vm.posts.unshift({
                "id": vm.posts[0].id + 1,
                "authorId": 0,
                "author": localStorage.getItem('firstNameSocialitIO') + " " + localStorage.getItem('lastNameSocialitIO'),
                "date": "Today",
                "img": "../images/user.png",
                "content": content,
                "likes": 0,
                "liked": false,
                "comments": []
            });
        }

        document.getElementById('newPost').value = "";
    };

    // vm.toggleFollow = function (id) {
    //     const ifFollowing = vm.users.find(x => x.id === id).following;
    //
    //     vm.users.find(x => x.id === id).following = ifFollowing ? false : true;
    // };

}]);
