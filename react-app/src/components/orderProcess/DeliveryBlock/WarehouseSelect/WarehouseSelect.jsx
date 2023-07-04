import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { addOrderAddress } from '../../../../redux/slice/orderProcessSlice';

const WarehouseSelect = ({
  warehouseDelivery,
  setSelectedWarehouse
  // formik
}) => {
  const dispatch = useDispatch();

  const handleWarehouseChange = (event, newValue) => {
    setSelectedWarehouse(newValue);
    dispatch(addOrderAddress(newValue?.Description));

    // formik.setFieldValue('departamentNP', newValue?.Description || '');
    // formik.setFieldTouched('departamentNP', true);
    // formik.validateField('departamentNP');
  };

  // const handleBlurDepartamentNP = field => {
  //   formik.setFieldTouched(field, true);
  //   formik.validateField(field);
  // };

  const isOptionEqualToValue = (option, value) => {
    return option?.Ref === value?.Ref;
  };

  return (
    <Autocomplete
      id="warehouse-select"
      options={warehouseDelivery}
      getOptionLabel={option => option.Description || ''}
      onChange={handleWarehouseChange}
      renderInput={params => (
        <TextField
          {...params}
          label="Відділення"
          // error={formik.touched.departamentNP && Boolean(formik.errors.departamentNP)}
          // helperText={formik.touched.departamentNP && formik.errors.departamentNP}
          // onBlur={() => handleBlurDepartamentNP('departamentNP')}
        />
      )}
      isOptionEqualToValue={isOptionEqualToValue}
      sx={{
        mt: '20px'
      }}
    />
  );
};

export default WarehouseSelect;
