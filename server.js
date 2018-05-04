// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express")
var bodyParser = require("body-parser")
var path = require('path')
var passport = require('passport')

// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000

// Requiring our models for syncing
var db = require("./models")

// Sets up the Express app to handle data parsing


// middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Static directory
app.use(express.static("./public"))

//passport login
app.use(passport.initialize())
app.use(passport.session())

app.get("/login", passport.authenticate('local', {
    failureRedirect: '/login'
}), function (req, res) {
    res.redirect('/login')
})
// Routes
// =============================================================
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)
// require("./routes/login.js")(app)

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
  })
})