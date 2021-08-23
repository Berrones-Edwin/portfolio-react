import React from 'react'
import NavBar from './Navbar'
import { Stack } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <Stack maxW={'90%'}>
        <NavBar />
        <HeroImage />
      </Stack>
    </>
  )
}

export default Header
