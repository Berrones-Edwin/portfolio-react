import React, { ReactNode } from 'react'
import { Stack, Center } from '@chakra-ui/layout'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Center>
      <Stack
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        as={'main'}
        maxW={'container.xl'}
      >
        <Stack
          bgColor="{useColorModeValue( 'bgColorlight','bgColorDark')}"
          minH="100vh"
          as={'section'}
          padding={2}
        >
          {children}
        </Stack>
      </Stack>
    </Center>
  )
}

export default Layout
