import { useState } from 'react';
import { Box, Tab, Tabs, Typography, Stack } from '@mui/material';
import { tabsClasses } from '@mui/material/Tabs';
import s from './VerticalImgTabPanel.module.scss';

const TabPanel = props => {
  // eslint-disable react/jsx-props-no-spreading
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{
                paddingLeft: {xs:0, sm: 3, md: 3, lg: 3},
            paddingTop:{xs:1, sm: 3, md: 3, lg: 3} }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`
});
const VerticalImgTabPanel = ({ productItem }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            backgroundColor: '#F2C94C',
            color: '#ffffff'
          },
          height: '350px'
        }}
        indicatorColor="red"
        scrollButtons
      >
        {}
        <Tab label={<img src={productItem.img[0]} width="100" alt="itm1" />} {...a11yProps(0)} />
        {}
        <Tab label={<img src={productItem.img[1]} width="100" alt="itm2" />} {...a11yProps(1)} />
        {}
        <Tab label={<img src={productItem.img[2]} width="100" alt="itm3" />} {...a11yProps(2)} />
        {}
        <Tab label={<img src={productItem.img[3]} width="100" alt="itm4" />} {...a11yProps(3)} />
        {}
        <Tab label={<img src={productItem.img[4]} width="100" alt="itm5" />} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={productItem.img[0]} className={s.activeImg} alt="itm6" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={productItem.img[1]} className={s.activeImg} alt="itm7" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={productItem.img[2]} className={s.activeImg} alt="itm8" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={productItem.img[3]} className={s.activeImg} alt="itm9" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={productItem.img[4]} className={s.activeImg} alt="itm10" />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default VerticalImgTabPanel;
