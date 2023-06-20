import { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, Tabs, Tab, Skeleton, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ProductCardMainBlock from '../../components/SinglePage/ProductCardMainBlock';
import ProductCardInstruction from '../../components/SinglePage/ProductCardInstruction';
import ProductAnalogiesCardContainer from '../../components/SinglePage/ProductAnalogiesCardContainer';
import ProductCardReviews from '../../components/SinglePage/ProductCardReviews';
import BreadProduct from '../../components/SinglePage/BreadProduct';
import recentlyViewedProducts from '../../tools/recentlyViewedProducts';
import { request } from '../../tools/request';

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#F2C94C',
    maxWidth: '150px'
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
          minWidth: '0'
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '5px'
        }
      }
    }
  }
});

const TabPanel = props => {
  const { children, value, index, product, ...other } = props;

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
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { _id: id }
        });

        const { data } = result;

        if (data && data.length > 0) {
          const firstProduct = data[0];
          setProduct(firstProduct);
        }
      } catch (error) {
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
        {product ? (
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={12}>
                <BreadProduct category={product.categories[0]} name={product.name} />
              </Grid>
              <Grid item lg={12}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '26px', sm: '30px', md: '32px', lg: '36px' },
                    mt: { xs: '10px', sm: '5px', mx: 0 },
                    fontWeight: 700,
                    color: '#394045'
                  }}
                  gutterBottom
                >
                  {product?.name}
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Box sx={{ width: '100%' }}>
                  <Box
                    sx={{
                      width: { xs: '288px', sm: '100%', md: '100%', lg: '100%' },
                      borderBottom: 1,
                      borderColor: 'divider',
                      backgroundColor: '#F7FAFB'
                    }}
                  >
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
                    <ProductCardMainBlock
                      productItem={product}
                      onChange={recentlyViewedProducts(product.id)}
                    />
                  </Box>
                  <TabPanel value={value} index={0} product={product}>
                    <ProductCardInstruction productItem={product} />
                    <ProductAnalogiesCardContainer productItem={product} />
                    <ProductCardReviews productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={1} product={product}>
                    <ProductCardInstruction productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={2} product={product}>
                    <ProductAnalogiesCardContainer productItem={product} />
                  </TabPanel>
                  <TabPanel value={value} index={3} product={product}>
                    <ProductCardReviews productItem={product} />
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Box>
            <Skeleton variant="text" sx={{ fontSize: '16px', mt: '160px', mb: '20px' }} />
            <Skeleton variant="text" sx={{ fontSize: '32px', mb: '20px' }} />
            <Skeleton variant="text" sx={{ fontSize: '100px', mb: '5px' }} />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Skeleton variant="rectangular" height="300px" sx={{ flexGrow: '2', mb: '30px' }} />
              <Skeleton variant="rectangular" height="300px" sx={{ flexGrow: '1', mb: '30px' }} />
              <Skeleton variant="rectangular" height="300px" sx={{ flexGrow: '1', mb: '30px' }} />
            </Stack>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
};

export default ProductPage;
