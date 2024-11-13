import React from 'react';
import ReactDOM from 'react-dom';

import { ColorModeScript, ChakraProvider } from "@chakra-ui/react"

import App from './App';
import theme from './Hooks/theme.js'
import basicTheme from './themes/basicTheme.js'
import fallTheme from './themes/fall.js'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={basicTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

