// Modular API Routes to handle note requests

const express = require("express"); // Import express

const notesRouter = require("./notes"); // Import notes

const app = express();

app.use("/notes", notesRouter); // build routes to use notesRouter

module.exports = app; //export
