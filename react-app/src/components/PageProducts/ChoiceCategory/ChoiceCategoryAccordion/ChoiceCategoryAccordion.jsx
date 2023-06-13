import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  NavLink,
  useLocation
  // useParams
} from 'react-router-dom';
import { mainCategory } from '../../../../redux/slice/filterBaseSlice';
// import { fetchProductsData } from '../../../../redux/slice/productsSlice';

import { mainCategoryStyle, secondCategoryStyle, secondCategoryWrappStyle, marginStyle } from './style';

const accordions = [
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

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const filterBase = useSelector(state => state.filterBase);

  useEffect(() => {
    const values = {
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
    setExpanded(values[currentCategory]);
  }, [currentCategory, expanded]);

  useEffect(() => {
    dispatch(mainCategory(currentCategory));
  }, [currentCategory, dispatch]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const { category } = useParams();

  // const { numPage } = useSelector(state => state.numPage);

  // const changeSubCategory = event => {
  //   // eslint-disable-next-line no-console
  //   // const cat = event.target.innerText;
  //   dispatch(fetchProductsData({ category, numPage }));
  // };

  useEffect(() => {
    // console.log(filterBase);
  }, [filterBase]);

  return (
    <div>
      {accordions.map(item => (
        <Accordion
          key={item.panel}
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
          sx={marginStyle}
        >
          <NavLink to={item.path}>
            <AccordionSummary sx={mainCategoryStyle} expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.title}</Typography>
            </AccordionSummary>
          </NavLink>
          <AccordionDetails sx={secondCategoryWrappStyle}>
            {item.sub.map(itemSub => (
              <NavLink key={itemSub.title} to={`/${itemSub.path}`}>
                <ButtonBase
                  key={itemSub.title}
                  // onClick={changeSubCategory}
                >
                  <Typography sx={secondCategoryStyle}>{itemSub.title}</Typography>
                </ButtonBase>
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
