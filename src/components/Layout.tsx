import React, { ReactNode } from 'react'
import { Stack } from '@chakra-ui/layout'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bgColor="{useColorModeValue( 'bgColorlight','bgColorDark')}"
      minH="100vh"
      as={'main'}
    >
      {children}
    </Stack>
  )
}

export default Layout
