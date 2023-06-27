import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const WarehouseSelect = ({ warehouseDelivery, setSelectedWarehouse }) => {
  const handleWarehouseChange = (event, newValue) => {
    setSelectedWarehouse(newValue);
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
