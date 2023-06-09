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
  secondCategoryStyle4px,
  secondCategoryWrappStyle,
  marginStyle
} from './style';
// import { navLinkStyles } from '../../../PageHome/Menu/style';

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  // const { filterMainCategory } = useSelector(state => state.filterBase);
  const filterBase = useSelector(state => state.filterBase);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    currentCategory === 'cough-cold-flu' && setExpanded('panel1');
    // eslint-disable-next-line no-unused-expressions
    currentCategory === 'painkillers' && setExpanded('panel2');
    // eslint-disable-next-line no-unused-expressions
    currentCategory === 'nervous-system' && setExpanded('panel3');
    // eslint-disable-next-line no-unused-expressions
    currentCategory === 'cardiovascular-system' && setExpanded('panel4');
  }, [currentCategory, expanded]);

  useEffect(() => {
    dispatch(mainCategory(currentCategory));
  }, [currentCategory, dispatch]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const changeSubCategory = event => {
    console.log(event.target.innerText);
  };

  useEffect(() => {
    console.log(filterBase);
  }, [filterBase]);

  // useEffect(() => {
  //   console.log(currentCategory);
  // }, [currentCategory]);

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={marginStyle}>
        <NavLink to="/cough-cold-flu">
          <AccordionSummary
            sx={mainCategoryStyle}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              Ліки від кашлю , застуди та грипу
            </Typography>
          </AccordionSummary>
        </NavLink>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <ButtonBase onClick={changeSubCategory}>
            <Typography sx={secondCategoryStyle}>Жарознижуючі</Typography>
          </ButtonBase>
          {/* eslint-disable-next-line max-len */}
          <Typography component="button" onClick={changeSubCategory} sx={secondCategoryStyle}>Кашель та біль у горлі</Typography>
          <Typography sx={secondCategoryStyle}>Назальна терапія</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={marginStyle}>
        <NavLink to="/painkillers">
          <AccordionSummary
            sx={mainCategoryStyle}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Знеболюючі</Typography>
          </AccordionSummary>
        </NavLink>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle}>Від спазму</Typography>
          <Typography sx={secondCategoryStyle}>Від болю при мігрені</Typography>
          <Typography sx={secondCategoryStyle}>Від болю у спині</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={marginStyle}>
        <NavLink to="/nervous-system">
          <AccordionSummary
            sx={mainCategoryStyle}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>
              Для нервової системи
            </Typography>
          </AccordionSummary>
        </NavLink>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle4px}>Седативні (заспокійливі)</Typography>
          <Typography sx={secondCategoryStyle}>Антидепресанти</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <NavLink to="/cardiovascular-system">
          <AccordionSummary
            sx={mainCategoryStyle}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Для серцево-судинної системи</Typography>
          </AccordionSummary>
        </NavLink>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle}>Гіпертонія</Typography>
          <Typography sx={secondCategoryStyle}>Для розрідження крові</Typography>
          <Typography sx={secondCategoryStyle}>Тромбоз</Typography>
          <Typography sx={secondCategoryStyle}>Варикоз</Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
