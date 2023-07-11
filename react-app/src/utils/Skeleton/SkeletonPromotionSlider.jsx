import { Box, Skeleton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export const SkeletonPromotionSlider = () => {
  const isMediumScreen = useMediaQuery('(max-width: 900px)');
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const skeletonItemSmallScreen = <Skeleton variant="rectangular" width={220} height={430} />;

  const skeletonItemMediumScreen = (
    <>
      <Skeleton variant="rectangular" width={220} height={430} />
      <Skeleton variant="rectangular" width={220} height={430} />
    </>
  );

  const skeletonItemLargeScreen = (
    <>
      <Skeleton variant="rectangular" width={220} height={430} />
      <Skeleton variant="rectangular" width={220} height={430} />
      <Skeleton variant="rectangular" width={220} height={430} />
    </>
  );

  const skeletonItemsSmallScreen = isSmallScreen ? skeletonItemSmallScreen : skeletonItemMediumScreen;
  const skeletonItems = isMediumScreen ? skeletonItemsSmallScreen : skeletonItemLargeScreen;

  return (
    <Box
      display="flex"
      justifyContent={isSmallScreen ? 'center' : 'space-between'}
      flexWrap="wrap"
      gap={2}
      padding={isMediumScreen ? '0 50px' : '0'}
    >
      {skeletonItems}
    </Box>
  );
};
