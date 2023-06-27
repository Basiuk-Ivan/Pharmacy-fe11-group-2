import { FormControl, FormControlLabel, RadioGroup, Typography, Radio, Grid, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { theme } from '../../../tools/muiTheme';
import searchAddress from '../../../tools/NovaPost/searchAddress';
import CitySelect from './CitySelect/CitySelect';
import searchWarehouse from '../../../tools/NovaPost/searchWarehouse';
import WarehouseSelect from './WarehouseSelect/WarehouseSelect';

const DeliveryBlock = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showAdditionalField, setShowAdditionalField] = useState(false);
  const [cityDelivery, setCityDelivery] = useState([]);
  const [warehouseDelivery, setWarehouseDelivery] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);

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
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
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
            <Grid item md={4}>
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
                    label="Самовивіз"
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
            <Grid item md={8}>
              <CitySelect cityDelivery={cityDelivery} setSelectedCity={setSelectedCity} />
              <WarehouseSelect warehouseDelivery={warehouseDelivery} setSelectedWarehouse={setSelectedWarehouse} />
            </Grid>
            )}
            {!showAdditionalField && (
            <Grid item md={8}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4452429944536!2d30.524919676975006!3d50.45143308729259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce51c3bdb9a1%3A0xff877737cf946b28!2sKhreschatyk%20St%2C%201%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1687819324960!5m2!1sen!2sua"
                width="100%"
                height="100%"
                title="Google Map"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default DeliveryBlock;
