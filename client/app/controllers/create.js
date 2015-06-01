;(function() {
	var Create = function($scope, $location, Task) {
		$scope.task = new Task();

		$scope.createTask = function() {
			$scope.task.$save().then(function() {
				$location.path('/');
			});
		}
	};

	Create.$inject = ['$scope', '$location', 'Task'];
	angular.module('task').controller('Create', Create);
})();