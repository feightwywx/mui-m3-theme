import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContentText as MuiDialogContentText,
  DialogProps as MuiDialogProps,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContentTextProps as MuiDialogContentTextProps,
  ButtonProps,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import { Button } from '../Button';

const DialogRoot = styled(MuiDialog, {
  name: 'M3Dialog',
  slot: 'Root',
})(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '28px',
    padding: '8px',
    backgroundColor: theme.palette.surface.main,
    minWidth: '280px',
    maxWidth: '560px',
    boxShadow: theme.shadows[0],
    fontFamily: 'Roboto',
  },
}));

const Dialog = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MuiDialogProps>
>((props, ref): JSX.Element => {
  // eslint-disable-next-line react/prop-types
  const { open, ...other } = props;
  const theme = useTheme();
  return (
    <DialogRoot ref={ref} open={open} {...other}>
      <div
        style={{
          backgroundColor: theme.palette.surface.main,
        }}
      >
        {props.children}
      </div>
    </DialogRoot>
  );
}) as React.ForwardRefExoticComponent<MuiDialogProps>;

export const DialogTitle = styled(MuiDialogTitle, {
  name: 'M3DialogTitle',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.surface.on,
  fontSize: 24,
  fontWeight: 400,
})) as React.ComponentType<MuiDialogTitleProps>;

export const DialogContentText = styled(MuiDialogContentText, {
  name: 'M3DialogContentText',
  slot: 'Root',
})(({ theme }) => ({
  color: theme.palette.surface.onVariant,
})) as React.ComponentType<MuiDialogContentTextProps>;

export function DialogActionButton({
  children,
  props,
}: {
  children: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  props?: React.PropsWithChildren<ButtonProps>;
}) {
  return (
    <Button
      variant="text"
      style={{ fontSize: '1rem', fontWeight: 500 }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default Dialog;
