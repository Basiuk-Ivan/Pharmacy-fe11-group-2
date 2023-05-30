import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  iconStyle,
  mainCategoryStyle,
  secondCategoryStyle,
  secondCategoryStyle4px,
  secondCategoryWrappStyle,
  marginStyle,
  mainCategoryActiveStyle
} from './style';

// eslint-disable-next-line react/function-component-definition
export default function ChoiceCategoryAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryActiveStyle}
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
        >
          <Typography sx={mainCategoryStyle}>
            Ліки від кашлю , застуди та грипу
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle}>Жарознижуючі</Typography>
          <Typography sx={secondCategoryStyle}>Кашель та біль у горлі</Typography>
          <Typography sx={secondCategoryStyle}>Назальна терапія</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryActiveStyle}
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
        >
          <Typography sx={mainCategoryStyle}>Знеболюючі</Typography>
        </AccordionSummary>
        <AccordionDetails sx={secondCategoryWrappStyle}>
          <Typography sx={secondCategoryStyle}>Від спазму</Typography>
          <Typography sx={secondCategoryStyle}>Від болю при мігрені</Typography>
          <Typography sx={secondCategoryStyle}>Від болю у спині</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryActiveStyle}
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
        >
          <Typography sx={mainCategoryStyle}>
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
          sx={mainCategoryActiveStyle}
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
        >
          <Typography sx={mainCategoryStyle}>Для серцево-судинної системи</Typography>
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
