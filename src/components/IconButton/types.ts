import type {
  IconButtonProps as MuiIconButtonProps,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material';

type M3IconButtonExtras = {
  variant?: 'standard' | 'outlined' | 'filled' | 'tonal';
};

export type M3IconButtonProps = MuiIconButtonProps & M3IconButtonExtras;

export type M3TogglableIconButtonProps = MuiCheckboxProps & M3IconButtonExtras;
