import {
  Box,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

import FilterSlider from './FilterSlider/FilterSlider';

const Filter = () => (
  <Box
    id="filterWrapper"
    sx={{
      boxShadow: '0px 5px 20px 0px #0B361D1A',
      // padding: '0 9px'
    }}
  >
    <Box
      id="titleCategory"
      sx={{
        borderBottom: '1px solid #F5F5F5',
        height: '57px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '26px',
        fontSize: '14px',
        fontWeight: '700',
        color: '#4F4F4F',
      }}
    >
      ФІЛЬТР
    </Box>

    <Accordion sx={{ marginBottom: '15px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* eslint-disable-next-line max-len */}
        <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Ціна</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0 5px' }}>
        <Box
          id="priceInputWrapper"
          sx={{
            display: 'flex',
            margin: '10px 0 25px 0',
            gap: '10px',

          }}
        >
          <TextField
            id="outlined-basic"
            label="Ціна від"
            variant="outlined"
            size="small"
          />
          <TextField id="outlined-basic" label="Ціна до" variant="outlined" size="small" />
        </Box>
        <FilterSlider />
      </AccordionDetails>
    </Accordion>

    <Accordion sx={{ marginBottom: '15px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* eslint-disable-next-line max-len */}
        <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Виробник</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup sx={{
          color: '#828282',
          fontSize: '13px',
          fontWeight: '400'
        }}
        >
          <FormControlLabel control={<Checkbox />} label="Україна" />
          <FormControlLabel control={<Checkbox />} label="Німеччина" />
          <FormControlLabel control={<Checkbox />} label="Греція" />
          <FormControlLabel control={<Checkbox />} label="Польща" />
          <FormControlLabel control={<Checkbox />} label="Італія" />
          <FormControlLabel control={<Checkbox />} label="Великобританія" />
          <FormControlLabel control={<Checkbox />} label="Індія" />
        </FormGroup>
      </AccordionDetails>
    </Accordion>

    <Accordion sx={{ marginBottom: '15px' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* eslint-disable-next-line max-len */}
        <Typography sx={{ color: '#4F4F4F', ':hover': { color: '#1f1e1e', fontWeight: '600', paddingRight: '10px' } }}>Форма товару</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup sx={{
          color: '#828282',
          fontSize: '13px',
          fontWeight: '400'
        }}
        >
          <FormControlLabel control={<Checkbox />} label="Таблетки" />
          <FormControlLabel control={<Checkbox />} label="Ампули" />
          <FormControlLabel control={<Checkbox />} label="Спреї" />
          <FormControlLabel control={<Checkbox />} label="Сиропи" />
          <FormControlLabel control={<Checkbox />} label="Краплі" />
          <FormControlLabel control={<Checkbox />} label="Капсули" />
          <FormControlLabel control={<Checkbox />} label="Мазі" />
        </FormGroup>
      </AccordionDetails>
    </Accordion>

    <FormGroup sx={{ color: '#4F4F4F', padding: '0 9px' }}>
      {/* eslint-disable-next-line max-len */}
      <FormControlLabel control={<Checkbox icon={<ReceiptLongIcon fontSize="small" sx={{ marginRight: '5px' }} />} checkedIcon={<ReceiptLongIcon fontSize="small" sx={{ color: '#12e00c', marginRight: '5px' }} />} />} label="Без рецепта" />
      {/* eslint-disable-next-line max-len */}
      <FormControlLabel sx={{ marginRight: '0', fontSize: '10px' }} control={<Checkbox icon={<PregnantWomanIcon />} checkedIcon={<PregnantWomanIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено вагітним" />
      {/* eslint-disable-next-line max-len */}
      <FormControlLabel control={<Checkbox icon={<BabyChangingStationIcon />} checkedIcon={<BabyChangingStationIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено дітям" />
    </FormGroup>

    <Box
      id="buttonWrapper"
      sx={{
        display: 'flex',
        gap: '12px',
        padding: '20px 5px 50px 5px'
      }}
    >
      {/* eslint-disable-next-line max-len */}
      <Button variant="contained" sx={{ backgroundColor: '#2fd3ae', ':hover': { backgroundColor: '#1b7360' } }}>Показати</Button>
      {/* eslint-disable-next-line max-len */}
      <Button variant="outlined" sx={{ color: '#2fd3ae', borderColor: '#2fd3ae', ':hover': { color: '#1b7360', borderColor: '#1b7360' } }}>Скинути</Button>
    </Box>
  </Box>
);

export default Filter;
