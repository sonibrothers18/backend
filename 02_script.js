//! Express
// import express from 'express'
const express = require('express')
const app = express()
//! =============================================================================================

//! Routes
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/profile', (req, res) => {
//   res.send('Welcome to profile')
// })

// app.listen(3000)
//! =============================================================================================

//! Middle Wares -> Do something b/w response and request
// app.use(function(req, res, next){
//   console.log("Middleware Chala");
//   next();
// })

// app.use(function(req, res, next){
//   console.log("Middleware Chala ek aur baar");
//   next();
// })

// app.get("/", function(req, res){
//   res.send('Hello World')
// })

// app.get('/profile', (req, res) => {
//   res.send('Welcome to profile')
// })

// app.listen(3000)
//! =============================================================================================

//! Error Handling
//todo Always use next if app.get return error
// app.get("/", function(req, res, next){
//   return next(new Error("Not Implemented"))
// })

// app.get('/profile', (req, res) => {
//   res.send('Welcome to profile')
// })

// //todo Always code this at last
// app.use((err, req, res, next)=>{
//   console.log(err.stack);
//   res.status(500).send("Something is Broken")
// })

// app.listen(3000)
//! =============================================================================================

//! Session -> Duration of connection b/w us(browser) and server
//! Cookie -> When we login into website(server), then server generates a string and give this string to the browser. And then in further requests, browser add this string to our request and server will authenticate it. If authentication is successful then server will response us without the need of login again & again. This saves our time and we don't need to login again & again on each request(step)

//todo When we send our data from browser to server then our plain text data is converted into unreadable format. Now, to store this data in server these 2 lines of code is used to convert unreadable formated data into readable format.
//todo Always code this at top
//! Also called Parsers
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", function(req, res){
//   res.send("Hello World")
// })

// app.get('/profile', (req, res) => {
//   res.send('Welcome to profile')
// })

// app.listen(3000)
//! =============================================================================================

//! EJS -> Similar like HTML but with extra features
//!     -> create views folder
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //todo setting ejs
// app.set("view engine", "ejs");

// app.get("/", function(req, res){
//   //! Use res.render instead of res.send
//   res.render("index")
// })

// app.listen(3000)
//! =============================================================================================

//! Setting up public static files
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// //todo use for setting path
// const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));

// app.set("view engine", "ejs");

// app.get("/", function(req, res){
//   res.render("index")
// })

// app.listen(3000)
//! =============================================================================================

//! Dynamic Routing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/profile/:username", function(req, res){
  res.send(`Welcome, ${req.params.username}`);
})

app.get("/profile/:username/:age", function(req, res){
  res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000)