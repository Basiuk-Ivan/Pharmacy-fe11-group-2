import { Box, Skeleton, Stack } from '@mui/material';

export const SkeletonSection = () => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
      <Stack direction="column" spacing={2}>
        <Skeleton variant="rectangular" width={220} height={430} />
      </Stack>
    </Box>
  );
};
