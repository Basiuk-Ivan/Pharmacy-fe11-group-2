import { Box, Typography } from '@mui/material';

const TextComponent = ({ id, title, value }) => {
  const paragraphs = value.split('\n').map((paragraph, index) => (
    <Typography key={index} variant="body1" component="p" gutterBottom sx={{ textAlign: 'justify' }}>
      {paragraph}
    </Typography>
  ));

  return (
    <Box>
      <Typography
        id={id}
        variant="h5"
        component="h5"
        gutterBottom
        sx={{
          fontSize: '24px',
          lineHeight: '28px',
          fontWeight: '700',
          color: '#333333',
          mb: '20px',
          mt: '30px'
        }}
      >
        {title}
      </Typography>
      {paragraphs}
    </Box>
  );
};

export default TextComponent;
