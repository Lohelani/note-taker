const router = require("express").Router();
const fs = require('fs');
const util = require('util');
//assigns generic ids to elements so computer can read which ones you are trying to delete
const { v4: uuidv4 } = require('uuid');
// const bodyPars = require('body-parser');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

let notes = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    return res.json(notes)
})

router.post("/api/notes", function (req, res) {
    let newNotes = req.body;
    let note = JSON.parse(notes)
    //parse?
    console.log(newNotes);

    notes.push(newNotes);



    writeFileAsync("./db/db.json", note, function () {
        return res.json(true)
    })

    //res.json(newNotes);

});
router.get("/notes", function (req, res) {
    //save as variable then parse so it shows up on page
    return readFileAsync('db/db.json', 'utf-8')

});

router.post("/notes", function (req, res) {
    var newTitle = req.body.title;
    var newText = req.body.text;
    var newNote = { newTitle, newText, id: uuidv4() };
    console.log(newNote);

    return fs.appendFileSync('db/db.json', JSON.stringify(newNote))
    // (bodyPars.urlencoded({
    //     extended: true
    //   }));

});


// router.use(bodyPars.json());

// router.use(bodyPars.urlencoded({ 
//     extended: true
// }));

//router.post uses uuid

//router.delete uses uuid

module.exports = router;

