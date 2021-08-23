import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bgColor="{useColorModeValue( 'bgColorlight','bgColorDark')}"
      minW="100vw"
      minH="100vh"
    >
      {children}
    </Stack>
  )
}

export default Layout
