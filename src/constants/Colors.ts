const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const main = {
  main: "#48b600",
  white: "#ffffff",
  black: "#000000",
  darkGray: "#bcbcbc",
  orange: "#ffce31",
  red: "#f00",
  lightGray: "#f4f4f4",
  subGreen: "#eefae6",
  // deepGrey: "#e1f0d7",
  gray: "#c4c4c4",
  blue: "#3b87f9",
  underline: "#e5e5e5",
  paypal: "#ffb730",
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    ...main
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    ...main
  },
};
