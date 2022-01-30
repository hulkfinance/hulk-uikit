import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#3CBD0E",
  primaryBright: "#42e508",
  primaryDark: "#2b8b09",
  secondary: "#FAFF00",
  success: "#42e508",
  warning: "#FFAB2D",
  none: 'none',
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#3CBD0E",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e9f1fd",
  background: "#001B08",
  backgroundDisabled: "#5A5A5A",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#001B08",
  inputBorder: "#001B08",
  // primaryDark: "#d95b00",
  tertiary: "#5A5A5A",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#3CBD0E",
  borderColor: "#3CBD0E",
  card: "#000E06",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};
