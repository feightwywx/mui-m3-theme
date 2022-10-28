import { Box, useTheme, Stack } from '@mui/material';
import React from 'react';

function NavigationRail({ children, ...props }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      style={{
        position: 'absolute',
        height: '100%',
        width: '80px',
        top: '0',
        left: '0',
        backgroundColor: theme.palette.surface.main,
        display: 'table-cell',
        verticalAlign: 'middle',
      }}
      {...props}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1.5}
      >
        {children}
      </Stack>
    </Box>
  );
}

export default NavigationRail;
