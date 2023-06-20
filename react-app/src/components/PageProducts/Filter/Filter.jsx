import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { Box, TextField, Typography, FormGroup, FormControlLabel, Checkbox, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

import { changePage } from '../../../redux/slice/numPageSlice';
import { theme } from '../../../tools/muiTheme';
import RequestString from '../RequestString';
import { fetchProductsData } from '../../../redux/slice/productsSlice';
import { Country, Form } from './FilterData/FilterData';

import { buttonWrapperStyle, formCheckboxStyle, filterWrapperStyle, formGroupCheckStyle, formGroupStyle, mainCategoryStyle, marginStyle, priceInputWrapperStyle, titleCategoryStyle, resetButtonStyle, showButtonStyle, errorPriceStyle } from './style';

import { addManufacture, removeManufacture, addDosageForm, removeDosageForm, recipe, pregnant, children, minPrice, maxPrice, reset, mainCategory } from '../../../redux/slice/filterBaseSlice';

function Filter() {
  const dispatch = useDispatch();
  const filterBase = useSelector(state => state.filterBase);
  const { numPage } = useSelector(state => state.numPage);
  const location = useLocation();
  const currentCategory = location.pathname.slice(1);
  const [checkedCountry, setCheckedCountry] = useState(Country);
  const [checkedForm, setCheckedForm] = useState(Form);
  const [clearFilter, setClearFilter] = useState(false);
  const [validationPrice, setValidationPrice] = useState(true);

  useEffect(() => {
    if (clearFilter) {
      dispatch(fetchProductsData(RequestString(filterBase, 1)));
      setClearFilter(false);
    }
  }, [clearFilter]);

  function receiveGoods() {
    if (Number(filterBase.priceMin) <= Number(filterBase.priceMax) && Number(filterBase.priceMin) >= 0 && Number(filterBase.priceMax) >= 0) {
      setValidationPrice(true);
      if (numPage === 1) {
        dispatch(fetchProductsData(RequestString(filterBase, 1)));
      } else dispatch(changePage(1));
    } else setValidationPrice(false);
  }

  function cleaningFilter() {
    setCheckedCountry(Country);
    setCheckedForm(Form);
    dispatch(reset());
    dispatch(mainCategory(currentCategory));
    setValidationPrice(true);
    if (numPage === 1) {
      setClearFilter(true);
    } else dispatch(changePage(1));
  }

  const changeManufacturer = event => {
    const { value, checked } = event.target;
    checked ? dispatch(addManufacture(value)) : dispatch(removeManufacture(value));

    setCheckedCountry(prevChecked =>
      prevChecked.map(item => (item.title === value ? { ...item, checked } : item))
    );
  };

  const changeDosageForm = event => {
    const { value, checked } = event.target;
    checked ? dispatch(addDosageForm(event.target.value)) : dispatch(removeDosageForm(event.target.value));

    setCheckedForm(prevChecked =>
      prevChecked.map(item => (item.title === value ? { ...item, checked } : item))
    );
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

  return (
    <ThemeProvider theme={theme}>
      <Box id="filterWrapper" sx={filterWrapperStyle}>
        <Box id="titleCategory" sx={titleCategoryStyle}>
          ФІЛЬТР
        </Box>

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
            <Box id="priceInputWrapper" sx={priceInputWrapperStyle}>
              {}
              <TextField
                type="number"
                onWheel={event => event.target.blur()}
                onChange={changeMinPrice}
                id="outlined-basic"
                label="Ціна від"
                variant="outlined"
                size="small"
                value={filterBase.priceMin}
                inputProps={{ min: '0', step: 'any' }}
              />
              {}
              <TextField
                type="number"
                onWheel={event => event.target.blur()}
                onChange={changeMaxPrice}
                id="outlined-basic"
                label="Ціна до"
                variant="outlined"
                size="small"
                value={filterBase.priceMax}
                inputProps={{ min: '0', step: 'any' }}
              />
            </Box>
            {/* <FilterSlider /> */}
          </AccordionDetails>
        </Accordion>
        {!validationPrice ? <Typography sx={errorPriceStyle}>Введіть коректні значення ціни!</Typography> : null}

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
              {checkedCountry.map(item => (
                <FormControlLabel
                  key={item.title}
                  checked={item.checked}
                  onChange={changeManufacturer}
                  value={item.title}
                  control={<Checkbox />}
                  label={item.title}
                />
              ))}
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
              {checkedForm.map(item => (
                <FormControlLabel
                  key={item.title}
                  checked={item.checked}
                  onChange={changeDosageForm}
                  value={item.title}
                  control={<Checkbox />}
                  label={item.title}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        <FormGroup sx={formGroupCheckStyle}>
          {}
          <FormControlLabel
            sx={formCheckboxStyle}
            onChange={changeRecipe}
            checked={filterBase.prescriptionLeave}
            control={
              <Checkbox
                icon={<ReceiptLongIcon fontSize="small" sx={{ marginRight: '5px' }} />}
                checkedIcon={
                  <ReceiptLongIcon fontSize="small" sx={{ color: '#2FD3AE', marginRight: '5px' }} />
                }
              />
            }
            label="Без рецепта"
          />

          {}
          <FormControlLabel
            onChange={changePregnant}
            checked={filterBase.whoCanPregnant}
            sx={formCheckboxStyle}
            control={
              <Checkbox
                icon={<PregnantWomanIcon />}
                checkedIcon={<PregnantWomanIcon sx={{ color: '#2FD3AE' }} />}
              />
            }
            label="Дозволено вагітним"
          />

          {}
          <FormControlLabel
            onChange={changeChildren}
            checked={filterBase.whoCanChildren}
            sx={formCheckboxStyle}
            control={
              <Checkbox
                icon={<BabyChangingStationIcon />}
                checkedIcon={<BabyChangingStationIcon sx={{ color: '#2FD3AE' }} />}
              />
            }
            label="Дозволено дітям"
          />
        </FormGroup>

        <Box id="buttonWrapper" sx={buttonWrapperStyle}>
          <Button variant="contained" sx={showButtonStyle} onClick={receiveGoods}>
            Показати
          </Button>
          <Button variant="outlined" sx={resetButtonStyle} onClick={cleaningFilter}>
            Скинути
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Filter;
