import React from 'react'
import { Stack } from '@chakra-ui/react'
import NavBar from './Navbar'
import HeroImage from './HeroImage'

const Header = () => {
  return (
    <>
      <Stack maxW={'100%'} height={'500px'}>
        <NavBar />
        <HeroImage />
      </Stack>
    </>
  )
}

export default Header
