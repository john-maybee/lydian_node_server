const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public')); // when you serve up a static, you have to make sure it has a index.html inside
app.use(express.urlencoded());

const quoteRouter = require('./routes/quotes_router');

app.use('/quotes', quoteRouter); // this is like the traffic director telling us which direction to go.

app.listen(port, () => {
    console.log('listening on port, ', port);
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
