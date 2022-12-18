const doNumcontrol = (numcontrol, step, min = null, max = null) => {
  getAttrs([numcontrol, numcontrol + '_max'], (values) => {
    let value = +values[numcontrol] || 0;
    value += step;

    if (min !== null) value = Math.max(value, min);

    if (max !== null) {
      if (isNaN(max)) {
        let value_max = +values[max];
        value = Math.min(value, value_max);
      } else value = Math.min(value, max);
    }

    setAttrs({ [numcontrol]: value });
  });
};
