const fs = require("fs"); // import fs
const util = require("util"); // import util

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// write to file
// destination is db.json
// content is what we want to write
// if any errors, console the errors
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

// read and append to file
// fs reads files, parses data, pushes content into it and then writes to database
const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend }; // export
