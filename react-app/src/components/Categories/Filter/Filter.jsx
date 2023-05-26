import {
  Box,
  FormControl,
  // IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown.js';

const Filter = () => (
  <Box
    title="filterWrapper"
    sx={{
      boxShadow: '0px 5px 20px 0px #0B361D1A',
      padding: '0 10px'
    }}
  >
    <Box
      title="titleCategory"
      sx={{
        borderBottom: '1px solid #F5F5F5',
        height: '57px',
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: '26px',
        fontSize: '14px',
        fontWeight: '700',
        color: '#4F4F4F'
        // fontFamily: 'Roboto'
      }}
    >
      ФІЛЬТР
    </Box>

    {/* <Box title='priceTitleWrapper' */}
    {/*     sx={{ */}
    {/*         display: 'flex', */}
    {/*         justifyContent: 'space-between', */}
    {/*         padding: '10px 26px 20px 26px' */}
    {/*     }}> */}
    {/*    <Typography>Ціна</Typography> */}
    {/*    <IconButton sx={{}}> */}
    {/*        <ArrowDropDownIcon sx={{ */}
    {/*            fontSize: 'medium', */}
    {/*            color:'#E0E0E0' */}
    {/*        }} /> */}
    {/*    </IconButton> */}
    {/* </Box> */}

    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Ціна</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value=""
        label="Ціна"
        // onChange={handleChange}
        sx={{ border: 'none' }}
      >
        <MenuItem value={1}>Спочатку дешевші</MenuItem>
        <MenuItem value={2}>Спочатку дорожчі</MenuItem>
      </Select>
    </FormControl>

    <Box
      title="priceInputWrapper"
      sx={{
        display: 'flex',
        margin: '20px 0',
        padding: '0 10px',
        gap: '10px'
      }}
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        size="small"
        sx={{
          fontSize: '12px',
          fontWeight: '400'
        }}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
    </Box>
    <Slider
      sx={{ marginBottom: '40px' }}
      getAriaLabel={() => 'Temperature range'}
      // value={value}
      // onChange={handleChange}
      valueLabelDisplay="auto"
    />

    <Box
      id="manufacturer"
      sx={{
        borderBottom: '1px solid #F5F5F5',
        borderTop: '1px solid #F5F5F5',
        padding: '10px 0 20px 0'
      }}
    >
      <Typography
        sx={{
          marginBottom: '20px',
          color: '#828282',
          fontSize: '14px',
          fontWeight: '400'
        }}
      >
        Виробник
      </Typography>
      <FormGroup
        sx={{
          color: '#828282',
          fontSize: '13px',
          fontWeight: '400'
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Україна" />
        <FormControlLabel control={<Checkbox />} label="Німеччина" />
        <FormControlLabel control={<Checkbox />} label="Греція" />
        <FormControlLabel control={<Checkbox />} label="Польща" />
        <FormControlLabel control={<Checkbox />} label="Італія" />
        <FormControlLabel control={<Checkbox />} label="Великобританія" />
        <FormControlLabel control={<Checkbox />} label="Індія" />
      </FormGroup>
    </Box>

    <Box
      id="formProduct"
      sx={{
        borderBottom: '1px solid #F5F5F5',
        padding: '10px 0 20px 0'
      }}
    >
      <Typography
        sx={{
          marginBottom: '20px',
          color: '#828282',
          fontSize: '14px',
          fontWeight: '400'
        }}
      >
        Форма товару
      </Typography>
      <FormGroup
        sx={{
          color: '#828282',
          fontSize: '13px',
          fontWeight: '400'
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Таблетки" />
        <FormControlLabel control={<Checkbox />} label="Ампули" />
        <FormControlLabel control={<Checkbox />} label="Спреї" />
        <FormControlLabel control={<Checkbox />} label="Сиропи" />
        <FormControlLabel control={<Checkbox />} label="Краплі" />
        <FormControlLabel control={<Checkbox />} label="Капсули" />
        <FormControlLabel control={<Checkbox />} label="Мазі" />
      </FormGroup>
    </Box>

    <Box
      id="buttonWrapper"
      sx={{
        display: 'flex',
        gap: '12px',
        padding: '20px 0 50px 0'
      }}
    >
      <Button variant="contained">Показати</Button>
      <Button variant="outlined">Скинути</Button>
    </Box>
  </Box>
);

export default Filter;
