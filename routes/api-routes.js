const router = require("express").Router();
const fs = require('fs');
//assigns generic ids to elements so computer can read which ones you are trying to delete
const {v4: uuidv4} = require('uuid');

router.get("/notes", function (req, res){
    //not returning in console
    //save as variable then parse so it shows up on page
    return fs.readFileSync('db/db.json', 'utf-8')
});

module.exports = router;