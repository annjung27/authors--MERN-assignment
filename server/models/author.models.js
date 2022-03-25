//import mongoose
const mongoose = require('mongoose');

// create AuthorSchema and set validations
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [ 3, "{PATH} must be at least 3 characters"]
    }
    
}, {timestamps: true})

//export Schema
const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
