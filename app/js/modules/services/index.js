SocialitIO
    .factory('usersFctr', function () {
        return {
            users: []
        };
    })
    .filter('statusFilter', function () {
        return function (items, online) {

            if (online) {
                const filtered = [];

                for (let x in items) {
                    if (items[x].status) {
                        filtered.push(items[x]);
                    }
                }
                return filtered;
            }
            return items;
        };
    })
    .filter('followFilter', function (usersFctr) {
        return function (items) {

            const filtered = [];

            items.forEach(function (item) {

                console.log();

                if(item.authorId === 0) {
                    filtered.push(item);
                } else if( usersFctr.users.find(el => el.id === item.authorId).following ) {
                    filtered.push(item);
                }

            });

            return filtered;
        };
    });