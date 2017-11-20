SocialitIO.controller('CommentsCtrl', ['$scope', '$uibModalInstance', 'comments', function ($scope, $uibModalInstance, comments) {
    const vm = this;
    
    vm.comments = comments;

    vm.addComment = function () {

        const content = document.getElementById('newComment').value;

        if( content.length !== 0 && content.trim() ) {
            comments.unshift({
                "id": Math.random(),
                "name": localStorage.getItem('firstNameSocialitIO') + " " + localStorage.getItem('lastNameSocialitIO'),
                "content": content
            });
        }

        document.getElementById('newComment').value = "";
    };

    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}]);
