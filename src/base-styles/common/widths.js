const helper = require("../helper");

const createWidths = () => {
  const widthList = [{ id: "fit-content", value: "fit-content" }];

  for (let index = 1; index <= 100; index++) {
    widthList.push({ id: `${index}vw`, value: `${index}vw` });
    widthList.push({ id: `${index}p`, value: `${index}%` });
    widthList.push({ id: `${index}`, value: `${index * 0.25}rem` });
  }

  for (let index = 100; index <= 500; index++) {
    widthList.push({ id: `${index}`, value: `${index * 0.25}rem` });
  }

  let widths = {};
  for (const item of widthList) {
    const widthItem = {
      [`.width-${item.id}`]: { ...helper.createAttribute("width", item.value) },
      [`.min-width-${item.id}`]: {
        ...helper.createAttribute("minWidth", item.value),
      },
      [`.max-width-${item.id}`]: {
        ...helper.createAttribute("maxWidth", item.value),
      },
    };

    widths = {
      ...widths,
      ...widthItem,
    };
  }
  return widths;
};

module.exports = {
  ...createWidths(),
};
