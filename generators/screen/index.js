/**
 *
 * Screen Generator
 * @format
 *
 */

"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
const screenExists = require("../utils/screenExists");

module.exports = {
  description: "Add an unconnected screen",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Type the name of the screen",
      default: "Screen",
      validate: (value) => {
        if (/.+/.test(value)) {
          return screenExists(value)
            ? "A screen with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../src/screens/{{properCase name}}/index.ts",
        templateFile: "./screen/index.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/screens/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./screen/stateless.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/screens/{{properCase name}}/config/index.ts",
        templateFile: "./screen/config.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/screens/{{properCase name}}/types/index.ts",
        templateFile: "./screen/types.js.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
