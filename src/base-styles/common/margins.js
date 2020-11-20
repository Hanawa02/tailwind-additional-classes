const createMargins = () => {
  const marginList = [];

  for (let index = -100; index <= 100; index++) {
    marginList.push({ id: `${index}`, value: `${index * 0.25}rem` });
    marginList.push({ id: `${index}p`, value: `${index}%` });
  }

  let margins = {};
  for (const item of marginList) {
    const marginItem = {
      [`.m-${item.id}`]: {
        margin: item.value,
      },
      [`.mx-${item.id}`]: {
        marginLeft: item.value,
        marginRight: item.value,
      },
      [`.my-${item.id}`]: {
        marginTop: item.value,
        marginBottom: item.value,
      },
      [`.mr-${item.id}`]: {
        marginRight: item.value,
      },
      [`.ml-${item.id}`]: {
        marginLeft: item.value,
      },
      [`.mt-${item.id}`]: {
        marginTop: item.value,
      },
      [`.mb-${item.id}`]: {
        marginBottom: item.value,
      },
    };

    margins = {
      ...margins,
      ...marginItem,
    };
  }
  return margins;
};

module.exports = { ...createMargins() };
