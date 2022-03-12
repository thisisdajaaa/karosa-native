module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      development: {
        plugins: ["inline-dotenv"],
        compact: false,
      },
      production: {
        compact: true,
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@app/assets": "./src/assets",
            "@app/atoms": "./src/components/atoms",
            "@app/constants": "./src/constants",
            "@app/components": "./src/components",
            "@app/config": "./src/config",
            "@app/hooks": "./src/hooks",
            "@app/templates": "./src/components/templates",
            "@app/molecules": "./src/components/molecules",
            "@app/navigators": "./src/navigators",
            "@app/organisms": "./src/components/organisms",
            "@app/redux": "./src/redux",
            "@app/screens": "./src/screens",
            "@app/styles": "./src/styles",
            "@app/utils": "./src/utils",
          },
        },
        "inline-dotenv",
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      "transform-inline-environment-variables",
      "react-native-reanimated/plugin",
    ],
    retainLines: true,
  };
};
