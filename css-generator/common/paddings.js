const createPaddings = () => {
  const paddingList = [];

  for (let index = -100; index <= 100; index++) {
    paddingList.push({ id: `${index}`, value: `${index * 0.25}rem` });
    paddingList.push({ id: `${index}p`, value: `${index}%` });
  }

  let paddings = {};
  for (const item of paddingList) {
    const paddingItem = {
      [`.p-${item.id}`]: {
        padding: item.value,
      },
      [`.px-${item.id}`]: {
        "padding-left": item.value,
        "padding-right": item.value,
      },
      [`.py-${item.id}`]: {
        "padding-top": item.value,
        "padding-bottom": item.value,
      },
      [`.pr-${item.id}`]: {
        "padding-right": item.value,
      },
      [`.pl-${item.id}`]: {
        "padding-left": item.value,
      },
      [`.pt-${item.id}`]: {
        "padding-top": item.value,
      },
      [`.pb-${item.id}`]: {
        "padding-bottom": item.value,
      },
    };

    paddings = {
      ...paddings,
      ...paddingItem,
    };
  }
  return paddings;
};

module.exports = { ...createPaddings() };
