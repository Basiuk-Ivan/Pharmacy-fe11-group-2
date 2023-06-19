import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { tabsClasses } from '@mui/material/Tabs';
import s from './VerticalImgTabPanel.module.scss';

const TabPanel = props => {
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
        <Box
          sx={{
            paddingLeft: { xs: 0.4, sm: 3, md: 3, lg: 3 },
            paddingTop: { xs: 1, sm: 3, md: 3, lg: 3 }
          }}
        >
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
          height: { xs: '250px', sm: '350px' }
        }}
        scrollButtons
      >
        {productItem.img.map((imgSrc, index) => (
          <Tab
            key={index}
            label={<img src={imgSrc} className={s.tabImg} alt={`itm${index + 1}`} />}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {productItem.img.map((imgSrc, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Box sx={{ border: '1px solid #E7E9EB', padding: '10px' }}>
            <img src={imgSrc} className={s.activeImg} alt={`itm${index + 6}`} />
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalImgTabPanel;
