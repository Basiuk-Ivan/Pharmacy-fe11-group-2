import * as React from 'react';
import {
  NavLink,
  useLocation
  // useParams
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { changePage } from '../../../../redux/slice/numPageSlice';
import { mainCategory, reset } from '../../../../redux/slice/filterBaseSlice';
import { accordions, values } from './ChoiceCategoryAccordionData/ChoiceCategoryAccordionData';

import { mainCategoryStyle, secondCategoryStyle, secondCategoryWrappStyle, marginStyle } from './style';

export default function ChoiceCategoryAccordion() {
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  // const filterBase = useSelector(state => state.filterBase);

  useEffect(() => {
    setExpanded(values[currentCategory]);
  }, [currentCategory, expanded]);

  useEffect(() => {
    dispatch(reset());
    dispatch(mainCategory(currentCategory));
    dispatch(changePage(1));
  }, [currentCategory, dispatch]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // useEffect(() => {
  //   console.log(filterBase);
  // }, [filterBase]);

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
                <Typography key={itemSub.title} sx={secondCategoryStyle}>{itemSub.title}</Typography>
              </NavLink>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
