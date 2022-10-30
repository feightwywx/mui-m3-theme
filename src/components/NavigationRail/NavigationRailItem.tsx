/* eslint-disable react/require-default-props */
import { Box, styled, useTheme } from '@mui/material';
import chroma from 'chroma-js';
import React from 'react';
import { mixLayer } from '../../asset/functions';

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

  const RailItemBox = styled(Box)({
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
    '>.iconDiv': {
      transition: '0.3s',
      height: '32px',
      width: '56px',
      display: 'table-cell',
      marginRight: '12px',
      verticalAlign: 'middle',
      borderRadius: '16px',
      backgroundColor: selected ? theme.palette.secondary.container : 'none',
      textAlign: 'center',
      lineHeight: '0px',
    },
    '&:hover': {
      fontWeight: 800,
    },
    '&:hover >.iconDiv': {
      backgroundColor: selected
        ? mixLayer(
            theme.palette.secondary.container,
            theme.palette.surface.on,
            0.08
          )
        : chroma(theme.palette.surface.onVariant).alpha(0.08).css(),
    },
    '&:active >.iconDiv': {
      backgroundColor: selected
        ? mixLayer(
            theme.palette.secondary.container,
            theme.palette.surface.on,
            0.12
          )
        : chroma(theme.palette.surface.onVariant).alpha(0.12).css(),
    },
  });

  // TODO ripple effect
  return (
    <RailItemBox {...props}>
      <div className="iconDiv">{icon}</div>
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
    </RailItemBox>
  );
}

export default NavigationRailItem;
