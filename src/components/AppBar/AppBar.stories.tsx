import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  Toolbar,
  IconButton
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from './AppBar';
import { Button } from '../Button';
import { useDarkMode } from 'storybook-dark-mode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/App Bar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const AppBarPreviewTemplate: ComponentStory<typeof AppBar> = (args) => {
  const [hexColor, setHexColor] = React.useState<RGBColor>({
    r: 103,
    g: 80,
    b: 164,
    a: 1,
  });
  const handleChangeComplete = (color: ColorResult) => {
    setHexColor(color.rgb);
  };
  const prefersDarkMode = useDarkMode();
  const m3Palette = createM3Palette(hexColor);
  const myTheme = React.useMemo(() => unstable_createMaterialDesign3Theme(
    m3Palette, prefersDarkMode ? 'dark' : 'light'
  ), [m3Palette, prefersDarkMode]);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Bar
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SketchPicker
              color={hexColor}
              onChangeComplete={handleChangeComplete}
            />
          </Grid>
        </Grid>
        <Typography variant='h1'>Scroll me</Typography>
        <Typography variant='h1'>Scroll me</Typography>
        <Typography variant='h1'>Scroll me</Typography>
        <Typography variant='h1'>Scroll me</Typography>
        <Typography variant='h1'>Scroll me</Typography>
        <Typography variant='h1'>Scroll me</Typography>
      </Box>
    </ThemeProvider>
  );
};

export const AppBarView = AppBarPreviewTemplate.bind({});
