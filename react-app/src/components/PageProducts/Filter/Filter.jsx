import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CheckIcon from '@mui/icons-material/Check';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';

function Filter() {
  return (
    <Box
      title="filterWrapper"
      sx={{
        boxShadow: '0px 5px 20px 0px #0B361D1A',
        // padding: '0 9px'
      }}
    >
      <Box
        title="titleCategory"
        sx={{
          borderBottom: '1px solid #F5F5F5',
          height: '57px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '26px',
          fontSize: '14px',
          fontWeight: '700',
          color: '#4F4F4F',
        }}
      >
        ФІЛЬТР
      </Box>

      {/* <FormControl fullWidth> */}
      {/*  <InputLabel id="demo-simple-select-label">Ціна</InputLabel> */}
      {/*  <Select */}
      {/*    labelId="demo-simple-select-label" */}
      {/*    id="demo-simple-select" */}
      {/*    value="" */}
      {/*    label="Ціна" */}
      {/*              // onChange={handleChange} */}
      {/*    sx={{ border: 'none' }} */}
      {/*  > */}
      {/*    <MenuItem value={1}>Спочатку дешевші</MenuItem> */}
      {/*    <MenuItem value={2}>Спочатку дорожчі</MenuItem> */}
      {/*  </Select> */}
      {/* </FormControl> */}

      <Accordion sx={{marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Ціна</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            title="priceInputWrapper"
            sx={{
              display: 'flex',
              margin: '20px 0',
              padding: '0 10px',
              gap: '10px',

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
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{marginBottom: '15px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Виробник</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{
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
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{marginBottom: '15px'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Форма товару</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup sx={{
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
        </AccordionDetails>
      </Accordion>

      <FormGroup sx={{padding: '0 9px'}}>
        <FormControlLabel control={<Checkbox icon={<ReceiptLongIcon fontSize={"small"} sx={{marginRight: '5px'}} />} checkedIcon={<ReceiptLongIcon fontSize={"small"} sx={{ color: '#12e00c', marginRight: '5px' }} />} />} label="Без рецепта" />
        <FormControlLabel sx={{marginRight: '0', fontSize: '10px'}} control={<Checkbox icon={<PregnantWomanIcon />} checkedIcon={<PregnantWomanIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено вагітним" />
        <FormControlLabel control={<Checkbox icon={<BabyChangingStationIcon />} checkedIcon={<BabyChangingStationIcon sx={{ color: '#12e00c' }} />} />} label="Дозволено дітям" />
      </FormGroup>

      {/* <Checkbox */}
      {/*  {...label} */}
      {/*  icon={<BookmarkBorderIcon />} */}
      {/*  checkedIcon={<BookmarkIcon />} */}
      {/* /> */}

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
}

export default Filter;
