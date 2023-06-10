import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ButtonBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { mainCategory } from '../../../../redux/slice/filterBaseSlice';
import {
  mainCategoryStyle,
  secondCategoryStyle,
  secondCategoryWrappStyle,
  marginStyle
} from './style';

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const filterBase = useSelector(state => state.filterBase);

  useEffect(() => {
    const values = {
      coughColdFlu: 'panel1',
      painkillers: 'panel2',
      nervousSystem: 'panel3',
      cardiovascularSystem: 'panel4'
    };
    setExpanded(values[currentCategory]);
  }, [currentCategory, expanded]);

  useEffect(() => {
    dispatch(mainCategory(currentCategory));
  }, [currentCategory, dispatch]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const changeSubCategory = event => {
    // eslint-disable-next-line no-console
    console.log(event.target.innerText);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(filterBase);
  }, [filterBase]);

  const accordions = [
    {
      path: '/coughColdFlu',
      panel: 'panel1',
      title: 'Ліки від кашлю , застуди та грипу',
      sub: ['Жарознижуючі', 'Кашель та біль у горлі', 'Назальна терапія']
    },
    {
      path: '/painkillers',
      panel: 'panel2',
      title: 'Знеболюючі',
      sub: ['Від спазму', 'Від болю при мігрені', 'Від болю у спині']
    },
    {
      path: '/nervousSystem',
      panel: 'panel3',
      title: 'Для нервової системи',
      sub: ['Седативні (заспокійливі)', 'Антидепресанти']
    },
    {
      path: '/cardiovascularSystem',
      panel: 'panel4',
      title: 'Для серцево-судинної системи',
      sub: ['Гіпертонія', 'Для розрідження крові', 'Тромбоз', 'Варикоз']
    }
  ];

  return (
    <div>

      {accordions.map(item => (
        // eslint-disable-next-line max-len
        <Accordion key={item.panel} expanded={expanded === item.panel} onChange={handleChange(item.panel)} sx={marginStyle}>
          <NavLink to={item.path}>
            <AccordionSummary
              sx={mainCategoryStyle}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography>
                {item.title}
              </Typography>
            </AccordionSummary>
          </NavLink>
          <AccordionDetails sx={secondCategoryWrappStyle}>
            {item.sub.map(itemSub => (
              <ButtonBase key={itemSub} onClick={changeSubCategory}>
                <Typography sx={secondCategoryStyle}>{itemSub}</Typography>
              </ButtonBase>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
