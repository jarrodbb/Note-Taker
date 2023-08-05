const express = require("express"); //import express
const path = require("path"); //import path

const api = require("./routes/index"); //import routes

const PORT = process.env.PORT || 3001; //added process.env.PORT for using Heroku

const app = express(); //use express

app.use(express.json());

app.use("/api", api); // Modular API routes

app.use(express.static("public")); //Express static to service the public folder

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/notes.html"))
); // Route for sending the notes HTML

app.get("*", (req, res) => res.send(`Page does not exist`)); // * route to handle any requests that don't exist

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
); // Listens to ports
