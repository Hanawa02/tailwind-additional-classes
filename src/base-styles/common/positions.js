const helper = require("../helper");

const createPositions = () => {
  const positionList = [{ id: "0", value: "0" }];

  for (let index = 1; index <= 64; index++) {
    positionList.push({ id: index, value: `${index * 0.25}rem` });
    positionList.push({ id: `${index}p`, value: `${index}%` });
  }

  let positions = {};
  for (const item of positionList) {
    const positionItem = {
      [`.top-${item.id}`]: { ...helper.createAttribute("top", item.value) },
      [`.bottom-${item.id}`]: {
        ...helper.createAttribute("bottom", item.value),
      },
      [`.left-${item.id}`]: { ...helper.createAttribute("left", item.value) },
      [`.right-${item.id}`]: { ...helper.createAttribute("right", item.value) },
    };

    positions = {
      ...positions,
      ...positionItem,
    };
  }
  return positions;
};

module.exports = {
  ...createPositions(),
};
