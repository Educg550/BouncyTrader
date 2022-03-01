import { createContext, useState } from "react";
import "../styles/fonts.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

import { MantineProvider, ColorScheme } from "@mantine/core";

interface StackContextProps {
  toggleTheme(): void;
}

export const StackContext = createContext<StackContextProps>(
  {} as StackContextProps
);

function MyApp({ Component, pageProps }: AppProps) {
  // We're using styled-components theme here, but also changing Mantine's color
  // scheme to adapt some components of it for the current styled-components theme
  // Default theme: Dark
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  // Mantine default theme: Dark
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme}>
      <StackContext.Provider
        value={{
          toggleTheme,
        }}
      >
        <MantineProvider theme={{ colorScheme: colorScheme }}>
          <Component {...pageProps} />
        </MantineProvider>
      </StackContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
