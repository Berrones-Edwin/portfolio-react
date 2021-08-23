import React from 'react'
import { Stack, Heading, Button, Text, Center } from '@chakra-ui/react'
import Developer from '../svg/developer.svg'

const HeroImage = () => {
  return (
    <Stack
      height={'100%'}
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
        <Button size="md" width={'150px'} variant="outline" bgColor="primary">
          Conocer más
        </Button>
      </Stack>
      <Center>
        <img src={Developer} alt={'developer'} height="500" width="500" />
      </Center>
    </Stack>
  )
}

export default HeroImage
