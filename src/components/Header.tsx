import React from 'react'
import NavBar from './Navbar'
import { Center } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'
const Header = () => {
  return (
    <>
      <NavBar />
      <Center>
        <img src={Developer} alt={'developer'} height="500" width="500" />
      </Center>
    </>
  )
}

export default Header
