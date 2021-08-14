const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String, 
        required: [true, "Set up is required for joke"], 
        minlength: [10, "Set up must be at least 10 characters long"]
    },
	punchline: {
        type: String, 
        required: [true, "Punchline is required for joke"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    },
    },
    {timestamps: true}
    );

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;