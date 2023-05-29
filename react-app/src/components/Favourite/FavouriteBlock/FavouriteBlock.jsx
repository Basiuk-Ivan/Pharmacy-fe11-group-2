import { Container, Typography, Card, Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import ProductCard from '../../ProductCard/ProductCard';
import Bread from '../Bread';

const FavouriteBlock = props => {
  const { products } = props;
  const productsSlice = products.slice(0, 4);

  return (
    <Container
      sx={{
        mt: '20px',
        mb: '20px'
      }}
    >
      <Bread />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: '20px'
        }}

      >
        <Typography
          sx={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '36px',
            color: '#2E3A59'
          }}
        >
          Обране
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <DeleteIcon color="success" />
          <Button
            variant="text"
            sx={{
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#828282',
            }}
          >Очистити все
          </Button>
          <Button
            variant="contained"
            type="submit"
            form="contacts"
            sx={{
              backgroundColor: '#2FD3AE',
              borderRadius: 50,
              fontFamily: 'Raleway, sans-serif',
              fontWeight: 700,
              fontSize: '14px',
              color: '#FFFFFF',
            }}
          >
            Додати все до кошика
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        {productsSlice.map(item => (
          <Grid item md={3} key={item.id}>
            <Card
              sx={{
                width: '259px',
                position: 'relative',
                backgroundColor: '#c4c2cc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 24,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <ProductCard productItem={item} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FavouriteBlock;
