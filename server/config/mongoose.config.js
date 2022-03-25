//import mongoos - require mongoose here
const mongoose = require('mongoose');
const DB_NAME = "authors_DB"

// method that connect mongoose to MongoDB
mongoose.connect('mongodb://localhost/'+ DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));