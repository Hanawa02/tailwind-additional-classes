const elementsList = require("./elements-list");

module.exports.pluginFunction = function ({ addUtilities }) {
  const elements = elementsList.elementList();

  addUtilities(elements, { variants: ["responsive", "hover"] });
};
module.exports.elements = elementsList.elements;
