import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import RespondForm from './RespondForm';
import RespondList from './RespondList';

const RespondBlock = () => {
  const isAuth = useSelector(state => state.user.isAuth);

  return (
    <Box>

      <Box
        sx={{
          borderRadius: '20px',
          backgroundColor: '#F7FAFB',
          padding: '30px'
        }}
        noValidate
        autoComplete="off"
      >
        {isAuth &&
        <Box>
          <Typography
            variant="h5"
            component="h5"
            gutterBottom
            sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500' }}
          >
            Залишити відгук
          </Typography>
          <RespondForm />
        </Box>}

        {!isAuth &&
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          sx={{ mb: '30px', fontSize: '20px', lineHeight: '22px', fontWeight: '500' }}
        >
          Додати відгук може лише авторизований користувач
        </Typography>}
        <RespondList />
      </Box>
    </Box>);
};
export default RespondBlock;
