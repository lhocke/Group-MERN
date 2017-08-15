var mongoose = require("mongoose");
var schema = mongoose.Schema;

// create our schema for mongo db
var articleSchema = new Schema ({

	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	url: {
		type: String,
		required: true
	}

});

var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
