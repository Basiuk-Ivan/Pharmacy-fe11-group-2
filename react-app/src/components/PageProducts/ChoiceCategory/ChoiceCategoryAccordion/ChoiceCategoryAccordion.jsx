import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, ButtonBase} from '@mui/material';
import {
  mainCategoryStyle,
  secondCategoryStyle,
  secondCategoryStyle4px,
  secondCategoryWrappStyle,
  marginStyle
} from './style';

export default function ChoiceCategoryAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const changeSubCategory = event => {
    console.log(event.target.innerText);
  };

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            Ліки від кашлю , застуди та грипу
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <ButtonBase onClick={changeSubCategory}>
            <Typography sx={secondCategoryStyle}>Жарознижуючі</Typography>
          </ButtonBase>
          <Typography component="button" onClick={changeSubCategory} sx={secondCategoryStyle}>Кашель та біль у горлі</Typography>
          <Typography sx={secondCategoryStyle}>Назальна терапія</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Знеболюючі</Typography>
        </AccordionSummary>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle}>Від спазму</Typography>
          <Typography sx={secondCategoryStyle}>Від болю при мігрені</Typography>
          <Typography sx={secondCategoryStyle}>Від болю у спині</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            Для нервової системи
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle4px}>Седативні (заспокійливі)</Typography>
          <Typography sx={secondCategoryStyle}>Антидепресанти</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Для серцево-судинної системи</Typography>
        </AccordionSummary>
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
