// import model
const Author = require('../models/author.models')

module.exports = {

    //Read All - get -  /api/authors  
    findAll: (req, res) => {
        Author.find()
            .then((allAuthors) => {
                return res.json(allAuthors)
            })
            .catch(err => res.json(err))
            
    },

    // Create  - post -  /api/authors/new
    create: (req, res) => {
        console.log(req.body)
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            // 400 response -> axios.post will catch it as an error. 
            .catch(err => res.status(400).json(err)) 
    },

    //Read One by id  - get-  /api/authors/:id
    findOne: (req, res) => {
        console.log(req.params);
        // Note.findOne({_id: req.params.id})
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    // Update one by id - put - /api/authors/:id
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body,{
            new: true, runValidators: true
        })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },

    // Delete on by id - delete - /api/authors/:id
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}