import React from 'react'
import { Stack, Flex, Center, Divider } from '@chakra-ui/react'
import NavBar from './Navbar'
import HeroImage from './HeroImage'
import ShapeDivider from './ShapeDivider/ShapeDivider'
import CustomDivider from './CustomDivider'

const Header = () => {
  return (
    <>
      <Stack maxW={'100%'} height={'500px'}>
        <NavBar />
        <Flex width={'100%'} justify={'center'}>
          <HeroImage />
        </Flex>
        <Center height="150px">
          <Divider orientation="vertical" />
        </Center>
        <ShapeDivider />
      </Stack>
    </>
  )
}

export default Header
