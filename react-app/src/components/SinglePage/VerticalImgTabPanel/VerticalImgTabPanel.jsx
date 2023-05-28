import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';

const TabPanel = props => {
  { /* eslint-disable react/jsx-props-no-spreading */ }
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
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
      )}
    </div>
  );
};
const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});
const VerticalImgTabPanel = ({ goods }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ height: '350px' }}
        indicatorColor="red"
      >
        <Tab label={<img src={goods.img[0]} width="100" alt="Image" />} {...a11yProps(0)} />
        <Tab label={<img src={goods.img[1]} width="100" alt="Image" />} {...a11yProps(1)} />
        <Tab label={<img src={goods.img[2]} width="100" alt="Image" />} {...a11yProps(2)} />
        <Tab label={<img src={goods.img[3]} width="100" alt="Image" />} {...a11yProps(3)} />
        <Tab label={<img src={goods.img[4]} width="100" alt="Image" />} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={goods.img[0]} width="294" height="294" alt="Image 1" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={goods.img[1]} width="294" height="294" alt="Image 1" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={goods.img[2]} width="294" height="294" alt="Image 1" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={goods.img[3]} width="294" height="294" alt="Image 1" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
          <img src={goods.img[4]} width="294" height="294" alt="Image 1" />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default VerticalImgTabPanel;
