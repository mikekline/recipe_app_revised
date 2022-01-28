const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const Port = process.env.PORT;
const sessionSecret = process.env.SECRET;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


//express session
app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));



//conecting to the database, uses db/index.js
const db = require('./db');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//mounts path for login/register endpoints
const accountRouter = require('./routes/account_router');
app.use('/', accountRouter); 


//mounts path for recipes endpoints
const recipeRouter = require('./routes/recipe_router');
app.use('/recipe_app', recipeRouter); 



/* getting from server and displaying /test end point */ 
app.get('/test', (req, res) => {
    res.send('Hello World!')
})



//servers React files
// app.use(express.static(path.join('/var/www/html/A_Cooks_Tale/public', 'build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join('/var/www/html/A_Cooks_Tale/public', 'build', 'index.html'));
// });


//servers React files for development
// app.use(express.static(path.join('public', 'build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join('public', 'build', 'index.html'));
// });

app.listen(Port, () => {
    console.log(`Server running on port: ${Port}`);
});