import { Skeleton } from '@mui/material';
import { Stack } from '@mui/system';

export const SkeletonCartBlock = () => (
  <Stack direction="column" spacing={2}>
    <Skeleton variant="rectangular" width={270} height={400} />
  </Stack>
);
