import { useSelector } from 'react-redux';

function AccordData() {
  const filterBase = useSelector(state => state.filterBase);

  const accordionsData = [
    {
      title: 'Ліки від кашлю , застуди та грипу',
      path: '/cough-cold-flu',
      req: `?page=1&categories=cough-cold-flu&sort=1&limit=${filterBase.limit}`,
      panel: 'panel1',
      sub: [
        { title: 'Жарознижуючі', path: 'antipyretic', req: `product?page=1&categories=antipyretic&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Кашель та біль у горлі', path: 'cough', req: `product?page=1&categories=cough&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Назальна терапія', path: 'nasal', req: `product?page=1&categories=nasal&sort=1&limit=${filterBase.limit}`, checked: false }
      ]
    },
    {
      title: 'Знеболюючі',
      path: '/painkillers',
      req: `?page=1&categories=painkillers&sort=1&limit=${filterBase.limit}`,
      panel: 'panel2',
      sub: [
        { title: 'Від спазму', path: 'spasm', req: `product?page=1&categories=spasm&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Від болю при мігрені', path: 'migraine', req: `product?page=1&categories=migraine&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Від болю у спині', path: 'back-pain', req: `product?page=1&categories=back-pain&sort=1&limit=${filterBase.limit}`, checked: false }
      ]
    },
    {
      title: 'Для нервової системи',
      path: '/nervous-system',
      req: `?page=1&categories=nervous-system&sort=1&limit=${filterBase.limit}`,
      panel: 'panel3',
      sub: [
        { title: 'Седативні (заспокійливі)', path: 'sedatives', req: `product?page=1&categories=sedatives&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Антидепресанти', path: 'antidepressants', req: `product?page=1&categories=antidepressants&sort=1&limit=${filterBase.limit}`, checked: false }
      ]
    },
    {
      title: 'Для серцево-судинної системи',
      path: '/cardiovascular-system',
      req: `?page=1&categories=cardiovascular-system&sort=1&limit=${filterBase.limit}`,
      panel: 'panel4',
      sub: [
        { title: 'Гіпертонія', path: 'hypertension', req: `product?page=1&categories=hypertension&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Для розрідження крові', path: 'blood-thinning', req: `product?page=1&categories=blood-thinning&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Тромбоз', path: 'thrombosis', req: `product?page=1&categories=thrombosis&sort=1&limit=${filterBase.limit}`, checked: false },
        { title: 'Варикоз', path: 'varicosity', req: `product?page=1&categories=varicosity&sort=1&limit=${filterBase.limit}`, checked: false }
      ]
    }
  ];

  const values = {
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
  return [accordionsData, values];
}

export default AccordData;
