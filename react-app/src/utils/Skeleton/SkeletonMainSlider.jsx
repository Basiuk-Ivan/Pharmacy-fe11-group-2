import { Skeleton, Box, Stack, useMediaQuery } from '@mui/material';

export const SkeletonMainSlider = () => {
  const isSmallScreen = useMediaQuery('(max-width: 520px)');
  const isMediumScreen = useMediaQuery('(max-width: 900px)');

  const containerWidth = isSmallScreen ? 250 : isMediumScreen ? 300 : 500;
  const containerHeight = isSmallScreen ? 100 : isMediumScreen ? 120 : 230;

  const rectangularWidth = isSmallScreen ? 250 : isMediumScreen ? 300 : 506;
  const rectangularHeight = isSmallScreen ? 100 : isMediumScreen ? 120 : 92;

  const skeletonWidth = isSmallScreen ? 60 : isMediumScreen ? 80 : 120;
  const skeletonHeight = isSmallScreen ? 3 : isMediumScreen ? 4 : 5;

  return (
    <Box
      display="flex"
      gap={2}
      flexWrap="wrap"
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: 'center', md: 'center' }}
      alignItems={{ xs: 'center', md: 'unset' }}
      paddingTop="30px"
    >
      <Stack spacing={1} sx={{ maxWidth: isSmallScreen || isMediumScreen ? '300px' : 'initial' }}>
        <Skeleton variant="rectangular" width={rectangularWidth} height={rectangularHeight} />
        <Skeleton variant="rounded" width={rectangularWidth} height={rectangularHeight} />
        <Skeleton width={200} height={80} />
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        sx={{ maxWidth: isSmallScreen || isMediumScreen ? '300px' : 'initial' }}
      >
        <Skeleton variant="rectangular" width={containerWidth} height={containerHeight} />
      </Stack>
      <Box
        display="flex"
        justifyContent="center"
        gap={1}
        marginTop="60px"
        sx={{ maxWidth: isSmallScreen || isMediumScreen ? '300px' : 'initial' }}
      >
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
        <Skeleton width={skeletonWidth} height={skeletonHeight} />
      </Box>
    </Box>
  );
};
