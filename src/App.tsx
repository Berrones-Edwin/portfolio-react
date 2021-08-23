import React from 'react'
import { Button, Stack, useColorMode } from '@chakra-ui/react'
import NavBar from './components/Navbar'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack
      bgColor="{useColorModeValue( 'bgColorlight','bgColorDark')}"
      minW="100vw"
      minH="100vh"
    >
      <NavBar />
      <Button onClick={toggleColorMode} bgColor="primary">
        {colorMode}
      </Button>
    </Stack>
  )
}

export default App
