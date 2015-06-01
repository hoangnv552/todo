;(function() {
	var ListCtrl = function($scope, Task, $location) {
		Task.query().$promise.then(function(tasks) {
			$scope.tasks = tasks;
		});

		$scope.deleteTask = function(task) {
            var index = $scope.tasks.indexOf(task);

            $scope.tasks.splice(index, 1);

            tasks.$delete().then(function() {
                $location.path('/');
            });
        };
	};

	ListCtrl.$inject = ['$scope', 'Task', '$location'];

	angular.module('task').controller('List', ListCtrl);
})();