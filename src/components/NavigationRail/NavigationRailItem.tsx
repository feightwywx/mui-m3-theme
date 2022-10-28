/* eslint-disable react/require-default-props */
import { Box, useTheme } from '@mui/material';
import React from 'react';

function NavigationRailItem({
  icon,
  label = '',
  selected = false,
  ...props
}: {
  icon: JSX.Element;
  label?: string;
  selected?: boolean;
  onClick?: React.MouseEventHandler;
}) {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: 'none',
        height: '56px',
        textAlign: 'center',
        color: selected
          ? theme.palette.surface.on
          : theme.palette.surface.onVariant,
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 500,
        cursor: 'pointer',
      }}
      {...props}
    >
      <div
        style={{
          transition: '0.3s',
          height: '32px',
          width: '56px',
          display: 'table-cell',
          marginRight: '12px',
          verticalAlign: 'middle',
          borderRadius: '16px',
          backgroundColor: selected
            ? theme.palette.secondary.container
            : 'none',
          textAlign: 'center',
          lineHeight: '0px',
        }}
      >
        {icon}
      </div>
      <div
        style={{
          marginTop: '4px',
          overflowWrap: 'break-word',
          width: '80px',
          position: 'absolute',
          left: 0,
        }}
      >
        {label}
      </div>
    </Box>
  );
}

export default NavigationRailItem;
