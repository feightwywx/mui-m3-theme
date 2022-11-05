import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
  useScrollTrigger,
} from '@mui/material';
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

  return (
    <AppBarBase elevation={trigger ? 2 : 0} ref={ref} {...other}>
      {children}
    </AppBarBase>
  );
});

export default AppBar;
