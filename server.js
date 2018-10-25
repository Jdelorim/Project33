const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./models");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport")

const PORT = process.env.PORT || 3001;
const app = express();



// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "nklsfkndf",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize());
app.use(passport.session());

require("./routes/apiRoutes")(app);
require("./routes/loginRoutes.js")(app);
// Define API routes here (added loginRoutes)

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

