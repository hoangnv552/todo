;(function() {
	var Task = function($resource) {
		var Task = $resource('/rest/tasks/:id', {
			id: '@_id'
		});

		return Task;
	};

	Task.$inject = ['$resource'];
	angular.module('task').factory('Task', Task);
})();