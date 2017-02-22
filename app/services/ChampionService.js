app.factory('ChampionService', function($http, $q) {
    var service = {
        response : false,
        GetAll: function() {
            var deferred = $q.defer();

            $http.get("champions.json")
            .then(function(data, status) {
                service.response = data;
                deferred.resolve(service.response);
            });

            return deferred.promise;
        },
    }

    return service;
});
