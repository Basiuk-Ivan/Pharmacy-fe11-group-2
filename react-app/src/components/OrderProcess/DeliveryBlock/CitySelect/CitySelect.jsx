import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { addOrderCity } from '../../../../redux/slice/orderProcessSlice';

const CitySelect = ({ cityDelivery, setSelectedCity }) => {
  const dispatch = useDispatch();

  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue);
    dispatch(addOrderCity(newValue?.Description));
  };

  const isOptionEqualToValue = (option, value) => {
    return option?.Ref === value?.Ref;
  };

  return (
    <Autocomplete
      id="city-select"
      options={cityDelivery}
      getOptionLabel={option => option.Description || ''}
      onChange={handleCityChange}
      renderInput={params => <TextField {...params} label="Місто" />}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default CitySelect;
