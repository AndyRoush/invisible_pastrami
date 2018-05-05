// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path")

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"))
  })

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"))
  })
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"))
  })
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  })
  app.get("/client-landing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/client-landing.html"))
  })
  app.get("/trainer-landing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/training-landing.html"))
  })





}
