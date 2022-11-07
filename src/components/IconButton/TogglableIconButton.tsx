import { useTheme, Checkbox as MuiCheckbox, styled } from '@mui/material';
import chroma from 'chroma-js';
import React from 'react';
import PropTypes from 'prop-types';
import { M3TogglableIconButtonProps } from './types';
import { mixLayer } from '../../asset/functions';

export const TogglableIconButtonRoot = styled(MuiCheckbox, {
  name: 'M3TogglableIconButton',
  slot: 'root',
})<{ ownerState: M3TogglableIconButtonProps }>(({ theme, ownerState }) => ({
  color: theme.palette.surface.onVariant,
  transition: '0.2s',
  '&:hover': {
    backgroundColor: chroma(theme.palette.surface.onVariant).alpha(0.08).css(),
  },
  '&:active': {
    backgroundColor: chroma(theme.palette.surface.onVariant).alpha(0.12).css(),
  },
  '&.Mui-checked': {
    '&:hover': {
      backgroundColor: chroma(theme.palette.primary.main).alpha(0.08).css(),
    },
    '&:active': {
      backgroundColor: chroma(theme.palette.primary.main).alpha(0.12).css(),
    },
  },
  '&:disabled': {
    color: chroma(theme.palette.surface.onVariant).alpha(0.38).css(),
  },
  ...(ownerState.variant === 'outlined' && {
    '&.Mui-checked:not(&.Mui-disabled)': {
      backgroundColor: theme.palette.inverse.surface,
      color: theme.palette.inverse.onSurface,
    },
  }),
  ...(ownerState.variant === 'filled' && {
    // TODO multi color filled icon button
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.surface.variant,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.surface.variant,
        theme.palette.primary.main,
        0.08
      ),
    },
    '&:active': {
      backgroundColor: mixLayer(
        theme.palette.surface.variant,
        theme.palette.primary.main,
        0.12
      ),
    },
    '&.Mui-checked:not(&.Mui-disabled)': {
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
    },
    '&:disabled': {
      color: chroma(theme.palette.surface.on).alpha(0.38).css(),
      backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
    },
  }),
  ...(ownerState.variant === 'tonal' && {
    // TODO multi color filled tonal button
    color: theme.palette.surface.onVariant,
    backgroundColor: theme.palette.surface.variant,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.surface.variant,
        theme.palette.surface.onVariant,
        0.08
      ),
    },
    '&:active': {
      backgroundColor: mixLayer(
        theme.palette.surface.variant,
        theme.palette.surface.onVariant,
        0.12
      ),
    },
    '&.Mui-checked:not(&.Mui-disabled)': {
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
    },
    '&:disabled': {
      color: `${chroma(theme.palette.surface.on).alpha(0.38).css()} !important`,
      backgroundColor: `${chroma(theme.palette.surface.on)
        .alpha(0.12)
        .css()} !important`,
    },
  }),
}));

export const TogglableIconButton = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<M3TogglableIconButtonProps>
>((props, ref) => {
  const theme = useTheme();
  const { children, variant, checkedIcon, ...other } = props;
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
      <TogglableIconButtonRoot
        icon={children}
        checkedIcon={checkedIcon ?? children}
        ref={ref}
        ownerState={ownerState}
        {...other}
      />
    </div>
  );
});

TogglableIconButton.defaultProps = {
  variant: 'standard',
  checkedIcon: undefined,
};

TogglableIconButton.propTypes = {
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled', 'tonal']),
  checkedIcon: PropTypes.node,
};

export default TogglableIconButton;
