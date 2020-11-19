function createAttribute(attribute, Attribute) {
  return { [`${attribute}`]: Attribute };
}

module.exports = {
  createAttribute,
};
