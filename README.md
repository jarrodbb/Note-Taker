# Note-Taker

Note Taker

## Desciption

Application to write and save notes so the user can organise their thoughts and keep track of tasks

The User is required to input a Title and Text for the note. Once saved, it will be displayed on the side of the application along with any previous notes.

The user us also given the funcitonality to delete any prefered note

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Ensure a package.json file exists

If there is no package.json install one by running npm init

### Install Express and uuid

node_modules folder will be created. This folder contains all third-party packages that have been dowloaded

Add a .gitignore file and add node_modules to ensure the third-party packages are not committed to Github

#### Public

[index.js](https://github.com/jarrodbb/Note-Taker/blob/main/public/scripts/index.js)
[index.html](https://github.com/jarrodbb/Note-Taker/blob/main/public/index.html)
[notes.html](https://github.com/jarrodbb/Note-Taker/blob/main/public/pages/notes.html)

#### Routes

[index.js](https://github.com/jarrodbb/Note-Taker/blob/main/routes/index.js)
[notes.js](https://github.com/jarrodbb/Note-Taker/blob/main/routes/notes.js)

#### Database

[db.json](https://github.com/jarrodbb/Note-Taker/blob/main/db/db.json)

#### Helpers

[fsUtils.js](https://github.com/jarrodbb/Note-Taker/blob/main/helpers/fsUtils.js)

#### Packages

[package.json](https://github.com/jarrodbb/Note-Taker/blob/main/package.json)

## Usage

#### Landing Page

Click the "Get Started" Button to go to the Notes Page

#### Notes Page

#### Input the Title and Text for the note

#### CLick save button in top right corner

#### Note save to left column

#### Adding more notes will be saved in the same column.

All notes are saved to db.json in the db folder

#### Clicking an existing note will display it in the main section

#### Clicking the + buttton allows the user to add another note

#### To delete a note, click the red Bin icon

This removes it from the application and the db.json file

## License

Please refer to the licence in the repo.
