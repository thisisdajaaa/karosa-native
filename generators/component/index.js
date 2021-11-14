/**
 *
 * Component Generator
 * @format
 *
 */

"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
const componentExists = require("../utils/componentExists");

module.exports = {
  description:
    "Add an unconnected component (atoms, molecules, organisms, layouts)",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Type the name of the component",
      default: "Button",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "list",
      name: "folder",
      message: "Where do you want to keep this component?",
      default: "atoms",
      choices: () => ["atoms", "molecules", "organisms", "templates"],
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "../src/components/{{ folder }}/{{properCase name}}/index.ts",
        templateFile: "./component/index.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../src/components/{{ folder }}/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "./component/stateless.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../src/components/{{ folder }}/{{properCase name}}/__tests__/{{properCase name}}-test.ts",
        templateFile: "./component/test.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../src/components/{{ folder }}/{{properCase name}}/config/index.ts",
        templateFile: "./component/config.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../src/components/{{ folder }}/{{properCase name}}/styles/index.ts",
        templateFile: "./component/style.js.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../src/components/{{ folder }}/{{properCase name}}/types/index.ts",
        templateFile: "./component/types.js.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
