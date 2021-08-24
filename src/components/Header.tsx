import React from 'react'
import { Stack, Flex } from '@chakra-ui/react'
import NavBar from './Navbar'
import HeroImage from './HeroImage'
import ShapeDivider from './ShapeDivider/ShapeDivider'

const Header = () => {
  return (
    <>
      <Stack maxW={'100%'} height={'500px'}>
        <NavBar />
        <Flex width={'100%'} justify={'center'}>
          <HeroImage />
        </Flex>
        <ShapeDivider />
      </Stack>
    </>
  )
}

export default Header
