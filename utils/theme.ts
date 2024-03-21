"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#23A6F0",
      light: "#737373",
    },
    secondary: {
      main: "#23856D",
    },
    text: {
      primary: "#252B42",
      secondary: "#2DC071",
    },
    error: {
      main: "#red",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
