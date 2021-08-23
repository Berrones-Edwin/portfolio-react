import React from 'react'
import { Flex, Stack, Heading, Text } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'

const HeroImage = () => {
  return (
    <Flex
      mt={500}
      direction={{
        base: 'column',
        md: 'row'
      }}
      justify={{
        base: 'center',
        md: 'space-around'
      }}
      align={'center'}
    >
      <Stack padding={4}>
        <Heading>Lorem ipsum dolor sit amet</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          sequi, vitae eius odio doloremque illo.
        </Text>
      </Stack>
      <img src={Developer} alt={'developer'} height="500" width="500" />
    </Flex>
  )
}

export default HeroImage
