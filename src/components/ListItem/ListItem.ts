import React from 'react';
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';

export type M3ListItemProps = MuiListItemProps & { active?: boolean };

// TODO add ripple effect
const ListItem = styled(MuiListItem, {
  name: 'M3ListItem',
  slot: 'Root',
})<{ active?: boolean }>(({ theme, active }) => ({
  ...(active !== true && {
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      color: theme.palette.surface.on,
      backgroundColor: chroma(theme.palette.surface.on).alpha(0.08).hex(),
    },
    '&:active': {
      color: theme.palette.surface.on,
      backgroundColor: chroma(theme.palette.secondary.onContainer)
        .alpha(0.12)
        .hex(),
    },
  }),
  ...(active === true && {
    backgroundColor: theme.palette.secondary.container,
    '&:hover': {
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      color: theme.palette.secondary.onContainer,
      backgroundColor: chroma
        .mix(
          theme.palette.secondary.container,
          theme.palette.secondary.onContainer,
          0.08
        )
        .hex('rgb'),
    },
    '&:active': {
      color: theme.palette.secondary.onContainer,
      backgroundColor: chroma
        .mix(
          theme.palette.secondary.container,
          theme.palette.secondary.onContainer,
          0.24
        )
        .hex('rgb'),
    },
  }),
  transition: '0.3s',
  height: '56px', // Active indicator height
  borderRadius: '28px', // ACtive indicator shape
  width: '336px', // Active indicator width
  margin: '0 auto',
})) as React.ComponentType<M3ListItemProps>;

export default ListItem;
