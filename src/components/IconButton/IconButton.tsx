import { IconButton as MuiIconButton, styled, useTheme } from '@mui/material';
import chroma from 'chroma-js';
import PropTypes from 'prop-types';
import React from 'react';
import { mixLayer } from '../../asset/functions';
import { M3IconButtonProps } from './types';

const IconButtonRoot = styled(MuiIconButton, {
  name: 'M3IconButton',
  slot: 'root',
})<{ ownerState: M3IconButtonProps }>(({ theme, ownerState }) => ({
  color: theme.palette.surface.onVariant,
  '&:disabled': {
    color: chroma(theme.palette.surface.onVariant).alpha(0.38).css(),
  },
  ...(ownerState.variant === 'filled' && {
    // TODO multi color filled icon button
    color: theme.palette.primary.on,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.primary.main,
        theme.palette.primary.on,
        0.08
      ),
    },
    '&:active': {
      backgroundColor: mixLayer(
        theme.palette.primary.main,
        theme.palette.primary.on,
        0.12
      ),
    },
    '&:disabled': {
      color: chroma(theme.palette.surface.on).alpha(0.38).css(),
      backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
    },
  }),
  ...(ownerState.variant === 'tonal' && {
    // TODO multi color filled tonal button
    color: theme.palette.secondary.onContainer,
    backgroundColor: theme.palette.secondary.container,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.secondary.container,
        theme.palette.secondary.onContainer,
        0.08
      ),
    },
    '&:active': {
      backgroundColor: mixLayer(
        theme.palette.secondary.container,
        theme.palette.secondary.onContainer,
        0.12
      ),
    },
    '&:disabled': {
      color: chroma(theme.palette.surface.on).alpha(0.38).css(),
      backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
    },
  }),
}));

const IconButton = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<M3IconButtonProps>
>((props, ref) => {
  const theme = useTheme();
  const { children, variant, ...other } = props;
  const ownerState = { variant, ...other };

  return (
    <div
      style={{
        margin: '4px',
        borderRadius: '50%',
        ...(variant === 'outlined' && {
          border: `1px solid ${chroma(theme.palette.outline.main)
            .alpha(ownerState.disabled ? 0.38 : 1)
            .css()}`,
        }),
      }}
    >
      <IconButtonRoot ref={ref} ownerState={ownerState} {...other}>
        {children}
      </IconButtonRoot>
    </div>
  );
});

IconButton.defaultProps = {
  variant: 'standard',
};

IconButton.propTypes = {
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled', 'tonal']),
};

export default IconButton;
