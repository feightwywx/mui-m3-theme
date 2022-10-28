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
import AddIcon from '@mui/icons-material/Add';
import Fab from './Fab';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Fab',
  component: Fab,
} as ComponentMeta<typeof Fab>;

const FabPreviewTemplate: ComponentStory<typeof Fab> = (args) => {
  const [hexColor, setHexColor] = React.useState<RGBColor>({
    r: 103,
    g: 80,
    b: 164,
    a: 1,
  });
  const handleChangeComplete = (color: ColorResult) => {
    setHexColor(color.rgb);
  };
  const m3Palette = createM3Palette(hexColor);
  const myTheme = unstable_createMaterialDesign3Theme(m3Palette);
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SketchPicker
              color={hexColor}
              onChangeComplete={handleChangeComplete}
            />
          </Grid>

          <Grid item>
            <Stack direction="column" spacing={2}>
              <Typography variant="h3" fontWeight="bold">
                Fabs
              </Typography>
              <Stack direction="row" spacing={2}>
                <Fab
                  color="primary"
                  size="large"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                <Fab
                  color="primary"
                  size="medium"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                {!args.variant && (
                  <Fab color="primary" variant="extended">
                    <AddIcon />
                    Extended Fab
                  </Fab>
                )}
                <Fab
                  color="primary"
                  size="small"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Fab
                  color="secondary"
                  size="large"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                <Fab
                  color="secondary"
                  size="medium"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                {!args.variant && (
                  <Fab color="secondary" variant="extended">
                    <AddIcon />
                    Extended Fab
                  </Fab>
                )}
                <Fab
                  color="secondary"
                  size="small"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
              </Stack>

              <Stack direction="row" spacing={2}>
                <Fab
                  color="tertiary"
                  size="large"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                <Fab
                  color="tertiary"
                  size="medium"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
                {!args.variant && (
                  <Fab color="tertiary" variant="extended">
                    <AddIcon />
                    Extended Fab
                  </Fab>
                )}
                <Fab
                  color="tertiary"
                  size="small"
                  variant={args.variant ?? 'circular'}
                >
                  <AddIcon />
                </Fab>
              </Stack>

              {!args.variant && (
                <Stack direction="row" spacing={2}>
                  <Fab color="surface" size="large">
                    <AddIcon />
                  </Fab>
                  <Fab color="surface" size="medium">
                    <AddIcon />
                  </Fab>

                  <Fab color="surface" variant="extended">
                    <AddIcon />
                    Extended Fab
                  </Fab>
                  <Fab color="surface" size="small">
                    <AddIcon />
                  </Fab>
                </Stack>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const FabView = FabPreviewTemplate.bind({});
export const LoweredFabView = FabPreviewTemplate.bind({});

FabView.args = {
  variant: '',
};

LoweredFabView.args = {
  variant: 'lowered',
};
