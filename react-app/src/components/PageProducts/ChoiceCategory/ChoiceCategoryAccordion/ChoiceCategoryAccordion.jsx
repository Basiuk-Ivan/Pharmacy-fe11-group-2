import * as React from 'react';
import {
  NavLink,
  useLocation
  // useParams
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ThemeProvider } from '@mui/material/styles';
import { changePage } from '../../../../redux/slice/numPageSlice';
import { mainCategory, reset } from '../../../../redux/slice/filterBaseSlice';
import { accordionsData, values } from './ChoiceCategoryAccordionData/ChoiceCategoryAccordionData';

import { mainCategoryStyle, secondCategoryStyle, secondCategoryWrappStyle, marginStyle, secondCategoryStyleCheck } from './style';
import { theme } from '../../../../tools/muiTheme';

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const filterBase = useSelector(state => state.filterBase);

  const [accordions, setAccordions] = useState(accordionsData);

  useEffect(() => {
    setExpanded(values[currentCategory]);
  }, [currentCategory, expanded]);

  useEffect(() => {
    dispatch(reset());
    dispatch(mainCategory(currentCategory));
    dispatch(changePage(1));
  }, [currentCategory, dispatch]);

  const checkedSub = useCallback(
    (itemMainTitle, itemSubTitle) => {
      setAccordions(prevChecked => prevChecked.map(item => (item.title === itemMainTitle
        ? {
          ...item,
          sub: item.sub.map(elem => (elem.title === itemSubTitle ? { ...elem, checked: true } : { ...elem, checked: false }))
        }
        : item)));
    },
    []
  );

  const resetStyles = useCallback(() => {
    setAccordions(prevChecked => prevChecked.map(item => ({
      ...item,
      sub: item.sub.map(elem => ({ ...elem, checked: false }))
    })));
  }, []);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    resetStyles();
  };

  useEffect(() => {
    console.log(filterBase);
  }, [filterBase]);

  return (
    <ThemeProvider theme={theme}>
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
                  <Typography onClick={() => checkedSub(item.title, itemSub.title)} key={itemSub.title} sx={itemSub.checked ? secondCategoryStyleCheck : secondCategoryStyle}>{itemSub.title}</Typography>
                </NavLink>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </ThemeProvider>
  );
}
