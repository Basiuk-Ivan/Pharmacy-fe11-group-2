import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addOrderCity } from '../../../../redux/slice/orderProcessSlice';

const CitySelect = ({ cityDelivery, setSelectedCity }) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    city: Yup.string().required('Оберіть місто').nullable()
  });

  const formik = useFormik({
    initialValues: {
      city: ''
    },
    validationSchema
  });

  const handleCityChange = (event, newValue) => {
    setSelectedCity(newValue);
    dispatch(addOrderCity(newValue?.Description));

    formik.setFieldValue('city', newValue?.Description || '');
    formik.setFieldTouched('city', true);
    formik.validateField('city');
  };

  const handleBlur = field => {
    formik.setFieldTouched(field, true);
    formik.validateField(field);
  };

  const isOptionEqualToValue = (option, value) => {
    return option?.Ref === value?.Ref;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Autocomplete
        id="city-select"
        options={cityDelivery}
        getOptionLabel={option => option.Description || ''}
        onChange={handleCityChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Місто"
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            onBlur={() => handleBlur('city')}
          />
        )}
        isOptionEqualToValue={isOptionEqualToValue}
      />
    </form>
  );
};

export default CitySelect;
