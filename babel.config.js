require("core-js/stable");
require("regenerator-runtime/runtime");

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11",
        },
        useBuiltIns: "usage",
        corejs: "3.6.4",
      },
    ],
  ];
  const plugins = [["@babel/transform-runtime"]];

  return {
    presets,
    plugins,
  };
};
