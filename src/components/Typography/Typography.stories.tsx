import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  Toolbar,
  IconButton,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import { useDarkMode } from 'storybook-dark-mode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const TypographyPreviewTemplate: ComponentStory<typeof Typography> = (args) => {
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
        </Grid>
        <Stack spacing={2}>
          <Typography variant="displayLarge">Display Large</Typography>
          <Typography variant="displayMedium">Display Medium</Typography>
          <Typography variant="displaySmall">Display Small</Typography>
          <Typography variant="headlineLarge">Headline Large</Typography>
          <Typography variant="headlineMedium">Headline Medium</Typography>
          <Typography variant="headlineSmall">Headline Small</Typography>
          <Typography variant="titleLarge">Title Large</Typography>
          <Typography variant="titleMedium">Title Medium</Typography>
          <Typography variant="titleSmall">Title Small</Typography>
          <Typography variant="labelLarge">Label Large</Typography>
          <Typography variant="labelMedium">Label Medium</Typography>
          <Typography variant="labelSmall">Label Small</Typography>
          <div>
            <Typography variant="titleLarge">Body large</Typography>
            <Typography variant="bodyLarge">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dolor magna, pharetra ut lectus quis, hendrerit mollis elit. Donec
              sollicitudin magna mi, a faucibus diam ullamcorper id. Vivamus
              eget finibus enim, quis lobortis sapien. Curabitur at sapien eu
              magna scelerisque finibus in eget ipsum. Nulla et leo volutpat,
              ultricies est nec, congue mauris. Etiam laoreet imperdiet
              placerat. Vestibulum sapien ipsum, euismod et turpis at, finibus
              pretium mauris. Vestibulum eleifend consectetur diam sed lobortis.
              Maecenas at posuere lectus. Cras ultricies ornare est vel egestas.
            </Typography>
          </div>
          <div>
            <Typography variant="titleLarge">Body medium</Typography>
            <Typography variant="bodyMedium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dolor magna, pharetra ut lectus quis, hendrerit mollis elit. Donec
              sollicitudin magna mi, a faucibus diam ullamcorper id. Vivamus
              eget finibus enim, quis lobortis sapien. Curabitur at sapien eu
              magna scelerisque finibus in eget ipsum. Nulla et leo volutpat,
              ultricies est nec, congue mauris. Etiam laoreet imperdiet
              placerat. Vestibulum sapien ipsum, euismod et turpis at, finibus
              pretium mauris. Vestibulum eleifend consectetur diam sed lobortis.
              Maecenas at posuere lectus. Cras ultricies ornare est vel egestas.
            </Typography>
          </div>
          <div>
            <Typography variant="titleLarge">Body small</Typography>
            <Typography variant="bodySmall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dolor magna, pharetra ut lectus quis, hendrerit mollis elit. Donec
              sollicitudin magna mi, a faucibus diam ullamcorper id. Vivamus
              eget finibus enim, quis lobortis sapien. Curabitur at sapien eu
              magna scelerisque finibus in eget ipsum. Nulla et leo volutpat,
              ultricies est nec, congue mauris. Etiam laoreet imperdiet
              placerat. Vestibulum sapien ipsum, euismod et turpis at, finibus
              pretium mauris. Vestibulum eleifend consectetur diam sed lobortis.
              Maecenas at posuere lectus. Cras ultricies ornare est vel egestas.
            </Typography>
          </div>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export const TypographyView = TypographyPreviewTemplate.bind({});
