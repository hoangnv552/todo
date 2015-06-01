var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
	title: {
		require: true,
		type: String
	},
	completed: {
		type: Boolean,
		default: false
	}
});

mongoose.model('Task', TaskSchema);