const router = require("express").Router();
const fs = require('fs');
//assigns generic ids to elements so computer can read which ones you are trying to delete
const { v4: uuidv4 } = require('uuid');
// const bodyPars = require('body-parser');

router.get("/notes", function (req, res) {
    //save as variable then parse so it shows up on page
    return fs.readFileSync('db/db.json', 'utf-8')
    //return as json
});

router.post("/notes", function (req, res) {
    var newTitle = req.body.title;
    var newText = req.body.text;
    var newNote = { newTitle, newText, id: uuidv4() };
    console.log(newNote);
    console.log(newTitle);
    
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

