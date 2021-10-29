import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
