import chroma from 'chroma-js';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardContentProps as MuiCardContentProps,
  CardActionsProps as MuiCardActionsProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { mixLayer } from '../../asset/functions';

// eslint-disable-next-line react/require-default-props
export type M3CardProps = MuiCardProps & { clickable?: boolean };

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    elevated: true;
    contained: true;
    elevation: false;
  }
}

export const CardRoot = styled(MuiCard, {
  name: 'M3Card',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})<{ ownerState: M3CardProps }>(({ theme, ownerState }) => ({
  transition: '0.3s',
  borderRadius: '12px',
  boxShadow: 'none',
  ...(ownerState.clickable === true && {
    position: 'relative',
  }),
  ...(ownerState.variant === 'contained' && {
    backgroundColor: theme.palette.surface.variant,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.surface.variant,
        theme.palette.surface.on,
        0.08
      ),
      boxShadow: theme.shadows[1],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
  ...(ownerState.variant === 'outlined' && {
    backgroundColor: theme.palette.surface.main,
    border: `1px solid ${theme.palette.outline.main}`,
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.surface.main,
        theme.palette.surface.on,
        0.08
      ),
      boxShadow: theme.shadows[2],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
  }),
  ...(ownerState.variant === 'elevated' && {
    backgroundColor: theme.palette.surface.main,
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: mixLayer(
        theme.palette.surface.main,
        theme.palette.surface.on,
        0.08
      ),
      boxShadow: theme.shadows[2],
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&:active': {
        boxShadow: theme.shadows[1],
      },
    },
  }),
}));

export const CardContent = styled(MuiCardContent, {
  name: 'M3CardContent',
  slot: 'Root',
})(({ theme }) => ({})) as React.ComponentType<MuiCardContentProps>;

export const CardActions = styled(MuiCardActions, {
  name: 'M3CardActions',
  slot: 'Root',
})(({ theme }) => ({
  padding: '16px',
  // Consider creating new variants for align item options..
  // display: 'flex',
  // justifyContent: 'flex-end',
})) as React.ComponentType<MuiCardActionsProps>;
