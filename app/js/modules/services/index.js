SocialitIO.filter('statusFilter', function () {
    return function (items, online) {

        if(online) {
            const filtered = [];

            for(let x in items) {
                if(items[x].status) {
                    filtered.push(items[x]);
                }
            }
            return filtered;
        }
        return items;
    };
});