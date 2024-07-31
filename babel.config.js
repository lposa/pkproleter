// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"], // Adjust if your source files are in a different folder
          alias: {
            "@": "./src", // Adjust the path based on your project structure
            "@components": "./src/components", // Specific alias for components
          },
        },
      ],
    ],
  };
};
