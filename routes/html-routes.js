const path = require("path");

//tutor helped with this sent link explaining
const router = require("express").Router();
// const util = require('util');
// const fs = require('fs');

// const readFileAsync = util.promisify(fs.readFile);


router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//let notes = require("../db/db.json")

// function addedNotes(){
// const dbsite = readFileAsync("../db/db.json", "utf8");

// return JSON.parse(dbsite);
// }

// router.get("/api/notes", (req, res) => {
//   try {
//     const notes2 = addedNotes();
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//     return res.json(notes2)
//   } catch (err) {
//     res.send(500).json(err)
//   }
// });


module.exports = router;