import {useState} from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import {
    wrapperStyles,
    tabPanelStyles,
    wrapperImgStyles,
    activeImgStyles, tabImgStyles, tabsStyles
} from "./style";

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
          sx={tabPanelStyles}
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
            label={<img src={imgSrc} style={tabImgStyles} alt={`itm${index + 1}`} />}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {productItem.img.map((imgSrc, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Box sx={wrapperImgStyles}>
            <img src={imgSrc} style={activeImgStyles} alt={`itm${index + 6}`} />
          </Box>
        </TabPanel>
      ))}
    </Box>
  );
};

export default VerticalImgTabPanel;
