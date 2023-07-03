import { Skeleton, Box, Stack } from '@mui/material';

export const SkeletonMainSlider = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Stack spacing={1} sx={{ marginTop: '140px', marginLeft: '30px' }}>
          <Skeleton variant="rectangular" width={506} height={92} />
          <Skeleton variant="rounded" width={506} height={72} />
          <Skeleton width={200} height={80} />
        </Stack>
        <Stack direction="column" spacing={2} sx={{ marginTop: '120px' }}>
          <Skeleton variant="rectangular" width={500} height={230} />
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          marginTop: '60px',
          marginBottom: '30px'
        }}
      >
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
        <Skeleton width={120} height={5} />
      </Box>
    </>
  );
};
