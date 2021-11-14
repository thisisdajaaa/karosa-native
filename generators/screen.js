/**
 *
 * Generators
 * @format
 *
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const screenGenerator = require("./screen/index.js");

module.exports = (plop) => {
  plop.setGenerator("screen", screenGenerator);
  plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
};
