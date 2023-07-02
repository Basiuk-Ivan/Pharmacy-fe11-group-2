import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import IconBreadcrumbs from './Breadcrums';
import RespondBlock from '../../components/Response/RespondBlock';

const RespondPage = () => {
  return (
    <Box>
      <IconBreadcrumbs />
      <Typography variant="h4" gutterBottom>
        Відгуки клієнтів
      </Typography>
      <RespondBlock />
    </Box>
  );
};

export default RespondPage;
