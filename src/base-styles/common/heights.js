const helper = require("../helper");

const createHeights = () => {
  const heightList = [{ id: "fit-content", value: "fit-content" }];

  for (let index = 1; index <= 100; index++) {
    heightList.push({ id: `${index}vh`, value: `${index}vh` });
    heightList.push({ id: `${index}`, value: `${index * 0.25}rem` });
  }

  for (let index = 100; index <= 500; index++) {
    heightList.push({ id: `${index}`, value: `${index * 0.25}rem` });
  }

  let heights = {};
  for (const item of heightList) {
    const heightItem = {
      [`.height-${item.id}`]: {
        ...helper.createAttribute("height", item.value),
      },
      [`.min-height-${item.id}`]: {
        ...helper.createAttribute("minHeight", item.value),
      },
      [`.max-height-${item.id}`]: {
        ...helper.createAttribute("maxHeight", item.value),
      },
    };

    heights = {
      ...heights,
      ...heightItem,
    };
  }
  return heights;
};

module.exports = {
  ...createHeights(),
};
