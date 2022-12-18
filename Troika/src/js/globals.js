const G_NAVIGATION = {
  nav: ['skillsspells', 'attacks', 'inventory', 'miscellaneous', 'all'],
};

const G_EDITORS = ['header', 'stats'];

const G_NUMCONTROL = ['skill', 'stamina', 'stamina_max', 'luck', 'luck_max'];
const G_NUMCONTROL_OPTIONS = {
  default: { step: 1 },
  skill: { step: 1, min: 0 },
  stamina: { step: 1, min: 0, max: 'stamina_max' },
  stamina_max: { step: 1, min: 0 },
  luck: { step: 1, min: 0, max: 'luck_max' },
  luck_max: { step: 1, min: 0 },
};
