/**
 *
 * Generators
 * @format
 *
 */

const screenGenerator = require("./screen/index.js");

module.exports = (plop) => {
  plop.setGenerator("screen", screenGenerator);
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
};
