import { useState, createContext, useEffect } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import themeList from "../themes/themeList";

export const ThemeContext = createContext();

// Create a provider component that wraps the app
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(extendTheme(themeList["basic"]));
  const [themeSettings, setThemeSettings] = useState(JSON.parse(localStorage.getItem("scheduleSettings")));
  const [insideThemeSettings, setInsideThemeSettings] = useState(themeSettings);
  useEffect(() => {
    // const config = { initialColorMode: 'light', useSystemColorMode: true };
    // const currentTheme = themeSettings && themeSettings['theme'] ? themeSettings['theme'] : 'basic';
    
    const config = { initialColorMode: 'light', useSystemColorMode: true };
    const newSettings = JSON.parse(localStorage.getItem("scheduleSettings"));
    setInsideThemeSettings(newSettings); // update the state, but wait theres more
    // this uses newSettings because insideThemeSettings is not updated yet
    const currentTheme = newSettings && newSettings['theme'] ? newSettings['theme'] : 'basic';
    setTheme(extendTheme({ ...themeList[currentTheme.toLowerCase()], config }));

  }, [themeSettings]);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const newSettings = JSON.parse(localStorage.getItem("scheduleSettings"));
  //     setThemeSettings(newSettings);
  //     const config = { initialColorMode: 'light', useSystemColorMode: true };
  //     setTheme(extendTheme({ ...themeList[newSettings['theme'].toLowerCase()], config }));
  //   };
  //   window.addEventListener('storage', handleStorageChange);
  //   return () => window.removeEventListener('storage', handleStorageChange);
  // }, [themeSettings]);


  return (
    <ThemeContext.Provider value={{ theme, setThemeSettings }}>
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    </ThemeContext.Provider>
  );

};

export default ThemeProvider;