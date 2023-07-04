import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { addOrderCity } from '../../../../redux/slice/orderProcessSlice';

const CitySelect = ({
  cityDelivery,
  setSelectedCity
  //  formik
}) => {
  const dispatch = useDispatch();

  const handleCityChangeNP = (event, newValue) => {
    setSelectedCity(newValue);
    dispatch(addOrderCity(newValue?.Description));

    // formik.setFieldValue('cityNP', newValue?.Description || '');
    // formik.setFieldTouched('cityNP', true);
    // formik.validateField('cityNP');
  };

  // const handleBlurNP = field => {
  //   formik.setFieldTouched(field, true);
  //   formik.validateField(field);
  // };

  const isOptionEqualToValue = (option, value) => {
    return option?.Ref === value?.Ref;
  };

  return (
    // <form
    // onSubmit={formik.handleSubmit}
    // >
    <Autocomplete
      id="city-select"
      options={cityDelivery}
      getOptionLabel={option => option.Description || ''}
      renderInput={params => (
        <TextField
          {...params}
          label="Місто"
          // error={formik.touched.cityNP && Boolean(formik.errors.cityNP)}
          // helperText={formik.touched.cityNP && formik.errors.cityNP}
          // onBlur={() => handleBlurNP('cityNP')}
        />
      )}
      onChange={handleCityChangeNP}
      isOptionEqualToValue={isOptionEqualToValue}
    />
    // </form>
  );
};

export default CitySelect;
