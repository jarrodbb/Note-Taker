const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");

notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  //   res.json(db);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.delete("/:id", (req, res) => {
  const id = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id !== id);
      writeToFile("./db/db.json", result);
      res.json(`Item ${id} has been deleted 🗑️`);
    });
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json({
      comment: "new note added",
    });
  } else {
    res.error("Error in adding note");
  }
});

module.exports = notes;
