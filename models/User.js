/**
 * Users model
 * @type {userSchema} - creates a user model in our MongoDb
 */
const mongoose = require("mongoose");
const { Schema } = mongoose; // const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
