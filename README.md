# TypeScript React Native

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Recommended Workflow](#recommended-workflow)
- [Naming Convention](#naming-convention)
- [Future Plans](#future-plans)

## Prerequisites

- [NodeJS](https://nodejs.org/)
- React Native
- TypeScript
- Expo
- Expo app (iOs or Android)

## Getting Started

```bash
# Install dependencies for the host
npm install

# Start the application
npm run start
```

This page should automatically open in your browser. You can choose to run it in your preferred platform by selecting the options on the left. You can also scan the QR code using the Expo app on iOS and android to execute it on your mobile device.
![image](https://user-images.githubusercontent.com/9653764/97178203-236f4d80-17d2-11eb-9b85-c6feb0b505ec.png)

## Project Structure

| Name                          | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| **assets**/\*                 | All the static assets needed for the application.            |
| **src/components**/\*         | All app wise common components                               |
| **src/config**/environment/\* | Any app level environment configs should go here.            |
| **src/config**/axios/\*       | Configurations for axios                                     |
| **src/hooks**/\*              | Custom react hooks                                           |
| **src/navigators**/\*         | Define your navigation and routings here                     |
| **src/redux**/\*              | Redux store that stores all global state of the app          |
| **src/screens**/\*            | Screens made out of components                               |
| .eslintrc                     | Eslint configuration                                         |
| .gitignore                    | Folder and files ignored by git.                             |
| app.json                      | App configurations by expo                                   |
| App.tsx                       | Entry point for the applicatinon                             |
| babel.config.js               | Babel configuration                                          |
| package.json                  | NPM dependencies.                                            |
| package-lock.json             | Contains exact versions of NPM dependencies in package.json. |
| tsconfig.json                 | Contains typescript configuration for this project.          |

## Recommended Workflow

1. Create the component ( if needed )
1. Create the screen
1. Add the navigation

### Components ( if needed )

Check the `components` folder if you have neccessary components needed to finish your screen. If not, you can define the component in the screen itself or add any components here if you think it is reusable between screens.

1. Create a folder for the component in `src/components`. The name should be able to give others the idea what the component is about.
1. Create a TSX file called `index.tsx` under that folder. This file will define the component itself.
1. Create a `styles.ts` file. This file will define the styling of the component.
1. (Optional) You can also create a component within a component for complex components.

### Screen

The screen defines a collection of components. You can define some components here if you think it is only usable within the screen but preferrably components should be resuable. Any logic, API request, or retrieving from redux store should be defined here.

1. Create a folder under `src/screens`. Make sure the name is concise enough to understand what the component is about.
1. Create a TSX called `index.tsx`. This should contain the all the components that make up the screen.

### Navigation

The navigation defines the routing/relationship between the screens. For more info, refer to this [documentation.](https://reactnavigation.org/docs/navigating)

## Naming Convention

### For files and folders

Use `kebab-case` for files and folders and `camelCase` for variables within files. The only exception would be the component names which should be `PascalCase`.

```
// File name is edit-profile.tsx

const EditProfileScreen: React.FC = () => {
  const propName = 'Sample'
  return <EditProfile name={propName} />;
};
```

In some cases, we include the file `functionality` in its file name in the format:

`<file-name>-<functionality>.<extension>`

For example:

- user`-service`.ts
- user`-model`.ts
- bcrypt`-util`.ts

TypeScript `Interface` and `Type` file names should match their definition name.

For example:

| Interface/Type name | File name            |
| ------------------- | -------------------- |
| `IRepository`       | `IRepository`.ts     |
| `IUserRepository`   | `IUserRepository`.ts |

## Deployment

Under construction

### Production

Under construction

### Test

Under construction

## Future Plans

- Testing
