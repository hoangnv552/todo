var mongoose = require('mongoose');
require('../models/task');
var Task = mongoose.model('Task');

module.exports = function(app) {
	app.route('/rest/tasks')
		.get(function(req, res, next) {
			Task.find(function(err, tasks) {
				if (err) {
					console.log(err);

					return res.status(500).json(err);
				}

				return res.json(tasks);
			});
		})
		.post(function(req, res, next) {
			var task = new Task(req.body);

			task.save(function(err) {
				if (err) {
					console.log(err);
					return res.status(500).json(err);
				}

				return res.json(task);
			});
		})
		.delete(function(req, res, next) {
    		Task.findByIdAndRemove(req.params.id).exec().then(function onResolve() {
        		return res.json({
            	result: true
        	});
    		}, function onError(err) {
        		return res.status(500).json(err);
    		});
		});
};