/**
 * If/else to check production or dev
 */

if (process.env.NODE_ENV === "production") {
  // return prod Keys
  module.exports = require("./prod");
} else {
  // return dev keys
  module.exports = require("./dev");
}
