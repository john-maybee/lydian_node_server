let express = require('express');
let router = express.Router(); // dig into express and grab the Router()
const quoteList = require('../modules/quoteList'); // one dot exits out of the file, but the two dots would exit us out of the folder

router.get('/', function(req, res) {
    console.log("request for /quotes was made");
    res.send(quoteList);
    // res.sendStatus(418);
} );

router.post('/', function(req, res){
    console.log('post request response', req.body);
    if (req.body.text && req.body.author) {
        quoteList.push(req.body);
        res.sendStatus(201);    
    } else {
        res.sendStatus(404);
    }
    // quoteList.push(req.body);
    // res.sendStatus(201);  // 201 was the positive status response and 404 was the error route we went.
});

module.exports = router;