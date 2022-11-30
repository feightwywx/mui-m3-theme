import { CorePalette } from '@elemental-design/material-color-utilities';
import { PaletteOptions } from '@mui/material/styles';
import chroma from 'chroma-js';
import { createTonalPalette } from './createTonalPalette';
import { fromRGBto32 } from './fromRGBto32';
import { M3Palette, RGBColor } from './types';

/**
 * Create a Material Design 3 Palette based on the rgb color.

 * @param rgbColor
 * @returns
 * Material Design 3 Palette.
 * @example
 * const rgb = {r: 8, g: 1, b: 7}
 * const palette = createM3Palette(rgb).light
 */
export const createM3Palette = (rgbColor: RGBColor): M3Palette => {
  const { r, g, b } = rgbColor;
  const HexaDecimalCode = fromRGBto32([r, g, b]);
  const color = CorePalette.of(Number(HexaDecimalCode));
  const palette = createTonalPalette(color);

  const lightPalette = {
    primary: palette.primary[40],
    primaryContainer: palette.primary[90],
    secondary: palette.secondary[40],
    secondaryContainer: palette.secondary[90],
    tertiary: palette.tertiary[40],
    tertiaryContainer: palette.tertiary[90],
    surface: palette.neutral[99],
    surfaceVariant: palette.neutralVariant[90],
    background: palette.neutral[99],
    error: palette.error[40],
    errorContainer: palette.error[90],
    onPrimary: palette.primary[100],
    onPrimaryContainer: palette.primary[10],
    onSecondary: palette.secondary[100],
    onSecondaryContainer: palette.secondary[10],
    onTertiary: palette.tertiary[100],
    onTertiaryContainer: palette.tertiary[10],
    onSurface: palette.neutral[10],
    onSurfaceVariant: palette.neutralVariant[30],
    onError: palette.error[100],
    onErrorContainer: palette.error[10],
    onBackground: palette.neutral[10],
    outline: palette.neutralVariant[50],
    shadow: palette.neutral[0],
    inverseSurface: palette.neutral[20],
    inverseOnSurface: palette.neutral[95],
    inversePrimary: palette.primary[80],
  };

  const darkPalette = {
    primary: palette.primary[80],
    primaryContainer: palette.primary[30],
    secondary: palette.secondary[80],
    secondaryContainer: palette.secondary[30],
    tertiary: palette.tertiary[80],
    tertiaryContainer: palette.tertiary[30],
    surface: palette.neutral[10],
    surfaceVariant: palette.neutralVariant[30],
    background: palette.neutral[10],
    error: palette.error[80],
    errorContainer: palette.error[30],
    onPrimary: palette.primary[20],
    onPrimaryContainer: palette.primary[90],
    onSecondary: palette.secondary[20],
    onSecondaryContainer: palette.secondary[90],
    onTertiary: palette.tertiary[20],
    onTertiaryContainer: palette.tertiary[90],
    onSurface: palette.neutral[90],
    onSurfaceVariant: palette.neutralVariant[80],
    onError: palette.error[20],
    onErrorContainer: palette.error[80],
    onBackground: palette.neutral[90],
    outline: palette.neutralVariant[60],
    shadow: palette.neutral[0],
    inverseSurface: palette.neutral[90],
    inverseOnSurface: palette.neutral[20],
    inversePrimary: palette.primary[40],
  };

  return { light: lightPalette, dark: darkPalette };
};

/**
 * Convert it to fit the format of the Material UI palette.
 * @param m3Palette Material Design 3 Palette generated from function `createM3Palette`.
 * @returns Material UI PaletteOptions. This value must be used for the MUI function `createTheme`.
 *
 * @example
 * This is an example of converting it to MUI `PaletteOptions` and putting
 * it in `ThemeProvider` theme prop.
 *
 * ```tsx
 * import { createTheme, ThemeProvider } from '@mui/material';
 * import { createM3Palette, convertM3ToMuiPalette } from 'mui-m3-theme'
 *
 * const palette = createM3Palette(rgb)[mode];
 * const muiPalette = convertM3ToMuiPalette(palette);
 *
 * const myTheme = createTheme({ palette: { ...muiPalette } });
 *
 * function myApp() {
 *   return (
 *     <ThemeProvider theme={myTheme}>
 *     ...
 *     </ThemeProvider>
 *   )
 * }
 * ```
 */
export const convertM3ToMuiPalette = (
  m3Palette: M3Palette,
  mode: 'light' | 'dark' = 'light'
): PaletteOptions => {
  const muiPalette = {
    primary: {
      main: m3Palette[mode].primary,
      on: m3Palette[mode].onPrimary,
      container: m3Palette[mode].primaryContainer,
      onContainer: m3Palette[mode].onPrimaryContainer,
    },
    secondary: {
      main: m3Palette[mode].secondary,
      on: m3Palette[mode].onSecondary,
      container: m3Palette[mode].secondaryContainer,
      onContainer: m3Palette[mode].onSecondaryContainer,
    },
    tertiary: {
      main: m3Palette[mode].tertiary,
      on: m3Palette[mode].onTertiary,
      container: m3Palette[mode].tertiaryContainer,
      onContainer: m3Palette[mode].onTertiaryContainer,
    },
    surface: {
      main: m3Palette[mode].surface,
      on: m3Palette[mode].onSurface,
      variant: m3Palette[mode].surfaceVariant,
      onVariant: m3Palette[mode].onSurfaceVariant,
    },
    background: {
      default: m3Palette[mode].background,
      paper: m3Palette[mode].onBackground,
    },
    outline: {
      main: m3Palette[mode].outline,
    },
    inverse: {
      surface: m3Palette[mode].inverseSurface,
      onSurface: m3Palette[mode].inverseOnSurface,
      primary: m3Palette[mode].inversePrimary,
    },
    tonalOffset: 0.1,
    text: {
      primary: m3Palette[mode].onSurface,
      secondary: m3Palette[mode].onSurfaceVariant,
      disabled: chroma(m3Palette[mode].onSurface).alpha(0.38).css(),
      hint: chroma(m3Palette[mode].onSurface).alpha(0.38).css(),
    },
    divider: chroma(m3Palette[mode].onSurface).alpha(0.12).css(),
  };
  return muiPalette;
};
