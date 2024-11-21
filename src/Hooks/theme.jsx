import { useState, useEffect } from 'react'
import { extendTheme, theme } from "@chakra-ui/react"
import { ThemeContext } from '../Contexts/ThemeContext'
import themeList from '../themes/themeList'

// const getTheme = () => {
//   const storedTheme = localStorage.getItem('scheduleSettings')['theme'];
//   if (storedTheme) {
//     const themeName = storedTheme + 'Theme';
//     // Update the theme to the selected one
//     // For example, if you're using Chakra UI:
//     const config = {
//       initialColorMode: 'light',
//       useSystemColorMode: true,
//     }
//     const themeObject = basicTheme;
//     return basicTheme;
//   }
// }

function getTheme(settings=null) {
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  };
  if (typeof window !== 'undefined') {
    const storedTheme = JSON.parse(window.localStorage.getItem('scheduleSettings'))['theme'].toLowerCase();
    if (settings !== null) {
      storedTheme = settings['theme'].toLowerCase();
    }
    console.log(storedTheme)
    return extendTheme({...themeList[storedTheme], config});
  }
  else {
    return extendTheme({...themeList['basic'], config});
  }
}

export default getTheme