const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public')); // when you serve up a static, you have to ake sure it has a index.html inside
app.use(express.urlencoded());
const quoteList = require('./modules/quoteList');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

app.get('/quotes', function(req, res) {
    console.log("request for /quotes was made");
    res.send(quoteList);
    // res.sendStatus(418);
} );

app.post('/quotes', function(req, res){
    console.log('post request response', req.body);
    quoteList.push(req.body);
    res.sendStatus(404);  // 201 was the positive status response
});

// control + c closes the server
// route, path, URL (can be used rather interchangably)
// .get is an example of the verb. what we are doing. the method.
// terminal: npm install       // can run this no matter what and make sure node/node_modules is installed on your project and 

///////////////////////////////////////////////////CRUD////////////////////////////////////////////////////

// this is what makes a CRUD application.
// create(post) read(get) update(put) delete(delete)
// C - create - post
// R - read - get
// U - update - put
// D - delete - delete
