import { useState, createContext, useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import themeList from "../themes/themeList";

export const ThemeContext = createContext();

// Create a provider component that wraps the app
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(extendTheme(themeList["basic"]));
  const [themeSettings, setThemeSettings] = useState(JSON.parse(localStorage.getItem("scheduleSettings")));

  useEffect(() => {
    const config = { initialColorMode: 'light', useSystemColorMode: true };
    const currentTheme = themeSettings && themeSettings['theme'] ? themeSettings['theme'] : 'basic';
    setTheme(extendTheme({ ...themeList[currentTheme.toLowerCase()], config }));
  }, [themeSettings]);

  useEffect(() => {
    const handleStorageChange = () => {
      const newSettings = JSON.parse(localStorage.getItem("scheduleSettings"));
      setThemeSettings(newSettings);
      const config = { initialColorMode: 'light', useSystemColorMode: true };
      setTheme(extendTheme({ ...themeList[newSettings['theme'].toLowerCase()], config }));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [themeSettings]);

  if (!theme) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setThemeSettings }}>
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;