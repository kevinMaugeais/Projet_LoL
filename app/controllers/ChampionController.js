app.controller('ChampionController', function($scope, ChampionService) {
	ChampionService.GetAll().then(function(response) {
		$scope.champions = response.data;
		console.log(response.data);
	});
});
