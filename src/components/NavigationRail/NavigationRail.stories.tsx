import React from 'react';
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  Stack,
  ThemeProvider,
  IconButton,
} from '@mui/material';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ColorResult, RGBColor, SketchPicker } from 'react-color';
import {
  createM3Palette,
  unstable_createMaterialDesign3Theme,
} from '../../asset';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InfoIcon from '@mui/icons-material/Info';
import NavigationRail from './NavigationRail';
import NavigationRailItem from './NavigationRailItem';
import Fab from '../Fab/Fab';
import { useDarkMode } from 'storybook-dark-mode';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'mui-m3-theme/Navigation Rail',
  component: NavigationRail,
} as ComponentMeta<typeof NavigationRail>;

const NavRailPreviewTemplate: ComponentStory<typeof NavigationRail> = (
  args
) => {
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
      <Box>
        <NavigationRail>
          <IconButton
            style={{
              marginTop: '48px',
            }}
          >
            <MenuIcon style={{ color: myTheme.palette.surface.on }} />
          </IconButton>
          <Fab variant="lowered" color='secondary' style={{ marginBottom: '28px' }}>
            <SearchIcon />
          </Fab>
          <NavigationRailItem icon={<HomeIcon />} label='Home' selected />
          <NavigationRailItem icon={<AddCircleIcon />} label='Components' onClick={()=>{console.log('Components')}} />
          <NavigationRailItem icon={<InfoIcon />} label='About' />
        </NavigationRail>
        <Grid container style={{ margin: '16px 88px' }}>
          <Typography variant="h3" fontWeight="bold">
            Navigation Rail
          </Typography>
          <Grid item xs={12} style={{ marginTop: '16px' }}>
            <SketchPicker
              color={hexColor}
              onChangeComplete={handleChangeComplete}
            />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export const NavigationRailView = NavRailPreviewTemplate.bind({});
