const express = require("express");
// const { createEngine } = require("express-react-views");

const app = express();

// listen for requests
app.listen(3000, function () {
  console.log("server is running");
});

// app.set('views', __dirname + '/views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views'), createEngine());

app.get("/", (req, res) => {
  res.send("<p>Home Page</p>");
});

app.get("/:people", (req, res) => {
  res.send("<h1>New People View 1</h1>");
});

app.get("/about", (req, res) => {
  res.send("<p>About Page</p>");
});

app.get("/about/:charles", (req, res) => {
  res.send("<h1>New Charles View</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<p>Contact Page</p>");
});

app.get("/blog", (req, res) => {
  res.send("<p>Blog Paages</p>");
});

app.get("/search", (req, res) => {
  res.send("<p>Search Page</p>");
});

app.get("/newsletter", (req, res) => {
  res.send("<p>NewsLetter Page</p>");
});

app.get("/tutorials", (req, res) => {
  res.send("<p>Tutorials Page</p>");
});

app.get("/resources", (req, res) => {
  res.send("<p>Resources Page</p>");
});

app.get("/tutorials", (req, res) => {
  res.send("<p>Tutorials Page</p>");
});

app.get("/resources", (req, res) => {
  res.send("<p>Resources Page</p>");
});

app.get("/friends", (req, res) => {
  res.send("<p>Friends Page</p>");
});

app.get("/sign", (req, res) => {
  res.send("<p>Sign-up Page</p>");
});
