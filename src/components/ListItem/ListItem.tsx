import React from 'react';
import {
  ListItem as MuiListItem,
  ListItemProps as MuiListItemProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';
import TouchRipple, {
  TouchRippleActions,
} from '@mui/material/ButtonBase/TouchRipple';
import { mixLayer } from '../../asset/functions';

export type M3ListItemProps = MuiListItemProps & { active?: boolean };

const ListItemRoot = styled(MuiListItem, {
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
      backgroundColor: mixLayer(
        theme.palette.secondary.container,
        theme.palette.secondary.onContainer,
        0.08
      ),
    },
    '&:active': {
      color: theme.palette.secondary.onContainer,
      backgroundColor: mixLayer(
        theme.palette.secondary.container,
        theme.palette.secondary.onContainer,
        0.12
      ),
    },
  }),
  transition: '0.3s',
  height: '56px', // Active indicator height
  borderRadius: '28px', // ACtive indicator shape
  width: '336px', // Active indicator width
  margin: '0 auto',
})) as React.ComponentType<M3ListItemProps>;

const ListItem = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<M3ListItemProps>
>(function ListItem(props, ref) {
  const rippleRef = React.useRef<TouchRippleActions | null>(null);
  // eslint-disable-next-line react/prop-types
  const { children, ...other } = props;

  const onRippleStart = (e: React.SyntheticEvent) => {
    rippleRef.current?.start(e);
  };
  const onRippleStop = (e: React.SyntheticEvent) => {
    rippleRef.current?.stop(e);
  };

  return (
    <ListItemRoot
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      {...other}
    >
      <TouchRipple ref={rippleRef} center={false} />
      {children}
    </ListItemRoot>
  );
}) as unknown as React.ForwardRefExoticComponent<M3ListItemProps>;

export default ListItem;
