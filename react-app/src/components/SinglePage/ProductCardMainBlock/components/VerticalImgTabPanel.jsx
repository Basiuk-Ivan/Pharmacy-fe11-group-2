import { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import { wrapperStyles, tabsStyles } from '../style';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ margin: 'auto 5px' }}
    >
      {value === index && (
        <Box sx={{ p: '5px' }}>
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
    <Box sx={wrapperStyles}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={tabsStyles}
        scrollButtons
      >
        {productItem.img.map((imgSrc, index) => (
          <Tab
            key={index}
            label={
              <Box
                component="img"
                src={imgSrc}
                sx={{
                  border: '1px solid #eaeced',
                  width: '60px',
                  objectFit: 'contain',
                  '@media(min-width: 400px)': {
                    width: '80px'
                  },
                  '@media(min-width: 900px)': {
                    width: '120px'
                  }
                }}
                alt={`itm${index + 1}`}
              />

          }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {productItem.img.map((imgSrc, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Box
            component="img"
            src={imgSrc}
            sx={{
              border: '1px solid #eaeced',
              padding: '5px',
              margin: 'auto',
              width: '150px',
              height: '150px',
              '@media (min-width: 400px)': {
                width: '200px',
                height: '200px',
              },
              '@media (min-width: 600px)': {
                width: '250px',
                height: '250px',
              },
              '@media (min-width: 900px)': {
                width: '294px',
                height: '294px',
              }
            }}
            alt={`itm${index + 6}`}
          />
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalImgTabPanel;
