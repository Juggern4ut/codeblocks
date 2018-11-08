var mongoose = require('mongoose');

var Pages = mongoose.model('Pages', {
	title: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	link: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

module.exports = {
	Pages
}