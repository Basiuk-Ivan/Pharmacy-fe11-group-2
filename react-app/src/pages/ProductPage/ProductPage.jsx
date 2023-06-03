import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, List, ListItemText, ListItemButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useParams } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ProductCardMainBlock from '../../components/SinglePage/ProductCardMainBlock';
import ProductCardInstruction from '../../components/SinglePage/ProductCardInstruction';
import ProductAnalogiesCardContainer from '../../components/SinglePage/ProductAnalogiesCardContainer';
import ProductCardReviews from '../../components/SinglePage/ProductCardReviews';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#F2C94C'
  }
});

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#2FD3AE'
    },
    secondary: {
      main: '#ffffff'
    },
    success: {
      main: '#ed6c02'
    }
  }
});

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`
});

const ProductPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [goods, setGoods] = useState(null);
  const [value, setValue] = useState(0);

  const getProducts = async url => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error fetching products:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cardsData = await getProducts('../products.json');
      setProducts([...cardsData]);
    };

    fetchData();

    const product = products.find(item => item.id === id);
    setGoods(product);
  }, [id, products]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {!!goods && (
          <Container sx={{ width: '1200px' }}>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <List sx={{ display: 'flex' }}>
                  <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                    <HomeOutlinedIcon sx={{ paddingRight: '12px', color: '#2FD3AE' }} />
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontSize: '14px',
                          paddingRight: '12px',
                          color: '#2FD3AE'
                        }
                      }}
                      primary="Головна/ "
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                    <ListItemText
                      primaryTypographyProps={{
                        style: {
                          fontSize: '14px',
                          paddingRight: '12px',
                          color: '#2FD3AE'
                        }
                      }}
                      primary={`${goods?.mainCategory} /`}
                    />
                  </ListItemButton>
                  <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                    <ListItemText
                      sx={{ paddingRight: 0 }}
                      primaryTypographyProps={{ style: { fontSize: '14px', paddingRight: '12px' } }}
                      primary={`${goods?.subCategory}`}
                    />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid item lg={12}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: '36px', fontWeight: 700, color: '#394045' }}
                  gutterBottom
                >
                  {goods?.name}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Box sx={{ width: '100%' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#F7FAFB' }}>
                    <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      {}
                      <Tab sx={{ flexGrow: 1 }} label="Все про товар" {...a11yProps(0)} />
                      <Tab sx={{ flexGrow: 1 }} label="Інструкція" {...a11yProps(1)} />
                      <Tab sx={{ flexGrow: 1 }} label="Аналоги" {...a11yProps(2)} />
                      <Tab sx={{ flexGrow: 1 }} label="Відгуки" {...a11yProps(3)} />
                    </AntTabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <ProductCardMainBlock productItem={goods} />
                    <ProductCardInstruction productItem={goods} />
                    <ProductAnalogiesCardContainer productItem={goods} />
                    <ProductCardReviews productItem={goods} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <ProductCardMainBlock productItem={goods} />
                    <ProductCardInstruction productItem={goods} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <ProductCardMainBlock productItem={goods} />
                    <ProductAnalogiesCardContainer productItem={goods} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <ProductCardMainBlock productItem={goods} />
                    <ProductCardReviews productItem={goods} />
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
