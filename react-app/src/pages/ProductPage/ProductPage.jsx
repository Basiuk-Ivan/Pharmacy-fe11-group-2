import { useState, useEffect } from 'react';

import {
  Container,
  Typography,
  Box,
  Grid,
  Tabs,
  Tab
} from '@mui/material';

import {
  useParams
} from 'react-router-dom';

import {
  ThemeProvider,
  createTheme,
  styled
} from '@mui/material/styles';

import ProductCardMainBlock from '../../components/SinglePage/ProductCardMainBlock';
import ProductCardInstruction from '../../components/SinglePage/ProductCardInstruction';
import ProductAnalogiesCardContainer from '../../components/SinglePage/ProductAnalogiesCardContainer';
import ProductCardReviews from '../../components/SinglePage/ProductCardReviews';
import BreadProduct from '../../components/SinglePage/BreadProduct/index.js';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#F2C94C',
    maxWidth: '150px',
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
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          minWidth: '0',
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '5px',
        }
      }
    },
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
        <Box sx={{ p: 0.5 }}>
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
  const { id, category } = useParams();
  const [product, setProduct] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3004/api/product?categories=${category}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const productData = await response.json();
        const selectedProduct = productData.find(item => item.id === id);
        setProduct(selectedProduct);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [category, id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        {!!product && (
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <BreadProduct category={category} name={product.name} />
              </Grid>
              <Grid item lg={12}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: '26px', sm: '30px', md: '32px', lg: '36px' },
                    mt:{xs: '10px', sm: '5px', mx:0},
                    fontWeight: 700,
                    color: '#394045' }}
                  gutterBottom
                >
                  {product?.name}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Box sx={{ width: '100%'}}>
                  <Box sx={{ width: { xs: '288px', sm: '100%', md: '100%', lg: '100%' },
                    borderBottom: 1, borderColor: 'divider', backgroundColor: '#F7FAFB' }}>
                    <AntTabs
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons
                      allowScrollButtonsMobile
                      aria-label="scrollable auto tabs example"
                      sx={{ width: { xs: '250px', sm: '100%', md: '100%', lg: '100%' } }}
                    >
                      <Tab sx={{ width: { xs: '150px' } }} label="Все про товар" {...a11yProps(0)} />
                      <Tab sx={{ width: { xs: '150px' } }} label="Інструкція" {...a11yProps(1)} />
                      <Tab sx={{ width: { xs: '150px' } }} label="Аналоги" {...a11yProps(2)} />
                      <Tab sx={{ width: { xs: '150px' } }} label="Відгуки" {...a11yProps(3)} />
                    </AntTabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <ProductCardMainBlock productItem={product} />
                    <ProductCardInstruction productItem={product} />
                    <ProductAnalogiesCardContainer productItem={product} />
                    <ProductCardReviews productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <ProductCardMainBlock productItem={product} />
                    <ProductCardInstruction productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <ProductCardMainBlock productItem={product} />
                    <ProductAnalogiesCardContainer productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <ProductCardMainBlock productItem={product} />
                    <ProductCardReviews productItem={product} />
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
