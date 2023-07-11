import * as React from 'react';
import {
  NavLink,
  useLocation
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ThemeProvider } from '@mui/material/styles';
import { changePage } from '../../../../redux/slice/numPageSlice';
import { mainCategory, reset } from '../../../../redux/slice/filterBaseSlice';
import AccordData from './ChoiceCategoryAccordionData/ChoiceCategoryAccordionData';

import { mainCategoryStyle, secondCategoryStyle, secondCategoryWrappStyle, marginStyle, secondCategoryStyleCheck } from './style';
import { theme } from '../../../../tools/muiTheme';

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(queryString);
  const currentCategory = searchParams.get('categories');

  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(false);
  const [accordionsData, values] = AccordData();
  const [accordions, setAccordions] = useState(accordionsData);
  const [updateSubCategory, setUpdateSubCategory] = useState(false);

  useEffect(() => {
    dispatch(reset());
    dispatch(mainCategory(currentCategory));
    dispatch(changePage(1));
  }, [currentCategory, dispatch]);

  useEffect(() => {
    setExpanded(values[currentCategory]);
    if (currentCategory === 'cough-cold-flu' || currentCategory === 'painkillers' || currentCategory === 'nervous-system' || currentCategory === 'cardiovascular-system') {
      setAccordions(accordionsData);
    }
  }, [currentCategory, expanded]);

  useEffect(() => {
    setAccordions(accordionsData);
  }, [expanded]);

  function updateSub() {
    setAccordions(prevAccordions => {
      const updatedAccordions = prevAccordions.map(item => {
        const updatedSub = item.sub.map(elem =>
          (elem.path === currentCategory ? { ...elem, checked: true } : { ...elem, checked: false })
        );
        return { ...item, sub: updatedSub };
      });

      return updatedAccordions;
    });
  }

  const checkedSub = useCallback(
    (itemMainTitle, itemSubTitle) => {
      setAccordions(prevAccordions => {
        const updatedAccordions = prevAccordions.map(item => {
          if (item.title === itemMainTitle) {
            const updatedSub = item.sub.map(elem =>
              (elem.title === itemSubTitle ? { ...elem, checked: true } : { ...elem, checked: false })
            );
            return { ...item, sub: updatedSub };
          }
          return item;
        });

        return updatedAccordions;
      });
    },
    []
  );

  useEffect(() => {
    setUpdateSubCategory(true);
  }, []);

  useEffect(() => {
    if (updateSubCategory) {
      updateSub();
      setUpdateSubCategory(false);
    }
  }, [updateSubCategory]);

  const handleChange = panel => {
    return (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      setAccordions(accordionsData);
    };
  };

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
            <NavLink to={item.req}>
              <AccordionSummary sx={mainCategoryStyle} expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
            </NavLink>
            <AccordionDetails sx={secondCategoryWrappStyle}>
              {item.sub.map(itemSub => (
                <NavLink key={itemSub.title} to={`/${itemSub.req}`}>
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
