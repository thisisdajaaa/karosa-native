const fs = require("fs");
const path = require("path");

const screenLocation = fs.readdirSync(
  path.join(__dirname, "../../src/screens")
);
const screen = screenLocation;

function screenExists(comp) {
  return screen.indexOf(comp) >= 0;
}

module.exports = screenExists;
