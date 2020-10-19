module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@app/components": "./src/components",
            "@app/config": "./src/config",
            "@app/hooks": "./src/hooks",
            "@app/navigators": "./src/navigators",
            "@app/redux": "./src/redux",
            "@app/screens": "./src/screens",
            "@app/styles": "./src/styles",
          },
        },
      ],
    ],
  };
};
