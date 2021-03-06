import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <HStack
      justify={'center'}
      shadow={'lg'}
      height={'50px'}
      
      as={'footer'}
    >
      <HStack>
        <Text>Copyright © 2021 Berrones.</Text>
      </HStack>
    </HStack>
  )
}

export default Footer
