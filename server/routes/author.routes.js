// import the controller
const Author = require("../controllers/author.controllers")

// add routes for each CRUD method that I wrote in controller
module.exports = (app) => {
    
    app.get("/api/authors", Author.findAll)    
    app.post("/api/authors/new", Author.create)
    app.get("/api/authors/:id", Author.findOne)
    app.put("/api/authors/:id", Author.update)
    app.delete("/api/authors/:id", Author.delete)
}