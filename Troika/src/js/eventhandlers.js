Object.keys(G_NAVIGATION).forEach((navbar) => {
  G_NAVIGATION[navbar].forEach((btn) => {
    on(`clicked:${navbar}_${btn}`, (eventInfo) => {
      setAttrs({ [navbar]: btn });
    });
  });
});

G_EDITORS.forEach((toggle) => {
  on(`clicked:${toggle}-editor`, (eventInfo) => {
    console.log(eventInfo);
    getAttrs([`${toggle}_editor`], (values) => {
      const value = values[`${toggle}_editor`] === '0' ? 'on' : '0';
      setAttrs({ [`${toggle}_editor`]: value });
    });
  });
});

G_NUMCONTROL.forEach((numcontrol) => {
  on(`clicked:${numcontrol}-up clicked:${numcontrol}-down`, (eventInfo) => {
    const stepDirection = eventInfo.triggerName.includes('up') ? 1 : -1;
    let { step, min, max } = G_NUMCONTROL_OPTIONS.hasOwnProperty(numcontrol)
      ? G_NUMCONTROL_OPTIONS[numcontrol]
      : G_NUMCONTROL_OPTIONS.default;

    doNumcontrol(numcontrol, step * stepDirection, min, max);
  });
});
