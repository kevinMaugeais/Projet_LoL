app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/index.html',
			controller: 'ChampionController'
		})
		.otherwise({redirectTo : '/'})
});
