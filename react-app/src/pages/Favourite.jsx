import { Container, Typography, Card, CardMedia, Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Advantages from '../components/orderProcess/Advantages';

const Favourite = () => (
  <>
    <Container sx={{
      mt: '20px',
      mb: '20px'
    }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: 'yellowgreen',
          padding: '10px'
        }}
      >
        <Typography>
          Обране
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <DeleteIcon color="success" />
          <Button variant="text">Text</Button>
          <Button
            variant="contained"
            type="submit"
            form="contacts"
            sx={{
              backgroundColor: '#2FD3AE',
              borderRadius: 50,
            }}
          >
            Підтвердити замовлення
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
      </Grid>
    </Container>

    <Container sx={{
      mt: '20px',
      mb: '20px'
    }}
    >
      <Typography>
        Завжди в пригоді
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ width: '279px', position: 'relative' }}>
            <CardMedia sx={{ height: '407px', backgroundColor: 'tomato' }} title="productImage" />
          </Card>
        </Grid>
      </Grid>
    </Container>

    <Advantages />
  </>
);

export default Favourite;
