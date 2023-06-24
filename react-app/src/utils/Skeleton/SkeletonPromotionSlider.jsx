import { Box, Skeleton, Stack } from '@mui/material';

export const SkeletonPromotionSlider = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
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
    </>
  );
};
