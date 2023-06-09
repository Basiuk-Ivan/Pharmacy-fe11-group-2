import { useDispatch } from 'react-redux';

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

// import FilterSlider from './FilterSlider/FilterSlider';

// import { useEffect } from 'react';
import {
  buttonWrapperStyle,
  formCheckboxStyle,
  filterWrapperStyle, formGroupCheckStyle, formGroupStyle,
  mainCategoryStyle,
  marginStyle,
  priceInputWrapperStyle,
  titleCategoryStyle,
  resetButtonStyle,
  showButtonStyle
} from './style';

// eslint-disable-next-line max-len
import { addManufacture, removeManufacture, addDosageForm, removeDosageForm, recipe, pregnant, children, minPrice, maxPrice } from '../../../redux/slice/filterBaseSlice';

function Filter() {
  const dispatch = useDispatch();
  // const filterBase = useSelector(state => state.filterBase);

  const changeManufacturer = event => {
    // eslint-disable-next-line max-len,no-unused-expressions
    event.target.checked ? dispatch(addManufacture(event.target.value)) : dispatch(removeManufacture(event.target.value));
  };

  const changeDosageForm = event => {
    // eslint-disable-next-line max-len,no-unused-expressions
    event.target.checked ? dispatch(addDosageForm(event.target.value)) : dispatch(removeDosageForm(event.target.value));
  };

  const changeRecipe = () => {
    dispatch(recipe());
  };

  const changePregnant = () => {
    dispatch(pregnant());
  };

  const changeChildren = () => {
    dispatch(children());
  };

  const changeMinPrice = event => {
    dispatch(minPrice(event.target.value));
  };

  const changeMaxPrice = event => {
    dispatch(maxPrice(event.target.value));
  };

  // useEffect(() => {
  //   console.log(filterBase);
  // }, [filterBase]);

  return (
    <Box id="filterWrapper" sx={filterWrapperStyle}>
      <Box id="titleCategory" sx={titleCategoryStyle}>ФІЛЬТР</Box>

      <Accordion sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ціна</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 5px' }}>
          <Box
            id="priceInputWrapper"
            sx={priceInputWrapperStyle}
          >
            {/* eslint-disable-next-line max-len */}
            <TextField type="number" onWheel={event => event.target.blur()} onChange={changeMinPrice} id="outlined-basic" label="Ціна від" variant="outlined" size="small" />
            {/* eslint-disable-next-line max-len */}
            <TextField type="number" onWheel={event => event.target.blur()} onChange={changeMaxPrice} id="outlined-basic" label="Ціна до" variant="outlined" size="small" />
          </Box>
          {/* <FilterSlider /> */}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Виробник</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={formGroupStyle}>

            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="Ukraine" control={<Checkbox />} label="Україна" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="Germany" control={<Checkbox />} label="Німеччина" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="Greece" control={<Checkbox />} label="Греція" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="Poland" control={<Checkbox />} label="Польща" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="Italy" control={<Checkbox />} label="Італія" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="GB" control={<Checkbox />} label="Великобританія" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeManufacturer} value="India" control={<Checkbox />} label="Індія" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={marginStyle}>
        <AccordionSummary
          sx={mainCategoryStyle}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Форма товару</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={formGroupStyle}>
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Pills" control={<Checkbox />} label="Таблетки" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Ampoules" control={<Checkbox />} label="Ампули" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Spray" control={<Checkbox />} label="Спреї" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Syrup" control={<Checkbox />} label="Сиропи" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Drops" control={<Checkbox />} label="Краплі" />
            {/* eslint-disable-next-line max-len */}
            <FormControlLabel onChange={changeDosageForm} value="Capsules" control={<Checkbox />} label="Капсули" />
            <FormControlLabel onChange={changeDosageForm} value="Salve" control={<Checkbox />} label="Мазі" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <FormGroup sx={formGroupCheckStyle}>
        {/* eslint-disable-next-line max-len */}
        <FormControlLabel sx={formCheckboxStyle} onChange={changeRecipe} control={<Checkbox icon={<ReceiptLongIcon fontSize="small" sx={{ marginRight: '5px' }} />} checkedIcon={<ReceiptLongIcon fontSize="small" sx={{ color: '#2FD3AE', marginRight: '5px' }} />} />} label="Без рецепта" />

        {/* eslint-disable-next-line max-len */}
        <FormControlLabel onChange={changePregnant} sx={formCheckboxStyle} control={<Checkbox icon={<PregnantWomanIcon />} checkedIcon={<PregnantWomanIcon sx={{ color: '#2FD3AE' }} />} />} label="Дозволено вагітним" />

        {/* eslint-disable-next-line max-len */}
        <FormControlLabel onChange={changeChildren} sx={formCheckboxStyle} control={<Checkbox icon={<BabyChangingStationIcon />} checkedIcon={<BabyChangingStationIcon sx={{ color: '#2FD3AE' }} />} />} label="Дозволено дітям" />
      </FormGroup>

      <Box id="buttonWrapper" sx={buttonWrapperStyle}>
        <Button variant="contained" sx={showButtonStyle}>Показати</Button>
        <Button variant="outlined" sx={resetButtonStyle}>Скинути</Button>
      </Box>
    </Box>
  );
}

export default Filter;
