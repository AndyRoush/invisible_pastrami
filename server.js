// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express")
var expressValidator = require('express-validator')
var bodyParser = require("body-parser")
var path = require('path')
require('dotenv').config()
var passport = require('passport')
var bcrypt = require('bcrypt')
var saltRounds = 10
var path = require('path')
var fileUpload = require('express-fileupload');

// require('dotenv').config()
// var search = require('youtube-search');
// var youtube = require('youtube-iframe-player');

// var opts = {
//   maxResults: 10,
//   key: process.env.YOUTUBE_API
// };
 
// search('biceps', opts, function(err, results) {
//   if(err) return console.log(err);
//   console.log(results[0].id);
// });


// Sets up the Express App
// =============================================================
var app = express()
var PORT = process.env.PORT || 3000

// Requiring our models for syncing
var db = require("./models")

// middleware
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }))
// Sets up the Express app to handle data parsing
app.use(bodyParser.json())
// Static directory
app.use(express.static("./public"))

//passport login
// app.use(passport.initialize())
// app.use(passport.session())

// Routes
// =============================================================
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)
  })
})

// chat script
// var express = require('express')
// app1 = express()
// server = require('http').createServer(app)
// io = require('socket.io').listen(server)
// nicknames = []

// server.listen(3000)

// app1.get('/', function(req, res){
// res.sendFile(__dirname + '/public/trainer-landing.html')
// })

// io.sockets.on('connection', function(socket) {
//     socket.on('new-user', function(data, callback){
//         if (nicknames.indexOf(data) != -1){
//             callback(false)
//         } else{
//             callback(true)
//             socket.nickname = data
//             nicknames.push(socket.nickname)
//             updateNicknames()
//         }
//     })
    
//     function updateNicknames() {
//         io.sockets.emit('usernames', nicknames)

//     }

//     socket.on('send-message', function(data) {
//         io.sockets.emit('new-message', {msg: data, nick: socket.nickname})
        
//     })
//     socket.on('disconnect', function(data) {
//         if(!socket.nickname) return
//         nicknames.splice(nicknames.indexOf(socket.nickname), 1)
//     }
// )
// })