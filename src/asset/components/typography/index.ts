import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typeFace = {
  brand: 'Manrope',
  plain: 'Roboto',
  weight: {
    regular: 400,
    medium: 500,
  },
};

export const typeVariants = {
  displayLarge: {
    fontFamily: typeFace.brand,
    lineHeight: '64px',
    fontSize: 57,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  displayMedium: {
    fontFamily: typeFace.brand,
    lineHeight: '52px',
    fontSize: 45,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  displaySmall: {
    fontFamily: typeFace.brand,
    lineHeight: '44px',
    fontSize: 36,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  headlineLarge: {
    fontFamily: typeFace.brand,
    lineHeight: '40px',
    fontSize: 32,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  headlineMedium: {
    fontFamily: typeFace.brand,
    lineHeight: '36px',
    fontSize: 28,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  headlineSmall: {
    fontFamily: typeFace.brand,
    lineHeight: '32px',
    fontSize: 24,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  titleLarge: {
    fontFamily: typeFace.brand,
    lineHeight: '28px',
    fontSize: 22,
    letterSpacing: 0,
    fontWeight: typeFace.weight.regular,
  },
  titleMedium: {
    fontFamily: typeFace.plain,
    lineHeight: '24px',
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: typeFace.weight.medium,
  },
  titleSmall: {
    fontFamily: typeFace.plain,
    lineHeight: '20px',
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: typeFace.weight.medium,
  },
  labelLarge: {
    fontFamily: typeFace.plain,
    lineHeight: '20px',
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: typeFace.weight.medium,
  },
  labelMedium: {
    fontFamily: typeFace.plain,
    lineHeight: '16px',
    fontSize: 12,
    letterSpacing: 0.5,
    fontWeight: typeFace.weight.medium,
  },
  labelSmall: {
    fontFamily: typeFace.plain,
    lineHeight: '16px',
    fontSize: 11,
    letterSpacing: 0.5,
    fontWeight: typeFace.weight.medium,
  },
  bodyLarge: {
    fontFamily: typeFace.plain,
    lineHeight: '24px',
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: typeFace.weight.regular,
  },
  bodyMedium: {
    fontFamily: typeFace.plain,
    lineHeight: '20px',
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: typeFace.weight.regular,
  },
  bodySmall: {
    fontFamily: typeFace.plain,
    lineHeight: '16px',
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: typeFace.weight.regular,
  },
} as TypographyOptions;
