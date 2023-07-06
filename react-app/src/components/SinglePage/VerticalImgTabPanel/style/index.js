import { tabsClasses } from '@mui/material/Tabs';

export const wrapperStyles = {
 flexGrow: 1,
  bgcolor: 'background.paper',
  display: 'flex',
  height: '100%'
}
export const tabPanelStyles = {
  paddingLeft: { xs: 0.4, sm: 3, md: 3, lg: 3 },
  paddingTop: { xs: 1, sm: 3, md: 3, lg: 3 }
};

export const wrapperImgStyles = {
  border: '1px solid #E7E9EB',
  padding: '10px'
};

export const tabsStyles = {
  [`& .${tabsClasses.scrollButtons}`]: {
    backgroundColor: '#F2C94C',
    color: '#ffffff'
  },
  height: { xs: '250px', sm: '350px' }
};
export const tabImgStyles = {
  width: '100px',
  '@media(max-width: 469px)': {
    width: '60px',
    objectFit: 'contain'
  }
};

export const activeImgStyles = {
  width: '294px',
  height: '294px',
  '@media(max-width: 400px)': {
    width: '110px',
    height: '110px',
  },
  '@media(min-width: 400px) and (max-width: 600px)': {
    width: '200px',
    height: '200px',
  },
};
