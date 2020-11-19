const heights = require("./base-styles/common/heights");
const margins = require("./base-styles/common/margins");
const paddings = require("./base-styles/common/paddings");
const positions = require("./base-styles/common/positions.js");
const widths = require("./base-styles/common/widths.js");

const prefix = "ac";

const addPrefix = function (item) {
  const objectKeys = Object.keys(item);
  if (!objectKeys) return undefined;

  return objectKeys.flatMap((key) => {
    const newKey = key.replace(/([.])/g, `.${prefix}-`);
    return { [newKey]: item[key] };
  });
};

const elements = {
  heights: addPrefix(heights),
  margins: addPrefix(margins),
  paddings: addPrefix(paddings),
  positions: addPrefix(positions),
  widths: addPrefix(widths),
};

module.exports.elements = elements;

const elementList = function () {
  return Object.values(elements).flat();
};

module.exports.elementList = elementList;
