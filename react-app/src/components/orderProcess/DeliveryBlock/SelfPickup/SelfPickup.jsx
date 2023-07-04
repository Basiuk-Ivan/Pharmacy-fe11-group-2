import { TextField, Autocomplete, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addOrderAddress, addOrderCity } from '../../../../redux/slice/orderProcessSlice';

const SelfPickup = ({ setContactsData }) => {
  const [selectedCityStreets, setSelectedCityStreets] = useState([]);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    city: Yup.string().required('Оберіть місто').nullable(),
    address: Yup.string().required('Оберіть адресу').nullable()
  });

  const formik = useFormik({
    initialValues: {
      city: '',
      address: ''
    },
    validationSchema
  });

  const cityPickup = ['Київ', 'Дніпро', 'Львів'];
  const addressPickup = [
    ['бул. Лесі Українки, 26', 'вул. Євгена Коновальця, 16/20'],
    ['просп. Дмитра Яворницького, 22', 'вул. Сергія Єфремова, 6'],
    ['вул. Академіка Богомольця, 6', 'вул. Петра Дорошенка, 21']
  ];

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
    formik.setFieldValue('city', value || '');
    formik.setFieldTouched('city', true);
    formik.validateField('city');
  };

  const handleAddressChange = (event, value) => {
    dispatch(addOrderAddress(value));
    formik.setFieldValue('address', value || '');
    formik.setFieldTouched('address', true);
    formik.validateField('address');
  };

  const handleBlur = field => {
    formik.setFieldTouched(field, true);
    formik.validateField(field);
  };

  useEffect(() => {
    setContactsData(formik.values);
  }, [formik.values, setContactsData]);
  return (
    <>
      <form id="self-pickup">
        <Autocomplete
          options={cityPickup}
          renderInput={params => (
            <TextField
              {...params}
              label="Місто"
              required
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              onBlur={() => handleBlur('city')}
            />
          )}
          onChange={(event, value) => handleCityChange(value)}
        />
        <Autocomplete
          options={selectedCityStreets}
          renderInput={params => (
            <TextField
              {...params}
              label="Адреса"
              required
              onBlur={() => handleBlur('address')}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          )}
          onChange={handleAddressChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          sx={{
            mt: '20px'
          }}
        />
      </form>
    </>
  );
};

export default SelfPickup;
