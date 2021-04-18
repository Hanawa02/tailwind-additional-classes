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
        "margin-left": item.value,
        "margin-right": item.value,
      },
      [`.my-${item.id}`]: {
        "margin-top": item.value,
        "margin-bottom": item.value,
      },
      [`.mr-${item.id}`]: {
        "margin-right": item.value,
      },
      [`.ml-${item.id}`]: {
        "margin-left": item.value,
      },
      [`.mt-${item.id}`]: {
        "margin-top": item.value,
      },
      [`.mb-${item.id}`]: {
        "margin-bottom": item.value,
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
