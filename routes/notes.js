//Back end routes

const notes = require("express").Router(); //Import express router
const { v4: uuidv4 } = require("uuid"); // Creates unique ID
const db = require("../db/db.json"); // import database

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils"); // import helper functions for reading, writing and appending to database

// Get request for notes API route
notes.get("/", (req, res) => {
  //reads from database and response with the data
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// Delete request for notes API route
notes.delete("/:id", (req, res) => {
  // Creates a constant of the id from the parameters
  const id = req.params.id;
  // Uses utils function to read database
  readFromFile("./db/db.json")
    // Parses the data from database
    .then((data) => JSON.parse(data))
    // filters for everything without that ID
    .then((json) => {
      const result = json.filter((note) => note.id !== id);
      // writes to database
      writeToFile("./db/db.json", result);

      // sends a response
      res.json({
        comment: `Item ${id} has been deleted 🗑️`,
      });
    });
});

// Post request for notes API route
notes.post("/", (req, res) => {
  // destructs body
  const { title, text } = req.body;

  // if body exists, creates new constant
  // unique id added
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json"); // Uses readAndApppend from utils function
    //sends a response
    res.json({
      comment: "new note added",
    });
  } else {
    // else sends an error
    res.error("Error in adding note");
  }
});

module.exports = notes; // export
