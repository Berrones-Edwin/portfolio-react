import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { theme } from './theme/theme'


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
