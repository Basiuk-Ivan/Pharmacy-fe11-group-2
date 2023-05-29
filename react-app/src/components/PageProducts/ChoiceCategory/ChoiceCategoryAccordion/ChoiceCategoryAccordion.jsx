import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// eslint-disable-next-line react/function-component-definition
export default function ChoiceCategoryAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ marginBottom: '15px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>
            Ліки від кашлю , застуди та грипу
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        {/* eslint-disable-next-line max-len */}
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', color: '#4F4F4F' }}>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Жарознижуючі</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Кашель та біль у горлі</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Назальна терапія</Typography>
        </AccordionDetails>
      </Accordion>
      {/* eslint-disable-next-line max-len */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ marginBottom: '15px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Знеболюючі</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}> */}

          {/* </Typography> */}
        </AccordionSummary>
        {/* eslint-disable-next-line max-len */}
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', color: '#4F4F4F' }}>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Від спазму</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Від болю при мігрені</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Від болю у спині</Typography>
        </AccordionDetails>
      </Accordion>
      {/* eslint-disable-next-line max-len */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ marginBottom: '15px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>
            Для нервової системи
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}> */}
          {/*  Filtering has been entirely disabled for whole web server */}
          {/* </Typography> */}
        </AccordionSummary>
        {/* eslint-disable-next-line max-len */}
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', color: '#4F4F4F' }}>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '4px' } }}>Седативні (заспокійливі)</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Антидепресанти</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Для серцево-судинної системи</Typography>
        </AccordionSummary>
        {/* eslint-disable-next-line max-len */}
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', color: '#4F4F4F' }}>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Гіпертонія</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Для розрідження крові</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Тромбоз</Typography>
          {/* eslint-disable-next-line max-len */}
          <Typography sx={{ fontSize: '14px', cursor: 'pointer', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Варикоз</Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
