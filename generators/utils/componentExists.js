/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const atomComponent = fs.readdirSync(
  path.join(__dirname, "../../src/components/atoms")
);
const moleculeComponent = fs.readdirSync(
  path.join(__dirname, "../../src/components/molecules")
);
const organismComponent = fs.readdirSync(
  path.join(__dirname, "../../src/components/organisms")
);
const layoutComponent = fs.readdirSync(
  path.join(__dirname, "../../src/components/templates")
);
const component = atomComponent
  .concat(moleculeComponent)
  .concat(organismComponent)
  .concat(layoutComponent);

function componentExists(comp) {
  return component.indexOf(comp) >= 0;
}

module.exports = componentExists;
