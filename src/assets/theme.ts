import { RuleSet } from "styled-components";

export const text = {
  light: "#fafafa",
  dark: "#19003E",
};

export const primary = {
  main: "#A8191E",
  text: text.dark,
};

export const secondary = {
  main: "#79BF54",
  text: text.light,
};

export const success = {
  main: "#28C76F",
  text: text.light,
};

export const warning = {
  main: "#FF9F43",
  text: text.dark,
};

export const error = {
  main: "#EA5455",
  text: text.light,
};

export const white = {
  main: "#fff",
  text: text.dark,
};

export const whiteBlue = {
  main: "#fff",
  text: primary.main,
};

export const black = {
  main: "#000",
  text: text.light,
};

export const disabled = {
  main: "#BBB",
  text: text.light,
};

export const background = {
  main: "#F4F4F499",
  text: text.dark,
};

export const colors = {
  blue: {
    main: "#6C73F8",
    text: text.dark,
  },
  purple: {
    main: "#623CE7",
    text: text.light,
  },
  deepPurple: {
    main: "#19003E",
    text: text.light,
  },
};

export const palette = {
  text,
  primary,
  secondary,
  success,
  error,
  warning,
  white,
  whiteBlue,
  black,
  background,
  disabled,
  colors,
};

export const getColor = (
  color: keyof typeof colors | keyof typeof palette,
  type: "main" | "text" = "main"
): string => {
  return theme.palette.colors?.[color]?.[type] || theme.palette[color]?.[type];
};

export const helpers = {
  getColor,
};

export const screens: Record<
  "xs" | "sm" | "md" | "lg" | "xl",
  (data: string | RuleSet<object>, include?: number) => string
> = {
  xs: (data, include) =>
    typeof include === "number"
      ? `@media only screen and (max-width: 600px) { ${data} }`
      : "",
  sm: (data, include) =>
    typeof include === "number"
      ? `@media only screen and (min-width: 600px) { ${data} }`
      : "",
  md: (data, include) =>
    typeof include === "number"
      ? `@media only screen and (min-width: 768px)  { ${data} }`
      : "",
  lg: (data, include) =>
    typeof include === "number"
      ? `@media only screen and (min-width: 992px) { ${data} }`
      : "",
  xl: (data, include) =>
    typeof include === "number"
      ? `@media only screen and (min-width: 1200px) { ${data} }`
      : "",
};

const theme = {
  palette,
  helpers,
  screens,
};

export default theme;
