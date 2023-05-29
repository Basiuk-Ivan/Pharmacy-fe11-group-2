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
import {
  buttonWrapperStyle,
  checkboxStyle,
  filterWrapperStyle, formGroupCheckStyle, formGroupStyle,
  iconStyle,
  mainCategoryStyle,
  marginStyle,
  priceInputWrapperStyle,
  titleCategoryStyle,
  resetButtonStyle,
  showButtonStyle
} from './style';

function Filter() {
  return (
    <Box id="filterWrapper" sx={filterWrapperStyle}>
      <Box id="titleCategory" sx={titleCategoryStyle}>ФІЛЬТР</Box>

      <Accordion sx={marginStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={mainCategoryStyle}>Ціна</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 5px' }}>
          <Box
            id="priceInputWrapper"
            sx={priceInputWrapperStyle}
          >
            <TextField id="outlined-basic" label="Ціна від" variant="outlined" size="small" />
            <TextField id="outlined-basic" label="Ціна до" variant="outlined" size="small" />
          </Box>
          <FilterSlider />
        </AccordionDetails>
      </Accordion>

      <Accordion sx={marginStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={iconStyle} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={mainCategoryStyle}>Виробник</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={formGroupStyle}>
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

      <Accordion sx={marginStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ ':hover': { color: '#1f1e1e', fontWeight: '600' } }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={mainCategoryStyle}>Форма товару</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={formGroupStyle}>
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

      <FormGroup sx={formGroupCheckStyle}>
        {/* eslint-disable-next-line max-len */}
        <FormControlLabel control={<Checkbox sx={checkboxStyle} icon={<ReceiptLongIcon fontSize="small" sx={{ marginRight: '5px' }} />} checkedIcon={<ReceiptLongIcon fontSize="small" sx={{ color: '#12e00c', marginRight: '5px' }} />} />} label="Без рецепта" />

        {/* eslint-disable-next-line max-len */}
        <FormControlLabel sx={{ marginRight: '0', fontSize: '10px' }} control={<Checkbox sx={checkboxStyle} icon={<PregnantWomanIcon />} checkedIcon={<PregnantWomanIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено вагітним" />

        {/* eslint-disable-next-line max-len */}
        <FormControlLabel control={<Checkbox sx={checkboxStyle} icon={<BabyChangingStationIcon />} checkedIcon={<BabyChangingStationIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено дітям" />
      </FormGroup>

      <Box id="buttonWrapper" sx={buttonWrapperStyle}>
        <Button variant="contained" sx={showButtonStyle}>Показати</Button>
        <Button variant="outlined" sx={resetButtonStyle}>Скинути</Button>
      </Box>
    </Box>
  );
}

export default Filter;
