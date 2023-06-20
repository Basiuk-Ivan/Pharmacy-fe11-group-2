export const accordionsData = [
  {
    title: 'Ліки від кашлю , застуди та грипу',
    path: '/cough-cold-flu',
    panel: 'panel1',
    sub: [
      { title: 'Жарознижуючі', path: 'antipyretic', checked: false },
      { title: 'Кашель та біль у горлі', path: 'cough', checked: false },
      { title: 'Назальна терапія', path: 'nasal', checked: false }
    ]
  },
  {
    title: 'Знеболюючі',
    path: '/painkillers',
    panel: 'panel2',
    sub: [
      { title: 'Від спазму', path: 'spasm', checked: false },
      { title: 'Від болю при мігрені', path: 'migraine', checked: false },
      { title: 'Від болю у спині', path: 'back-pain', checked: false }
    ]
  },
  {
    title: 'Для нервової системи',
    path: '/nervous-system',
    panel: 'panel3',
    sub: [
      { title: 'Седативні (заспокійливі)', path: 'sedatives', checked: false },
      { title: 'Антидепресанти', path: 'antidepressants', checked: false }
    ]
  },
  {
    title: 'Для серцево-судинної системи',
    path: '/cardiovascular-system',
    panel: 'panel4',
    sub: [
      { title: 'Гіпертонія', path: 'hypertension', checked: false },
      { title: 'Для розрідження крові', path: 'blood-thinning', checked: false },
      { title: 'Тромбоз', path: 'thrombosis', checked: false },
      { title: 'Варикоз', path: 'varicosity', checked: false }
    ]
  }
];

export const values = {
  'cough-cold-flu': 'panel1',
  antipyretic: 'panel1',
  cough: 'panel1',
  nasal: 'panel1',
  painkillers: 'panel2',
  spasm: 'panel2',
  migraine: 'panel2',
  'back-pain': 'panel2',
  'nervous-system': 'panel3',
  sedatives: 'panel3',
  antidepressants: 'panel3',
  'cardiovascular-system': 'panel4',
  'blood-thinning': 'panel4',
  hypertension: 'panel4',
  thrombosis: 'panel4',
  varicosity: 'panel4'
};
