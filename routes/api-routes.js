// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Requiring our Todo model
var db = require("../models")

// Routes
// =============================================================
module.exports = function (app) {

// GET route for getting all of the posts - READ
app.get("/api/posts", function (req, res) {
  db.userLogin.findAll({}).then(function (r) {
    res.json(r)
  })
})

// POST route for holding new user's registration info
app.post("/api/posts", function (req, res) {
  db.userLogin.create({
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  }).then(function (r) {
    res.json(r)
  })
})
}
// POST route for holding new user's registration info
// app.post("/api/posts", function (req, res) {
//   db.survey.create({
   
//   }).then(function (r) {
//     res.json(r)
//   })
// })

// // DELETE route for deleting posts - DELETE
// app.delete("/api/posts/:id", function (req, res) {
//   db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function (r) {
//       res.json(r)
//     })
// })

// // PUT route for updating posts UPDATE
// app.put("/api/posts", function (req, res) {
//   db.Post.update({
//       body: req.body.body,
//     }, {
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function (r) {
//       res.json(r)
//     })
// })