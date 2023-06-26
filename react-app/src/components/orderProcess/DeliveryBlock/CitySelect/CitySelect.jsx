import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const CitySelect = ({ cityDelivery, setSelectedCity }) => {
  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue);
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
