import { TextField, Autocomplete, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {activeDelivery, addOrderAddress, addOrderCity} from '../../../../redux/slice/orderProcessSlice';

const SelfPickup = () => {
  const [selectedCityStreets, setSelectedCityStreets] = useState([]);
  const dispatch = useDispatch();

  const cityPickup = ['Київ', 'Дніпро', 'Львів'];
  const addressPickup = [['бул. Лесі Українки, 26', 'вул. Євгена Коновальця, 16/20'], ['просп. Дмитра Яворницького, 22', 'вул. Сергія Єфремова, 6'], ['вул. Академіка Богомольця, 6', 'вул. Петра Дорошенка, 21']];

  const handleCityChange = value => {
    dispatch(addOrderCity(value));
    switch (value) {
      case 'Київ':
        setSelectedCityStreets(addressPickup[0]);
        break;
      case 'Дніпро':
        setSelectedCityStreets(addressPickup[1]);
        break;
      case 'Львів':
        setSelectedCityStreets(addressPickup[2]);
        break;
      default:
        setSelectedCityStreets([]);
        break;
    }
  };

  const handleAddressChange = (event, value) => {
    dispatch(activeDelivery());
    dispatch(addOrderAddress(value));
  };

  return (
    <>
      <form id="self-pickup">
        <Autocomplete
          options={cityPickup}
          renderInput={params => <TextField {...params} label="Місто" required />}
          onChange={(event, value) => handleCityChange(value)}
        />
        <Autocomplete
          options={selectedCityStreets}
          renderInput={params => <TextField {...params} label="Адреса" required />}
          onChange={handleAddressChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{
            mt: '20px'
          }}
        />
      </form>
    </>);
};

export default SelfPickup;
