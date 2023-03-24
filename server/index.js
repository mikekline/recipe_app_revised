const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const accountRouter = require("./routes/account_router");
const recipeRouter = require("./routes/recipe_router");
const Port = process.env.PORT || 3000;
require("dotenv").config();

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//conecting to database
const db = require("./db");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/**************Endpoints******************/

//end point for login/register
app.use("/user", accountRouter);

//end point for recipes
app.use("/recipe_app", recipeRouter);

//Testing sever is runing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/*****************************************/

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
