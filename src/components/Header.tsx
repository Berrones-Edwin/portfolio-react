import React from 'react'
import { Stack, Flex, Center, Divider } from '@chakra-ui/react'
import NavBar from './Navbar'
import HeroImage from './HeroImage'
import ShapeDivider from './ShapeDivider/ShapeDivider'
import CustomDivider from './CustomDivider'

const Header = () => {
  return (
    <>
      <Stack maxW={'100%'} height={'500px'} mb={2}>
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
