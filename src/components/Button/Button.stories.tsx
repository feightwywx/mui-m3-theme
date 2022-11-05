import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import AddIcon from '@mui/icons-material/Add';
import Button from './Button';
import { useDarkMode } from 'storybook-dark-mode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'mui-m3-theme/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonPreviewTemplate: ComponentStory<typeof Button> = (args) => {
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
  ), [m3Palette, prefersDarkMode])
  
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <SketchPicker
            color={hexColor}
            onChangeComplete={handleChangeComplete}
          />
          <Grid container item spacing={2}>
            <Grid item xs>
              <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold" color={myTheme.palette.surface.on}>
                Buttons
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant={args.variant} color="primary" disabled={args.disabled}>
                  {args.children}
                </Button>
                <Button
                  startIcon={<AddIcon />}
                  variant={args.variant}
                  color="primary"
                  disabled={args.disabled}
                >
                  {args.children}
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <Button variant={args.variant} color="secondary" disabled={args.disabled}>
                  {args.children}
                </Button>
                <Button
                  startIcon={<AddIcon />}
                  variant={args.variant}
                  color="secondary"
                  disabled={args.disabled}
                >
                  {args.children}
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid container item spacing={2}>
            <Grid item xs>
              <Stack direction="row" spacing={2}>
                <Button variant={args.variant} color="tertiary" disabled={args.disabled}>
                  {args.children}
                </Button>
                <Button
                  startIcon={<AddIcon />}
                  variant={args.variant}
                  color="tertiary"
                  disabled={args.disabled}
                >
                  {args.children}
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const FilledButtonView = ButtonPreviewTemplate.bind({});
export const ElevatedButtonView = ButtonPreviewTemplate.bind({});
export const OutlinedButtonView = ButtonPreviewTemplate.bind({});
export const TextButtonView = ButtonPreviewTemplate.bind({});
export const TonalButtonView = ButtonPreviewTemplate.bind({});

FilledButtonView.args = {
  children: 'Filled button',
  variant: 'contained',
  disabled: false,
};

ElevatedButtonView.args = {
  children: 'Elevated button',
  variant: 'elevated',
  disabled: false,
};

OutlinedButtonView.args = {
  children: 'Outlined button',
  variant: 'outlined',
  disabled: false,
};

TextButtonView.args = {
  children: 'Text button',
  variant: 'text',
  disabled: false,
};

TonalButtonView.args = {
  children: 'Tonal button',
  variant: 'tonal',
  disabled: false,
};
