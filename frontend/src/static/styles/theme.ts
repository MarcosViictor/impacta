export const theme = {
  borderRadius: {
    none: '0',
    sm: '4px',
    DEFAULT: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '9999px',
  },

  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['monospace'],
  },

  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
  },

  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  transition: {
    DEFAULT: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },

  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
} as const;

export type Theme = typeof theme;
export type ThemeKey = keyof Theme;
export type ThemeValue<T extends ThemeKey> = Theme[T]; 
export const colors = {
  beige: {
    100: "#F5F4F0",
    200: "#EDEAD3",
    300: "#E3DEC1",
    400: "#D9D4B0",
    500: "#CEC7A0",
    600: "#C3BA90",
    700: "#B8AD80",
    800: "#ADA070",
    900: "#A29360",
  },

  blue: {
    100: "#E8EDF2",
    200: "#D1DBE5",
    300: "#BAC9D8",
    400: "#A3B7CB",
    500: "#8CA5BE",
    600: "#4F7A94",
    700: "#456983",
    800: "#3B5872",
    900: "#314761",
  },

  gray: {
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#7F7F7F",
    600: "#666666",
    700: "#525252",
    800: "#404040",
    900: "#262626",
  },

  black: {
    100: "#E6E6E6",
    200: "#CCCCCC",
    300: "#999999",
    400: "#666666",
    500: "#333333",
    600: "#000000",
  },

  red: {
    100: "#F5E8E7",
    200: "#EBD1CF",
    300: "#E1BAB7",
    400: "#D7A39F",
    500: "#CD8C87",
    600: "#723A37",
    700: "#612928",
    800: "#4F1F1C",
    900: "#3D1815",
  },

  yellow: {
    100: "#FFF5E6",
    200: "#FFEACC",
    300: "#FFDFB3",
    400: "#FFD499",
    500: "#FFC733",
    600: "#FFBB00",
    700: "#E6A800",
    800: "#CC9500",
    900: "#B38200",
  },
} as const;

export type ColorScale = typeof colors;
export type ColorName = keyof ColorScale;
export type ColorShade = keyof ColorScale[ColorName]; 