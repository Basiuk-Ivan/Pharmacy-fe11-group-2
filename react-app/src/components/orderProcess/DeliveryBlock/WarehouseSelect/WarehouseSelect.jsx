import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { activeDelivery, addOrderAddress } from '../../../../redux/slice/orderProcessSlice';

const WarehouseSelect = ({ warehouseDelivery, setSelectedWarehouse }) => {
  const dispatch = useDispatch();

  const handleWarehouseChange = (event, newValue) => {
    setSelectedWarehouse(newValue);
    dispatch(activeDelivery());
    dispatch(addOrderAddress(newValue?.Description));
  };

  const isOptionEqualToValue = (option, value) => {
    return option?.Ref === value?.Ref;
  };

  return (
    <Autocomplete
      id="warehouse-select"
      options={warehouseDelivery}
      getOptionLabel={option => option.Description || ''}
      onChange={handleWarehouseChange}
      renderInput={params => <TextField {...params} label="Відділення" />}
      isOptionEqualToValue={isOptionEqualToValue}
      sx={{
        mt: '20px'
      }}
    />

  );
};

export default WarehouseSelect;
