/**
 * Starting our Express Server and importing routes, dependencies, etc
 */

require("./models/User");
require("./services/passport");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

const PORT = process.env.PORT || 5000;

const app = express();

/**
 * Middlewares
 * Used to modify incoming req to app, before sent off to route Handlers
 * @function -cookieSession - extracts data out of cookie, and assigns it to res.session so passport can access user id
 * @function -passport.initialize => pulls user id out of cookie
 * @function -passport.session => turn user id into a user
 */

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app); // can alse be written - require("./routes/authRoutes")(app);

/**
 * Starting our server, and listed port
 */

app.listen(PORT, () => {
  console.log(`\nServer started, and runnning on http://localhost:${PORT}.`);
});

/**
* MongoDB Connection
* @function db.on - Show any mongoose errors
* @function db.once - Log success message once logged into mongoose
*/

const db = mongoose.connection;

mongoose.connect(keys.mLabURI, {
  useMongoClient: true
});

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
