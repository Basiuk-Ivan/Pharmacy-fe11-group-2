import { Grid, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ChangedTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    borderRadius: 30
  }
}));

const CardPaymentData = () => {
  const validationSchema = Yup.object().shape({
    cardNumber: Yup.number().required('Введіть номер картки'),
    expirationDate: Yup.string().required('Введіть термін дії картки'),
    cvv: Yup.string().required('Введіть CVV код картки'),
    name: Yup.string().required("Введіть ваше Ім'я")
  });

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      name: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    }
  });
  return (
    <Container>
      <form id="cardpay" onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item md={12}>
            <ChangedTextField
              label="Номер картки"
              fullWidth
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.cardNumber && formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber}
            />
          </Grid>
          <Grid item md={6}>
            <ChangedTextField
              label="Термін дії"
              fullWidth
              name="expirationDate"
              value={formik.values.expirationDate}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.expirationDate && formik.errors.expirationDate)}
              helperText={formik.touched.expirationDate && formik.errors.expirationDate}
            />
          </Grid>
          <Grid item md={6}>
            <ChangedTextField
              label="Код CVV2"
              fullWidth
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.cvv && formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
            />
          </Grid>
          <Grid item md={12}>
            <ChangedTextField
              label="Ваше ім'я"
              fullWidth
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.name && formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CardPaymentData;
