import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import { useDarkMode } from 'storybook-dark-mode';
import IconButton from './IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'mui-m3-theme/Icon Button',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const IconButtonPreviewTemplate: ComponentStory<typeof IconButton> = (args) => {
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
  const myTheme = React.useMemo(
    () =>
      unstable_createMaterialDesign3Theme(
        m3Palette,
        prefersDarkMode ? 'dark' : 'light'
      ),
    [m3Palette, prefersDarkMode]
  );

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SketchPicker
              color={hexColor}
              onChangeComplete={handleChangeComplete}
            />
          </Grid>
          <Grid item>
            <Stack spacing={2}>
              <Typography variant="h3" fontWeight="bold">
                Icon Buttons
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton disabled={args.disabled}>
                  <SettingsIcon />
                </IconButton>
                <IconButton variant='outlined' disabled={args.disabled}>
                  <SettingsIcon />
                </IconButton>
                <IconButton variant='filled' disabled={args.disabled}>
                  <SettingsIcon />
                </IconButton>
                <IconButton variant='tonal' disabled={args.disabled}>
                  <SettingsIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const IconButtonView = IconButtonPreviewTemplate.bind({});

IconButtonView.args = {
  disabled: false,
};
