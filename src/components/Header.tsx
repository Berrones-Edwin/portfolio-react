import React from 'react'
import { Stack, Flex } from '@chakra-ui/react'
import NavBar from './Navbar'
import HeroImage from './HeroImage'

const Header = () => {
  return (
    <>
      <Stack id={'home'} maxW={'100%'} height={'700px'} mb={2}>
        <NavBar />
        <Flex
          direction={'column'}
          align={'center'}
          justify={'center'}
          height={'80%'}
        >
          <Flex width={'100%'} justify={'center'}>
            <HeroImage />
          </Flex>
        </Flex>
      </Stack>
    </>
  )
}

export default Header
