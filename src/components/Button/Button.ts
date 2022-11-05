import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import chroma from 'chroma-js';
import { mixLayer } from '../../asset/functions';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    success: false;
    info: false;
    warning: false;
  }
  interface ButtonPropsVariantOverrides {
    elevated: true;
    tonal: true;
  }
  interface ButtonClasses {
    elevated: string;
    elevatedPrimary: string;
    elevatedSecondary: string;
    elevatedTertiary: string;
  }
}

const Button = styled(MuiButton, {
  name: 'M3Button',
  slot: 'Root',
})(({ theme, variant, color, startIcon, disabled }) => ({
  ...(theme.typography.labelLarge),
  boxShadow: variant === 'elevated' ? theme.shadows[2] : 'none',
  ...(variant === 'contained' &&
    color !== undefined &&
    color !== 'inherit' && {
      backgroundColor: theme.palette[color].main,
      color: theme.palette[color].on,
      '&:hover': {
        boxShadow: theme.shadows[1],
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        color: theme.palette[color].on,
        backgroundColor: mixLayer(
          theme.palette[color].main,
          theme.palette[color].on,
          0.08
        ),
      },
      '&:active': {
        color: theme.palette[color].on,
        backgroundColor: mixLayer(
          theme.palette[color].main,
          theme.palette[color].on,
          0.12
        ),
        boxShadow: 'none',
      },
      ...(disabled && {
        backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
        color: chroma(theme.palette.surface.on).alpha(0.38).css(),
        boxShadow: theme.shadows[0],
      }),
    }),
  ...(variant === 'elevated' &&
    color !== undefined &&
    color !== 'inherit' && {
      color: theme.palette[color].main,
      backgroundColor: theme.palette.surface.main,
      boxShadow: theme.shadows[1],
      '&:hover': {
        boxShadow: theme.shadows[2],
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
        color: theme.palette[color].main,
        backgroundColor: mixLayer(
          theme.palette.surface.main,
          theme.palette[color].main,
          0.08
        ),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: mixLayer(
          theme.palette.surface.main,
          theme.palette[color].main,
          0.12
        ),
      },
      ...(disabled && {
        color: chroma(theme.palette.surface.on).alpha(0.38).css(),
        backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
        boxShadow: theme.shadows[0],
      }),
    }),
  ...(variant === 'outlined' &&
    color !== undefined &&
    color !== 'inherit' && {
      border: `1px solid ${theme.palette.outline.main}`,
      '&:hover': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.08)
          .hex(),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      /*
      '&:focus': {
        border: `1px solid ${theme.palette[color].main}`,
        backgroundColor: chroma(theme.palette[color].main).alpha(0.12).hex(),
      },
      */
      '&:active': {
        border: `1px solid ${theme.palette.outline.main}`,
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.12)
          .hex(),
      },
    }),
  ...(variant === 'text' &&
    color !== undefined &&
    color !== 'inherit' && {
      paddingLeft: startIcon ? '20px' : '12px', // when start icon, pl=icon.width+pl
      paddingRight: startIcon ? '16px' : '12px',
      '&:hover': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.08)
          .hex(),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&:active': {
        backgroundColor: chroma(theme.palette[color].onContainer)
          .alpha(0.12)
          .hex(),
      },
    }),
  ...(variant === 'tonal' && {
    backgroundColor: theme.palette[color].container,
    color: theme.palette[color].onContainer,
    '&:hover': {
      boxShadow: theme.shadows[1],
      backgroundColor: mixLayer(
        theme.palette[color].container,
        theme.palette[color].onContainer,
        0.08
      ),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: mixLayer(
        theme.palette[color].container,
        theme.palette[color].onContainer,
        0.12
      ),
    },
    ...(disabled && {
      color: chroma(theme.palette.surface.on).alpha(0.38).css(),
      backgroundColor: chroma(theme.palette.surface.on).alpha(0.12).css(),
      boxShadow: theme.shadows[0],
    }),
  }),
})) as React.ComponentType<MuiButtonProps>;

Button.defaultProps = {
  color: 'primary',
};

export default Button;
