import { ThemeProvider } from "@mui/material";
import React from "react";
import { muiTheme } from "../utils/theme/muiTheme";

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const theme = muiTheme;
  // console.log()
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
