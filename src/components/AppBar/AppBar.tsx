import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { cyan } from '@mui/material/colors';
import React from 'react';

declare module '@mui/material/AppBar' {
  interface AppBarClasses {
    elevated: boolean;
  }
}

const AppBarBase = styled(MuiAppBar, {
  name: 'M3AppBar',
  slot: 'Root',
})(({ theme }) => ({
  transition: '0.3s',
  boxShadow: theme.shadows[0],
  backgroundColor: theme.palette.surface.main,
  color: theme.palette.surface.on,
})) as React.ComponentType<MuiAppBarProps>;

const AppBar = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MuiAppBarProps>
>(function AppBar(props, ref) {
  const { children, ...other } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const theme = useTheme();

  return (
    <AppBarBase
      style={{
        backgroundColor: trigger ? theme.palette.surface.variant : undefined,
      }}
      ref={ref}
      {...other}
    >
      {children}
    </AppBarBase>
  );
});

export default AppBar;
