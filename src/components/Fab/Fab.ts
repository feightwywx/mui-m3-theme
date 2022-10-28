import { Fab as MuiFab, FabProps as MuiFabProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { mixLayer } from '../../asset/functions';

declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    tertiary: true;
    surface: true;
    success: false;
    info: false;
    warning: false;
  }

  interface FabPropsVariantOverrides {
    lowered: true;
  }
}

const Fab = styled(MuiFab, {
  name: 'M3Fab',
  slot: 'Root',
})(({ theme, variant, size, color }) => ({
  boxShadow: theme.shadows[variant === 'lowered' ? 0 : 3],
  textTransform: 'none',
  // fab size
  height: '56px',
  width: '56px',
  borderRadius: '16px',
  '>.MuiSvgIcon-root': {
    height: '24px',
    width: '24px',
  },
  ...(size === 'large' && {
    height: '96px',
    width: '96px',
    borderRadius: '28px',
    '>.MuiSvgIcon-root': {
      height: '36px',
      width: '36px',
    },
  }),
  ...(size === 'small' && {
    height: '40px',
    width: '40px',
    borderRadius: '12px',
  }),
  // fab variant
  ...(variant === 'extended' && {
    height: '56px',
    minWidth: '80px',
    width: 'auto',
    padding: '16px',
    '>.MuiSvgIcon-root': {
      marginRight: '8px',
    },
  }),
  // fab color
  backgroundColor: theme.palette.primary.container,
  color: theme.palette.primary.onContainer,
  '&:hover': {
    boxShadow: theme.shadows[variant === 'lowered' ? 2 : 4],
    backgroundColor: mixLayer(
      theme.palette.primary.container,
      theme.palette.primary.onContainer,
      0.08
    ),
  },
  '&:active': {
    boxShadow: theme.shadows[variant === 'lowered' ? 1 : 3],
    backgroundColor: mixLayer(
      theme.palette.primary.container,
      theme.palette.primary.onContainer,
      0.12
    ),
  },
  ...((color === 'primary' ||
    color === 'secondary' ||
    color === 'tertiary') && {
    backgroundColor: theme.palette[color].container,
    color: theme.palette[color].onContainer,
    '&:hover': {
      boxShadow: theme.shadows[variant === 'lowered' ? 2 : 4],
      backgroundColor: mixLayer(
        theme.palette[color].container,
        theme.palette[color].onContainer,
        0.08
      ),
    },
    '&:active': {
      boxShadow: theme.shadows[variant === 'lowered' ? 1 : 3],
      backgroundColor: mixLayer(
        theme.palette[color].container,
        theme.palette[color].onContainer,
        0.12
      ),
    },
  }),
  ...(color === 'surface' && {
    backgroundColor: theme.palette.surface.main,
    color: theme.palette.primary.main,
    '&:hover': {
      boxShadow: theme.shadows[variant === 'lowered' ? 2 : 4],
      backgroundColor: mixLayer(
        theme.palette.surface.main,
        theme.palette.primary.onContainer,
        0.08
      ),
    },
    '&:active': {
      boxShadow: theme.shadows[variant === 'lowered' ? 1 : 3],
      backgroundColor: mixLayer(
        theme.palette.surface.main,
        theme.palette.surface.on,
        0.12
      ),
    },
  }),
})) as React.ComponentType<MuiFabProps>;

export default Fab;
