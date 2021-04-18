const elementsList = require("./elements-list");

module.exports.pluginFunction = function ({ addUtilities }) {
  const elements = elementsList.elements;

  addUtilities(elements, {
    variants: [
      "responsive",
      "first",
      "last",
      "odd",
      "even",
      "visited",
      "checked",
      "group-hover",
      "group-focus",
      "focus-within",
      "hover",
      "focus",
      "focus-visible",
      "active",
      "disabled",
    ],
  });
};
module.exports.elements = elementsList.elements;
