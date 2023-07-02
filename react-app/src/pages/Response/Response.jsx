import { Stack, Typography,Box } from '@mui/material';
import React from 'react';
import IconBreadcrumbs from './Breadcrums';
import ResponseBlock from "../../components/Response/ResponseBlock";

const Response = () => {
  return (
    <Box>
        <IconBreadcrumbs />
        <Typography variant="h4" gutterBottom>
            Відгуки кліентів
        </Typography>
        <ResponseBlock/>
    </Box>
  );
};

export default Response;
