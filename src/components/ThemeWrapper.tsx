import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { muiTheme } from "../utils/theme/muiTheme";

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const [theme, setTheme] = useState(muiTheme);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
