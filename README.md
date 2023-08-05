# Note-Taker

Note Taker

## Description

Application to write and save notes so the user can organise their thoughts and keep track of tasks

The User is required to input a Title and Text for the note. Once saved, it will be displayed on the side of the application along with any previous notes.

The user us also given the functionality to delete any preferred note

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

#### Deployed Link

[Heroku](https://aqueous-escarpment-55337-8892027327e4.herokuapp.com/)

## Usage

#### Landing Page
<img width="1605" alt="Screenshot 2023-08-05 at 2 01 46 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/71c2fc56-f33e-4565-98eb-af4dbd9882f6">

Click the "Get Started" Button to go to the Notes Page

#### Notes Page
<img width="1597" alt="Screenshot 2023-08-05 at 2 04 09 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/e9ef3309-a464-4852-86f4-dc3d8af13b3a">

#### Input the Title and Text for the note
<img width="1599" alt="Screenshot 2023-08-05 at 2 05 04 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/9633068d-3c60-4504-a9d2-d32774c8ebeb">

#### Click save button in top right corner
<img width="206" alt="Screenshot 2023-08-05 at 2 05 42 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/ad5841bc-a63a-4432-a14f-9a6c664dfebf">

#### Note saved to left column
<img width="1597" alt="Screenshot 2023-08-05 at 2 05 52 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/53936dab-e42b-41de-b063-2d200dad8674">

#### Adding more notes will be saved in the same column.
<img width="1601" alt="Screenshot 2023-08-05 at 2 07 24 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/8d3dd172-7c4a-4adc-8c13-212cd3eb6b32">

All notes are saved to db.json in the db folder

#### Clicking an existing note will display it in the main section
<img width="1598" alt="Screenshot 2023-08-05 at 2 08 50 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/f5d2ff39-476a-457e-91d3-a9f07ccf0d0d">

#### Clicking the + button allows the user to add another note
<img width="1099" alt="Screenshot 2023-08-05 at 2 09 27 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/94248d87-53a7-4fd0-884d-4eda666898ef">

#### To delete a note, click the red Bin icon
<img width="516" alt="Screenshot 2023-08-05 at 2 10 01 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/578649fc-cffb-433d-a3a6-a3e6b332c8b9">
<img width="1595" alt="Screenshot 2023-08-05 at 2 15 09 pm" src="https://github.com/jarrodbb/Note-Taker/assets/132813348/68fce9cc-e0c8-42f5-9468-2e0939ea3f9e">

This removes it from the application and the db.json file

## License

Please refer to the licence in the repo.
