import React from 'react'
import { Stack } from '@chakra-ui/react'

import Header from './components/Header'
import ShapeDivider from './components/ShapeDivider/ShapeDivider'

function App() {
  return (
    <Stack
      bgColor="{useColorModeValue( 'bgColorlight','bgColorDark')}"
      minW="100vw"
      minH="100vh"
    >
      <Header />

      <ShapeDivider />
    </Stack>
  )
}

export default App
