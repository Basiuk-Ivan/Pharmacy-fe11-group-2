import { FormControl, FormControlLabel, RadioGroup, Typography, Radio, Grid, TextField, Autocomplete, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { theme } from '../../../tools/muiTheme';
import searchAddress from '../../../tools/NovaPost/searchAddress';
import CitySelect from './CitySelect/CitySelect';
import searchWarehouse from '../../../tools/NovaPost/searchWarehouse';
import WarehouseSelect from './WarehouseSelect/WarehouseSelect';
import SelfPickup from './SelfPickup/SelfPickup';
import {addOrderDeliveryMethod, resetDelivery} from '../../../redux/slice/orderProcessSlice';

const DeliveryBlock = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showAdditionalField, setShowAdditionalField] = useState(false);
  const [cityDelivery, setCityDelivery] = useState([]);
  const [warehouseDelivery, setWarehouseDelivery] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCityDelivery = async () => {
      const data = await searchAddress();
      setCityDelivery(data);
    };

    fetchCityDelivery();
  }, []);

  useEffect(() => {
    const fetchWarehouseDelivery = async () => {
      if (selectedCity) {
        const data = await searchWarehouse(selectedCity.Description);
        setWarehouseDelivery(data);
      }
    };

    fetchWarehouseDelivery();
  }, [selectedCity]);

  const handleRadioChange = event => {
    setShowAdditionalField(event.target.value === 'novaPost');
    dispatch(resetDelivery());
    dispatch(addOrderDeliveryMethod(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={{ xs: 'center' }}
      >
        <Grid
          item
          md={12}
          sx={{
            border: '1px solid white',
            borderRadius: '20px',
            boxShadow: '0px 10px 40px rgba(11, 54, 29, 0.05)',
            padding: '10px',
            backgroundColor: 'white',
            mt: '30px',
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography
                sx={{
                  margin: '41px 10px 19px 0px',
                  fontFamily: 'Raleway, sans-serif',
                  color: '#4F4F4F',
                  fontWeight: '700',
                  fontSize: '24px'
                }}
              >
                Спосіб доставки
              </Typography>
              <FormControl sx={{ mb: '50px' }}>
                <RadioGroup
                  aria-labelledby="radio-buttons-group-label"
                  defaultValue="self"
                  name="radio-buttons-group"
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="self"
                    control={<Radio />}
                    label="Забрати з аптеки"
                  />
                  <FormControlLabel
                    value="novaPost"
                    control={<Radio />}
                    label="Самовивіз з Нової Пошти"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {showAdditionalField && (
              <Grid
                item
                md={8}
                xs={12}
              >
                <CitySelect cityDelivery={cityDelivery} setSelectedCity={setSelectedCity} />
                <WarehouseSelect warehouseDelivery={warehouseDelivery} setSelectedWarehouse={setSelectedWarehouse} />
              </Grid>
            )}
            {!showAdditionalField && (
              <Grid item md={8} xs={12}>
                <SelfPickup />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DeliveryBlock;
