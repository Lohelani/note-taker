const router = require("express").Router();
const fs = require('fs');
const util = require('util');
//assigns generic ids to elements so computer can read which ones you are trying to delete
const { v4: uuidv4 } = require('uuid');
// const bodyPars = require('body-parser');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//let notes = require("../db/db.json")

function readNotes() {
    return readFileAsync("./db/db.json", "utf8");
}

router.get("/api/notes", (req, res) => {
    readNotes().then(notes => {
        notes = JSON.parse(notes)
        res.json(notes)
    })

});

router.post("/api/notes", (req, res) => {
    let newNotes = req.body;


    var title = req.body.title;
    var text = req.body.text;
    var newNote = { title, text, id: uuidv4() };
    //     console.log(newNote);
    //parse?
    console.log(newNotes);


    readNotes().then(notes => {
        notes = JSON.parse(notes)
        notes.push(newNote)

        writeFileAsync("./db/db.json", JSON.stringify(notes)).then(response => res.json(true)).catch(err => console.log(err))
    })
    /*
    app.get("/api/characters", function(req, res) {
        return res.json(characters);
      });*/




    //res.json(newNotes);

});

router.delete('/api/notes/:id', (req, res) => {
    let id = req.params.id;
    readNotes().then(notes => {
        notes = JSON.parse(notes)

        let newArr = notes.filter(note => {
            return note.id !== id;
        })

        writeFileAsync("./db/db.json", JSON.stringify(newArr)).then(response => res.json(true)).catch(err => console.log(err))

    })
})
// router.get("/notes", (req, res) => {
//     //save as variable then parse so it shows up on page
//     return readFileAsync('db/db.json', 'utf-8')

// });
// //
// router.post("/notes", (req, res) => {
//     var newTitle = req.body.title;
//     var newText = req.body.text;
//     var newNote = { newTitle, newText, id: uuidv4() };
//     console.log(newNote);

//     return fs.appendFileSync('db/db.json', JSON.stringify(newNote))
//     // (bodyPars.urlencoded({
//     //     extended: true
//     //   }));

// });


// router.use(bodyPars.json());

// router.use(bodyPars.urlencoded({ 
//     extended: true
// }));

//router.post uses uuid

//router.delete uses uuid

module.exports = router;

