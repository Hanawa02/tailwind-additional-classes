const heights = require("./common/heights");
const margins = require("./common/margins");
const paddings = require("./common/paddings");
const positions = require("./common/positions.js");
const widths = require("./common/widths.js");

const prefix = "ac";

const addPrefix = function (item) {
  const objectKeys = Object.keys(item);
  if (!objectKeys) return undefined;

  const prefixedObject = {};

  for (const key of objectKeys) {
    const newKey = key.replace(/([.])/g, `${prefix}-`);
    prefixedObject[newKey] = item[key];
  }
  return prefixedObject;
};

const elements = {
  ...addPrefix(heights),
  ...addPrefix(margins),
  ...addPrefix(paddings),
  ...addPrefix(positions),
  ...addPrefix(widths),
};

module.exports.elements = elements;
