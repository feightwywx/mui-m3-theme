import { createTheme, PaletteColorOptions, Theme } from '@mui/material/styles';
import { convertM3ToMuiPalette } from './functions/createPalette';
import colors from './base/colors';

import button from './components/button';
import { M3Palette } from './functions/types';
import { typeVariants } from './components/typography';

declare module '@mui/material/styles' {
  interface TypeBackground {
    default: string;
    paper: string;
  }
  interface TypeSurface {
    main: string;
    default: string;
    on: string;
    variant: string;
    onVariant: string;
  }
  interface TypeInverse {
    surface: string;
    onSurface: string;
    primary: string;
  }
  interface SimplePaletteColorOptions {
    main: string;
    on: string;
    container: string;
    onContainer: string;
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    background?: Partial<TypeBackground>;
    surface?: Partial<TypeSurface>;
    outline?: Pick<SimplePaletteColorOptions, 'main'>;
    inverse?: Partial<TypeInverse>;
  }
  interface PaletteColor {
    main: string;
    on: string;
    container: string;
    onContainer: string;
  }
  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    tertiary: PaletteColor;
    error: PaletteColor;
    surface: TypeSurface;
    background: TypeBackground;
    outline: Pick<PaletteColor, 'main'>;
    inverse: TypeInverse;
  }
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    headlineLarge: React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineSmall: React.CSSProperties;
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    headlineLarge?: React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    headlineLarge: true;
    headlineMedium: true;
    headlineSmall: true;
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
  }
}

/**
 * @deprecated
 */
export const MaterialDesign3Theme = createTheme({
  typography: {
    /**
     * Google uses its own font; Product Sans. However, Google offers many fonts
     * under open source licenses but Product Sans not one of them. [Link](https://fonts.google.com/license/productsans)
     * Manrope font is very similar to Product Sans font.
     */
    fontFamily: ['Roboto', 'Manrope'].join(', '),
  },
  palette: colors,
  components: {
    MuiButton: {
      ...button,
    },
  },
}) as Theme;

/**
 * Function that can create a Material Design 3 Theme based on the custom color.
 * @param m3Palette Material Design 3 Palette generated from function `createM3Palette`.
 * @returns Material UI `Theme`.
 */
// eslint-disable-next-line camelcase
export const unstable_createMaterialDesign3Theme = (
  m3Palette: M3Palette,
  mode: 'light' | 'dark' = 'light'
) => {
  const muiPalette = convertM3ToMuiPalette(m3Palette, mode);
  return createTheme({
    typography: {
      fontFamily: ['Roboto', 'Manrope'].join(', '),
      ...typeVariants,
    },
    palette: muiPalette,
    components: {
      MuiButton: {
        ...button,
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            displayLarge: 'h1',
            displayMedium: 'h2',
            displaySmall: 'h3',
            headlineLarge: 'h4',
            headlineMedium: 'h5',
            headlineSmall: 'h6',
            titleLarge: 'subtitle1',
            titleMedium: 'subtitle2',
            titleSmall: 'subtitle2',
            bodyLarge: 'p',
            bodyMedium: 'p',
            bodySmall: 'p',
          },
        },
      },
    },
  }) as Theme;
};
