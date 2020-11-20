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
        paddingLeft: item.value,
        paddingRight: item.value,
      },
      [`.py-${item.id}`]: {
        paddingTop: item.value,
        paddingBottom: item.value,
      },
      [`.pr-${item.id}`]: {
        paddingRight: item.value,
      },
      [`.pl-${item.id}`]: {
        paddingLeft: item.value,
      },
      [`.pt-${item.id}`]: {
        paddingTop: item.value,
      },
      [`.pb-${item.id}`]: {
        paddingBottom: item.value,
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
