export const accordions = [
  {
    title: 'Ліки від кашлю , застуди та грипу',
    path: '/coughColdFlu',
    panel: 'panel1',
    sub: [
      { title: 'Жарознижуючі', path: 'antipyretic' },
      { title: 'Кашель та біль у горлі', path: 'cough' },
      { title: 'Назальна терапія', path: 'nasal' }
    ]
  },
  {
    title: 'Знеболюючі',
    path: '/painkillers',
    panel: 'panel2',
    sub: [
      { title: 'Від спазму', path: 'spasm' },
      { title: 'Від болю при мігрені', path: 'migraine' },
      { title: 'Від болю у спині', path: 'backPain' }
    ]
  },
  {
    title: 'Для нервової системи',
    path: '/nervousSystem',
    panel: 'panel3',
    sub: [
      { title: 'Седативні (заспокійливі)', path: 'sedatives' },
      { title: 'Антидепресанти', path: 'antidepressants' }
    ]
  },
  {
    title: 'Для серцево-судинної системи',
    path: '/cardiovascularSystem',
    panel: 'panel4',
    sub: [
      { title: 'Гіпертонія', path: 'hypertension' },
      { title: 'Для розрідження крові', path: 'bloodThinning' },
      { title: 'Тромбоз', path: 'thrombosis' },
      { title: 'Варикоз', path: 'varicosity' }
    ]
  }
];

export const values = {
  coughColdFlu: 'panel1',
  antipyretic: 'panel1',
  cough: 'panel1',
  nasal: 'panel1',
  painkillers: 'panel2',
  spasm: 'panel2',
  migraine: 'panel2',
  backPain: 'panel2',
  nervousSystem: 'panel3',
  sedatives: 'panel3',
  antidepressants: 'panel3',
  cardiovascularSystem: 'panel4',
  bloodThinning: 'panel4',
  hypertension: 'panel4',
  thrombosis: 'panel4',
  varicosity: 'panel4'
};
