import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductCardInstruction = ({ goods }) => (
  <>
    <Typography
      variant="h4"
      component="h4"
      gutterBottom
      sx={{ mt: '68px', mb: '30px', fontSize: '36px', lineHeight: '42px', fontWeight: '700' }}
    >
      Інструкція
    </Typography>
    <Box>
      <Typography
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
        {goods.instruction.manufacturer.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}}>
        {goods.instruction.manufacturer.value}
      </Typography>

      <Typography
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
        {goods.instruction.brieflyAbout.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}}>
        {goods.instruction.brieflyAbout.value}
      </Typography>

      <Typography
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
        {goods.instruction.indications.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.indications.value}
      </Typography>

      <Typography
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
        {goods.instruction.howToTake.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.howToTake.value}
      </Typography>

      <Typography
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
        {goods.instruction.description.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.description.value}
      </Typography>

      <Typography
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
        {goods.instruction.functionalBenefits.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.functionalBenefits.value}
      </Typography>

      <Typography
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
        {goods.instruction.storageConditions.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.storageConditions.value}
      </Typography>

      <Typography
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
        {goods.instruction.bestBeforeDate.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom sx={{}} textAlign="justify">
        {goods.instruction.bestBeforeDate.value}
      </Typography>

      <Typography
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
        {goods.instruction.activeSubstance.title}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {goods.instruction.activeSubstance.value}
      </Typography>

      <Typography
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
        {goods.instruction.dosageForm.title}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{}}>
        {goods.instruction.dosageForm.value}
      </Typography>
    </Box>
  </>
);

export default ProductCardInstruction;
